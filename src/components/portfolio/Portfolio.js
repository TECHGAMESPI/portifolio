import React, {useState} from 'react';
import Style from './Portfolio.module.scss';
import PortfolioBlock from './PortfolioBlock';
import {profile, projects} from '../../info/Content';

export default function Portfolio({t}) {
  const p=t.projects;
  const [form,setForm]=useState({name:'',email:'',message:''});
  const submit=e=>{e.preventDefault();const subject=encodeURIComponent(`Contato pelo portfólio — ${form.name}`);const body=encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);window.location.href=`mailto:${profile.email}?subject=${subject}&body=${body}`;};
  return <section className={Style.page}>
    <header><div><p className={Style.eyebrow}>01 · {p.eyebrow}</p><h1>{p.title}</h1></div><p>{p.intro}</p></header>
    <div className={Style.list}>{projects.map((project,index)=><PortfolioBlock key={project.title} project={project} index={index} labels={p}/>)}</div>
    <section className={Style.contact}><div><p className={Style.eyebrow}>02 · Contact</p><h2>{p.contactTitle}</h2><p>{p.contactText}</p><a href={`mailto:${profile.email}`}>{profile.email}</a></div><form onSubmit={submit}><label><span>{p.name}</span><input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label><label><span>{p.email}</span><input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label><label><span>{p.message}</span><textarea required rows="5" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/></label><button type="submit">{p.send}<span>↗</span></button></form></section>
  </section>;
}
