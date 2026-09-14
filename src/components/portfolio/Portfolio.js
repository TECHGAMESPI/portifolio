import React from 'react';
import Style from './Portfolio.module.scss';
import PortfolioBlock from './PortfolioBlock';
import {profile, projects} from '../../info/Content';

export default function Portfolio({t}) {
  const p=t.projects;
  return <section className={Style.page}>
    <header><div><p className={Style.eyebrow}>01 · {p.eyebrow}</p><h1>{p.title}</h1></div><p>{p.intro}</p></header>
    <div className={Style.list}>{projects.map((project,index)=><PortfolioBlock key={project.title} project={project} index={index} labels={p}/>)}</div>
    <section className={Style.contact}><div><p className={Style.eyebrow}>02 · Contact</p><h2>{p.contactTitle}</h2><p>{p.contactText}</p></div><div className={Style.contactLinks}><a href={profile.linkedin} target="_blank" rel="noreferrer">{p.send}<span>↗</span></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub<span>↗</span></a></div></section>
  </section>;
}
