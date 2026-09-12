import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import SocialIcon from "./SocialIcon";
import {info} from "../../info/Info";

export default function Home() {
   return (
      <section className={Style.hero}>
         <div className={Style.copy}>
            <div className={Style.kicker}>
               <span className={Style.dot}></span>
               Disponível para projetos e oportunidades
            </div>

            <h1>
               Engenheiro de Software
               <span>Full Stack & Cybersecurity</span>
            </h1>

            <p className={Style.lead}>
               Sou {info.firstName} {info.lastName}. Desenvolvo produtos digitais,
               aplicações web e soluções de infraestrutura com foco em clareza,
               segurança e manutenção a longo prazo.
            </p>

            <div className={Style.ctas}>
               <a href="/portfolio" className={Style.primaryButton}>Ver projetos</a>
               <a href="mailto:candido@techgamespi.com" className={Style.secondaryButton}>Falar comigo</a>
            </div>

            <div className={Style.meta}>
               <div>
                  <span>01</span>
                  <strong>Software</strong>
                  <small>Front-end, back-end e APIs</small>
               </div>
               <div>
                  <span>02</span>
                  <strong>Segurança</strong>
                  <small>Cybersecurity aplicada</small>
               </div>
               <div>
                  <span>03</span>
                  <strong>Infraestrutura</strong>
                  <small>Linux, redes e servidores</small>
               </div>
            </div>

            <div className={Style.socials}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </div>
         </div>

         <div className={Style.visual}>
            <div className={Style.photoFrame}>
               <img src={me} alt="José Cândido" className={Style.avatar}/>
            </div>
            <div className={Style.caption}>
               <span>José Cândido</span>
               <small>Software Engineer • Full Stack • Cybersecurity</small>
            </div>
         </div>
      </section>
   )
}
