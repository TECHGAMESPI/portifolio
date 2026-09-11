import React from 'react';
import Style from './About.module.scss';
import {info} from "../../info/Info";

export default function About() {
    return (
        <section className={Style.page}>
            <div className={Style.heading}>
                <span>Sobre mim</span>
                <h1>Construo soluções pensando além do código.</h1>
                <p>{info.bio}</p>
            </div>

            <div className={Style.grid}>
                <article className={Style.mainCard}>
                    <span className={Style.cardLabel}>Perfil</span>
                    <h2>Software, infraestrutura e segurança no mesmo contexto.</h2>
                    <p>
                        Minha experiência técnica passa pelo desenvolvimento de aplicações web,
                        administração de ambientes, redes, servidores e suporte. Isso me ajuda a
                        enxergar uma solução de ponta a ponta: da interface à infraestrutura onde ela roda.
                    </p>
                    <div className={Style.tags}>
                        <span>Software Engineering</span>
                        <span>Full Stack</span>
                        <span>Cybersecurity</span>
                        <span>Infrastructure</span>
                    </div>
                </article>

                <article className={Style.statCard}>
                    <strong>360°</strong>
                    <span>Visão do ecossistema de tecnologia</span>
                </article>

                <article className={Style.statCard}>
                    <strong>Full Stack</strong>
                    <span>Front-end, back-end e integrações</span>
                </article>
            </div>

            <div className={Style.section}>
                <div className={Style.sectionTitle}>
                    <span>Stack principal</span>
                    <h2>Tecnologias e áreas que fazem parte do meu dia a dia.</h2>
                </div>

                <div className={Style.skillsGrid}>
                    {info.skills.proficientWith.map((skill) => (
                        <span key={skill} className={Style.skill}>{skill}</span>
                    ))}
                </div>
            </div>

            <div className={Style.section}>
                <div className={Style.sectionTitle}>
                    <span>Também atuo com</span>
                </div>
                <div className={Style.skillsGrid}>
                    {info.skills.exposedTo.map((skill) => (
                        <span key={skill} className={Style.secondarySkill}>{skill}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}
