const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const paryBtn = document.getElementById('twitter')
const newQouteBtn = document.getElementById('new-quote')


// get quote from api


async function getQuote(){
    const proxyUrl = 'https://obscure-earth-96157.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl)
        const data = await response.json();
        authorText.innerText = data.quoteAuthor;
        quoteText.innerText = data.quoteText;
        console.log(data)
    }     
     catch(error){
         getQuote();
    }
}

// on load

getQuote();