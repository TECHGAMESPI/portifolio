import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"



export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];




export const info = {
    firstName: "Jose",
    lastName: "Candido",
    initials: "JC",
    position: "Engenheiro de Software | Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'alimentado por café'
        },
        {
            emoji: '🌎',
            text: 'morando no Brasil'
        },
        {
            emoji: "🎓",
            text: "Engenheiro de Software e pós-graduado em Cibersegurança"
        },
        {
            emoji: "💼",
            text: "Aberto a novas oportunidades"
        },
        {
            emoji: "📧",
            text: "candido@techgamespi.com"
        },
        {
             emoji: "📱",
             text:  "(86)99947-4583"
        }
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
        },


    ],
    bio: "Olá! Sou José Cândido, Engenheiro de Software, pós-graduado em Cibersegurança e Desenvolvedor Full Stack. Atuo no desenvolvimento de aplicações e soluções web completas, trabalhando entre front-end e back-end com tecnologias como JavaScript, TypeScript, Python, Django, React, Vue.js, Node.js e Laravel. Também possuo experiência com infraestrutura de TI, redes, servidores, Linux, Windows e Docker, o que me proporciona uma visão ampla do ecossistema de tecnologia. Busco unir desenvolvimento, infraestrutura e segurança para criar soluções eficientes, bem estruturadas e confiáveis.",
    skills:
        {
            proficientWith: ['javascript', 'typescript', 'python', 'django', 'react', 'vue.js', 'nodejs', 'laravel', 'php', 'wordpress', 'docker', 'linux', 'git', 'github', 'html5', 'css3'],
            exposedTo: ['cybersecurity', 'networking', 'figma', 'lua', 'ruby on rails']
        }
    ,
    hobbies: [
        {
            label: 'Games',
            emoji: '🕹️'
        },
         {
            label: 'Música',
            emoji: '🎸'
        },
        {
            label: 'Praia',
            emoji: '🏝️'
        },
        {
            label: 'Filmes',
            emoji: '🎥'
        },
        {
            label: 'Desenvolver',
            emoji: '👨‍💻'
        }

    ],
    portfolio: [
        {
            title: "Inove Celular",
            live: "https://inovecelular.com/",
            image: mock1
        },
        {
            title: "Clone netflix",
            live: "https://netflixclone-techgamespi.vercel.app/auth",
            source: "https://github.com/TECHGAMESPI/clone-netflix",
            image: mock2
        },
        {
            title: "Gerador de senhas",
            live: "https://github.com/TECHGAMESPI/gerador-de-senhas",
            source: "https://github.com/TECHGAMESPI/gerador-de-senhas",
            image: mock3
        },
    ]
}
