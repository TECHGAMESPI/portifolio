import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import Style from "./Portfolio.module.scss";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <section className={Style.page}>
            <header className={Style.heading}>
                <span>Projetos selecionados</span>
                <h1>Soluções que transformam ideias em produto.</h1>
                <p>
                    Uma seleção de projetos que representam minha experiência com desenvolvimento,
                    produto e resolução de problemas reais.
                </p>
            </header>

            <div className={Style.grid}>
                {info.portfolio.map((project, index) => (
                    <PortfolioBlock
                        key={project.title}
                        {...project}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}
