import React from 'react';
import Style from "./PortfolioBlock.module.scss";

function PortfolioBlock({
   live,
   source,
   title,
   category,
   year,
   status,
   description,
   tags = [],
   privateProject,
   index
}) {
   return (
      <article className={Style.project}>
         <span className={Style.number}>{String(index + 1).padStart(2, '0')}</span>

         <div className={Style.content}>
            <div className={Style.meta}>
               <span>{category}</span>
               <span>{year}</span>
            </div>

            <h2>{title}</h2>
            {description && <p>{description}</p>}

            {tags.length > 0 && (
               <ul className={Style.tags} aria-label="Tecnologias utilizadas">
                  {tags.map(tag => <li key={tag}>{tag}</li>)}
               </ul>
            )}
         </div>

         <div className={Style.aside}>
            <span className={Style.status}>{status}</span>

            <div className={Style.links}>
               {live && (
                  <a href={live} target="_blank" rel="noopener noreferrer">
                     Visitar <span aria-hidden="true">↗</span>
                  </a>
               )}
               {source && (
                  <a href={source} target="_blank" rel="noopener noreferrer">
                     Ver código <span aria-hidden="true">↗</span>
                  </a>
               )}
               {privateProject && (
                  <span className={Style.private}>Código privado</span>
               )}
            </div>
         </div>
      </article>
   );
}

export default PortfolioBlock;
