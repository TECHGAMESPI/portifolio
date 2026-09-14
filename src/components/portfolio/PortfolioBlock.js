import React from 'react';
import Style from './PortfolioBlock.module.scss';

export default function PortfolioBlock({project,index,labels}) {
  return <article className={Style.project}>
    <span className={Style.number}>{String(index+1).padStart(2,'0')}</span>
    <div className={Style.copy}><div className={Style.meta}><span>{project.category}</span><span>{project.year}</span></div><h2>{project.title}</h2><p>{project.description}</p><ul>{project.tags.map(tag=><li key={tag}>{tag}</li>)}</ul><div className={Style.links}>{project.source?<a href={project.source} target="_blank" rel="noreferrer">{labels.source} ↗</a>:<span>{labels.private}</span>}<i>{project.status}</i></div></div>
    <div className={`${Style.preview} ${Style[project.tone]}`}><div className={Style.previewGrid}/><span>{project.title.slice(0,2).toUpperCase()}</span><small>{project.category}</small><strong>{project.title}</strong><i>{String(index+1).padStart(2,'0')} / 04</i></div>
  </article>;
}
