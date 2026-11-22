import { useEffect, useMemo, useRef, useState } from 'react';
import { profile, projects } from './data';

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];
const robotLines = [
  'Hi! I’m Byte, Ayesha’s little portfolio buddy. 🤖',
  'Curious minds turn ideas into working prototypes!',
  'Take a look at the projects—there’s a little engineering in each one.',
  'Want to collaborate? Use the contact section below!'
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="site-header">
    <a className="brand" href="#top" aria-label="Ayesha Shafiq, home"><span className="brand-mark">AS</span><span className="brand-name">Ayesha Shafiq<small>ENGINEERING PORTFOLIO</small></span></a>
    <button className="menu-toggle" type="button" onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen}>{menuOpen ? 'Close ×' : 'Menu ☰'}</button>
    <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
      {navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
      <a className="nav-cta" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
    </nav>
  </header>;
}

function Reveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal:not(.visible)');
    if (!('IntersectionObserver' in window)) { items.forEach(item => item.classList.add('visible')); return; }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return null;
}

function RobotBuddy() {
  const [line, setLine] = useState(0);
  return <button className="robot-buddy" type="button" onClick={() => setLine(i => (i + 1) % robotLines.length)} aria-label="Click Byte robot to hear another message">
    <span className="robot-bubble">{robotLines[line]}</span>
    <span className="robot" aria-hidden="true"><span className="robot-antenna"/><span className="robot-head"><span className="robot-eye eye-left"/><span className="robot-eye eye-right"/><span className="robot-mouth"/></span><span className="robot-body"><i/><i/><i/></span><span className="robot-arm arm-left"/><span className="robot-arm arm-right"/><span className="robot-foot foot-left"/><span className="robot-foot foot-right"/></span>
    <span className="robot-name">BYTE · TAP ME</span>
  </button>;
}

function PortraitUpload({ portrait, setPortrait }) {
  const inputRef = useRef(null);
  const onFile = event => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { alert('Please select an image file.'); return; }
    if (file.size > 5 * 1024 * 1024) { alert('Choose an image under 5 MB.'); return; }
    const reader = new FileReader();
    reader.onload = () => {
      const photo = new Image();
      photo.onload = () => {
        const maxSide = 1200;
        const scale = Math.min(1, maxSide / Math.max(photo.width, photo.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(photo.width * scale);
        canvas.height = Math.round(photo.height * scale);
        const context = canvas.getContext('2d');
        context.drawImage(photo, 0, 0, canvas.width, canvas.height);
        const result = canvas.toDataURL('image/jpeg', 0.82);
        setPortrait(result);
        try { localStorage.setItem('ayesha-portfolio-portrait', result); }
        catch { alert('Photo preview updated, but could not be saved in this browser.'); }
      };
      photo.onerror = () => alert('Could not load this image. Please choose another photo.');
      photo.src = reader.result;
    };
    reader.readAsDataURL(file);
  };
  return <div className="portrait-wrap">
    <div className="portrait-frame"><div className="portrait-inner">{portrait ? <img src={portrait} alt="Ayesha's profile portrait" onError={() => { if (portrait === '/images/profile.jpg') setPortrait(''); }}/>: <div className="portrait-placeholder"><span>AS</span><small>YOUR PHOTO</small></div>}</div><span className="portrait-sticker">ENGINEER<br/>IN ACTION</span></div>
    <button className="portrait-upload" type="button" onClick={() => inputRef.current?.click()}>{portrait ? 'Change portrait +' : 'Upload portrait +'}</button>
    {portrait && <button className="portrait-remove" type="button" onClick={() => { setPortrait('/images/profile.jpg'); localStorage.removeItem('ayesha-portfolio-portrait'); if (inputRef.current) inputRef.current.value = ''; }}>Remove photo</button>}
    <input ref={inputRef} className="hidden-file" type="file" accept="image/*" onChange={onFile} aria-label="Choose profile photo"/>
    <p className="portrait-note">Select an image from your device (max 5 MB).</p>
  </div>;
}

function ProjectCard({ project, index, onOpen }) {
  return <article className="project-card reveal" style={{ '--delay': `${index * 65}ms` }} onClick={() => onOpen(project)} onKeyDown={event => event.key === 'Enter' && onOpen(project)} tabIndex={0} role="button" aria-label={`Open ${project.title} details`}>
    <div className="project-image"><img src={project.image} alt={project.title} loading="lazy"/><span className="project-number">{String(index + 1).padStart(2, '0')}</span><span className="image-arrow">↗</span></div>
    <div className="project-content"><span className="eyebrow">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack.slice(0, 4).map(technology => <span key={technology}>{technology}</span>)}</div><span className="text-link">View project details ↗</span></div>
  </article>;
}

function ProjectModal({ project, close }) {
  useEffect(() => { const handleKey = event => event.key === 'Escape' && close(); window.addEventListener('keydown', handleKey); return () => window.removeEventListener('keydown', handleKey); }, [close]);
  return <div className="modal-backdrop" onClick={close} role="presentation"><article className="modal" onClick={event => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" type="button" onClick={close} aria-label="Close project details">×</button><img className="modal-image" src={project.image} alt={project.title}/><div className="modal-body"><span className="eyebrow">{project.type}</span><h2 id="modal-title">{project.title}</h2><p>{project.description}</p><h3>Highlights</h3><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul><h3>Technologies</h3><div className="tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">GitHub profile ↗</a></div></article></div>;
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  const [portrait, setPortrait] = useState(() => { try { return localStorage.getItem('ayesha-portfolio-portrait') || '/images/profile.jpg'; } catch { return '/images/profile.jpg'; } });
  const categories = useMemo(() => ['All', ...new Set(projects.map(project => project.type))], []);
  const visibleProjects = filter === 'All' ? projects : projects.filter(project => project.type === filter);
  useEffect(() => { document.body.classList.toggle('modal-open', Boolean(selectedProject)); return () => document.body.classList.remove('modal-open'); }, [selectedProject]);
  return <><Reveal/><Header/><main id="top">
    <section className="hero page-wrap">
      <div className="hero-copy"><div className="availability"><span className="pulse"/> OPEN TO OPPORTUNITIES</div><p className="hero-kicker">ENGINEER · DEVELOPER · PROBLEM SOLVER</p><h1>Building ideas<br/>into <em>real-world</em><br/>solutions.</h1><p className="hero-intro">{profile.intro}</p><div className="hero-actions"><a className="button button-pink" href="#projects">Explore my work <span>↘</span></a><a className="button button-outline" href={`mailto:${profile.email}`}>Let’s connect <span>↗</span></a><a className="button button-outline" href={`${import.meta.env.BASE_URL}cv.pdf`} download="Ayesha-Shafiq-CV.pdf">Download CV <span>↓</span></a></div><div className="hero-meta"><span>⌖ {profile.location}</span><span>Computer Engineering · 2026</span></div></div>
      <div className="hero-side"><PortraitUpload portrait={portrait} setPortrait={setPortrait}/><div className="hero-mini-note"><span className="mini-note-icon">✳</span><span>SOFTWARE<br/>MEETS HARDWARE</span></div></div>
    </section>
    <section className="about page-wrap section" id="about"><div className="section-heading reveal"><span className="section-index">01 / ABOUT</span><h2>Curiosity meets<br/><em>engineering.</em></h2></div><div className="about-grid"><div className="about-text reveal"><p className="lead">A curious engineer with a passion for turning complex challenges into practical, thoughtful solutions.</p><p>{profile.about}</p><div className="about-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={`mailto:${profile.email}`}>Email ↗</a></div></div><div className="domain-grid reveal"><article className="domain"><span>01</span><h3>Software & Mobile</h3><p>Android applications, user interfaces and realtime cloud-connected experiences.</p></article><article className="domain"><span>02</span><h3>Embedded & IoT</h3><p>Microcontrollers, sensors, hardware integration and automation logic.</p></article><article className="domain"><span>03</span><h3>Computer Vision</h3><p>Image processing, detection pipelines and practical vision applications.</p></article><article className="domain"><span>04</span><h3>Data & Databases</h3><p>Relational data design, SQL and application data workflows.</p></article></div></div></section>
    <section className="skills page-wrap section" id="skills"><div className="section-heading reveal"><span className="section-index">02 / TOOLKIT</span><h2>Tools of the<br/><em>trade.</em></h2></div><div className="skill-grid">{Object.entries(profile.skills).map(([name, items], index) => <article className="skill-group reveal" key={name}><span className="skill-number">{String(index + 1).padStart(2, '0')}</span><h3>{name}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></section>
    <section className="experience page-wrap section" id="experience"><div className="section-heading reveal"><span className="section-index">03 / EXPERIENCE</span><h2>Engineering in<br/><em>practice.</em></h2></div><article className="experience-card reveal"><div className="experience-meta"><span className="eyebrow">{profile.experience.date}</span><span>{profile.experience.location}</span></div><h3>{profile.experience.role}</h3><p className="experience-company">{profile.experience.company}</p><p className="experience-supervisor">Supervised by: {profile.experience.supervisor}</p><ul className="experience-highlights">{profile.experience.highlights.map((highlight, index) => <li key={index}>{highlight}</li>)}</ul></article></section>
    <section className="projects page-wrap section" id="projects"><div className="section-heading reveal"><span className="section-index">04 / SELECTED WORK</span><h2>Projects that<br/><em>make things happen.</em></h2><p className="section-desc">A collection of experiments, prototypes and applications across software, hardware and intelligent systems.</p></div><div className="filters reveal">{categories.map(category => <button type="button" key={category} className={filter === category ? 'active' : ''} onClick={() => setFilter(category)}>{category}</button>)}</div><div className="project-grid">{visibleProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} onOpen={setSelectedProject}/>)}</div></section>
    <section className="education page-wrap section" id="education"><div className="section-heading reveal"><span className="section-index">05 / EDUCATION</span><h2>Grounded in<br/><em>learning.</em></h2></div><article className="education-card reveal"><div className="edu-date">2022 — 2026</div><div><h3>{profile.education}</h3><p>{profile.institution}</p><p className="edu-note">Coursework across computer vision, embedded systems, microcontroller interfacing, software design, computer networks and database management.</p></div><span className="edu-symbol">✳</span></article></section>
    <section className="contact page-wrap section" id="contact"><div className="contact-panel reveal"><span className="section-index">06 / GET IN TOUCH</span><h2>Let’s build<br/><em>something meaningful.</em></h2><p>Looking for an opportunity to contribute, collaborate and keep learning. Feel free to reach out.</p><a className="button button-pink" href={`mailto:${profile.email}`}>Say hello <span>↗</span></a><div className="contact-bottom"><span>{profile.email} · {profile.phone}</span><span>{profile.location}</span></div></div></section>
  </main><footer className="site-footer page-wrap"><a href="#top" className="brand"><span className="brand-mark">AS</span><span className="brand-name">Ayesha Shafiq<small>PORTFOLIO · 2026</small></span></a><span>Built with React · Designed for the web</span><a href="#top">Back to top ↑</a></footer><RobotBuddy/>{selectedProject && <ProjectModal project={selectedProject} close={() => setSelectedProject(null)}/>}</>;
}
