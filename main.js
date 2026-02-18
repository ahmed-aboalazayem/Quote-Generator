// Quotes array
const quotes = [
    {
        id: 1,
        quote: "<span style='color: #3498db;'>Life</span> isn’t about getting and having, it’s about <span style='color: #e67e22;'>giving and being</span>.",
        author: "Kevin Kruse",
    },
    {
        id: 2,
        quote: "Whatever the <span style='color: #9b59b6;'>mind</span> of man can <span style='color: #3498db;'>conceive and believe</span>, it can <span style='color: #f1c40f;'>achieve</span>.",
        author: "Napoleon Hill",
    },
    {
        id: 3,
        quote: "Strive not to be a <span style='color: #e67e22;'>success</span>, but rather to be of <span style='color: #f1c40f;'>value</span>.",
        author: "Albert Einstein",
    },
    {
        id: 4,
        quote: "Two roads <span style='color: #3498db;'>diverged</span> in a wood, and I—I took the one <span style='color: #f1c40f;'>less traveled</span> by, And that has made all the <span style='color: #e67e22;'>difference</span>.",
        author: "Robert Frost",
    },
    {
        id: 5,
        quote: "I attribute my <span style='color: #f1c40f;'>success</span> to this: I never gave or took any <span style='color: #9b59b6;'>excuse</span>.",
        author: "Florence Nightingale",
    },
    {
        id: 6,
        quote: "You miss <span style='color: #e67e22;'>100%</span> of the <span style='color: #3498db;'>shots</span> you don’t take.",
        author: "Wayne Gretzky",
    },
    {
        id: 7,
        quote: "I’ve <span style='color: #9b59b6;'>failed</span> over and over and over again in my life. And that is why I <span style='color: #f1c40f;'>succeed</span>.",
        author: "Michael Jordan",
    },
    {
        id: 8,
        quote: "The most difficult thing is the <span style='color: #e67e22;'>decision to act</span>, the rest is merely <span style='color: #f1c40f;'>tenacity</span>.",
        author: "Amelia Earhart",
    },
    {
        id: 9,
        quote: "Every <span style='color: #9b59b6;'>strike</span> brings me closer to the next <span style='color: #f1c40f;'>home run</span>.",
        author: "Babe Ruth",
    },
    {
        id: 10,
        quote: "<span style='color: #3498db;'>Definiteness of purpose</span> is the starting point of all <span style='color: #f1c40f;'>achievement</span>.",
        author: "W. Clement Stone",
    },
    {
        id: 11,
        quote: "We must <span style='color: #e67e22;'>balance</span> conspicuous consumption with <span style='color: #3498db;'>conscious capitalism</span>.",
        author: "Kevin Kruse",
    },
    {
        id: 12,
        quote: "<span style='color: #3498db;'>Life</span> is what happens to you while you’re busy making <span style='color: #9b59b6;'>other plans</span>.",
        author: "John Lennon",
    },
    {
        id: 13,
        quote: "We <span style='color: #f1c40f;'>become</span> what we <span style='color: #3498db;'>think</span> about.",
        author: "Earl Nightingale",
    },
    {
        id: 14,
        quote: "<span style='color: #e67e22;'>Explore, Dream, Discover</span>.",
        author: "Mark Twain",
    },
    {
        id: 15,
        quote: "Life is 10% what happens to me and <span style='color: #f1c40f;'>90% of how I react</span> to it.",
        author: "Charles Swindoll",
    },
    {
        id: 16,
        quote: "The most common way people give up their <span style='color: #f1c40f;'>power</span> is by thinking they <span style='color: #9b59b6;'>don’t have any</span>.",
        author: "Alice Walker",
    },
    {
        id: 17,
        quote: "The <span style='color: #3498db;'>mind</span> is everything. What you <span style='color: #f1c40f;'>think</span> you become.",
        author: "Buddha",
    },
    {
        id: 18,
        quote: "The best time to <span style='color: #e67e22;'>plant a tree</span> was 20 years ago. The second best time is <span style='color: #f1c40f;'>now</span>.",
        author: "Chinese Proverb",
    },
    {
        id: 19,
        quote: "An <span style='color: #9b59b6;'>unexamined life</span> is not worth living.",
        author: "Socrates",
    },
    {
        id: 20,
        quote: "Eighty percent of <span style='color: #f1c40f;'>success</span> is <span style='color: #e67e22;'>showing up</span>.",
        author: "Woody Allen",
    },
    {
        id: 21,
        quote: "Your <span style='color: #3498db;'>time</span> is limited, so don’t <span style='color: #9b59b6;'>waste it</span> living someone else’s life.",
        author: "Steve Jobs",
    },
    {
        id: 22,
        quote: "<span style='color: #f1c40f;'>Winning</span> isn’t everything, but <span style='color: #e67e22;'>wanting to win</span> is.",
        author: "Vince Lombardi",
    },
    {
        id: 23,
        quote: "I am not a product of my <span style='color: #9b59b6;'>circumstances</span>. I am a product of my <span style='color: #f1c40f;'>decisions</span>.",
        author: "Stephen Covey",
    },
    {
        id: 24,
        quote: "Every child is an <span style='color: #3498db;'>artist</span>. The problem is how to <span style='color: #e67e22;'>remain</span> an artist.",
        author: "Pablo Picasso",
    },
    {
        id: 25,
        quote: "You can never <span style='color: #f1c40f;'>cross the ocean</span> until you have the <span style='color: #e67e22;'>courage</span> to lose sight of the shore.",
        author: "Christopher Columbus",
    },
    {
        id: 26,
        quote: "People will never forget <span style='color: #f1c40f;'>how you made them feel</span>.",
        author: "Maya Angelou",
    },
    {
        id: 27,
        quote: "Either you <span style='color: #e67e22;'>run the day</span>, or the day <span style='color: #9b59b6;'>runs you</span>.",
        author: "Jim Rohn",
    },
    {
        id: 28,
        quote: "Whether you <span style='color: #3498db;'>think you can</span> or you think you can’t, <span style='color: #f1c40f;'>you’re right</span>.",
        author: "Henry Ford",
    },
    {
        id: 29,
        quote: "The two most <span style='color: #f1c40f;'>important days</span>... the day you are born and the day you <span style='color: #3498db;'>find out why</span>.",
        author: "Mark Twain",
    },
    {
        id: 30,
        quote: "<span style='color: #e67e22;'>Boldness</span> has <span style='color: #f1c40f;'>genius, power and magic</span> in it.",
        author: "Johann Wolfgang von Goethe",
    },
    {
        id: 31,
        quote: "The best revenge is <span style='color: #f1c40f;'>massive success</span>.",
        author: "Frank Sinatra",
    },
    {
        id: 32,
        quote: "Motivation doesn’t last... That’s why we recommend it <span style='color: #e67e22;'>daily</span>.",
        author: "Zig Ziglar",
    },
    {
        id: 33,
        quote: "Life shrinks or expands in proportion to one’s <span style='color: #e67e22;'>courage</span>.",
        author: "Anais Nin",
    },
    {
        id: 34,
        quote: "If you hear a voice say “you cannot paint,” then by all means <span style='color: #e67e22;'>paint</span>.",
        author: "Vincent Van Gogh",
    },
    {
        id: 35,
        quote: "There is only one way to avoid <span style='color: #9b59b6;'>criticism</span>: <span style='color: #3498db;'>do nothing, say nothing, and be nothing</span>.",
        author: "Aristotle",
    },
    {
        id: 36,
        quote: "<span style='color: #e67e22;'>Ask</span> and it will be given; <span style='color: #e67e22;'>search</span>, and you will find; <span style='color: #e67e22;'>knock</span> and the door will be opened.",
        author: "Jesus",
    },
    {
        id: 37,
        quote: "The only person you are destined to become is the person you <span style='color: #f1c40f;'>decide to be</span>.",
        author: "Ralph Waldo Emerson",
    },
    {
        id: 38,
        quote: "Go confidently in the direction of your <span style='color: #f1c40f;'>dreams</span>.",
        author: "Henry David Thoreau",
    },
    {
        id: 39,
        quote: "I would hope... I could say, I <span style='color: #e67e22;'>used everything</span> you gave me.",
        author: "Erma Bombeck",
    },
    {
        id: 40,
        quote: "Place <span style='color: #3498db;'>responsibility</span> on him... and let him know that you <span style='color: #f1c40f;'>trust him</span>.",
        author: "Booker T. Washington",
    },
    {
        id: 41,
        quote: "Pursue only those that <span style='color: #e67e22;'>capture the heart</span>.",
        author: "Ancient Indian Proverb",
    },
    {
        id: 42,
        quote: "<span style='color: #3498db;'>Believe you can</span> and you’re halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        id: 43,
        quote: "Everything you’ve ever wanted is on the other side of <span style='color: #9b59b6;'>fear</span>.",
        author: "George Addair",
    },
    {
        id: 44,
        quote: "The real tragedy of life is when men are <span style='color: #9b59b6;'>afraid of the light</span>.",
        author: "Plato",
    },
    {
        id: 45,
        quote: "Teach thy tongue to say, <span style='color: #3498db;'>“I do not know,”</span> and thou shalt progress.",
        author: "Maimonides",
    },
    {
        id: 46,
        quote: "<span style='color: #e67e22;'>Start where you are.</span> Use what you have. Do what you can.",
        author: "Arthur Ashe",
    },
    {
        id: 47,
        quote: "<span style='color: #f1c40f;'>Happiness</span> was the key to life.",
        author: "John Lennon",
    },
    {
        id: 48,
        quote: "<span style='color: #9b59b6;'>Fall seven times</span> and <span style='color: #f1c40f;'>stand up eight</span>.",
        author: "Japanese Proverb",
    },
    {
        id: 49,
        quote: "Often we look so long at the <span style='color: #9b59b6;'>closed door</span> that we do not see the one that has been <span style='color: #f1c40f;'>opened</span>.",
        author: "Helen Keller",
    },
    {
        id: 50,
        quote: "Everything has <span style='color: #f1c40f;'>beauty</span>, but not everyone can see.",
        author: "Confucius",
    },
    {
        id: 51,
        quote: "Nobody need wait a single moment before starting to <span style='color: #e67e22;'>improve the world</span>.",
        author: "Anne Frank",
    },
    {
        id: 52,
        quote: "When I <span style='color: #3498db;'>let go</span> of what I am, I <span style='color: #f1c40f;'>become</span> what I might be.",
        author: "Lao Tzu",
    },
    {
        id: 53,
        quote: "Life is measured by the <span style='color: #f1c40f;'>moments that take our breath away</span>.",
        author: "Maya Angelou",
    },
    {
        id: 54,
        quote: "<span style='color: #f1c40f;'>Happiness</span>... comes from your <span style='color: #e67e22;'>own actions</span>.",
        author: "Dalai Lama",
    },
    {
        id: 55,
        quote: "If you’re offered a seat on a <span style='color: #f1c40f;'>rocket ship</span>, don’t ask what seat! <span style='color: #e67e22;'>Just get on</span>.",
        author: "Sheryl Sandberg",
    },
    {
        id: 56,
        quote: "First, have a <span style='color: #3498db;'>definite, clear practical ideal</span>; a goal, an objective.",
        author: "Aristotle",
    },
    {
        id: 57,
        quote: "If the wind will not serve, <span style='color: #e67e22;'>take to the oars</span>.",
        author: "Latin Proverb",
    },
    {
        id: 58,
        quote: "We must believe that we are <span style='color: #f1c40f;'>gifted</span> for something.",
        author: "Marie Curie",
    },
    {
        id: 59,
        quote: "Too many of us are not living our <span style='color: #f1c40f;'>dreams</span> because we are living our <span style='color: #9b59b6;'>fears</span>.",
        author: "Les Brown",
    },
    {
        id: 60,
        quote: "<span style='color: #9b59b6;'>Challenges</span> make life interesting and <span style='color: #f1c40f;'>overcoming them</span> makes life meaningful.",
        author: "Joshua J. Marine",
    },
    {
        id: 61,
        quote: "If you want to lift yourself up, <span style='color: #e67e22;'>lift up someone else</span>.",
        author: "Booker T. Washington",
    },
    {
        id: 62,
        quote: "Knowing is not enough; we must <span style='color: #e67e22;'>apply</span>. Willing is not enough; we must <span style='color: #e67e22;'>do</span>.",
        author: "Leonardo da Vinci",
    },
    {
        id: 63,
        quote: "If we use our <span style='color: #3498db;'>imaginations</span>, our possibilities become <span style='color: #f1c40f;'>limitless</span>.",
        author: "Jamie Paolinetti",
    },
    {
        id: 64,
        quote: "You take your life in your <span style='color: #e67e22;'>own hands</span>.",
        author: "Erica Jong",
    },
    {
        id: 65,
        quote: "A man is a <span style='color: #f1c40f;'>success</span> if he... does <span style='color: #e67e22;'>what he wants to do</span>.",
        author: "Bob Dylan",
    },
    {
        id: 66,
        quote: "I just found <span style='color: #3498db;'>100 ways</span> to do it <span style='color: #9b59b6;'>wrong</span>.",
        author: "Benjamin Franklin",
    },
    {
        id: 67,
        quote: "Your desire for <span style='color: #f1c40f;'>success</span> should be greater than your <span style='color: #9b59b6;'>fear of failure</span>.",
        author: "Bill Cosby",
    },
    {
        id: 68,
        quote: "A person who never made a <span style='color: #9b59b6;'>mistake</span> never tried <span style='color: #e67e22;'>anything new</span>.",
        author: "Albert Einstein",
    },
    {
        id: 69,
        quote: "The person who says it <span style='color: #9b59b6;'>cannot be done</span> should not interrupt the person who is <span style='color: #e67e22;'>doing it</span>.",
        author: "Chinese Proverb",
    },
    {
        id: 70,
        quote: "There are no traffic jams along the <span style='color: #f1c40f;'>extra mile</span>.",
        author: "Roger Staubach",
    },
    {
        id: 71,
        quote: "It is never <span style='color: #e67e22;'>too late</span> to be what you might have been.",
        author: "George Eliot",
    },
    {
        id: 72,
        quote: "You <span style='color: #f1c40f;'>become</span> what you <span style='color: #3498db;'>believe</span>.",
        author: "Oprah Winfrey",
    },
    {
        id: 73,
        quote: "I would rather die of <span style='color: #e67e22;'>passion</span> than of boredom.",
        author: "Vincent van Gogh",
    },
    {
        id: 74,
        quote: "What you have <span style='color: #e67e22;'>taught them to do</span> for themselves... will make them <span style='color: #f1c40f;'>successful</span>.",
        author: "Ann Landers",
    },
    {
        id: 75,
        quote: "Spend <span style='color: #f1c40f;'>twice as much time</span> with them, and half as much money.",
        author: "Abigail Van Buren",
    },
    {
        id: 76,
        quote: "<span style='color: #e67e22;'>Build your own dreams</span>, or someone else will hire you to build theirs.",
        author: "Farrah Gray",
    },
    {
        id: 77,
        quote: "The <span style='color: #9b59b6;'>struggles within yourself</span>—that’s where it’s at.",
        author: "Jesse Owens",
    },
    {
        id: 78,
        quote: "When one’s <span style='color: #3498db;'>mind is made up</span>, this diminishes <span style='color: #9b59b6;'>fear</span>.",
        author: "Rosa Parks",
    },
    {
        id: 79,
        quote: "It does not matter <span style='color: #9b59b6;'>how slowly</span> you go as long as you <span style='color: #e67e22;'>do not stop</span>.",
        author: "Confucius",
    },
    {
        id: 80,
        quote: "If you look at what you <span style='color: #f1c40f;'>have</span> in life, you’ll always have <span style='color: #f1c40f;'>more</span>.",
        author: "Oprah Winfrey",
    },
    {
        id: 81,
        quote: "Not getting what you want is sometimes a <span style='color: #f1c40f;'>wonderful stroke of luck</span>.",
        author: "Dalai Lama",
    },
    {
        id: 82,
        quote: "You can’t use up <span style='color: #e67e22;'>creativity</span>. The more you use, the <span style='color: #f1c40f;'>more you have</span>.",
        author: "Maya Angelou",
    },
    {
        id: 83,
        quote: "<span style='color: #f1c40f;'>Dream big</span> and <span style='color: #9b59b6;'>dare to fail</span>.",
        author: "Norman Vaughan",
    },
    {
        id: 84,
        quote: "Our lives begin to end the day we become <span style='color: #9b59b6;'>silent</span> about things that <span style='color: #e67e22;'>matter</span>.",
        author: "Martin Luther King Jr.",
    },
    {
        id: 85,
        quote: "<span style='color: #e67e22;'>Do what you can</span>, where you are, with what you have.",
        author: "Teddy Roosevelt",
    },
    {
        id: 86,
        quote: "If you do what you’ve always done, you’ll get what you’ve <span style='color: #9b59b6;'>always gotten</span>.",
        author: "Tony Robbins",
    },
    {
        id: 87,
        quote: "<span style='color: #3498db;'>Dreaming</span>, after all, is a form of <span style='color: #f1c40f;'>planning</span>.",
        author: "Gloria Steinem",
    },
    {
        id: 88,
        quote: "Make it the <span style='color: #f1c40f;'>life you want to live</span>.",
        author: "Mae Jemison",
    },
    {
        id: 89,
        quote: "You may be disappointed if you fail, but you are <span style='color: #9b59b6;'>doomed</span> if you <span style='color: #e67e22;'>don’t try</span>.",
        author: "Beverly Sills",
    },
    {
        id: 90,
        quote: "No one can make you feel <span style='color: #9b59b6;'>inferior</span> without your <span style='color: #e67e22;'>consent</span>.",
        author: "Eleanor Roosevelt",
    },
    {
        id: 91,
        quote: "Life is <span style='color: #f1c40f;'>what we make it</span>.",
        author: "Grandma Moses",
    },
    {
        id: 92,
        quote: "The question isn’t who is going to let me; it’s <span style='color: #e67e22;'>who is going to stop me</span>.",
        author: "Ayn Rand",
    },
    {
        id: 93,
        quote: "The airplane takes off <span style='color: #9b59b6;'>against the wind</span>, not with it.",
        author: "Henry Ford",
    },
    {
        id: 94,
        quote: "It’s not the years in your life that count. It’s the <span style='color: #f1c40f;'>life in your years</span>.",
        author: "Abraham Lincoln",
    },
    {
        id: 95,
        quote: "<span style='color: #e67e22;'>Change your thoughts</span> and you <span style='color: #f1c40f;'>change your world</span>.",
        author: "Norman Vincent Peale",
    },
    {
        id: 96,
        quote: "Either write something <span style='color: #f1c40f;'>worth reading</span> or do something <span style='color: #f1c40f;'>worth writing</span>.",
        author: "Benjamin Franklin",
    },
    {
        id: 97,
        quote: "Nothing is <span style='color: #9b59b6;'>impossible</span>, the word itself says, <span style='color: #f1c40f;'>“I’m possible!”</span>",
        author: "Audrey Hepburn",
    },
    {
        id: 98,
        quote: "The only way to do <span style='color: #f1c40f;'>great work</span> is to <span style='color: #e67e22;'>love what you do</span>.",
        author: "Steve Jobs",
    },
    {
        id: 99,
        quote: "If you can <span style='color: #3498db;'>dream it</span>, you can <span style='color: #f1c40f;'>achieve it</span>.",
        author: "Zig Ziglar",
    },
    {
        id: 100,
        quote: "The best preparation for tomorrow is <span style='color: #e67e22;'>doing your best today</span>.",
        author: "H. Jackson Brown, Jr.",
    },
];

const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".author");
const newQuoteBtn = document.querySelector(".btn-new");

let lastQuote = -1;

newQuoteBtn.addEventListener("click", function () {
    let randomQuote;

    do {
        randomQuote = Math.trunc(Math.random() * 100 + 1);
    } while (randomQuote === lastQuote);

    lastQuote = randomQuote;

    quoteText.classList.remove("fade-in-down", "show");
    quoteAuthor.classList.remove("fade-in-down", "show");

    quoteText.classList.add("fade-out-up");
    quoteAuthor.classList.add("fade-out-up");

    setTimeout(() => {
        quoteText.innerHTML = `
        <i class="fa-solid fa-quote-left quote-icon"></i> 
        ${quotes[randomQuote].quote} <span class="bor"></span>
        <i class="fa-solid fa-quote-right quote-icon"></i>
    `;
        quoteAuthor.textContent = `— ${quotes[randomQuote].author}`;

        quoteText.classList.remove("fade-out-up");
        quoteAuthor.classList.remove("fade-out-up");

        quoteText.classList.remove("fade-in-down", "show");
        quoteAuthor.classList.remove("fade-in-down", "show");

        void quoteText.offsetWidth;

        quoteText.classList.add("fade-in-down");
        quoteAuthor.classList.add("fade-in-down");

        requestAnimationFrame(() => {
            quoteText.classList.add("show");
            quoteAuthor.classList.add("show");
        });
    }, 500);
});
