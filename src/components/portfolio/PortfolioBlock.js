import React from 'react';
import Style from "./PortfolioBlock.module.scss";

function PortfolioBlock({image, live, source, title, description, tags = [], index}) {
   return (
      <article className={Style.card}>
         <div className={Style.imageWrap}>
            <img src={image} alt={`Preview do projeto ${title}`} />
            <span className={Style.number}>0{index + 1}</span>
         </div>

         <div className={Style.content}>
            <div>
               <span className={Style.label}>Projeto</span>
               <h2>{title}</h2>
               {description && <p>{description}</p>}
            </div>

            {tags.length > 0 && (
               <div className={Style.tags}>
                  {tags.map(tag => <span key={tag}>{tag}</span>)}
               </div>
            )}

            <div className={Style.links}>
               {live && (
                  <a href={live} target="_blank" rel="noopener noreferrer">
                     Acessar projeto <span>↗</span>
                  </a>
               )}
               {source && (
                  <a href={source} target="_blank" rel="noopener noreferrer" className={Style.secondary}>
                     GitHub <span>↗</span>
                  </a>
               )}
            </div>
         </div>
      </article>
   );
}

export default PortfolioBlock;
