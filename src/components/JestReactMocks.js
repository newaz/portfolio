import React from 'react';
import Markdown from 'react-markdown';

import reactJest from '../../images/articles/reactJest.jpg';

const jestInput1 = "## jest, react, and mocks"

const jestInput2 = "i use facebook's `jest` to test my **react** applications. yesterday, i ran a test to make sure that the changes i made to my `Work` component passed in my **portfolio react** app. it did not! but as indicated in the `iTerm2` console, it was not because of any errors in the `Work` component. tt was because i am using a `.pdf` file in my `About` component, and `jest` does not take kindly to it."

const jestInput3 = `
    npm run test

    ✹ ✭

    > react-universal-blog-app@1.0.0 test /Users/mariacam/Development/portfolio-react
    > jest

    PASS src/sum.test.js
    FAIL src/App.test.js
    ● Test suite failed to run

    /Users/mariacam/Development/portfolio-react/images/resume/mdcResume8217.pdf:1
    ({"Object.":function(module,exports,require,__dirname,__filename,global,jest){%PDF-1.3
    ^

    SyntaxError: Unexpected token %

    at ScriptTransformer._transformAndBuildScript (node_modules/jest-runtime/build/script_transformer.js:305:1)`

const jestInput4 = "i include it in my webpack configs so that `webpack` knows to load it:"

const jestInput5 = `
    // in webpack-dev.config.js
    { test: /\.(pdf|jpg|png|gif|svg|ico)$/, use: [ { loader: 'url-loader', options: { limit: 100000 } }, ]},


    // in webpack-prod.config.js
    { test: /\.(jpg|png|gif|svg|pdf|ico)$/, use: [ { loader: 'file-loader', options: { name: '[path][name]-[hash:8].[ext]' }, }, ]},`

const jestInput6 = "then why was this happening? i mock out files for `Jest` to ignore in my package.json, so i went to see what types of files i ***had*** included there:"

const jestInput7 = `
    "jest": {
        "setupFiles": [
            "raf/polyfill"
        ],
        "moduleNameMapper": {
            "\\.(|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
            "\\.(css|less)$": "identity-obj-proxy"
        }
    },`

const jestInput8 = "apparently i hadn't included `.pdf`! that was because i had added that asset much later, and didn't think to add it to my `jest` configuration in `package.json`. that resulted in my test failing. i added `pdf` to the mix:"

const jestInput9 = `
    "jest": {
        "setupFiles": [
            "raf/polyfill"
        ],
        "moduleNameMapper": {
            "\\.(pdf|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
            "\\.(css|less)$": "identity-obj-proxy"
        }
    },`

const jestInput10 = "then i ran `npm run test` in iTerm2 again. and guess what? my test passed!"

const jestInput11 = "so if you are using **jest** to run tests in your **react** application, make sure that you mock out certain types of assets that would otherwise cause your tests to fail! i have included links to resources related to this topic at the end of the article."

const jestInput12 = "happy **react** testing with **jest**!"

const jestInput13 = "**telated resources:**"

const jestInput14 = "[React workflows without Create React App](https://interglobalmedia.github.io/react-workflow-presentation/)"

const jestInput15 = "[Jest and webpack](https://facebook.github.io/jest/docs/en/webpack.html)"

const jestInput16 = "[Handling Static Assets with Jest](https://facebook.github.io/jest/docs/en/webpack.html#content)"

const jestInput17 = "[Testing React Apps With Jest](https://facebook.github.io/jest/docs/en/tutorial-react.html#content)"

export const JestReactMocks = () => (
	<div className="jest-content">
		<h2>jest, react, and mocks</h2>
		<img src={reactJest} />
		<div className="jest-markdown">
			<Markdown source={jestInput1} />
			<div className="meta">
				<div className="post-date-meta">posted on</div>
				<div className="pub-date-meta">oct 12, 2017</div>
			</div>
			<Markdown source={jestInput2} />
			<br />
			<code>
				<Markdown source={jestInput3} />
			</code>
			<br />
			<Markdown source={jestInput4} />
			<br />
			<code>
				<Markdown source={jestInput5} />
			</code>
			<br />
			<Markdown source={jestInput6} />
			<br />
			<code>
				<Markdown source={jestInput7} />
			</code>
			<br />
			<Markdown source={jestInput8} />
			<br />
			<code>
				<Markdown source={jestInput9} />
			</code>
			<br />
			<Markdown source={jestInput10} />
			<Markdown source={jestInput11} />
			<Markdown source={jestInput12} />
			<Markdown source={jestInput13} />
			<Markdown source={jestInput14} />
			<Markdown source={jestInput15} />
			<Markdown source={jestInput16} />
			<Markdown source={jestInput17} />
		</div>
	</div>
);
