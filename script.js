// we have to create 12 cards

// we creating this array to create grid
const cardArray = [
    {
        name: 'fries',
        img: 'assets/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'assets/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'assets/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'assets/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'assets/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'assets/pizza.png',
    },
    {
        name: 'fries',
        img: 'assets/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'assets/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'assets/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'assets/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'assets/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'assets/pizza.png',
    }
]


// to randomly place objects
cardArray.sort(() => 0.5 - Math.random()); // console.log(cardArray);

// created at later-stage in flipcard function
let  cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = []; // this will hold at every index 2 items(like 2d array)


const gridDisplay = document.querySelector('#grid'); // console.log(gridDisplay);
// later at last of project after else condition
const resultDisplay = document.querySelector('#result');



function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        // create images
        const  card = document.createElement('img')
        // after creating img want to add one among assets in it
        card.setAttribute('src', 'assets/blank.png')
        card.setAttribute('data-id', i); // console.log(card, i);
        gridDisplay.appendChild(card)

        // this was added at later stage of flip card function
        card.addEventListener('click', flipCard) 
    }
}

createBoard()

// // now we want to flip the card when we click on it
// // we have to think which card i have clicked on , so add eventlistner to each card
function flipCard(){
    let cardId = this.getAttribute('data-id') // this is helping to get attribute of clicked card
    // why cardid?
    // so that we know which card we clicked, then we can pass it through the array to get name
    // and when they will be inspecting our code(in browser html is open to all) they won't be able to find what is under our cards
    //console.log(cardArray); console.log('clicked', cardId); console.log(cardArray[cardId].name);
    cardsChosen.push(cardArray[cardId].name); //console.log(cardsChosen);
    // added at later during checkMatch func
    cardsChosenIds.push(cardId); //console.log(cardsChosenIds);


    this.setAttribute('src', cardArray[cardId].img)


    if(cardsChosen.length === 2){
        // but this should happen after some time but fast
        setTimeout(checkMatch, 500)
    }
}

function checkMatch(){

    const cards = document.querySelectorAll('#grid img');  //console.log(cards);

    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];


    if(optionOneId == optionTwoId){
        alert("you have clicked on same image");
        cards[optionOneId].setAttribute('src', 'assets/blank.png');
        cards[optionTwoId].setAttribute('src', 'assets/blank.png'); 
    }

    // console.log("checkinfor match");
    else if(cardsChosen[0] == cardsChosen[1]){
        alert('Match'); // we can have a nice pop up here // but alert is basics
        cards[optionOneId].setAttribute('src', 'assets/white.png'); // this makes image white only when there is a match
        cards[optionTwoId].setAttribute('src', 'assets/white.png');

        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);

        // console.log(cardsChosen);
        cardsWon.push(cardsChosen); // by this both cardsChosen will lie at same index so length will increase by 1 only
    }
    else{
        alert("try again");
        cards[optionOneId].setAttribute('src', 'assets/blank.png');
        cards[optionTwoId].setAttribute('src', 'assets/blank.png');
    }

    cardsChosen = [];
    cardsChosenIds = [];
    resultDisplay.textContent = cardsWon.length;
    // console.log(cardsWon, cardsWon.length);

    if(cardsWon.length == (cards.length)/2){
        resultDisplay.innerHTML = 'Congratulations, You have found them all!'
    }
}