const qouteContainer = document.getElementById('quote-container')
const qouteText = document.getElemhentById('qoute')
const authorText = document.getElementById('author')
const paryBtn = document.getElementById('twitter')
const newQouteBtn = document.getElementById('new-quote')


// get quote from api


async function getQuote(){
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.comh/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl)
        const data = await response.json();
        authorText.innerText = data.qouteAuthor;
        qouteText.innerText = data.qouteText;
        console.log(data)
    }     
     catch(error){
         getQuote();
    }
}

// on load

getQuote();