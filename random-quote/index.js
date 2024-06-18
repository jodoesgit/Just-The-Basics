const quotes = [
    "Yada, yada!",
    "Pookle dookle doo",
    "Smoof!",
    "Meh.",
    "T.B.C."
]

const usedIndices = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {

    if (usedIndices.size >= quotes.length){
        usedIndices.clear()
    }

    while (true) {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        if (usedIndices.has(randomIndex)) continue

        const displayedQuote = quotes[randomIndex]
        quoteElement.innerHTML = displayedQuote
        usedIndices.add[randomIndex]
        break
    }
}