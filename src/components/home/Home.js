import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import SocialIcon from "./SocialIcon";
import {info} from "../../info/Info";

export default function Home() {
   return (
      <section className={Style.hero}>
         <div className={Style.copy}>
            <span className={Style.eyebrow}>Disponível para novos projetos e oportunidades</span>

            <h1>
               Engenharia de Software,
               <span> desenvolvimento e segurança.</span>
            </h1>

            <p className={Style.lead}>
               Sou {info.firstName} {info.lastName}, Engenheiro de Software, Desenvolvedor Full Stack
               e pós-graduado em Cibersegurança. Crio soluções digitais completas unindo código,
               infraestrutura e segurança.
            </p>

            <div className={Style.ctas}>
               <a href="/portfolio" className={Style.primaryButton}>Ver projetos</a>
               <a href="mailto:candido@techgamespi.com" className={Style.secondaryButton}>Falar comigo</a>
            </div>

            <div className={Style.highlights}>
               <div>
                  <strong>Full Stack</strong>
                  <span>Front-end + Back-end</span>
               </div>
               <div>
                  <strong>Cybersecurity</strong>
                  <span>Segurança aplicada</span>
               </div>
               <div>
                  <strong>Infraestrutura</strong>
                  <span>Linux, redes e servidores</span>
               </div>
            </div>

            <div className={Style.socials}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </div>
         </div>

         <div className={Style.visual}>
            <div className={Style.orbit}></div>
            <div className={Style.avatarWrap}>
               <img src={me} alt="José Cândido" className={Style.avatar}/>
            </div>

            <div className={Style.floatingCard}>
               <span className={Style.statusDot}></span>
               <div>
                  <small>Perfil profissional</small>
                  <strong>Software • Infra • Security</strong>
               </div>
            </div>

            <div className={Style.codeCard}>
               <span>const perfil = &#123;</span>
               <span>&nbsp;&nbsp;software: true,</span>
               <span>&nbsp;&nbsp;security: true,</span>
               <span>&nbsp;&nbsp;infra: true</span>
               <span>&#125;</span>
            </div>
         </div>
      </section>
   )
}
