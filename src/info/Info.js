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
    position: "Desenvolvedor Full Stack",
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
            emoji: "💼",
            text: "Estudante de Engenharia de Software"
        },
        {
            emoji: "📧",
            text: "nailie2010@gmail.com"
        }
    ],
    socials: [
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
            link: "https://www.linkedin.com/in/jos%C3%A9-c%C3%A2ndido-929aa1186/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },


    ],
    bio: "Olá, eu sou o José Cândido e sou estudante de Engenharia de Software atualmente estou cursando o 3º período na faculdade Icev, sou programador Full Stack com habilidades em javascript e lua ",
    skills:
        {
            proficientWith: ['javascript','lua','python', 'wordpress','react', 'nodejs', 'github', 'html5', 'css3'],
            exposedTo: ['git','figma']
        }
    ,
    hobbies: [
        {
            label: 'games',
            emoji: '🕹️'
        },
        {
            label: 'praia',
            emoji: '🏝️'
        },
        {
            label: 'Filmes',
            emoji: '🎥'
        },
        {
            label: 'desenvolver',
            emoji: '👨‍💻'
        }

    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Inove Celular",
            live: "https://inovecelular.com/", 
            image: mock1
        },
        {
            title: "Clone netflix",
            live: "https://github.com/TECHGAMESPI/clone-netflix",
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
