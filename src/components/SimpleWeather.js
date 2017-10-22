import React from 'react';
import Markdown from 'react-markdown';

import simpleWeather from '../../images/work/simpleWeather.jpg'

const weatherInput1 = "## simple weather";

const weatherInput2 = "### ℉/℃ description:"

const weatherInput3 = "this is a project i created for free code camp entitled `show the local weather`."

const weatherInput4 = "* **objective:**"

const weatherInput5 = "* to build an app that is functionally similar to [fcc show the local weather](http://codepen.io/FreeCodeCamp/full/bELRjV)"

const weatherInput6 = "* **fulfill the below user stories:**"

const weatherInput7 = "* use whichever libraries or apis you need. give it your own personal style."

const weatherInput8 = "* **user story:**"

const weatherInput9 = "* i can see the weather in my current location."

const weatherInput10 = "* **user story:**"

const weatherInput11 = "* i can see a different icon or background image (e.g. snow mountain, hot desert) depending on the weather."

const weatherInput12 = "* **user story:**"

const weatherInput13 = "* i can push a button to toggle between `fahrenheit` and `celsius`."

const weatherInput14 = "* **i ended up using the simpleweather api:**"

const weatherInput15 = "* no key necessary, and it supports `geolocation`. it has been excellent, but now that `verizon` has taken over `yahoo`, I don't know how much longer this good thing will last."

const weatherInput16 = "* **my biggest challenge:**"

const weatherInput17 = "* to figure out how to use a jquery plugin with my project setup/workflow. i learned a lot from revaming this (I didn't initially create it with a workflow, just pure `html5`, `css3`, and `javascript`). you can always learn new things from ugrading old things!"

const weatherInput18 = "* **what my front end development workflow consists of for this project:**"

const weatherInput19 = "* **npm dependencies:**"

const weatherInput20 = "* **jquery:** so the javascript would work. this plugin replaces the need for a jquery cdn `<script></script>` in the index.html. it is imported where necessary via the npm package `webpack`."

const weatherInput21 = "* **normalize.css:** the css reset i chose to use for this project. i like it better than `reset.css`. in addition i add the following globally (it works in most situations for me):"

const weatherInput22 = `
	* {
	    padding: 0;
	    margin: 0;
	}
	`
const weatherInput23 = "* **npm devDependencies:**"

const weatherInput24 = "* **autoprefixer 6.5.1:** parses `CSS` and add `vendor prefixes` to `CSS rules` using `values` from the [can i use](http://caniuse.com/) website. it is recommended by google and used in twitter and taobao."

const weatherInput25 = "* **babel-core:** one of three babel npm packages needed in order to be able to use webpack < 2.0. this is the babel compiler core, which compiles eS6 into eS5."

const weatherInput26 = "* **babel-loader:** this package allows transpiling javascript files using babel and webpack."

const weatherInput27 = "* **babel-preset-2015:** babel preset for all es2015 plugins."

const weatherInput28 = "* **browser-sync:** keeps multiple browsers and devices in sync when building websites. from live reloads to URL pushing, form replication to click mirroring, `browsersync` cuts out repetitive manual tasks. it’s like an extra pair of hands. customise an array of sync settings from the ui or command line to create a personalised test environment. need more control? `browsersync` is easily integrated with your web platform, build tools, and other node.js projects."

const weatherInput29 = "* **del:** npm package that allows you to delete files and folders. comes in handy when you want to delete old build files and replace them with those from the new build."

const weatherInput30 = "* **gulp:** a toolkit that helps you automate painful or time-consuming tasks in your development workflow. `gulp` can be used with `PHP`, `.NET`, `Node.js`, `Java`, and other platforms. there are over 2000 `gulp` curated plugins for streaming file transformations."

const weatherInput31 = "* **gulp-cssnano:** minifies css."

const weatherInput32 = "* **gulp-imagemin:** minifies png, jpeg, gif and svg images."

const weatherInput33 = "* **gulp-modernizr:** a `gulp` wrapper for `modernizr`. `modernizr` is a javascript library that detects which `html5` and `css3` features your visitor's browser supports. in detecting feature support, it allows developers to test for some of the new technologies and then provide fallbacks for browsers that do not support them."

const weatherInput34 = "* **gulp-postcss:** `POSTCSS` `gulp plugin` to pipe `CSS` through several plugins, but parse `CSS` only once."

const weatherInput35 = "* **gulp-rev:** static `asset revisioning` by appending content hash to filenames."

const weatherInput36 = "* **gulp-uglify:** minifies files (i.e., index.html)."

const weatherInput37 = "* **gulp-usemin:** replaces references to non-optimized scripts or stylesheets into a set of html files templates, or views. specifically, you create a (start) <!-- build --> such as:"

const weatherInput38 = `
	<!-- build:css assets/styles/styles.css -->
`

const weatherInput39 = "* followed by the actual link such as:"

const weatherInput40 = `
	<link rel="stylesheet" href="temp/styles/styles.css">
`

const weatherInput41 = "* And then the (end) <!-- endbuild --> comment:"

const weatherInput42 = `
	<!-- endbuild -->
`

const weatherInput43 = "* the path in the start comment is where the unoptimized file resides, and the actual link is what should be injected into the file. the end comment completes the encapsulation."

const weatherInput44 = "* **gulp-watch:** file watcher for changes in your code like css, html, js, for example."

const weatherInput45 = "* **postcss-import:** `imports` your `POSTCSS` `modules/partials` into other `modules/partials` and/or your `main.css` file."

const weatherInput46 = "* **postcss-mixins:** `POSTCSS` plugin for `mixins`. you must set this plugin before `postcss-simple-vars` or `postcss-nested`."

const weatherInput47 = "* **postcss-nested:** `POSTCSS` plugin to unwrap nested rules like how `Sass` does it."

const weatherInput48 = "* **postcss-simple-vars:** `POSTCSS` plugin for `Sass-like` `variables`."

const weatherInput49 = "* **webpack:** module bundler. essential for es6 modularization, but is not restricted to javascript only. it allows you to bundle any static resource."

const weatherInput50 = "* **how i got the simpleweather jquery plugin to work with my workflow:**"

const weatherInput51 = "* i had to import jquery into my js `modules` and `app.js` like this:"

const weatherInput52 = `
	var $ = require('jquery');
	window.jQuery = $;
	window.$ = $;
`

const weatherInput53 = "* instead of like this:"

const weatherInput54 = `
	import $ from 'jquery';
`

const weatherInput55 = "* when i first tried the latter way, i got the error that i could perform that function because `jquery` couldn't be a dependency of itself. i had to use the old fashioned `require()` method AND the other two `window` methods that follow above. that way i had all my bases covered. it would recognize jquery's call on the window as well as the `$` (jquery shorthand) variable. by doing this, i was able to add a `<script></script>` for the `simpleweather jquery plugin` to my `index.html` below my `app.js` `<script></script>` tag. `app.js` has to go before `simpleweather` because the `call to jquery` in my `javascript modules` and `app.js` has to come before the `simpleweather` plugin."

const weatherInput56 = "[view simpleweather on github](https://interglobalmedia.github.io/simpleweather/)"

const weatherInput57 = "[source code](https://github.com/interglobalmedia/simpleweather)"

export const SimpleWeather = () => (
	<div className="weather-content">
		<h2>simple weather</h2>
		<img src={simpleWeather} />
		<div className="weather-markdown">
			<Markdown source={weatherInput1} />
			<Markdown source={weatherInput2} />
			<Markdown source={weatherInput3} />
			<Markdown source={weatherInput4} />
			<Markdown source={weatherInput5} />
			<Markdown source={weatherInput6} />
			<Markdown source={weatherInput7} />
			<Markdown source={weatherInput8} />
			<Markdown source={weatherInput9} />
			<Markdown source={weatherInput10} />
			<Markdown source={weatherInput11} />
			<Markdown source={weatherInput12} />
			<Markdown source={weatherInput13} />
			<Markdown source={weatherInput14} />
			<Markdown source={weatherInput15} />
			<Markdown source={weatherInput16} />
			<Markdown source={weatherInput17} />
			<Markdown source={weatherInput18} />
			<Markdown source={weatherInput19} />
			<Markdown source={weatherInput20} />
			<Markdown source={weatherInput21} />
			<br />
			<code>
				<Markdown source={weatherInput22} />
			</code>
			<br />
			<Markdown source={weatherInput23} />
			<Markdown source={weatherInput24} />
			<Markdown source={weatherInput25} />
			<Markdown source={weatherInput26} />
			<Markdown source={weatherInput27} />
			<Markdown source={weatherInput28} />
			<Markdown source={weatherInput29} />
			<Markdown source={weatherInput30} />
			<Markdown source={weatherInput31} />
			<Markdown source={weatherInput32} />
			<Markdown source={weatherInput33} />
			<Markdown source={weatherInput34} />
			<Markdown source={weatherInput35} />
			<Markdown source={weatherInput36} />
			<Markdown source={weatherInput37} />
			<br />
			<code>
				<Markdown source={weatherInput38} />
			</code>
			<br />
			<code>
				<Markdown source={weatherInput39} />
			</code>
			<br />
			<Markdown source={weatherInput40} />
			<br />
			<code>
				<Markdown source={weatherInput41} />
			</code>
			<br />
			<code>
				<Markdown source={weatherInput42} />
			</code>
			<br />
			<Markdown source={weatherInput43} />
			<Markdown source={weatherInput44} />
			<Markdown source={weatherInput45} />
			<Markdown source={weatherInput46} />
			<Markdown source={weatherInput47} />
			<Markdown source={weatherInput48} />
			<Markdown source={weatherInput49} />
			<Markdown source={weatherInput50} />
			<Markdown source={weatherInput51} />
			<br />
			<code>
				<Markdown source={weatherInput52} />
			</code>
			<br />
			<Markdown source={weatherInput53} />
			<br />
			<code>
				<Markdown source={weatherInput54} />
			</code>
			<br />
			<Markdown source={weatherInput55} />
			<Markdown source={weatherInput56} />
			<Markdown source={weatherInput57} />
		</div>
	</div>
);
