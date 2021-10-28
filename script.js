document.querySelector("#generate").addEventListener("click", () => {
    generate();
});

generate = () => {
    var quotes = {
        "- Walt Disney": '"The Way Get Started Is To Quit Talking And Begin Doing."',
        "- Winston Churchill": '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."',
        "- Will Rogers": '"Don’t Let Yesterday Take Up Too Much Of Today."',
        "- Unknown": '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character."',
        "- Vince Lombardi": '"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up."',
        "- Mahatma Gandhi": '"Live as if you were to die tomorrow. Learn as if you were to live forever"',
        "- Martin Luther King Jr": '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
        "- Albert Einstein": '"Strive not to be a success, but rather to be of value."',
        "- Florence Nightingale": '"I attribute my success to this: I never gave or took any excuse."',
        "- Michael Jordan": '"I missed more than 9000 shots in my career. I lost almost 300 games. 26 times I been trusted to take the game winning shot and missed. I failed over and over and over again in my life. And that is why I succeed."',
        "- Babe Ruth": '"Every strike brings me closer to the next home run."',
        "- John Lennon": '"Life is what happens to you while you’re busy making other plans."',
        "- Earl Nightingale": '"We become what we think about."',
        "- Mark Twain": '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."',
        "- Charles Swindoll": '"Life is 10% what happens to me and 90% of how I react to it."',
        "- Buddah": '"The mind is everything. What you think you become."',
        "- Chinese Proverb": '"The best time to plant a tree was 20 years ago. The second best time is now."',
        "- Woody Allen": '"Eighty percent of success is showing up."',
        "- Steve Jobs": '"Your time is limited, so don’t waste it living someone else’s life."',
        "- Vince Lombardi": '"Winning isn’t everything, but wanting to win is."',
        "- Stephen Covey": '"I am not a product of my circumstances. I am a product of my decisions. "',
        "- Christopher Columbus": '"You can never cross the ocean until you have the courage to lose sight of the shore."',
        "- Maya Angelou": '"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. "',
        "- Jim Rohn": '"Either you run the day, or the day runs you."',
        "- Henry Ford": '"Whether you think you can or you think you can’t, you’re right."',
        "- Frank Sinatra": '"The best revenge is massive success."',
        "- Zig Ziglar": '"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily."',
        "- Aristotle": '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing"',
        "- Jesus": '"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."',
        "- Ralph Waldo Emerson": '"The only person you are destined to become is the person you decide to be."',
        "- Henry David Thoreau": '"Go confidently in the direction of your dreams.  Live the life you have imagined."',
        "- Erma Bombeck": '"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."',
        "- Booker T. Washington": '"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."'
    };

    // grab all the keys in the dictionary (authors) and store in an array
    var authors = Object.keys(quotes);
    // grab a random key (author) and store it in author
    var author = authors[Math.floor(Math.random() * authors.length)];
    // grab the value(quote) that belongs to that key
    var quote = quotes[author]

    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;

}


document.querySelector("#blue").addEventListener("click", () => {

    document.querySelector("#real").style.background = "#06BDC1";
    document.querySelector("#real").style.border = "10px solid blue";


});
document.querySelector("#ash").addEventListener("click", () => {

    document.querySelector("#real").style.background = "grey";
    document.querySelector("#real").style.border = "10px solid black";


});
document.querySelector("#green").addEventListener("click", () => {

    document.querySelector("#real").style.background = "green";
    document.querySelector("#real").style.border = "10px solid yellow";


});
document.querySelector("#red").addEventListener("click", () => {

    document.querySelector("#real").style.background = "red";
    document.querySelector("#real").style.border = "10px solid black";


});
var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from, option_to;

// now add listener
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// taking initial value
option_from = inputType.value;
option_to = resultType.value;


function myResult() {


    // when we change the input and output type vale we need to updata the 
    // option_from and option_to

    option_from = inputType.value;
    option_to = resultType.value;


    // now compare the input and resultType value and add formula

    if (option_from === "Lb" && option_to === "Kg") {
        //this is meter to kilometer formula 
        result.value = Number(input.value) * 0.4536;


    } else if (option_from === "Lb" && option_to === "Lb") {
        //this is meter to meter formula 
        result.value = input.value
    }



    if (option_from === "Kg" && option_to === "Lb") {
        //this is kilometer to meter formula 
        result.value = Number(input.value) * 2.2046;

    } else if (option_from === "Kg" && option_to === "Kg") {
        //this is kilometer to kilometer formula 
        result.value = input.value
    }
}


function calculate() {
    var values = document.getElementById('box1').value.split(/,/g);
    var sum = values.reduce(function(a, b) { return parseInt(a) + parseInt(b); });
    document.querySelector('#max').innerHTML = values.max();
    document.querySelector('#min').innerHTML = values.min();
    document.querySelector('#sum').innerHTML = sum;
    document.querySelector('#avg').innerHTML = sum / values.length;
    document.querySelector('#reverse').innerHTML = values.reverse().join(',');
}

Array.prototype.max = function() {
    return Math.max.apply(null, this);
};

Array.prototype.min = function() {
    return Math.min.apply(null, this);
};


function clearTextArea() {
    document.textform.textarea.value = '';
}

function lowerCaseText() {

    var a = document.textform.textarea.value;
    document.textform.textarea.value = a.toUpperCase();
}

function powerLifter() {




    var a = document.textform.textarea.value;
    document.textform.textarea.value = a.split(/\r?\n/).sort().join('\n');
}

function notPowerLifter() {




    var a = document.textform.textarea.value;
    document.textform.textarea.value = a.split(/\r?\n/).sort().reverse().join('\n');
}

function goWin() {





    var a = document.textform.textarea.value;
    document.textform.textarea.value = a.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, "");
}

function liveLife() {
    let i = 1;
    var a = document.textform.textarea.value;
    document.textform.textarea.value = a.replace(/^/gm, () => `${i++}.`);
}

function nazrulBest() {




    const lines = document.textform.textarea.value.split(/\r?\n/);
    for (let i = lines.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lines[i], lines[j]] = [lines[j], lines[i]];
    }

    document.textform.textarea.value = lines.join('\n');
}