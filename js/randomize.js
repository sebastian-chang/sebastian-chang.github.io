const backgrounds = [
    'img/backgrounds/DSC_0012.jpg',
    'img/backgrounds/DSC_0188.jpg',
    'img/backgrounds/DSC_0291.jpg',
    'img/backgrounds/DSC_0295.jpg',
    'img/backgrounds/DSC_0992.jpg',
    'img/backgrounds/IMG_8210.jpg',
]

const quotes = [
    {
        quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.',
        author: 'Albert Einstein'
    },
    {
        quote: "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
        author: 'Ella Fitzgerald'
    },
    {
        quote: 'You are never too old to set another goal or to dream a new dream.',
        author: 'C.S. Lewis'
    },
    {
        quote: 'Be the change that you wish to see in the world.',
        author: 'Mahatma Gandhi'
    },
    {
        quote: 'Life’s battles don’t always go to the stronger or faster man. But sooner or later the man who wins, is the man who thinks he can.',
        author: 'Bruce Lee'
    },
]

const backNum = Math.floor(Math.random() * Math.floor(backgrounds.length))
$('#intro').css({'background-image': `url(${backgrounds[backNum]}`})

const quoteNum = Math.floor(Math.random() * Math.floor(quotes.length))
$('#inspire-quote').append(`${quotes[quoteNum].quote}`)
$('#inspire-author').append(`${quotes[quoteNum].author}`)
