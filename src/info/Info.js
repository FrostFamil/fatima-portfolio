import home1 from "../img/home/home1.jpg"
import home2 from "../img/home/home2.jpg"
import home3 from "../img/home/home3.jpg"
import home4 from "../img/home/home4.jpg"
import home5 from "../img/home/home5.jpg"
import home6 from "../img/home/home6.jpg"

import cake1 from "../img/cakeDecorations/cake1.jpg"
import cake2 from "../img/cakeDecorations/cake2.jpg"
import cake3 from "../img/cakeDecorations/cake3.jpg"
import cake4 from "../img/cakeDecorations/cake4.jpg"

import photo1 from "../img/photography/photo1.jpg"
import photo2 from "../img/photography/photo2.jpg"
import photo3 from "../img/photography/photo3.jpg"
import photo4 from "../img/photography/photo4.jpg"
import photo5 from "../img/photography/photo5.jpg"
import photo6 from "../img/photography/photo6.jpg"
import photo7 from "../img/photography/photo7.jpg"
import photo8 from "../img/photography/photo8.jpg"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Fatima",
    lastName: "Abaszada",
    initials: "FA",
    position: "Interior Designer Enthusiast",
    selfPortrait: null,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the Germany, Berlin'
        },
        {
            emoji: "📧",
            text: "fabazada0@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/fatima.abazade.7",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/fatimaabaszade_1998",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://www.linkedin.com/in/fatima-abaszada/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
    ],
    bio: "Hello! I'm Fatima Abaszada.",
    skills:
        {
            proficientWith: ['allah'],
            exposedTo: ['veren']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
    homePortfolio: [
        {
            title: "Home 1",
            image: home1
        },
        {
            title: "Home 2",
            image: home2
        },
        {
            title: "Home 3",
            image: home3
        },
        {
            title: "Home 4",
            image: home4
        },
        {
            title: "Home 5",
            image: home5
        },
        {
            title: "Home 6",
            image: home6
        },
    ],
    cakeDecorations: [
        {
            title: "Cake 1",
            image: cake1
        },
        {
            title: "Cake 2",
            image: cake2
        },
        {
            title: "Cake 3",
            image: cake3
        },
        {
            title: "Cake 4",
            image: cake4
        },
    ],
    photography: [
        {
            title: "Photography 1",
            image: photo1
        },
        {
            title: "Photography 2",
            image: photo2
        },
        {
            title: "Photography 3",
            image: photo3
        },
        {
            title: "Photography 4",
            image: photo4
        },
        {
            title: "Photography 5",
            image: photo5
        },
        {
            title: "Photography 6",
            image: photo6
        },
        {
            title: "Photography 7",
            image: photo7
        },
        {
            title: "Photography 8",
            image: photo8
        },
    ]
}