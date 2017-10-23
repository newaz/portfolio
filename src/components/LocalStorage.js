import React from 'react';
import Markdown from 'react-markdown';

import localStorage from '../../images/work/localStorage.jpg';

const storageInput1 = '## local storage and event delegation';
const storageInput2 = '### 🌮 description:';
const storageInput3 = '**local tapas** restaurant order form created with `HTMl5`, `CSS3`, `ES6`, `local storage`, and `event delegation`. This was day 15 of the wes bos\' [JavaScript30](https://javascript30.com/) series.';
const storageInput4 = '🌮 **[DOM event delegation:](http://stackoverflow.com/questions/1687296/what-is-dom-event-delegation)**';
const storageInput5 = '`DOM event delegation` is when an `EventTarget.addEventListener()` method is attached to a single common parent element rather than each child of that parent, made possible through `event bubbling` (aka `event propagation`).';
const storageInput6 = '* `Event Bubbling` provides the `foundation` for `event delegation` in `browsers`. now you can `bind` an `event handler` to a `single parent element`, and that handler will get executed whenever the event occurs `on any of its child nodes` (and any of `their children`).';
const storageInput7 = '* if `event delegation` was *not* used, instead just adding an event listener to a single (child) element, you would have to bind an event listener to each child in order for it to act the same way as its other bound siblings. with `event delegation` you don\'t need to do anything. just add the new child element (i.e., `<li>`) to the parent (i.e., `<ul>`), and you\'re done. that is what was done in this project.';
const storageInput8 = '🌮 **[benefit of event delegation:](http://stackoverflow.com/questions/1687296/what-is-dom-event-delegation)**';
const storageInput9 = '* with `event delegation` the number of `event bindings` can be drastically decreased by moving them to a common parent element, and the code that dynamically creates new elements on the fly can be detatched from the logic of `binding` their `event handlers`.';
const storageInput10 = '* another benifit of `event delegation` is that the total `memory footprint` used by event listeners decreases since the number of event bindings decreases as well. this might not matter so much with pages that are unloaded often (in other words users navigate to different pages often). but for long-lived applications the difference can be significant. sometimes when elements are `removed from the DOM` they still `claim memory` (aka `memory leak`), and often this `memory leak` is `tied` to an `event binding`. With `event delegation` you can destroy child elements without risk of forgetting to `unbind` their `event listeners` since the event listener is on the parent. these types of memory leaks can then be contained if not eliminated, which can be very hard sometimes.';
const storageInput11 = '🌮 **localStorage:**';
const storageInput12 = '* `localStorage` is the same as `sessionStorage` with the same same origin rules, but persistent. With `sessionStorage`, data stored gets cleared when the page session ends. `Local Storage` was implemented in this project.';
const storageInput13 = '* because of `event delegation`, i am able to clear the items in the local tapas (`<ul>`) list in one fell swoop with the click of a `Clear All` button, and all that is left in localStorage is `items = []`. That much does persist, BUT, when I go into the `Application` tab in the browser Console, in the sidebar to the left of the `Application` tab is a sidebar in which there is a `Clear Storage` option. When you click on it, it removes `items = []`. That is how you can remove all persisting traces from your `localStorage`.';
const storageInput14 = '[view local storage on github](https://interglobalmedia.github.io/local-storage-event-delegation/)';
const storageInput15 = '[source code](https://github.com/interglobalmedia/local-storage-event-delegation)';

export const LocalStorage = () => (
	<div className="storage-content">
		<h2>local storage</h2>
		<img src={localStorage} />

		<div className="storage-markdown">
			<Markdown source={storageInput1} />
			<div className="meta">
				<div className="post-date-meta">posted on</div>
				<div className="pub-date-meta">jan 18, 2016</div>
			</div>
			<Markdown source={storageInput2} />
			<Markdown source={storageInput3} />
			<Markdown source={storageInput4} />
			<Markdown source={storageInput5} />
			<Markdown source={storageInput6} />
			<Markdown source={storageInput7} />
			<Markdown source={storageInput8} />
			<Markdown source={storageInput9} />
			<Markdown source={storageInput10} />
			<Markdown source={storageInput11} />
			<Markdown source={storageInput12} />
			<Markdown source={storageInput13} />
			<Markdown source={storageInput14} />
			<Markdown source={storageInput15} />
		</div>
	</div>
);
