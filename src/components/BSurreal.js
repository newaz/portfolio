import React from 'react';
import Markdown from 'react-markdown';

import bsurreal from '../../images/work/bsurreal.jpg';

const surrealInput1 = "## bsurreal"

const surrealInput2 = "### 🎥 description:"

const surrealInput3 = "an interactive movie trivia game created with html5, css3, javascript, jquery, and (javaScript/jquery) cookies."

const surrealInput4 = "🎥 **dynamic and interactive:**"

const surrealInput5 = "various dynamic and interactive effects throughout the site are meant to encourage the user to interact with the web page while answering questions to a quiz."

const surrealInput6 = "🎥 **user engagement:**"

const surrealInput7 = "the user should engage in the use of `cookies` to personalize the user experience during the game and/or while visiting the site.  all it takes is to input a first and last name, first name only, or anonymous username the user will easily remember upon the next visit to the site."

const surrealInput8 = "🎥 **how cookies work:**"

const surrealInput9 = "the user just has to fill out his/her name in the form provided and hit the submit button. a cookie is set in memory upon submit."

const surrealInput10 = "🎥 **ui/ux:**"

const surrealInput11 = "* don't want to be staring at the time-based greeting at the top of the page? Just click on the pink band with the words `click me` and it will immediately disappear!"

const surrealInput12 = "* don't want to be staring at the greeting that appears above the movie category? click on the movie image once, and it will disappear. click on it a second time, and it will reappear!"

const surrealInput13 = "* depending on the number of visits, the user will be greeted with a different friendly and personalized greeting."

const surrealInput14 = "🎥 **date and time:**"

const surrealInput15 = "the site keeps track of the `current date` and `time`. the time is kept by a `dynamic clock` which displays the local time and updates every second."

const surrealInput16 = "[ciew bsurreal on github](http://interglobalmedia.github.io/bsurreal/)"

const surrealInput17 = "[source code](https://github.com/interglobalmedia/bsurreal)"

export const BSurreal = () => (
	<div className="surreal-content">
		<h2>bsurreal</h2>
		<img src={bsurreal} />
		<div className="surreal-markdown">
			<Markdown source={surrealInput1} />
			<div className="meta">
				<div className="post-date-meta">posted on</div>
				<div className="pub-date-meta">mar 4, 2016</div>
			</div>
			<Markdown source={surrealInput2} />
			<Markdown source={surrealInput3} />
			<Markdown source={surrealInput4} />
			<Markdown source={surrealInput5} />
			<Markdown source={surrealInput6} />
			<Markdown source={surrealInput7} />
			<Markdown source={surrealInput8} />
			<Markdown source={surrealInput9} />
			<Markdown source={surrealInput10} />
			<Markdown source={surrealInput11} />
			<Markdown source={surrealInput12} />
			<Markdown source={surrealInput13} />
			<Markdown source={surrealInput14} />
			<Markdown source={surrealInput15} />
			<Markdown source={surrealInput16} />
			<Markdown source={surrealInput17} />
		</div>
	</div>
);
