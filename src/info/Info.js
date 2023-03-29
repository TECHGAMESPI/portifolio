import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Jose",
    lastName: "Candido",
    initials: "JC", // the example uses first and last, but feel free to use three or more if you like.
    position: "Desenvolvedor Full Stack",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
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
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

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
            label: 'desnvolver',
            emoji: '👨‍💻'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Inove Celular",
            live: "https://inovecelular.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
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