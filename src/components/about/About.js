import React from 'react';
import Style from './About.module.scss';
import me from '../../img/self.png';
import {skills} from '../../info/Content';

export default function About({t}) {
  const a=t.about;
  return <section className={Style.page}>
    <header className={Style.intro}><div><p className={Style.eyebrow}>01 · {a.eyebrow}</p><h1>{a.title}</h1><p className={Style.lead}>{a.intro}</p><p className={Style.detail}>{a.detail}</p></div><figure><img src={me} alt="José Cândido"/><figcaption><span>José Cândido</span><small>Full Stack · CTO · Cybersecurity</small></figcaption></figure></header>
    <section className={Style.block}><div className={Style.blockTitle}><span>02</span><h2>{a.journeyTitle}</h2></div><div className={Style.timeline}>{a.timeline.map(([period,title,text])=><article key={title}><time>{period}</time><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>
    <section className={Style.block}><div className={Style.blockTitle}><span>03</span><h2>{a.skillsTitle}</h2></div><div className={Style.skills}>{skills.map(skill=><span key={skill}>{skill}</span>)}</div></section>
    <section className={Style.split}><article><p className={Style.eyebrow}>04 · {a.publicationTitle}</p><h2>Cybersecurity<br/>as research.</h2><p>{a.publication}</p><span className={Style.badge}>Qualis B2 · Ransomware</span></article><article><p className={Style.eyebrow}>05 · {a.strengthsTitle}</p><ul>{a.strengths.map((item,i)=><li key={item}><span>0{i+1}</span>{item}</li>)}</ul></article></section>
  </section>;
}
