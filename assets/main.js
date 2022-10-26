//variables
 
let btn = document.querySelector('#new-quote');
let quote =document.querySelector('.quote');
let person =document.querySelector('.person');


const quotes = [
    {
    quote:'"The Real Self is dangerous: dangerous to the established church, dangerous to the state, dangerous to the crowd, dangerous to tradition, because once a man knows his real self, he becomes an individual."',
    person:'Osho'
    },
   {
    quote:'“A successful website does three things: It attracts the right kinds of visitors. Guides them to the main services or product you offer. Collect Contact details for future ongoing relation.”',
    person:'Mohamed Saad'
    },
   
 {
    quote:'“No one comes to your website to be entertained. They have questions they think you can answer. Content answers questions.”',
    person:'Jay Baer'
    },
    
 {  
    quote:'“Digital design is like painting, except the paint never dries.”',
    person:'Neville Brody'
 },
    
{   quote: '“A website without SEO is like a car with no gas.”',
    person:'Paul Cookson'
},
{   quote:'“Commit to a niche. Try to stop being everything to everyone.”',
    person:'Andrew Davis'
},
{   quote:'“Measuring programming progress by lines of code is like measuring aircraft building progress by weight.”',
    person:'Bill Gates'
},
{
    quote:'"Impossible only means that you haven’t found the solution yet."',
    person:'Unknown'
},
{
    quote:'"Every brilliant experiment, like every great work of art, starts with an act of imagination.”',
    person:'Jonah Lehrer'
},
{
    quote:'"The object of art is to give life a Shape."',
    person:'Shakespeare'
},
];
 console.log(quotes);

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})