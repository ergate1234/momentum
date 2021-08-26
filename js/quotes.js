const quotes = [
  {
    quote: "Action is the foundational key to all success.",
    author: "-Pablo Picasso-"
  },
  {
    quote: "The way get started is to quit talking and begin doing.",
    author: "-Walt Disney-",
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "-Nelson Mandela-",
  },
  {
    quote: "Age is no guarantee of maturity.",
    author: "-Lawana Blackwell-",
  },
  {
    quote: "Science is organized knowledge. Wisdom is organized life.",
    author: "-Immanuel Kant-",
  },
  {
    quote: "Life is not fair. Get used to it.",
    author: "-Bill Gates-",
  },
  {
    quote: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "-Winston Churchill-",
  },
  {
    quote: "You can delay but you can't deny.",
    author: "-Tyron Woodley-",
  },
  {
    quote: "What we dwell on is who we become.",
    author: "-Oprah Winfrey-",
  },
  {
    quote: "It's choice - not chance - that determines your destiny.",
    author: "-Jean Nidetch-",
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;