import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "José",
    lastName: "Cândido",
    initials: "JC",
    position: "Engenheiro de Software | Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        { emoji: '🌎', text: 'Brasil' },
        { emoji: "🎓", text: "Engenheiro de Software e pós-graduado em Cibersegurança" },
        { emoji: "💼", text: "Aberto a novos projetos e oportunidades" },
        { emoji: "📧", text: "candido@techgamespi.com" },
        { emoji: "📱", text: "(86) 99947-4583" }
    ],
    socials: [
        {
            link: "https://www.youtube.com/@techgamespi",
            icon: 'fa fa-youtube',
            label: 'youtube'
        },
        {
            link: "https://instagram.com/jose_candido_1",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/TECHGAMESPI",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/josecandido1/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio: "Sou José Cândido, Engenheiro de Software, pós-graduado em Cibersegurança e Desenvolvedor Full Stack. Desenvolvo aplicações e soluções web completas e também atuo com infraestrutura de TI, redes, servidores, Linux, Windows e Docker. Essa combinação me permite enxergar tecnologia de forma ampla, unindo desenvolvimento, operação e segurança para construir soluções eficientes, confiáveis e bem estruturadas.",
    skills: {
        proficientWith: [
            'JavaScript', 'TypeScript', 'Python', 'Django', 'React', 'Vue.js',
            'Node.js', 'Laravel', 'PHP', 'WordPress', 'Docker', 'Linux',
            'Git', 'GitHub', 'HTML5', 'CSS3'
        ],
        exposedTo: [
            'Cibersegurança', 'Redes', 'Servidores', 'Infraestrutura de TI',
            'Figma', 'Lua', 'Ruby on Rails'
        ]
    },
    hobbies: [
        { label: 'Games', emoji: '🕹️' },
        { label: 'Música', emoji: '🎸' },
        { label: 'Praia', emoji: '🏝️' },
        { label: 'Filmes', emoji: '🎥' },
        { label: 'Desenvolver', emoji: '👨‍💻' }
    ],
    portfolio: [
        {
            title: "Inove Celular",
            description: "Projeto web voltado para operação e presença digital, com foco em uma experiência clara para o usuário.",
            tags: ["Web", "Full Stack", "Produto"],
            live: "https://inovecelular.com/",
            image: mock1
        },
        {
            title: "Clone Netflix",
            description: "Projeto de interface inspirado em uma plataforma de streaming, desenvolvido para explorar experiência visual e front-end.",
            tags: ["React", "JavaScript", "UI"],
            live: "https://netflixclone-techgamespi.vercel.app/auth",
            source: "https://github.com/TECHGAMESPI/clone-netflix",
            image: mock2
        },
        {
            title: "Gerador de Senhas",
            description: "Aplicação simples e objetiva para geração de senhas, criada com foco em utilidade e boas práticas de desenvolvimento.",
            tags: ["JavaScript", "Segurança", "Web"],
            live: "https://github.com/TECHGAMESPI/gerador-de-senhas",
            source: "https://github.com/TECHGAMESPI/gerador-de-senhas",
            image: mock3
        }
    ]
}
