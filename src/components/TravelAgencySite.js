import React from 'react';
import Markdown from 'react-markdown';

import travelAgencySite from '../../images/work/travelAgencySite.jpg';

const travelInput1 = "## travel agency site"

const travelInput2 = "### 🌍 description:"

const travelInput3 = "* i took a course on `udemy` called **git a web developer job: mastering the modern workflow** with `brad schiff`, and it literally changed my life. i had been trying to put together a decent **front end developer workflow** for a while. i took courses on lynda.com, treehouse, and gathered various resources around the internet on the topic. but nothing ever gave a complete picture that was clear. either there were holes in the course, in the documentation, or it just did not make sense!"

const travelInput4 = "* then i heard about THIS course through a facebook group i am a part of called `newbie coder warehouse`. it is a fantastic group, and i have learned much from others as well as discovering wonderful development-related resources."

const travelInput5 = "the course covers just about everything a **front end developer** should be familiar with."

const travelInput6 = "🌍 **git essentials:**"

const travelInput7 = "* the course goes over some `git` essentials, since we used `git` to track different committed versions of our project and push it to github. i have been using git for quite a while now, but it's never a waste to revisit, because something new always pops up that proves to be invaluable. for example, i had been used to creating a `gh-pages` branch and then publishing it to github. the link to the published `gh-pages` project was the link to the site. in this course, i learned that you could also create a live site without a `gh-pages` branch. with a mere manipulation of the link to the project repository, you instantly had a live site. for this particular project, i chose to stay with a `gh-pages` branch and use `gulp-gh-pages` to deploy my changes, because I thought it a best practice to do so."

const travelInput8 = "🌍 **introduction to node.js & npm:**"

const travelInput9 = "* the course goes over the basics of **node.js** and **npm**. you learn how to install **node.js**, and how to work with **npm**. i had been working with **node.js** and **npm** for a while, but i was attracted to the course because it went into detail about how to set up a good development workflow."

const travelInput10 = "🌍 **gulp essentials:**"

const travelInput11 = "* ever since i was introduced to **gulp**, i fell in love with it. with this course, i became familiar with even more **gulp** curated npm plugins."

const travelInput12 = "* this course installed `gulp` globally. i learned from experience that it is better to install it locally when possible. the ability to choose whether to install npm packages globally OR locally was introduced with [npm 1.0](https://nodejs.org/en/blog/npm/npm-1-0-global-vs-local-installation/) (03.24.2011). previous versions only permitted you to install globally. if you did want to install locally, you had to use a `CLI` command called `bundle`. `bundle` let you install your dependencies locally in your project, but it was basically a hack that never really worked reliably. according to [node.js](https://nodejs.org/en/blog/npm/npm-1-0-global-vs-local-installation/),"

const travelInput13 = "> just like how global variables are kind of gross, but also necessary in some cases, global packages are important, but best avoided if not needed.\nin general, the rule of thumb is:\n> if you’re installing something that you want to use in your program, using require('whatever'), then install it locally, at the root of your project.\n> if you’re installing something that you want to use in your shell, on the command line or something, install it globally, so that its binaries end up in your PATH environment variable."

const travelInput14 = "* my ***preference*** is to install locally to keep things simple. you can still use the **command line** by creating your own `custom script` commands or default ones provided by **npm**."

const travelInput15 = "🌍 **gulp and postcss:**"

const travelInput16 = "* one ***awesome*** `gulp curated plugin` i discovered through the course was `POSTCSS`. i had been briefly introduced to it elsewhere, but there was no talk about how it worked or how to use it. it came pre-installed and the code already created. with this course, i learned all about `POSTCSS` and why it is so much better than `Sass`. i found that it made `mobile-first development` much easier because of the `postcss-nested` npm package, in which you could simply nest a media query within any particular given CSS selector. the only drawback with **POSTCSS** is that you can only access it with **npm**. if you are ***not*** using **npm**, **Sass** is the way to go."

const travelInput17 = "* we used **browseryync** for live (file) updates/reloads, organized our `gulp tasks` via a `gulp/tasks/` directory structure, and i created my own `custom (local) gulp commands` which i added to the `scripts json {} object` in my `package.json` file. i also learned how to handle **POSTCSS** errors with **gulp** so that my **gulp watch task** would not be interrupted if an error **DID** occur. by default, if an error does occur, **gulp watch** stops running, and when the error is fixed, **gulp watch/browsersync** does ***not*** automatically start up again."

const travelInput18 = "* **the** `styles` **gulp task** ***with*** **gulp error handling:**"

const travelInput19 = `
	gulp.task('styles', function() {
	    // include return so that gulp is aware when this function completes
	    return gulp.src('./app/assets/styles/styles.css')
            .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
	    .on('error', function(errorInfo) {
	        console.log(errorInfo.toString());
	        this.emit('end');
	    })
            .pipe(gulp.dest('./app/temp/styles'));
    });`

const travelInput20 = "* The ***original*** gulp `styles` task code was the following:"

const travelInput21 = `
	gulp.task('styles', function() {
        return gulp.src('./app/assets/styles.css')
            .pipe(postcss([cssImport, cssvars, nested, autorprefixer]))
            .pipe(gulp.dest('./app/temp/styles'));
    });`

const travelInput22 = "🌍 **mobile first and responsive images:**"

const travelInput23 = "* why is `mobile first` design important? first of all, much more traffic comes from mobile devices than desktops or laptops. so the primary source of traffic should not be an afterthought. one should design and build with `mobile first` in mind from the beginning."

const travelInput24 = "* second of all, everyone realized that traditional `desktop first` responsive design resulted in bloated, slow loading websites. even though everyone was using `css` to adapt and optimize layouts for different devices, we were still forcing tiny smart phones to download huge image files that were intended for desktop monitors. sending a huge destop size image to a smart phone is a huge waste of a visitor's data plan. a way smaller image still would look crisp and sharp on smaller smart phone screens, for example. it also would load way faster."

const travelInput25 = "* we shouldn't want anyone to download extra data that they won't even use."

const travelInput26 = "* we should want to build efficient websites that load as quickly as possible for everyone."

const travelInput27 = "* with `mobile first`, we begin with the most essential view of our site, and we progressively enhance the layout and the assets only when necessary for larger and more advanced devices."

const travelInput28 = "🌍 **mobile first design context and mobile first development context:**"

const travelInput29 = "* the `mobile first design context` refers to designing around a smaller screen first. this is good, because smaller screens force us to prioritize our content."

const travelInput30 = "* because people tend to have shorter attention spans in smaller devices, it makes us anticipate common user actions and apply them to the site."

const travelInput31 = "* the `mobile first development context` refers to things such as coding the site so that devices don't download unnecessary data. we (developers) treat the most essential view of our website (smallest screens) as our baseline and code upwards from there. we should want to make sure that the site loads quickly for everyone. otherwise, we end up losing visitors."

const travelInput32 = "* in addition, even if we are given a desktop design comp, there is no reason not to develop the website mobile first."

const travelInput33 = "🌍 **mobile first best practices:**"

const travelInput34 = "* **responsive images:**"

const travelInput35 = "* **what is a responsive image and why do we need it?:**"

const travelInput36 = "* a responsive image is very similar to a traditional image. a traditional image is one in which `<img>` element is used. it forces us to send one single image file to every user and device. instead, what we need, is a way to send different image files to different screen sizes. that is exactly what responsive images do."

const travelInput37 = "* **two ways to convert a traditional image into a responsive image:**"

const travelInput38 = "* why are there two ways? because there are two different reasons to use a responsive image."

const travelInput39 = "* **art direction and cropping situation:**"

const travelInput40 = "* when you want to send different images to different users because of art direction or cropping reasons, you use the `<picture>` element:"

const travelInput41 = `
	<picture>
        <source srcset="images/dog-crop-large.jpg" media="(min-width: 1200px)">
        <source srcset="images/dog-crop-medium.jpg" media="(min-width: 760px)">
        <img src="images/dog-crop-small.jpg" alt="Puppy in the sand.">
	</picture>`

const travelInput42 = "* this is how you create a responsive image when you need to have more fine-grain control over how your images are being cropped at different screen sizes."

const travelInput43 = "* **image resolution and file size situation(faster load times):**"

const travelInput44 = "* with this method, we love the way the image is cropped. we want it to be cropped the same way for every screen size:"

const travelInput45 = `
	<img srcset="images/dog-resolution-small.jpg, images/dog-resolution-medium.jpg, images/dog-resolution-large.jpg">
`

const travelInput46 = "* web browsers can tell the size of an image only after it has been downloaded. however, we don't want it to happen that way. that would defeat the purpose of the responsive image. so we need to tell the browser the size of each image, so that it knows which one to use:"

const travelInput47 = `
	<img srcset="images/dog-resolution-small.jpg 570w, images/dog-resolution-medium.jpg 1200w, images/dog-resolution-large.jpg 1920w" alt="Puppy in the sand.">
`

const travelInput48 = "tt is important, however, to note, that different devices and browsers have different ways of determining when they should use which image. so this second approach is very hands-off. we are not trying to micro-manage when the browser should use which image."

const travelInput49 = "* we can also combine the `image resolution and file size situation` with the `art direction and cropping situation`. this would be good for situations when you want to use a higher dpi of the same cropping of an image for even larger screens, for example. this would also apply to retina screens, where the resolution is 2x as much as regular screens:"

const travelInput50 = `
	<picture>
	<source srcset="assets/images/hero--large.jpg 1920w, assets/images/herro--large-hi-dpi.jpg 3840w" media="(min-width: 1380px)">
	<source srcset="assets/images/hero--medium.jpg 1380px, assets/images/hero--medium-hi-dpi.jpg 2760px" media="(min-width: 990px)">
	<source srcset="assets/images/hero--small.jpg 990w, assets/images/hero--small-hi-dpi.jpg 1980w" media="(min-width: 640px)">
		<img srcset="assets/images/hero-smaller.jpg 640w, assets/images/hero-smaller-hi-dpi.jpg 1280w" alt="Coastal view of ocean and mountains.">
	</picture>`

const travelInput51 = "🌍 **tips for testing responsive images:**"

const travelInput52 = "* **how to test whether your regular version or hi-dpi version of an image is being used correctly by the browser:**"

const travelInput53 = "* the `google chrome developer tools` has a tool that can help with this. you go into `developer tools` by right clicking on `inpsect` in the pop-up menu and then click on the `toggle device mode` in the navigation menu. then go to the top of the browser in developer tools, and you will see the `device mode` dropdown to the left. choose `responsive` mode."

const travelInput54 = "* next you will see something called `dpr`. it stands for `device pixel ratio`. for regular resolution screens viewing, you would choose `dpr: 1.0`. For retina screens, you would choose `dpr: 2.0`."

const travelInput55 = "* one clever thing that brad set up for us, was images for both regular resolution and hi-dpi that actually contained text indicating the size of the image. we used those images to test whether the correct size image was being used in `dpr: 1.0` and `dpr: 2.0`. i would think that a ***best practice*** for responsive image testing."

const travelInput56 = "* **chrome** can help you when you are testing different characteristics of devices."

const travelInput57 = "🌍 **automatic sprites with gulp:**"

const travelInput58 = "* i learned how to configure `gulp` to automatically create an **icon sprite**."

const travelInput59 = "* **icon sprite:** one single image file that contains all icons used on a site. loading only one icon sprite file rather than individual icon file makes the site load a bit faster. the more files visitors have to download, the longer it will take for the site to load. and i would want my site to load as fast as possible."

const travelInput60 = "* **gulp-svg-sprite@1.3.1:** the npm package i was introduced to and used in the project. it's a `gulp plugin` that reads in a bunch of `svg` files, optimizes them and creates `svg` sprites."

const travelInput61 = "🌍 **deleting sprites, folders and builds with del:**"

const travelInput62 = "* i was introduced to the `del` npm package, which permitted me to delete unnecessary files and folders. for example, if i were to remove a sprite from the project's design, i could use `del` to remove the old icon sprite file and make way for a new, updated one. the same went for deletion of old builds and folders in general, and replacing them with new ones."

const travelInput63 = "🌍 **svg files and older browsers:**"

const travelInput64 = "* first we set up a `png` fallback for older browsers that don't support `svg` files."

const travelInput65 = "* why bother doing this? Because `svg` files are only supported by 97% of browser traffic, and `png` files are supported by 100%."

const travelInput66 = "* what do i mean by `png fallback`? we set up our project so that by default, `.svg` icons would be used, but `.png` files would be used for those browsers that did not support `.svg` icons."

const travelInput67 = "* i use `gulp` to automatically create a `png` copy of `svg` icon `sprite`. i use the `gulp-svg2png` npm package as a `devDependency` to make this possible."

const travelInput68 = "* i only send the `png` version to browsers that don't support `svg`."

const travelInput69 = "🌍 **gulp-modernizr npm package:**"

const travelInput70 = "* so the next question would be: how would i know whether a particular visitor's browser supports `svg`? the answer is in using a tool called `gulp-modernizr` (a **gulp** curated npm package) to test web browsers for `svg` support. i used it as a `devDependency` of `travel agency site`."

const travelInput71 = "* why `gulp-modernizr` instead of just `modernizr`? `modernizr` has the potential to test browsers for hundereds of features. it can be for `flexbox`, `opacity`, or `css animations`, for example. however, the more features i test for, the larger the `modernizr` **javascript** file becomes, and the more it will slow things down for my visitors."

const travelInput72 = "* the `gulp-modernizr` package lets me build my own custom copy of `modernizr` that only includes the code to test for the features i need to test for. that way my `modernizr.js` file will be as small as possible, which means my website will load as quickly as possible."

const travelInput73 = "* **how** `modernizr` **works:** once `gulp-modernizr` has been added to the project/page, it will test for user browser features. if a user's browser supports `svg` files, [`modernizr`](https://modernizr.com) will add a class `.svg` to the `root html element` of the page. if a browser does not support svg, it will add a class of `.no-svg`. from there, i can customize my css to send a different icon sprite file based on whichever class `modernizr` adds."

const travelInput74 = "* **adding** `modernizr` **as a dependency of the** `scripts` **task:** this way, whenever there is a change to a js file, my `gulp-modernizr` task will be automatically triggered."

const travelInput75 = "🌍 **support for flexbox in legacy browsers:**"

const travelInput76 = "* in the `testimonials` section of the website, i used `flexbox` to create a 3-column, equal height layout instaead of `floats`. in other words, i wanted all the columns in that section to be as tall as the tallest column."

const travelInput77 = "* `flexbox` works great for ~ 96% of visitors."

const travelInput78 = "* solution? use a float-based 3-column layout that is not equal height, but would work in all browsers, and then use `modernizr` to target only browsers that support `flexbox` and swap out the floats for equal height `flexbox` solution."

const travelInput79 = "* how do i do this? in the `_row.css` module, i looked for the `row--equal-height-at-large` class. wherever i came across it (which was towards the bottom of the file), i added a `.flexbox` class in front of the `row--equal-height-at-large` class. `modernizr` makes this possible."

const travelInput80 = "🌍 **using the POSTCSS hexrgba plugin in the header:**"

const travelInput81 = "* **postcss-hexrgba:** adds shorthand hex methods to rgba() values."

const travelInput82 = "* so you can imagine what a great thing that is because it **IS** a time saver. instead of coming across a hex color you like and then having to find your favorite hex-to-rgba converter site, convert the hex to rgba, return to your code and replace your hex with the rgba, you simply use this plugin. it's really nice to work with. i used `postcss-hexrgba` in the `_site-header.css` module:"

const travelInput83 = `
	.site-header {
        padding: 10px 0;
        position: absolute;
        width: 100%;
        z-index: 2;
        transition: background .3s ease-out;

        &--is-expanded {
            background: rgba($mainBlue, 0.55);
        }

        @mixin atMedium {
            position: fixed;
            background: rgba($mainBlue, 0.3);

        	&--dark {
                background: rgba(23, 51, 72, .85);
            }
        }`

const travelInput84 = "🌍 **the js module pattern and webpack:**"

const travelInput85 = "* with ***webpack***, i am able to `modularize` my code. in other words, placing independent pieces of code in their own files, and then import them into one js file. es6 is what makes all of this possible. i only import whatever dependencies are required for the particular project (especially jquery), import the file name variables, add calls to functions that are stored as values in variables when necessary, and other global variables. this permits my main js file to be succinct and much more easily maintainable. it also makes the js modules more easily maintainable and re-usable. prior to Webpack, i was using browserify. it wasn't possible to use modular code in the same way that i do with webpack, and my various js files were concatenated and then injected into the main js file. sometimes this caused code conflicts, and the application would fail. it was difficult to maintain that code. in addition, when implementing that kind of set up with browserify, one did not modularize individual gulp tasks into their own individual files. gulp tasks all resided in one large `gulpfile.js` file. modularization of gulp tasks makes them much more easily maintainable and re-usable."

const travelInput86 = "🌍 **integrating webpack into gulp automation:**"

const travelInput87 = "* what is also great about **webpack** is that you can set it up to automatically re-bundle things anytime you save a change to any js file. that way you don't have to keep on going over to the **command line** and type the `webpack` commmand. this is made possible with the creation of the gulp `scripts` task:"

const travelInput88 = `
	var gulp = require('gulp'),
	webpack = require('webpack');

	gulp.task('scripts', ['modernizr'], function(callback) {
	    // going up one folder placing us in gulp folder and then up another folder to get to root of project.
	    webpack(require('../../webpack.config.js'), function(err, stats) {
	        if(err) {
	            console.log(err.toString());
	        }
	        console.log(stats.toString());
	        callback();
	    });
	});`

const travelInput89 = "* passing a callback parameter into the main task callback function and within **webpack**'s callback function after logging out the success text to the console, i run the callback function so that **gulp** can be certain that webpack completed."

const travelInput90 = "* i added the following code to the `gulp watch` task to watch for any changes in any `js` files:"

const travelInput91 = `
	watch('./app/assets/scripts/**/*.js', function() {
        gulp.start('scriptsRefresh');
    });`

const travelInput92 = "* i added the following to the `gulp watch` task so that `browsersync` would refresh the page whenever there was a change in any `js` file:"

const travelInput93 = `
	gulp.task('scriptsRefresh', ['scripts'], function() {
	    browserSync.reload();
	});`

const travelInput94 = "* i made the `scriptsRefresh` task depend on the `scripts` task so that the `scriptsRefresh` task would not begin until the `scripts` task would begin and complete first so that the `webpack` bundled file (`app.js` in the temp folder) has a chance to be generated. this file is the `app.js` file that is created from my original `app.js` file in my `assets` folder. its contents are then placed into the `app.js` file that resides in my `temp` folder. this bundled `app.js` file is added to my `index.html` file. so `/temp/scripts/app.js` first has to be updated before `browsersync` reloads the page, which is why I made the `scripts` task a dependency of the  `scriptsRefresh` task."

const travelInput95 = "* **setting up the** `scripts` **task to log out information to cli if it runs into an error:**"

const travelInput96 = "* within the `webpack` function call, and within the parantheses for the anonymous function, webpack gives you access to `two parameters`: the first one is `err`, and the second one is `stats`. you can name these parameters whatever you want. the following is the completed `scripts` task code including the code for the `error` check:"

const travelInput97 = `
	var gulp = require('gulp'),
	webpack = require('webpack');

	gulp.task('scripts', ['modernizr'], function(callback) {
	    // going up one folder placing us in gulp folder and then up another folder to get to root of project.
	    webpack(require('../../webpack.config.js'), function(err, stats) {
	        if(err) {
	            console.log(err.toString());
	        }
	        console.log(stats.toString());
	        callback();
	    });
	});`

const travelInput98 = "* again, the `gulp watch` task keeps going even if there is a `scripts` error, and `webpack` stats are displayed regarding what scripts have been built."

const travelInput99 = "🌍 **using babel:**"

const travelInput100 = "* implementing `babel` in your workflow lets you use ultra modern javascript and still have excellent browser support. this is especially important because of the release of `es6` and even (some) `es7`. Not all browsers support all `es6` or `es7` features. `babel` converts `es6` and `es7` code (and beyond) into `es5` code, and into a new file. then you serve up that converted file up to the web browser, and everyone wins."

const travelInput101 = "* i actually installed 3 `babel` plugins: `babel-core`, `babel-loader`, and `babel-preset-2015`. `babel-core` is the `babel compiler core`, `babel-loader` helps you integrate `babel` with `webpack`, and `babel-preset-2015` is the preset for all `babel es2015 plugins`. these plugins are what permitted me to export functions from files and import them into other files, import and export modules, and add global variables to the bundled `app.js file`, for example."

const travelInput102 = "🌍 **lazy loading images for faster page loads:**"

const travelInput103 = "* **lazy loading:** when someone visits a site, by default the browser will try and download everything immediately. however, as a developer, i can customize and make it better. for example, do we really need to download all image files on a page as soon as the page loads? these days we have to take into consideration `user mobile data plans`. we don't want them to waste part of their data plan on images that they might not even get to see before they leave the page."

const travelInput104 = "* the idea behind `lazy loading` is to only download assets as they become necessary. so for this project, we made sure that we only downloaded images as they were getting ready to be scrolled into view."

const travelInput105 = "* i used the `lazysizes` npm package to implement `lazy loading`. i installed it as a `devDependency` of the project because it was necessary beyond project development. `lazysizes` is a high performance and seo friendly lazy loader for images (responsive and normal), iframes and more, that detects any visibility changes triggered through user interaction, css or javascript without configuration."

const travelInput106 = "🌍 **lazyLoading and waypoints:**"

const travelInput107 = "* the `waypoints` npm package is a library that makes it easy to execute a function whenever you scroll to an element. when we first implemented `lazy loading`, our `waypoints` was triggered too early as we scrolled down to various sections of the project page. each page section is linked to a link in the navigation menu."

const travelInput108 = "* ***why*** was that happening? when the page first loads, **waypoints** immediately takes note of the vertical positioning of the elements that it is watching."

const travelInput109 = "* the ***solution***? to tell **waypoints** to refresh its measurements every time a new image is lazy loaded."

const travelInput110 = "* we only added a `refreshWaypoints()` method to our `stickyHeader` module, and not to our `revealOnScroll` where `waypoints` was also being used, because the `waypoint` object exists in the `global` window scope. so when we call it in the `stickyHeader` module, it isn't only being applied to the `waypoints` created in `stickyHeader`. `Waypoint.refreshAll()` is refreshing all `waypoints` that exist in the web browser's memory."

const travelInput111 = "🌍 **browser support:**"

const travelInput112 = "* i had to make sure that responsive images would work in older, outdated browsers."

const travelInput113 = "* what do i mean by ***responsive images***? `responsive images` are referring to the `picture` element that we used, and the `srcset` attribute. most recent versions of browsers support these things, but older, outdated browsers do not. they only support the traditional `<img src=\"cat.jpg\">` element with a single `src` attribute."

const travelInput114 = "* the `picture` element is only supported by ~ 71% of browser traffic."

const travelInput115 = "* the `srcset` attribute is only supported by ~ 73% of brwoser traffic."

const travelInput116 = "* but i want my images to work for everyone."

const travelInput117 = "* this is where the `picturefill` npm package comes in. `picturefill` is a **js** file we include in our page, and it allows older browsers to understand responsive images."

const travelInput118 = "* `picturefill` brings up `responsive image browser support` for older, outdated browsers to virtually 100%. i installed it as a `dependency` of the project because it was ***needed*** beyond project development."

const travelInput119 = "this ***articulation*** of the **travel agency site** project focused more on **front end development** ***practices***, rather than the code itself. yes, of course code implementation is important, but so are best practices. i find that **front end development** doesn't always get the same respect as **back end development**. it can be difficult to ***discover*** **front end development** ***best practices***, a ***must*** when seeking employment or your next gig as a **front end developer**."

const travelInput120 = "[view travel agency site on github](https://interglobalmedia.github.io/simon-game/)"

const travelInput121 = "[source code](https://github.com/interglobalmedia/simon-game)"

export const TravelAgencySite = () => (
	<div className="travel-content">
		<h2>travel agency site</h2>
		<img src={travelAgencySite} />
		<div className="travel-markdown">
			<Markdown source={travelInput1} />
			<Markdown source={travelInput2} />
			<Markdown source={travelInput3} />
			<Markdown source={travelInput4} />
			<Markdown source={travelInput5} />
			<Markdown source={travelInput6} />
			<Markdown source={travelInput7} />
			<Markdown source={travelInput8} />
			<Markdown source={travelInput9} />
			<Markdown source={travelInput10} />
			<Markdown source={travelInput11} />
			<Markdown source={travelInput12} />
			<blockquote>
				<Markdown source={travelInput13} />
			</blockquote>
			<Markdown source={travelInput14} />
			<Markdown source={travelInput15} />
			<Markdown source={travelInput16} />
			<Markdown source={travelInput17} />
			<Markdown source={travelInput18} />
			<br />
			<code>
				<Markdown source={travelInput19} />
			</code>
			<br />
			<code>
				<Markdown source={travelInput20} />
			</code>
			<br />
			<code>
				<Markdown source={travelInput21} />
			</code>
			<br />
			<Markdown source={travelInput22} />
			<Markdown source={travelInput23} />
			<Markdown source={travelInput24} />
			<Markdown source={travelInput25} />
			<Markdown source={travelInput26} />
			<Markdown source={travelInput27} />
			<Markdown source={travelInput29} />
			<Markdown source={travelInput30} />
			<Markdown source={travelInput31} />
			<Markdown source={travelInput32} />
			<Markdown source={travelInput33} />
			<Markdown source={travelInput34} />
			<Markdown source={travelInput35} />
			<Markdown source={travelInput36} />
			<Markdown source={travelInput37} />
			<Markdown source={travelInput38} />
			<Markdown source={travelInput39} />
			<Markdown source={travelInput40} />
			<br />
			<code>
				<Markdown source={travelInput41} />
			</code>
			<br />
			<Markdown source={travelInput42} />
			<Markdown source={travelInput43} />
			<Markdown source={travelInput44} />
			<br />
			<code>
				<Markdown source={travelInput45} />
			</code>
			<br />
			<Markdown source={travelInput46} />
			<br />
			<code>
				<Markdown source={travelInput47} />
			</code>
			<br />
			<Markdown source={travelInput48} />
			<Markdown source={travelInput49} />
			<br />
			<code>
				<Markdown source={travelInput50} />
			</code>
			<br />
			<Markdown source={travelInput51} />
			<Markdown source={travelInput52} />
			<Markdown source={travelInput53} />
			<Markdown source={travelInput54} />
			<Markdown source={travelInput55} />
			<Markdown source={travelInput56} />
			<Markdown source={travelInput57} />
			<Markdown source={travelInput58} />
			<Markdown source={travelInput59} />
			<Markdown source={travelInput60} />
			<Markdown source={travelInput61} />
			<Markdown source={travelInput62} />
			<Markdown source={travelInput63} />
			<Markdown source={travelInput64} />
			<Markdown source={travelInput65} />
			<Markdown source={travelInput66} />
			<Markdown source={travelInput67} />
			<Markdown source={travelInput68} />
			<Markdown source={travelInput69} />
			<Markdown source={travelInput70} />
			<Markdown source={travelInput71} />
			<Markdown source={travelInput72} />
			<Markdown source={travelInput73} />
			<Markdown source={travelInput74} />
			<Markdown source={travelInput75} />
			<Markdown source={travelInput76} />
			<Markdown source={travelInput77} />
			<Markdown source={travelInput78} />
			<Markdown source={travelInput79} />
			<Markdown source={travelInput80} />
			<Markdown source={travelInput81} />
			<Markdown source={travelInput82} />
			<br />
			<code>
				<Markdown source={travelInput83} />
			</code>
			<br />
			<Markdown source={travelInput84} />
			<Markdown source={travelInput85} />
			<Markdown source={travelInput86} />
			<Markdown source={travelInput87} />
			<br />
			<code>
				<Markdown source={travelInput88} />
			</code>
			<br />
			<Markdown source={travelInput89} />
			<Markdown source={travelInput90} />
			<br />
			<code>
				<Markdown source={travelInput91} />
			</code>
			<br />
			<Markdown source={travelInput92} />
			<br />
			<code>
				<Markdown source={travelInput93} />
			</code>
			<br />
			<Markdown source={travelInput94} />
			<Markdown source={travelInput95} />
			<Markdown source={travelInput96} />
			<br />
			<code>
				<Markdown source={travelInput97} />
			</code>
			<br />
			<Markdown source={travelInput98} />
			<Markdown source={travelInput99} />
			<Markdown source={travelInput100} />
			<Markdown source={travelInput101} />
			<Markdown source={travelInput102} />
			<Markdown source={travelInput103} />
			<Markdown source={travelInput104} />
			<Markdown source={travelInput105} />
			<Markdown source={travelInput106} />
			<Markdown source={travelInput107} />
			<Markdown source={travelInput108} />
			<Markdown source={travelInput109} />
			<Markdown source={travelInput110} />
			<Markdown source={travelInput111} />
			<Markdown source={travelInput112} />
			<Markdown source={travelInput113} />
			<Markdown source={travelInput114} />
			<Markdown source={travelInput115} />
			<Markdown source={travelInput116} />
			<Markdown source={travelInput117} />
			<Markdown source={travelInput118} />
			<Markdown source={travelInput119} />
			<Markdown source={travelInput120} />
			<Markdown source={travelInput121} />
		</div>
	</div>
);
