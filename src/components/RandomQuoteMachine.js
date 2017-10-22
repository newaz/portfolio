import React from 'react';
import Markdown from 'react-markdown';

import randomQuoteMachine from '../../images/work/randomQuoteMachine.jpg';

const quoteInput1 = "## random quote machine"

const quoteInput2 = "### 💬 description:"

const quoteInput3 = "💬 **i had to fulfill the below user stories:**"

const quoteInput4 = "* i can click a button to show me a new random quote."

const quoteInput5 = "* i can press a button to tweet out a quote."

const quoteInput6 = "💬 **implementing the mashapeapi:**"

const quoteInput7 = "with the **random quote machine**, i actually was able to use `ajax` along with `json`:"

const quoteInput8 = `
	function createQuote() {
	    // the following is the API call to the MashApe random quotes API server
	    const output = $.ajax({
	        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous',
	        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
	        data: {}, // Additional parameters here
	        dataType: 'json',
	        success(data) {
                theQuote = data.quote;
                theAuthor = data.author;
                document.getElementById('quote').innerHTML = theQuote;
                document.getElementById('author').innerHTML = theAuthor;
            },
            error(err) {
                // If, for some reason, the API becomes unavailable, the Quote Machine will still work, though in a limited manner.
                const quotes = {
                    1: ['If a man does his best, what else is there?', 'Gen. George S. Patton'],
                    2: ['Give me chastity and continence, but not yet.', 'Saint Augustine'],
                    3: ['You can avoid reality, but you cannot avoid the consequences of avoiding reality.', 'Ayn Rand'],
                    4: ['I have always depended on the kindness of strangers.', 'A Streetcar Named Desire']
                };
                const randomQuoteNumber = Math.ceil(Math.random() * Object.keys(quotes).length);

                $('#quote').html(quotes[randomQuoteNumber][0]);
                $('#author').html(quotes[randomQuoteNumber][1]);

            },
            beforeSend(xhr) {
                // Enter here your Mashape key
                xhr.setRequestHeader("X-Mashape-Key", "Sr4ugfUfUHmshOQ2IbeGXw8i1Gujp15JgPZjsnIcl0TaxHmdX3");
            }
            });
        }
    }`

const quoteInput9 = "💬 **i wrapped a function called** `createQuote()` **around three things:**"

const quoteInput10 = "* the `api call` to the `mashape random quotes api`:"

const quoteInput11 = `
	const output = $.ajax({
	url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous',
	type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
	data: {}, // Additional parameters here
	dataType: 'json',
	success(data) {
        theQuote = data.quote;
        theAuthor = data.author;
        document.getElementById('quote').innerHTML = theQuote;
        document.getElementById('author').innerHTML = theAuthor;
    },`

const quoteInput12 = "* `$.ajax()` performs asynchronous `HTTP` requests."

const quoteInput13 = "* `url` option parameter is the url where the data will be coming from."

const quoteInput14 = "* `type` option parameter refers to the `HTTP` method that is being used. the `GET` method requests data from the specified source."

const quoteInput15 = "* `data` parameter is optional and represents an object whose properties are [serialized](https://www.tutorialspoint.com/jquery/jquery-ajax.htm) into properly encoded parameters to be passed to the request. if specified, the request is made using the `POST` method. if omitted, the `GET` method is used, as it is here."

const quoteInput16 = "* `.serialize()`: [method](http://api.jquery.com/serialize/) creates a text string in standard URL-encoded notation. it can act on a `jquery` object that has selected individual form controls, such as `<input>`, `<textarea>`, and `<select>`:"

const quoteInput17 = `
	$( "input, textarea, select" ).serialize();
`

const quoteInput18 = "* in other words, `.serialize()` turns form values into a valid query string. **but that is not applicable here since the data properties have been omitted**."

const quoteInput19 = "* the `success(data)` option parameter (function) is run when the request succeeds. here it is comprised of the `quote.data` and the `author.data`, which are then parsed into `html` with the `.innerHTML` property."

const quoteInput20 = "* the `error(err)` option parameter (function) is called when the request fails. this consists of a quotes variable made up of key value pairs followed by declaration and initialization of the variable `randomQuoteNumber` with the assigned value of randomizing the quotes keys. then a randomized key is returned and captured in the value of the `randomQuoteNumber` variable. the `randomQuoteNumber` variable is then applied in both the `$('#quote').html(quotes[randomQuoteNumber][0])` and `$('#author').html(quotes[randomQuoteNumber][1])` methods. `[0]` represents index 0, the first string in a given array (the quote), and `[1]` refers to index 1, the second string in a given array (the author). this makes up the backup data in the body of the `error(err)` function. If not randomized, the quotes and their authors would be returned in ascending order."

const quoteInput21 = "* the third and last part of the `createQuote()` function is the `beforeSend(xhr)` function. basically, a `setRequestHeader()` method is called on the `xhr callback` used for creating the `XMLHttpRequest`  in response to an `HTTP access authentication` request. the `setRequestHeader()` method consists of two parameters:"

const quoteInput22 = "* **header:** the name of the beader whose value is to be set."

const quoteInput23 = "* **value:** the value to set as the body of the header."

const quoteInput24 = "* here the header is the `x-mashape-key`, and the value of the header is the key itself. since the `beforeSend()` callback function modifies the `jqXHR` object before it is sent, here it means that my `mashape key` has to be sent to **mashape** to let them know that it is ok to send back data to my application when it is requested. otherwise, my `AJAX` request would fail."

const quoteInput25 = "💬 **the `mashape()` function and why i chose to go the way i did:**"

const quoteInput26 = "* so what is the purpose of the `mashape()` function? Back when i first coded this project, i wanted to cut down on my global variables as much as possible and localize everything as much as possible. i was just getting into workflows, ES6, and modularization, so i thought wrapping my `createQuote()` function, `theQuote` and `theAuthor` variables, and the `jquery` within one top function, `mashape()`, was the way to go. otherwise, there would have been two global variables, and a global `jquery` object and method with a call to `createQuote()`. making the code within the `mashape()` function work is possible because of the concepts of `closure` and `scope`."

const quoteInput27 = "* instead of being in the global scope where they would be accessible to everything on the page (not everywhere as in es5, because only in the `app.js` file would they be accessible everywhere in the project if i brought them in there), the variables `theQuote` and `theAuthor` are accessible to everything below them. everything within the `jquery` and everything within the `createQuote()` function. think of it this way: everything that is within the `mashape()` function itself is `global` to everything within the `createQuote()` function. this is because of the concept of `closure`. `closure` here means that the `createQuote()` function has access to `theQuote` and `theAuthor` variables because `createQuote()` and the two variables are defined in the same function, `mashape()`. The same goes for the `jquery`. and i call `createQuote()` both within the `jquery` and at the top of the `mashape()` function, because otherwise nothing would happen when i pressed the `a.btn` to advance to the next quote, and nothing would happen at all if `createQuote()` wasn't called outside of itself and outside of the `jquery`. but since `mashape()` wraps around everything, i had to actually call it in `app.js`, where all my javascript is brought together and injected into my `index.html`. to make life simpler, i declared and initialized a new variable called `mashapeApi` in `app.js` and stored a call to `mashape()` as a value in `mashapeApi`."

const quoteInput28 = "* i also had to make sure that my named `mashape` function was imported into `app.js` from the `MashapeApi` module. i also had to make sure that i was importing `jquery` from `node_modules` into `app.js`, since i am not calling `jquery` within a script tag in my `index.html`. `app.js` looks like this:"

const quoteInput29 = `
	import $ from \`jquery\`;
	import {mashape} from './modules/MashapeApi';
	const mashapeApi = mashape();`

const quoteInput30 = "lastly, i forgot to mention that i had to import `jquery` into the `MashapeApi` module. i had to place it at the top of the file, just as i did in `app.js`. otherwise, the javascript would not work!"

const quoteInput31 = "[view random quote machine on github](http://interglobalmedia.github.io/random-quote-machine/)"

const quoteInput32 = "[source code](https://github.com/interglobalmedia/random-quote-machine)"

export const RandomQuoteMachine = () => (
	<div className="quote-content">
		<h2>random quote machine</h2>
		<img src={randomQuoteMachine} />
		<div className="quote-markdown">
			<Markdown source={quoteInput1} />
			<div className="meta">
				<div className="post-date-meta">posted on</div>
				<div className="pub-date-meta">october 10, 2016</div>
			</div>
			<Markdown source={quoteInput2} />
			<Markdown source={quoteInput3} />
			<Markdown source={quoteInput4} />
			<Markdown source={quoteInput5} />
			<Markdown source={quoteInput6} />
			<Markdown source={quoteInput7} />
			<br />
			<code>
				<Markdown source={quoteInput8} />
			</code>
			<br />
			<Markdown source={quoteInput9} />
			<Markdown source={quoteInput10} />
			<br />
			<code>
				<Markdown source={quoteInput11} />
			</code>
			<br />
			<Markdown source={quoteInput12} />
			<Markdown source={quoteInput13} />
			<Markdown source={quoteInput14} />
			<Markdown source={quoteInput15} />
			<Markdown source={quoteInput16} />
			<br />
			<code>
				<Markdown source={quoteInput17} />
			</code>
			<br />
			<Markdown source={quoteInput18} />
			<Markdown source={quoteInput19} />
			<Markdown source={quoteInput20} />
			<Markdown source={quoteInput21} />
			<Markdown source={quoteInput22} />
			<Markdown source={quoteInput23} />
			<Markdown source={quoteInput24} />
			<Markdown source={quoteInput25} />
			<Markdown source={quoteInput26} />
			<Markdown source={quoteInput27} />
			<Markdown source={quoteInput28} />
			<br />
			<code>
				<Markdown source={quoteInput29} />
			</code>
			<br />
			<Markdown source={quoteInput30} />
			<Markdown source={quoteInput31} />
			<Markdown source={quoteInput32} />
		</div>
	</div>
);
