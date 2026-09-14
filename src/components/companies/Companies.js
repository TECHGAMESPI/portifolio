import React from 'react';
import Style from './Companies.module.scss';
import {companies} from '../../info/Content';

export default function Companies({t}) {
  const c=t.companies;
  return <section className={Style.page}>
    <header><p className={Style.eyebrow}>01 · {c.eyebrow}</p><h1>{c.title}</h1><p>{c.intro}</p></header>
    <article className={`${Style.company} ${Style.chat}`}>
      <div className={Style.brand}><span>CE</span><div><small>SaaS · Atendimento</small><h2>ChatExpress</h2></div></div>
      <div className={Style.statement}><h3>{c.chatTitle}</h3><p>{c.chatText}</p><a href={companies[0].href} target="_blank" rel="noreferrer">{c.visit} ↗</a></div>
      <div className={Style.columns}><div><small>Problema</small><ul>{c.problems.map(item=><li key={item}>{item}</li>)}</ul></div><div><small>Solução</small><ul>{c.benefits.map(item=><li key={item}>{item}</li>)}</ul></div></div>
      <div className={Style.product}><span>Omnichannel</span><strong>Uma operação.<br/>Todos os canais.</strong><div className={Style.wave}><i/><i/><i/><i/><i/></div></div>
    </article>
    <article className={`${Style.company} ${Style.tech}`}>
      <div className={Style.brand}><span>TG</span><div><small>Tecnologia · Serviços</small><h2>TechGamesPI</h2></div></div>
      <div className={Style.statement}><h3>{c.techTitle}</h3><p>{c.techText}</p><a href={companies[1].href} target="_blank" rel="noreferrer">{c.visit} ↗</a></div>
      <div className={Style.services}>{c.techServices.map((service,i)=><div key={service}><span>0{i+1}</span><strong>{service}</strong><i>↗</i></div>)}</div>
    </article>
  </section>;
}
