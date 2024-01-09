const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author')
const apiURL = "https://api.quotable.io/random";

const getQuote = async () => {
   try {

    btnEl.textContent = "Loading...";
    btnEl.disabled = true;

    quoteEl.textContent = "Generating..."
    authorEl.textContent = "author..."

    const response = await  fetch(apiURL);
    const data = await response.json();

    quoteEl.innerHTML = data.content;
    authorEl.innerHTML = `~ ${data.author}`

    btnEl.textContent = "Generate Quote";
    btnEl.disabled = false;

   } catch (error) {
    quoteEl.textContent = "An error happened, please try again later.";
    authorEl.textContent = "Error! check your  internet connection";
   }
};

btnEl.addEventListener('click', getQuote);