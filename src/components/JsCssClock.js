import React from 'react';
import Markdown from 'react-markdown';
import Lowlight from 'react-lowlight';

import js from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';

import jsCssClock from '../../images/work/jsCssClock.jpg'

const clockInput1 = "## js css clock"

const clockInput2 = "### 🕛 description:"

const clockInput3 = "clock face emulating functionality of a real live clock and telling the correct (local) time. this is day 2 of `wes bos'` [JavaScript30](https://javascript30.com/) series."

const clockInput4 = "🕛 **minute hand movement:**"

const clockInput5 = "* the second, minute, and hour hands did not move like those of a real clock out of the box."

const clockInput6 = "* one reason was because the clock sat in a div, and divs are blocks that start from left to right, so the clock by default does not start at 12 o'clock. it starts at 9 o'clock. so i had to rotate the default behavior by 90deg. that takes us to 12 o'clock. below is the corresponding css in `_clock.css`:"

const clockInput7 = `
	-webkit-transform: rotate(90deg);
        -moz-transform:rotate(90deg);
            transform: rotate(90deg);`

const clockInput8 = "* there is a corresponding `hack` in `clock.js`. for the `second hand`:"

const clockInput9 = `
	const secondsDegrees = (seconds * 6) + 90;`

const clockInput10 = "* for the `minute hand`:"

const clockInput11 = `
	const minutesDegrees = (minutes * 6 + seconds * (360 / 3600)) + 90;`

const clockInput12 = "* and for the `hour hand`:"

const clockInput13 = `
	hoursDegrees = (hours * 30 + minutes * (360 / 720)) + 90;`

const clockInput14 = "* the hacks right above are adding 90º to each hand so that the time starts at `12 o'clock` instead of `9 o'clock`."

const clockInput15 = "* there is still a problem however, each time the minute hand crosses `12 o'clock`. if nothing is done, the minute hand swings back to `9 o'clock` and then forward to `12 o'clock` again. so i had to turn off the `transition` property if the minute hand approached 12. below is the condition i created in the `clock.js` module to `turn off` the `default behavior` caused by the `transition` property:"

const clockInput16 = `
	if (secondsDegrees === 90) {
	    secondHand.style.transition = "all 0.0s";
	} else {
	    secondHand.style.transition = "all 0.05s";
	};`

const clockInput17 = "* the condition was on the second hand movement because it is what propels the minute hand. the `transition` property in question resides in the POSTCSS module `_clock.css`:"

const clockInput18 = `
	.hand {
        -webkit-transition: all 0.05s;
        -moz-transition: all 0.05s;
        transition: all 0.05s;
	};`

const clockInput19 = "🕛 **hour hand movement:**"

const clockInput20 = "* the hour hand presents a similar challenge. when it crosses the 12 after 60 minutes have gone by, it jerks. i wanted to make it move smoothly and seamlessly throughout one hour and when it crosses the 12. so i created a for loop in which the hour hand would move 6º every minute. below is the code:"

const clockInput21 = `
	for (let i = 1; i < 60; i++) {
        clockEl.innerHTML += "<div class='diallines'></div>";
        dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
	}`

const clockInput22 = "* the actual diallines that are being added above have a property of `visibility: hidden` because they are not necessary for design. i did it initially more as a check against the movement of the hands and then kept it. the diallines reside in a global variable called `diallines`:"

const clockInput23 = `
	const dialLines = document.getElementsByClassName('diallines');`

const clockInput24 = "* the `clockface` itself resides in a global variable called `clockEl`:"

const clockInput25 = `
	const clockEl = document.getElementsByClassName('clock-face')[0];`

const clockInput26 = "🕛 **second hand movement:**"

const clockInput27 = "* i also wanted to make the movement of the second hand emulate a second hand in a real clock, so i applied the following `transition-timing-function` property to the `.hand` class in `_clock.css`:"

const clockInput28 = `
	-webkit-transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
	    -moz-transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
	        transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);`


const clockInput29 = "* this <code>transition-timing-function</code> gives a snappy (in my case a bit more subtly snappy) little tick tick tick to the second hand. the hand goes back and forth. it gives a realistic ticking feature."

const clockInput30 = "* this `transition-timing-function` has a custom timing function called `cubic-bezier()`. `cubic-bezier()` is a class of `timing-function` that defines a cubic Bézier curve. these curves are continuous, so they are often used to smooth down the start and end of an animation and are therefore sometimes called easing functions. they are used instead of `ease-in-out` built in timing-function, for example."

const clockInput31 = "* 🕛 `.style.transform` **property on all three hands:**"

const clockInput32 = "* lastly, a <code>style.transform</code> property is applied to all three hands. on the `second hand`:"

const clockInput33 = `
	secondHand.style.mozTransform = \`rotate(\${secondsDegrees}deg)\`;
	secondHand.style.webkitTransform = \`rotate(\${secondsDegrees}deg)\`;
	secondHand.style.transform = \`rotate(\${secondsDegrees}deg)\`;`

const clockInput34 = '* on the `minute hand`:'

const clockInput35 = `
	minHand.style.mozTransform = \`rotate(\${minutesDegrees}deg)\`
	minHand.style.webkitTransform = \`rotate(\${minutesDegrees}deg)\`
	minHand.style.transform = \`rotate(\${minutesDegrees}deg)\``

const clockInput36 = "* on the `minute hand`:"

const clockInput37 = `
	minHand.style.mozTransform = \`rotate(\${minutesDegrees}deg)\`;
	minHand.style.webkitTransform = \`rotate(\${minutesDegrees}deg)\`;
	minHand.style.transform = \`rotate(\${minutesDegrees}deg)\`;`

const clockInput38 = "* and on the `hour hand`:"

const clockInput39 = `
	hourHand.style.mozTransform = \`rotate(\${hoursDegrees}deg)\`;
	hourHand.style.webkitTransform = \`rotate(\${hoursDegrees}deg)\`;
	hourHand.style.transform = \`rotate(\${hoursDegrees}deg)\`;`

const clockInput40 = "* `rotate()` css function defines a transformation that moves an element around a fixed point (like the central point of a clock that joins its hands together) as specified by the `transform-origin` property, without deforming it. the `amount of movement` is `defined` by a `specified angle`. if positive, the movement will be clockwise, and if negative, it will be counter-clockwise."

const clockInput41 = "* the corresponding `transform-origin` property in `_clock.css`:"

const clockInput42 = `
	.hand {
        -webkit-transform-origin: 100%;
            -moz-transform-origin: 100%;
                transform-origin: 100%;
	}`

const clockInput43 = "* the `origin` is where the hand is going to do the rotation. so 100% means that it will rotate from the end located at the center of the circle instead of from the middle of the hand as is the default (50%). this is along the `x axis`. this places the pivot point at the very right hand side (the central point of the clock). it is important to remember that the hands all start at `9 o'clock` by `default`, so it is then that the location of the pivot is determined, which leads then to it being placed at the end of the hands, going from left to right."

const clockInput44 = "* however, as shown earlier, there is another application of the css `rotate()` function to the hour hand in the for loop i created in which the hour hand moves 6º every minute. that's meant to distribute the hour hand evenly across 60 minutes. it makes the the hour hand move smoothly and seamlessly across the `12 o'clock` mark because the degrees it moves over the course of an hour is evenly distributed instead of happening all at once when it approaches and crosses over the `12` mark."

const clockInput45 = "[view js css clock on github](https://interglobalmedia.github.io/js-css-clock/)"

const clockInput46 = "[source code](https://github.com/interglobalmedia/js-css-clock)"

export const JsCssClock = () => (
	<div className="clock-content">
		<h2>js css clock</h2>
		<img src={jsCssClock} />
		<div className="clock-markdown">
			<Markdown source={clockInput1} />
			<Markdown source={clockInput2} />
			<Markdown source={clockInput3} />
			<Markdown source={clockInput4} />
			<Markdown source={clockInput5} />
			<Markdown source={clockInput6} />
			<br />
			<code>
				<Markdown source={clockInput7} />
			</code>
			<br />
			<Markdown source={clockInput8} />
			<br />
			<code>
				<Markdown source={clockInput9} />
			</code>
			<br />
			<Markdown source={clockInput10} />
			<br />
			<code>
				<Markdown source={clockInput11} />
			</code>
			<br />
			<Markdown source={clockInput12} />
			<br />
			<code>
				<Markdown source={clockInput13} />
			</code>
			<br />
			<Markdown source={clockInput14} />
			<Markdown source={clockInput15} />
			<br />
			<code>
				<Markdown source={clockInput16} />
			</code>
			<br />
			<Markdown source={clockInput17} />
			<br />
			<code>
				<Markdown source={clockInput18} />
			</code>
			<br />
			<Markdown source={clockInput19} />
			<Markdown source={clockInput20} />
			<br />
			<code>
				<Markdown source={clockInput21} />
			</code>
			<br />
			<Markdown source={clockInput22} />
			<br />
			<code>
				<Markdown source={clockInput23} />
			</code>
			<br />
			<Markdown source={clockInput24} />
			<br />
			<code>
				<Markdown source={clockInput25} />
			</code>
			<br />
			<Markdown source={clockInput26} />
			<Markdown source={clockInput27} />
			<br />
			<code>
				<Markdown source={clockInput28} />
			</code>
			<br />
			<Markdown source={clockInput29} />
			<Markdown source={clockInput30} />
			<Markdown source={clockInput31} />
			<Markdown source={clockInput32} />
			<br />
			<code>
				<Markdown source={clockInput33} />
			</code>
			<Markdown source={clockInput34} />
			<br />
			<code>
				<Markdown source={clockInput35} />
			</code>
			<Markdown source={clockInput36} />
			<br />
			<code>
				<Markdown source={clockInput37} />
			</code>
			<br />
			<Markdown source={clockInput38} />
			<br />
			<code>
				<Markdown source={clockInput39} />
			</code>
			<br />
			<Markdown source={clockInput40} />
			<Markdown source={clockInput41} />
			<br />
			<code>
				<Markdown source={clockInput42} />
			</code>
			<br />
			<Markdown source={clockInput43} />
			<Markdown source={clockInput44} />
			<Markdown source={clockInput45} />
			<Markdown source={clockInput46} />
			<br />
		</div>
	</div>
);
