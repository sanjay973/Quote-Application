
const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
let twitterBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote');



//get quote from api
async function getQuote(){
    
    const proxyUrl='https://cors-anywhere.herokuapp.com/'
    
    const apiUrl='http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    
    try{
        
        const response=await fetch(proxyUrl+ apiUrl);
        const data=await response.json();
        
        if(data.quoteAuhor===''){
            authorText.innerText='UnKnown'
        }
        else{
            authorText.innerText=data.quoteAuthor;
        }
        quoteText.innerText=data.quoteText;
//       reduce size for long quotes
        if(data.quoteText.length>120){
            quoteText.classList.add('long-quote')
        }else{
            quoteText.classList.remove('long-quote')
        }
    }
    catch(error){
        getQuote();
    }
}

function tweetQuote(){
    const quote=quoteText.innerText;
    const author=authorText.innerText;
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl,'_blank');
}

//Event Listener
if(newQuoteBtn){
newQuoteBtn.addEventListener('click',getQuote);}
if(twitterBtn)
twitterBtn.addEventListener('click',tweetQuote);


//On Load
getQuote();














