import React from 'react';
import Markdown from 'react-markdown';

import rockinSynth from '../../images/work/rockinSynth.jpg';

const rockinInput1 = '## rockin\' synth';
const rockinInput2 = "### 🎶  description:"
const rockinInput3 = '🎶 this project was inspired by the **JavaScript30** project called **JavaScript Drumkit**. my goal was to achieve two things:';
const rockinInput4 = '* when i pressed a key, it would create a sound. specifically a musical note corresponding to that of a real piano.';
const rockinInput5 = '* when i pressed a key, a transition would be triggered. when i pressed down on the key, it would become a bit bigger and turn yellow. when i lifted my finger from the key, the key would scale down to its regular size and the yellow background would disappear.';
const rockinInput6 = '🎶 **the** `playSound()` **function:**';
const rockinInput7 = '* the `playSound()` function creates the sound for the piano key. tt also adds a class called `.playing` which increases the size of the key, adds a yellow background and box-shadow.';
const rockinInput8 = '* first I had to check whether there is an audio element on the page that has an audio `data-key` attribute:';
const rockinInput9 = 'const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);'

const rockinInput10 = '* using an `audio[data-key]` makes the selection more specific instead of simply using a class, for example. storing the `e.keyCode` (event keycode) as an attribute value of the `data-key` attribute makes it possible to be even more specific without having to call the `.querySelector()` method on each unique and individual key.';
const rockinInput11 = '* next i had to select a corresponding `kbd[data-key="${e.keyCode}"]` so i could add the animation to it. so the audio tag is for the sound, and the corresponding `<kbd>` (keyboard) tag is for the animation.';
const rockinInput12 = '🎶 **the** `removeTransition()` **function:**';
const rockinInput13 = '* first i had to create a condition to determine whether the `transform` property is present on a key or not:';
const rockinInput14 = '```if(e.propertyName !== "transform") return;```';
const rockinInput15 = 'in other words, if there is no `.playing` class and therefore no `transform` property attached to a key, return (skip the key).';
const rockinInput16 = '* otherwise, remove the `.playing` class from the key:';
const rockinInput17 = '```this.classList.remove("playing");```';
const rockinInput18 = '* `this` refers to the `key`. that\'s because `this` is always equal to whatever the event listener gets called against, and that\'s the key (as indicated further down the code).';
const rockinInput19 = '🎶 **adding event listeners:**';
const rockinInput20 = '* last of all, i had to add event listeners to listen for the `playSound` event and the `removeTransition` event.';
const rockinInput21 = '* first i set up the `.addEventListener()` method that would be on the lookout for the `transitionend` event type. the `removeTransition` reference is triggered when the `transitionend` event occurs, and the `.playing` class is removed from the piano key.';
const rockinInput22 = 'this time i didn\'t need to be specific about which particular `key` with a particular `keyCode` i had to target, so i did the following with the `.querySelectorAll()` method:';
const rockinInput23 = '```const keys = document.querySelectorAll("kbd");```';
const rockinInput24 = '* then i had to add the event listener to each key:';
const rockinInput25 = '```keys.forEach(key => key.addEventListener("transitionend", removeTransition));```';
const rockinInput26 = '* by choosing to use different selectors for the `key` variable in the `playSound()` function and the global `keys` variable, the `event listener` is nice and separate from the `querySelectors` in the body of the `playSound()` function. this way, if i wanted to play sound based off of another element, i could.';
const rockinInput27 = '* finally, i called an `.addEventListener()` method on the window to listen for a `keydown` event that would trigger the reference to the `playSound` function. this means that when someone keys down, play a sound.';
const rockinInput28 = '```window.addEventListener("keydown", playSound);```';
const rockinInput29 = '[view rockin synth on github](https://interglobalmedia.github.io/rockin-synth/)';
const rockinInput30 = '[source code](https://github.com/interglobalmedia/rockin-synth)';

export const RockinSynth = () => (
	<div className="rockin-content">
		<h2>rockin synth</h2>
		<img src={rockinSynth} />
		<div className="synth-markdown">
			<Markdown source={rockinInput1} />
			<Markdown source={rockinInput2} />
			<Markdown source={rockinInput3} />
			<Markdown source={rockinInput4} />
			<Markdown source={rockinInput5} />
			<Markdown source={rockinInput6} />
			<Markdown source={rockinInput7} />
			<br />
			<code>
				<Markdown source={rockinInput8} />
			</code>
			<br />
			<Markdown source={rockinInput9} />
			<Markdown source={rockinInput10} />
			<Markdown source={rockinInput11} />
			<Markdown source={rockinInput12} />
			<br />
			<Markdown source={rockinInput13} />
			<br />
			<Markdown source={rockinInput14} />
			<Markdown source={rockinInput15} />
			<br />
			<Markdown source={rockinInput16} />
			<br />
			<Markdown source={rockinInput17} />
			<Markdown source={rockinInput18} />
			<Markdown source={rockinInput19} />
			<Markdown source={rockinInput20} />
			<Markdown source={rockinInput21} />
			<br />
			<Markdown source={rockinInput22} />
			<br />
			<Markdown source={rockinInput23} />
			<br />
			<Markdown source={rockinInput24} />
			<br />
			<Markdown source={rockinInput25} />
			<Markdown source={rockinInput26} />
			<br />
			<Markdown source={rockinInput27} />
			<br />
			<Markdown source={rockinInput28} />
			<Markdown source={rockinInput29} />
			<Markdown source={rockinInput30} />
		</div>
	</div>
);
