import self from "../img/self.png"

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
            title: "VoaFácil",
            category: "Produto digital",
            year: "2026",
            status: "Em desenvolvimento",
            description: "Plataforma de busca e comparação de passagens aéreas com filtros em tempo real, rotas compartilháveis, integração com a Travelpayouts e cobertura de testes.",
            tags: ["Next.js 16", "TypeScript", "React 19", "APIs", "Vitest"],
            privateProject: true
        },
        {
            title: "Javis Control",
            category: "Game house · Operações",
            year: "2026",
            status: "Produto proprietário",
            description: "Sistema completo para operação de game houses, com gestão de máquinas e sessões, saldo de tempo, vendas, caixa, controle parental e agente Windows instalado nas estações.",
            tags: ["Laravel 12", "Electron", "MySQL", "Redis", "JWT"],
            privateProject: true
        },
        {
            title: "Chamada EBD",
            category: "Gestão · Comunidade",
            year: "2024",
            status: "Código aberto",
            description: "Sistema para gestão de presença na Escola Bíblica Dominical, com perfis de acesso, turmas, visitantes e gamificação por frequência.",
            tags: ["Laravel", "PHP", "JavaScript", "MySQL"],
            source: "https://github.com/TECHGAMESPI/chamada-ebd"
        },
        {
            title: "LuminaFlow",
            category: "Automação financeira",
            year: "2025",
            status: "MVP colaborativo",
            description: "MVP de automação e insights financeiros com uma API que simula o fluxo Stripe–Omie, documentação técnica e execução conteinerizada.",
            tags: ["Python", "FastAPI", "Docker", "REST API"],
            source: "https://github.com/TECHGAMESPI/luminaflow"
        }
    ]
}
