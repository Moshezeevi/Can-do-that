const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const paryBtn = document.getElementById('twitter')
const newQouteBtn = document.getElementById('new-quote')


// get quote from api


async function getQuote(){
    const proxyUrl = 'https://obscure-earth-96157.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        // if aouther is blank, add 'unknow'
        if (data.quoteAuthor === '') {
            authorText.innerText = 'Unknow';

        }else{
            authorText.innerText = data.quoteAuthor;
        }

        // Reducs font size for long quotes/
        if (data.quoteText.length > 120) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.quoteText;
        
    }  catch(error){
         getQuote();
         console.log('Whops, no quote', error)
    }
}

function tweetQuote() {
    const quote = quoteText.innerText;
    const aouther = aoutherText.innerText
}
// on load

getQuote();


// file save text
 