import React from 'react';
import Markdown from 'react-markdown';

import stickyFooter from '../../images/articles/stickyFooter.jpg';

const stickyInput1 = "## flexbox, sticky footer, and react"

const stickyInput2 = "[initial look 👎]"

const stickyInput3 = "currently i am working on a **React** version of my **portfolio site**. i like my **Jekyll** version, but wanted to compare **ux** between **react** and **jekyll**. i also wanted to add animation and interactivity which were not present in my jekyll site."

const stickyInput4 = "i came across a design challenge pretty quickly into the project. the **'raised footer'** issue. pages which had little or no content meant a footer which failed to stay grounded to the bottom of the page. it was time to add the **Flexbox 'sticky footer'** solution developed by **philip walton**. suggestions on **github** that"

const stickyInput5 = `
    html, body {
        height: 100%;
    }`

const stickyInput6 = "would be enough is simply not true. just check out devices with irregularly great heights like kindle fire hd or not so irregular devices like nexus 10 and see what happens with your footer! better yet, check out your own empty or nearly empty pages!"

const stickyInput7 = "i also found that **react developers** seem to have a hard time translating traditional implementations of **flexbox** to **React DOM** configurations. i had that problem at first as well. but then i started examining the ***structure*** of my **React** application from the React point of view, and things became clear pretty quickly."

const stickyInput8 = "with a regular **HTML5**, **CSS3**, and **JavaScript** application, i would add the `Site` class to the `<body></body>` tag:"

const stickyInput9 = `
    <body class="Site"></body>
`

const stickyInput10 = "then i would add the `Site-content` class to a `<div></div>` i would create purely for the sake of the flexbox sticky footer:"

const stickyInput11 = `
    <body class="Site">
        <div class="Site-content"></div>
    </body>`

const stickyInput12 = "the structure of a **React** application, however, can confuse matters a bit at first. this is how my **React Portfolio**'s `index.html` looks like right now:"

const stickyInput13 = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="Maria D. Campbell">
        <title>Portfolio Site Built With React</title>
        <!-- CSS -->
        <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">
    </head>
    <body>
        <div id="root"></div>
    </body>
    </html>`

const stickyInput14 = "and this is what my `App.js` looks like:"

const stickyInput15 = `
    import React, { Component } from 'react';
    import {Header} from './components/Header';
    import {Main} from './components/Main';
    import {Footer} from './components/Footer';

    class App extends Component {
        render() {
            return (
                <div className="App Site">
                    <div className="Site-content">
                        <div className="App-header">
                            <Header />
                        </div>
                        <div className="main">
                            <Main />
                        </div>
                    </div>
                    <Footer />
                </div>
            );
        }
    }

    export default App;`

const stickyInput16 = "if i were to add the `Site` class to the `<body></body>` in `index.html` and then created a new `div` below it for the `Site-content` class, it would not work. why? because it would mean that the `<Footer />` component would end up being included, and that doesn't do."

const stickyInput17 = "so i had to determine what in `React` would act as the ***equivalent*** of the `<body></body` tag and the proceeding `<div></div>` tag."

const stickyInput18 = "forget about the `<body></body>` tag! tt's the `<div className='App'></div>` which is `React`'s `<body></body>` tag. then, i added a new `<div className='Site-content'></div>` below that. notice how the `<Footer />` component has been **isolated** from the rest of the **App's** ***structure***?"

const stickyInput19 = "lastly, i added the necessary `CSS` in my `_sticky-footer.css` `POSTCSS module`:"

const stickyInput20 = `
    :root {
        --space: 1.5em 0;
        --space: 2em 0;
    }

    .Site {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .Site-content {
        flex: 1 0 auto;
        padding: var(--space) var(--space) 0;
        width: 100%;
    }

    .Site-content:after {
        content: '\00a0';
        display: block;
        margin-top: var(--space);
        height: 0;
        visibility: hidden;
    }`

const stickyInput21 = "this is based on **philip walton's** `Solved By Flexbox/Sticky Footer`. try it out for yourself and let me know what you think."

const stickyInput22 = "happy coding!"

const stickyInput23 = "**related resources:**"

const stickyInput24 = "[solved by flexbox sticky footer](https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/)"

export const FlexboxStickyFooterReact = () => (
	<div className="sticky-content">
		<h2>flexbox, sticky footer, and react</h2>
		<img src={stickyFooter} />
		<div className="sticky-markdown">
			<Markdown source={stickyInput1} />
			<div className="meta">
    			<div className="post-date-meta">posted on</div>
    			<div className="pub-date-meta">oct 4, 2017</div>
    		</div>
			<Markdown source={stickyInput2} />
			<Markdown source={stickyInput3} />
			<Markdown source={stickyInput4} />
			<br />
			<code>
				<Markdown source={stickyInput5} />
			</code>
			<br />
			<Markdown source={stickyInput6} />
			<Markdown source={stickyInput7} />
            <Markdown source={stickyInput8} />
            <br />
            <code>
                <Markdown source={stickyInput9} />
            </code>
            <br />
            <Markdown source={stickyInput10} />
            <br />
            <code>
                <Markdown source={stickyInput11} />
            </code>
            <br />
            <Markdown source={stickyInput12} />
            <br />
            <code>
                <Markdown source={stickyInput13} />
            </code>
            <br />
            <Markdown source={stickyInput14} />
            <br />
            <code>
                <Markdown source={stickyInput15} />
            </code>
            <br />
            <Markdown source={stickyInput16} />
            <Markdown source={stickyInput17} />
            <Markdown source={stickyInput18} />
            <Markdown source={stickyInput19} />
            <br />
            <code>
                <Markdown source={stickyInput20} />
            </code>
            <br />
            <Markdown source={stickyInput21} />
            <Markdown source={stickyInput22} />
            <Markdown source={stickyInput23} />
            <Markdown source={stickyInput24} />
		</div>
	</div>
);
