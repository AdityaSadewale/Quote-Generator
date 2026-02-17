document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;
    const quoteEl = document.getElementById("quote");
    const authorEl = document.getElementById("author");
    const newBtn = document.getElementById("new-quote");
    const tweetBtn = document.getElementById("tweet-btn");
    const copyBtn = document.getElementById("copy-btn");
    const themeBtn = document.getElementById("theme-toggle");
    const toast = document.getElementById("toast");

    body.classList.add("light");

    const quotes = [
        { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
        { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
        { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
        { quote: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
        { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
    ];

    function showToast(msg) {
        toast.textContent = msg;
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2000);
    }

    function getQuote() {
        const random = quotes[Math.floor(Math.random() * quotes.length)];
        quoteEl.style.opacity = 0;

        setTimeout(() => {
            quoteEl.textContent = `"${random.quote}"`;
            authorEl.textContent = `— ${random.author}`;
            quoteEl.style.opacity = 1;
        }, 200);
    }

    function tweetQuote() {
        const text = `${quoteEl.textContent} ${authorEl.textContent}`;
        window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
            "_blank"
        );
    }

    function copyQuote() {
        navigator.clipboard.writeText(
            `${quoteEl.textContent} ${authorEl.textContent}`
        );
        showToast("Copied!");
    }

    function toggleTheme() {
        if (body.classList.contains("light")) {
            body.classList.remove("light");
            body.classList.add("dark");
            themeBtn.textContent = "☀";
        } else {
            body.classList.remove("dark");
            body.classList.add("light");
            themeBtn.textContent = "🌙";
        }
    }

    newBtn.addEventListener("click", getQuote);
    tweetBtn.addEventListener("click", tweetQuote);
    copyBtn.addEventListener("click", copyQuote);
    themeBtn.addEventListener("click", toggleTheme);

    getQuote();
});
