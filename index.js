let quote = document.getElementById("quote")
let author = document.getElementById("author")

const getQuote = async () => {
    const quotes = 'https://type.fit/api/quotes';
    try {
        const data = await fetch(quotes)
        const realData = await data.json();
        // console.log(data.length())
        // console.log(realData.length)
        // console.log(a);

        let a = Math.floor(Math.random()*realData.length)
        console.log(realData[a].text)
        quote.innerHTML=realData[a].text

        realData[a].author==="null"?
        console.log(realData[a].author)
        author.innerHTML=realData[a].author
    } catch (error) {

    }

}
getQuote()