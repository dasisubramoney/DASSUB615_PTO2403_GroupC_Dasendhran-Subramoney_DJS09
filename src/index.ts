// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number
const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')
const reviewContainer = document.querySelector('.container')
const button = document.querySelector('button')

import { Permissions,LoyaltyUser } from './enums'
import { showReviewTotal, populateUser,showDetails,getTopTwoReviews } from './utils'
import { Price, Country } from './types'

let isOpen : boolean

interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}


// Reviews 
const reviews : any[]= [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "27-03-2021",
    description: 'The place was great',
  },
];

const you = {
  firstName: 'Bobby',
  lastName: 'Brown',
  isReturning: true,
  permissions: Permissions.ADMIN,
  age: 35,
  stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}


const properties : {
  image: string;
  title: string;
  price: number;
  location: {
      firstLine: string;
      city: string;
      code: number;
      country: Country;
  };
  contact: [number , string];
  isAvailable: boolean;
}[] = [
  {
    image: '',
    title: 'Colombian Shack',
    price: 45,
    location: {
        firstLine: 'shack 37',
        city: 'Bogota',
        code: 45632,
        country: 'Colombia'
    },
    contact: [ +27848961291,'marywinkle@gmail.com'],
    isAvailable: true  
},
{
    image: '',
    title: 'Polish Cottage',
    price: 34,
    location: {
        firstLine: 'no 23',
        city: 'Gdansk',
        code: 343903,
        country: 'Poland'
    },
    contact: [ +27848961291,'garydavis@hotmail.com'],
    isAvailable: false 
},
{
    image: '',
    title: 'London Flat',
    price: 23,
    location: {
        firstLine: 'flat 15',
        city: 'London',
        code: 35433,
        country: 'United Kingdom',
    },
    contact: [ +27848961291,'andyluger@aol.com'],
    isAvailable: true
}
]

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

// For loop to add the properties to the homepage 
for (let i = 0; i < properties.length; i++) {
  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = properties[i].title
  const image = document.createElement('img')
  image.setAttribute('src', properties[i].image)
  card.appendChild(image)
  propertyContainer.appendChild(card)
  showDetails(you.permissions, card, properties[i].price)
}

let currentLocation: [string, string, number] = ['Johannesburg', '11:21am', 31]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'


//Code is fixed 
let count = 0
function addReviews( array: {
  name: string;
  stars: number
  loyaltyUser: LoyaltyUser;
  date: string
}[]) : void{
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}

button.addEventListener('click', () => addReviews(reviews))