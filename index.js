let quote = document.getElementById("quote")
let author = document.getElementById("author")
let saved = document.getElementById("saved")

// const save = () => {
//     localStorage.setItem("savedQuote", realData[a].author);
//     document.getElementById("saved").innerHTML = localStorage.getItem("savedQuote");
// }

const getQuote = async () => {
    const quotes = 'https://type.fit/api/quotes';
    try {
        const data = await fetch(quotes)
        const realData = await data.json();

        let a = Math.floor(Math.random()*realData.length)
        console.log(realData[a].text)
        quote.innerHTML = realData[a].text

        realData[a].author === null ? realData[a].author = "Anonymous" : realData[a].author
        console.log(realData[a].author)
        author.innerHTML = realData[a].author
    } catch (error) {

    }

}
getQuote()