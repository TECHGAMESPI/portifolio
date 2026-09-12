import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import Style from "./Portfolio.module.scss";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <section className={Style.page}>
            <header className={Style.heading}>
                <div>
                    <span className={Style.kicker}>Trabalhos selecionados</span>
                    <h1>Projetos construídos para problemas reais.</h1>
                </div>

                <div className={Style.intro}>
                    <span>04 projetos</span>
                    <p>
                        Uma seleção que reúne produto, automação, operações e desenvolvimento
                        full stack — com decisões técnicas orientadas ao uso no mundo real.
                    </p>
                </div>
            </header>

            <div className={Style.list}>
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
