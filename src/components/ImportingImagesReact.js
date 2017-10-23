import React from 'react';
import Markdown from 'react-markdown';

import importingImagesReact from '../../images/articles/importingImagesReact.jpg';

const imagesInput1 = "## importing images in react"

const imagesInput2 = "as some of you who are following my posts may already know, i have been working on a `React` version of my **front end developer portfolio**. as much as i love my `Jekyll` version, i wanted to try new things. I also wanted to get going on my own projects using `React` while continuing my deep dive into various **React workflows**."

const imagesInput3 = "i'll be getting into the various changes i made to my developer toolkit related to the app's workflow in other articles. here i just want to talk about what i had to do to make images i used work properly in my app both `locally` AND `remotely`."

const imagesInput4 = "## webpack"

const imagesInput5 = "first i want to talk about what `webpack` tools you need in order to be able to add images to your **React** application. it's not just about what you need to do with `React`. if your workflow emanates from `webpack`, you have to take care of the `webpack` requirements first."

const imagesInput6 = "there are two native webpack loaders that load images: the `url-loader` and the `file-loader`. the `url-loader` is good for development. it works like the `file-loader`, but it returns a `DataURL` if the file is < 10000 bytes."

const imagesInput7 = "my `url-loader` configuration in `webpack-dev.config.js`:"

const imagesInput8 = `
    {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
            {
                loader: 'url-loader'
            },
        ]
    },`

const imagesInput9 = "for example, when i inspect my `footerTwitter.png` file in **Chrome DevTools**, it shows up in the following way:"

const imagesInput10 = `
    <li>
        <a href="https://twitter.com/letsbsocial1">
            <img class="footerTwiiter" src="data:image/png:base64, iVBOR....AZaPAJx1SWgAAAAASUVORK5CYII=" width="40" alt="twitter">
        </a>
    </li>`

const imagesInput11 = "that's because `footerTwitter.png` < 10,000 bytes. however, my `profileSmall.png` is > 10,000 bytes, and it shows up in Devtools like so:"

const imagesInput12 = `
    <div class="Home-content">
        <div class="Home-profile">
            <img src="0688089....png" class="Profile-image" alt="Profile image">
        </div>
    </div>`

const imagesInput13 = "i don't mind if my image shows up as an ugly, indeterminate file, but i don't like having it that way in production. i want to add a `[hash]` to the name, but i also want to keep the original name of the file so i can recognize it. that's where the `file-loader` comes in."

const imagesInput14 = "the `file-loader` is good for production. this is what my `file-loader` configuration looks like in my `webpack-prod.config.js`:"

const imagesInput15 = `
    {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name]-[hash:8].[ext]'
                },
            },
        ]
    },`

const imagesInput16 = "if i didn't add an `options` object, the names of my files would be those long ugly hashes followed by their native extension by default. but by adding the `name` property along with customizations, i am able to change the `behavior` of the `file-loader` and emit my own `custom filename`."

const imagesInput17 = "`[path]` refers to the path of the file relative to entry. the value of the entry property in my `webpack-prod.config.js` file is:"

const imagesInput18 = `
    entry: {
        bundle: './src/index.js',
    },`

const imagesInput19 = "Since everything needed for the application is included in `index.js`, and `index.js` is in the `src` directory, `[path]` refers to the path to a file relative to `src`. And since I am also using `[name]`, which refers to the name of ANY given file, and therefore includes ANY GIVEN FILE in `src`, all files in `src` are copied into the `dist` folder relative to `src`. Since the `images` directory is outside of `src`, it gets copied into `dist` as its original `images` directory including any sub-directories, in `dist`. No `src` directory is added before it. But there is a little glitch to this setup. There is a little file called `favicon.ico` which resides at the top of `src`. I need to add `|ico` to my `file-loader` `test` property so that webpack knows to load it into the application. I am also using `[path][name]` which ends up copying all files within `src` into `dist`. When I run a `production` build, webpack creates a `src` directory in `dist` that contains `favicon-[hash].ico`. I haven't found a way to prevent `src` from being created in `dist` yet, and I don't know that there is any. Others have encountered similar issues, and to my knowledge, a solution has not yet been found. Perhaps it's time for a `feature request`?"

const imagesInput20 = "`[hash:8]` refers to the hash that is added after the filename, and the number 8 refers to the length of the hash. the default length is just way too long! As for choosing a separator, the best practice seems to be either a `.` or a `-`. I personally like to clearly see my separator, so I went with `-`."

const imagesInput21 = "`.[ext]` refers to the file extension. By using `[ext]` instead of just one extension means that any file extension that has been defined in the `file-loader` `test` property will be included."

const imagesInput22 = "## react"

const imagesInput23 = "STRUCTURE is so important. Anyone who has created `Gulp` workflows for their `HTML5`, `JS`, and `CSS3` apps knows what I am talking about. Paths to images, which are related to the structure, are so important as well. Proper structure in both your `React App` and in your `webpack.config.js` also ensures that Webpack will correctly move your images into your dist folder, and provide the correct PATHS."

const imagesInput24 = "In order to be able to import images into `React components`, you have to make sure that locally the images reside within the same parent directory as the components OR that the images are exported from the directory they reside in so they can be imported into any of your components. In my `Portfolio React` application, my components folder looks like this:"

const imagesInput25 = `
    components/
        About.js
        Calendar.js
        Contact.js
        Footer.js
        Header.js
        Home.js
        Skills.js`

const imagesInput26 = "It resides in `src`:"

const imagesInput27 = `
    src/
    -components/
        About.js
        Calendar.js
        Contact.js
        Footer.js
        Header.js
        Home.js
        Skills.js
        Work.js`

const imagesInput28 = "And this is what my `images` folder looks like:"

const imagesInput29 = `
    images/
    -icons/
        footerGithub.png
        footerGoogle.png
        footerLinkedin.png
        footerTwitter.png
        github.svg
        googleplus.svg
        linkedin.svg
        twitter.svg
    -resume/
        mdcResume8217.pdf
    index.js
    profileSmall.png`

const imagesInput30 = "However, my `images` directory does not reside in the same directory as my components, the `components` directory. It resides in the `root` direcory."

const imagesInput31 = "Why? Because this was the only way in which `webpack` would exactly replicate my `image` directory structure. This is what I have in my `webpack-prod.config.js`:"

const imagesInput32 = `
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name]-[hash:8].[ext]'
                        },
                    },
                ]
            },
        ],
    },`

const imagesInput33 = "The `name` property refers to the `name` of an `image` file. `[path]` refers to the `path` to that image file STARTING with its `root` directory. I use this term loosely, as technically the `root` directory of an application is its topmost directory. In my example here, it would be `portfolio-react`. However, the `src` directory, where `webpack` extracts the data it needs to bundle the files our applications depend on to run, and then the rest of the path to a file is what is replicated in our `destination` folder in `production`, i.e. `dist`. So if the path to an image in development was ```src/images/img.jpg```, it would replicate to the `dist` directory in the same way but with `dist` as the topmost directory: `dist/src/images/img.jpg`. That just would be too weird and would not work!"

const imagesInput34 = "By placing the `images` directory outside of `src` in `root`, the images directory was replicated in the following way in `dist`:"

const imagesInput35 = `
    dist/
        -images/
            profileSmall-0688089a.png
            -icons/
                footerGithub-8d086876.png
                footerGoogle-c7c39c36.png
                footerLinkedin-9a80860c.png
                footerTwitter-cf5ffa5b.png
                github-ff66eb8e.svg
                googleplus-603de14e.svg
                linkedin-bc8e55bb.svg
                twitter-93a9fd6a.svg
            -resume/
                mdcResume8217-17c81764.pdf
        -src/
            favicon-08080867.ico`

const imagesInput36 = "I created a little `script` in my `package.json` to get rid of the source folder after running a new build:"

const imagesInput37 = `
    "cleanSrc": "rimraf dist/src",`

const imagesInput38 = "I already had the `rimraf` npm package installed and use it for my `'clean': 'rimraf dist'` `script`, so it was easy to create another one."

const imagesInput39 = "There is a last and crucial step that was needed in order for the loading of my images to work properly in my `Portfolio React` app, since the components and the images directory did not reside in the same directory. I created an `index.js` file within the images directory. It consisted of exporting all files within the `images` directory and any of its `sub-directories`:"

const imagesInput40 = `
    export profileSmall from './profileSmall.png';

    export mdcResume8217 from './resume/mdcResume8217.pdf';

    export linkedin from './icons/linkedin.svg';
    export googleplus from './icons/googleplus.svg';
    export github from './icons/github.svg';
    export twitter from './icons/twitter.svg';

    export footerTwitter from './icons/footerTwitter.png';
    export footerGithub from './icons/footerGithub.png';
    export footerGoogle from './icons/footerGoogle.png';
    export footerLinkedin from './icons/footerLinkedin.png';`

const imagesInput41 = "If I hadn't done this last step, my images would not have appeared! I also would not have been able to import them into my components in the following (and proper) way:"

const imagesInput42 = `
    import React from 'react';
    import Typist from 'react-typist';

    import linkedin from '../../images/icons/linkedin.svg';
    import googleplus from '../../images/icons/googleplus.svg';
    import github from '../../images/icons/github.svg';
    import twitter from '../../images/icons/twitter.svg';

    export const Contact = () => (
    <div className="Contact-content">
        <div className="contact-social">
            <h2 className="title-social">Follow me</h2>
            <ul>
                <li>
                    <a href="https://twitter.com/letsbsocial1" target="_blank">
                        <img className="twitter" src={twitter} width="40" alt="twitter"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/interglobalmedia" target="_blank">
                        <img className="github" src={github} width="40" alt="github"/>
                    </a>
                </li>
                <li>
                    <a href="https://plus.google.com/u/0/110861192597778984723" target="_blank">
                        <img className="google-plus" src={googleplus} width="40" alt="google plus"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/mariacampbell/" target="_blank">
                        <img className="linkedin" src={linkedin} width="40" alt="linkedin"/>
                    </a>
                </li>
            </ul>
            <div className="follow">
                <li>
                    <a href="https://medium.com/@letsbsocial1" target="_blank">Medium</a>
                </li>
                <br/>
                <li>
                    <a href="http://www.mariadcampbell.com/" target="_blank">Dev. Blog</a>
                </li>
                <li>
                    <a href="http://interglobalmedianetwork.com/" target="_blank">co. blog</a>
                </li>
            </div>
            <div className="email">
                <h2 className="title-social">Email</h2>
                <li>
                    <a href="mailto:interglobalmedia@gmail.com">interglobalmedia@gmail.com</a>
                </li>
            </div>
            <div className="contribute">
                <h2 className="title-social">Contributor to</h2>
                <li>
                    <a href="https://blog.hellojs.org/" trget="_blank">hello.js</a>
                </li>
                <br/>
                <li>
                    <a href="https://dev.to/letsbsocial1" target="_blank">The Practical Dev</a>
                </li>
            </div>
        </div>
    </div>
);`

const imagesInput43 = "And presto! You have structured your `React` application in such a way that `React` correctly interprets your image files. This ensures that you can import them into your components. AND you have successfully configured your `webpack-dev.js` and `webpack-prod.config.js` so that it loads all your images and image `types` correctly into your `React` application's development AND production builds."

const imagesInput44 = "**related resources:**"

const imagesInput45 = "[portfolio react app on github](https://github.com/interglobalmedia/portfolio-react)"

const imagesInput46 = "[webpack url-loader](https://webpack.js.org/loaders/url-loader/)"

const imagesInput47 = "[webpack file-loader](https://webpack.js.org/loaders/file-loader/)"

export const ImportingImagesReact = () => (
	<div className="images-content">
		<h2>importing images in react</h2>
		<img src={importingImagesReact} />
		<div className="images-markdown">
			<Markdown source={imagesInput1} />
			<div className="meta">
				<div className="post-date-meta">posted on</div>
				<div className="pub-date-meta">oct 12, 2017</div>
			</div>
			<Markdown source={imagesInput2} />
			<Markdown source={imagesInput3} />
			<Markdown source={imagesInput4} />
			<Markdown source={imagesInput5} />
			<Markdown source={imagesInput6} />
			<Markdown source={imagesInput7} />
			<br />
			<code>
				<Markdown source={imagesInput8} />
			</code>
			<br />
			<Markdown source={imagesInput9} />
			<br />
			<code>
				<Markdown source={imagesInput10} />
			</code>
			<br />
			<Markdown source={imagesInput11} />
			<br />
			<code>
				<Markdown source={imagesInput12} />
			</code>
			<br />
			<Markdown source={imagesInput13} />
			<Markdown source={imagesInput14} />
			<br />
			<code>
				<Markdown source={imagesInput15} />
			</code>
			<br />
			<Markdown source={imagesInput16} />
			<Markdown source={imagesInput17} />
			<br />
			<code>
				<Markdown source={imagesInput18} />
			</code>
			<br />
			<Markdown source={imagesInput19} />
			<Markdown source={imagesInput20} />
			<Markdown source={imagesInput21} />
			<Markdown source={imagesInput22} />
			<Markdown source={imagesInput23} />
			<Markdown source={imagesInput24} />
			<br />
			<code>
				<Markdown source={imagesInput25} />
			</code>
			<br />
			<Markdown source={imagesInput26} />
			<br />
			<code>
				<Markdown source={imagesInput27} />
			</code>
			<br />
			<Markdown source={imagesInput28} />
			<Markdown source={imagesInput29} />
			<br />
			<code>
				<Markdown source={imagesInput30} />
			</code>
			<br />
			<Markdown source={imagesInput31} />
			<br />
			<code>
				<Markdown source={imagesInput32} />
			</code>
			<br />
			<Markdown source={imagesInput33} />
			<Markdown source={imagesInput34} />
			<br />
			<code>
				<Markdown source={imagesInput35} />
			</code>
			<br />
			<Markdown source={imagesInput36} />
			<br />
			<code>
				<Markdown source={imagesInput37} />
			</code>
			<br />
			<Markdown source={imagesInput38} />
			<Markdown source={imagesInput39} />
			<br />
			<code>
				<Markdown source={imagesInput40} />
			</code>
			<br />
			<Markdown source={imagesInput41} />
			<br />
			<code>
				<Markdown source={imagesInput42} />
			</code>
			<br />
			<Markdown source={imagesInput43} />
			<Markdown source={imagesInput44} />
			<Markdown source={imagesInput45} />
			<Markdown source={imagesInput46} />
			<Markdown source={imagesInput47} />
		</div>
	</div>
);
