import React from 'react';
import Markdown from 'react-markdown';

import classiscare from '../../images/work/classiscare.jpg';

const classiscareInput1 = "## classiscare"

const classiscareInput2 = "### 📽 description:"

const classiscareInput3 = "* this project was a collaboration between jason maran and myself for our web development 100 class at [nycda](https://nycda.com/). we come up with the idea right after halloween. i was thinking a netflix type of business, and he suggested some kind of thematic idea, and we ended up with **'classiscare, the netflix of classic scary movies'**."

const classiscareInput4 = "📽 **yayout:**"

const classiscareInput5 = "we wanted to make sure that there was a consistent look throughout the site, so i came up with the framework and look as a guideline, and then jason took it from there with his pages. he did the `universal.html` page, the `hammer.html` page, and and the `silent.html` page. The framework consists of the concept of the header, gradients in header and body, navigation, and general layout of the page. he took that as a guideline and then did his own thing. he also wrote his own original copy on his pages. i used **TCM Classic Movies** as my `lorem ipsum` for the `val lewton` page, but wrote my own copy for the home page."

const classiscareInput6 = "📽 **use of js libraries:**"

const classiscareInput7 = "i used the drawer plugin to create the `drawer` for the navigation in responsive widths (up to `max 767px`). tt was quite a challenge to work with and i had to make a number of adaptions to the plugin to make it work. i had to get to know what markup was what for the index pages, because one set would result in one thing, and another would result in another. there also were glitches in the code, so i had to get to know `drawer.min.css` and `drawer.min.js` intimately in order make the plugin work. for instance, initially, the only time that the drawer would show up was in `767px`, so i had to figure out what was causing that and change it. i finally found the culprit in the css. instead of a `max-767px` for the responsive, there was a `min-767px`. and it remained that way until i figured out how to enable the drawer. there were several factors involved. it actually ended up that i had to use a different set of markup than I was in the html pages, so since i had chosen to use the fixed navbar on the site, i had to remove the `drawer-responsive` navbar. i also narrowed the width of the drawer because it made more sense in smaller screens and because it was aesthetically better to look at. to me at least, the instructions and implementation of this drawer were not very intuitive or clear. but that could also be because i am learning."

const classiscareInput8 = "📽 **jQuery and iScroll:**"

const classiscareInput9 = "* to find the right links (located at the bottom of the page) that were necessary for the jquery and iscroll (necessary for the navbar among other things that we don't have implemented here), because some of the links they had in their instructions were too old. i found that out when i would go into the developer console to check my code. finally, horatio showed me that the only way that any of the links were going to work (except for the that i pulled off of `jquery.com` because the one they provided was too old and didn't work), was by adding `http://` instead of `https`. so after some more finagling, it ended up that i had to use `http://`."

const classiscareInput10 = "📽  **customization of the drawer:**"

const classiscareInput11 = "obviously, it didn't work out of the box. it had to be set up. that was something for me to figure out. i had to decipher the code in the dist/jquery.drawer.min.js and dist/jquery.drawer.js (it was just the easier version of the drawer js file to read, but not necessary to include to function). the result was what i created in my own `drawer.js` file. i could have added more features to the site, but i thougbt that this was enough. there was already a lot going on between the layout, the gifs, and the fixed navigation and drawer. if you would like us to add more features just for the heck of it, just let us know."

const classiscareInput12 = "📽 **challenges:**"

const classiscareInput13 = "it was also quite a challenge to modify the width of the pages for `@media queries` because of the layout. but it was a lot of fun, and i learned a lot. horatio was very helpful when i went in for office hours. he made me think of different ways to approach my challenges."

const classiscareInput14 = "[view classiscare on github](http://interglobalmedia.github.io/classiscare/)"

const classiscareInput15 = "[source code](https://github.com/interglobalmedia/classiscare)"

export const Classiscare = () => (
	<div className="classiscare-content">
		<h2>classiscare</h2>
		<img src={classiscare} />
		<div className="classiscare-markdown">
			<Markdown source={classiscareInput1} />
			<Markdown source={classiscareInput2} />
			<Markdown source={classiscareInput3} />
			<Markdown source={classiscareInput4} />
			<Markdown source={classiscareInput5} />
			<Markdown source={classiscareInput6} />
			<Markdown source={classiscareInput7} />
			<Markdown source={classiscareInput8} />
			<Markdown source={classiscareInput9} />
			<Markdown source={classiscareInput10} />
			<Markdown source={classiscareInput11} />
			<Markdown source={classiscareInput12} />
			<Markdown source={classiscareInput13} />
			<Markdown source={classiscareInput14} />
			<Markdown source={classiscareInput15} />
		</div>
	</div>
);
