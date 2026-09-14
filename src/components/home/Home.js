import React from 'react';
import {Link} from 'react-router-dom';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import {companies, profile, projects} from '../../info/Content';

export default function Home({t}) {
  const h=t.home;
  return <>
    <section className={Style.hero}>
      <div className={Style.heroCopy}>
        <p className={Style.eyebrow}><span/>{h.eyebrow}</p>
        <h1>Engenheiro<br/>de Software <em>{h.title}</em></h1>
        <p className={Style.lead}>{h.intro}</p>
        <div className={Style.actions}><Link to="/portfolio" className={Style.primary}>{h.primary}<span>↗</span></Link><a href={profile.contact} target="_blank" rel="noreferrer">{h.secondary}</a></div>
        <div className={Style.identity}><img src={me} alt="José Cândido"/><div><strong>José Cândido</strong><span>Software Engineer · Cybersecurity</span></div><div className={Style.social}><a href={profile.github} target="_blank" rel="noreferrer">GH</a><a href={profile.linkedin} target="_blank" rel="noreferrer">IN</a></div></div>
      </div>
      <aside className={Style.snapshot}>
        <div className={Style.radar}><span/><span/><span/><i>JC</i></div>
        <p className={Style.label}>{h.snapshot}</p>
        {[[h.role,h.roleValue],[h.education,h.educationValue],[h.focus,h.focusValue]].map(([label,value])=><div className={Style.fact} key={label}><span>{label}</span><strong>{value}</strong></div>)}
        <div className={Style.available}><span/>{h.eyebrow}</div>
      </aside>
    </section>

    <section className={Style.section}>
      <div className={Style.sectionHead}><p className={Style.eyebrow}>01 · Expertise</p><div><h2>{h.pillarsTitle}</h2><p>{h.pillarsIntro}</p></div></div>
      <div className={Style.pillars}>{h.pillars.map(([number,title,text])=><article key={number}><span>{number}</span><div className={Style.icon}>{title[0]}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className={Style.section}>
      <div className={Style.simpleHead}><p className={Style.eyebrow}>02 · Services</p><h2>{h.servicesTitle}</h2></div>
      <div className={Style.services}>{h.services.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p><i>↗</i></article>)}</div>
    </section>

    <section className={Style.section}>
      <div className={Style.simpleHead}><p className={Style.eyebrow}>03 · Ventures</p><h2>{h.companiesTitle}</h2></div>
      <div className={Style.companies}>{companies.map((company,i)=><article key={company.name}><div className={Style.companyMark}>{company.mark}</div><p>{company.type}</p><h3>{company.name}</h3><span>{company.description}</span><Link to="/companies">{i===0?'SaaS':'Tech studio'} ↗</Link></article>)}</div>
    </section>

    <section className={Style.section}>
      <div className={Style.projectsHead}><div><p className={Style.eyebrow}>04 · Work</p><h2>{h.projectsTitle}</h2></div><Link to="/portfolio">{h.projectsLink} →</Link></div>
      <div className={Style.projectStrip}>{projects.slice(0,3).map((project,i)=><Link to="/portfolio" key={project.title} className={`${Style.miniProject} ${Style[project.tone]}`}><span>0{i+1}</span><div><small>{project.category}</small><strong>{project.title}</strong></div><i>↗</i></Link>)}</div>
    </section>

    <section className={Style.cta}><p className={Style.eyebrow}>05 · Contact</p><h2>{h.closing}</h2><a href={profile.contact} target="_blank" rel="noreferrer">{h.closingButton}<span>↗</span></a></section>
  </>;
}
