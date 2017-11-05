import React from 'react';
import Markdown from 'react-markdown';

import gitLogo2Color from '../../images/articles/gitLogo2Color.png';

const ghPagesInput1 = '## deploying to gh pages with git subtree'

const ghPagesInput2 = 'so i just completed a todo app the other day using `React`. this was the second time i followed the course “build your first production quality react application” on [egghead.io](https://egghead.io/). the first time i followed the course exactly, using `create-react-app`. however, i kept on encountering errors in the console. probably some of them were due to errors on my part, but some definitely related to create-react-app. and the thing is, i wasn’t able to figure out what the issue was without running the eject command to see what was under the hood. and if i had done that, there was no going back! well, that just didn’t sit well with me. i decided to learn more about `Webpack 2+` so that i could start using the new features it had to offer to create my own `React` workflow, thereby only adding features that i needed. i love creating my own automation processes for my workflows. i have worked hard at creating seamless processes for regular `ES6+` `JavaScript` applications using `Gulp`, `templating engines`, and `webpack`. call me nerdy, but i find it a lot of fun and extremely useful! i am yet to take a deep dive into a more complex workflow for `Hugo` (this site is built on it), but that will eventually happen as well.'

const ghPagesInput3 = 'while on this journey during the advent of `Webpack 2+`, i came across a great course called “Webpack 2: The Complete Developer’s Guide” by stephen grider on udemy. it didn’t cover EVERYTHING, but it definitely provides a solid foundation for getting to know `webpack 2`’s new features. these changes were of course in response to the great overhaul that took place in `JavaScript` with `ES6+`. i was a bit sceptical at first, because i thought that nothing could replace the modularity of the `Gulp` workflow. but, after getting to know `Webpack 2` better, and getting to know `React` a bit, i came to realize that a `Webpack 2+` workflow was much better suited to `React` than a `Gulp` workflow. developers such as stephen grider used to use `Gulp` with `React`, and switched over to exclusively using `Webpack` when version 2 was introduced. that says something!'

const ghPagesInput4 = 'so as i got to know the new `Webpack` and `React` better, i was introduced to new `Git` commands as well. i was introduced to a different and more efficient way of deploying to Github’s `gh-pages`, which was awesome!'

const ghPagesInput5 = 'when i had first started using `gh-pages` a few years ago, i would create a `gh-pages` branch, checkout into it, remove the files and folders i didn’t need or that were preventing successful deployment of the project, and then push the project to the remote `gh-pages` branch. each time i would make a change in my master branch, i would go into the `gh-pages` branch, do a `git rebase master` to incorporate changes made in master into `gh-pages`, and then push those changes to the remote `gh-pages` branch. then when i started creating much more complex `JavaScript` applications, i found this approach to be cumbersome and a time waster. i looked for alternatives. that’s how i got introduced to `Gulp`. when i mastered the `Gulp` workflow using `Webpack` was also when i decided to take on `React`. this was around the time when `Webpack 2` was released. using `Webpack` without `Gulp` meant tweaking my deployment to `gh-pages`. with `Gulp`, i used the npm package `gulp-gh-pages`, and created a `Gulp` deploy task with `deploy.js`. but when i started using `Webpack` without `Gulp` for my `React` projects, i had to revisit my approach.'

const ghPagesInput6 = 'after much research and learning, i came across git subtree. i have to say, i am really loving it. and it’s the fastest deployment process to gh-pages i have come across so far!'

const ghPagesInput7 = 'this is the way it works:'

const ghPagesInput8 = '* first complete your project so that it’s production ready for deployment to your `gh-pages` site.'

const ghPagesInput9 = '* next, run the command `git checkout -b gh-pages`. this will create a new branch `gh-pages` and check you out to the new `gh-pages` branch with a single command.'

const ghPagesInput10 = '* you need to make sure that you push an empty branch to your remote `gh-pages` branch. to achieve that, run the `git rm -rf .` command. `rm` means remove, and `r` stands for recursive. `f` stands for force. And `.` means everything in root. in other words, all your folders in your project and all the files within those folders. sometimes `rm -r` just doesn’t cut it, so you have to run `rm -rf`. `rm -rf .` gets rid of everything in a single command.'

const ghPagesInput11 = '* next you have to stage and then commit those changes. you can stage and commit along with a commit message all in one command:'

const ghPagesInput12 = `
	git commit -am "First commit to gh-pages branch"`

const ghPagesInput13 = 'the `a` in `am` is short for git add, which stages your changes, and the `m` is short for `git commit -m`. also, make sure that you remember to have open and closing quotes for your commit message, otherwise you will be held hostage in the Terminal window. if by any chance that does happen, you can close your instance of the Terminal window with the command `ctrl + c` on your keyboard. it exits the prompt > that appears when you haven’t added a closing quote. however, `Bash/zsh` does allow you to enter the closing quote after the > prompt. then hit return. to learn more about exiting your git commit message, please visit this StackOverflow thread: [How do I exit my git commit message?](https://stackoverflow.com/questions/26228848/how-do-i-exit-my-git-commit-message-im-not-in-the-vim-i-used-the-commit-m).'

const ghPagesInput14 = '* now you are ready to push these changes to your remote `gh-pages` branch. you can do so with `git push origin gh-pages`.'

const ghPagesInput15 = '* next we need to establish our `git subtree` in order for the process to work. we first have to go back into the master branch. we do that by running the command `git checkout master`. the great thing about `git subtree` as with `gulp-gh-pages`, is we don’t have to be in the `gh-pages` branch in order to deploy to remote! cool, right? and a big time saver. so our crucial git command which we run next is:'

const ghPagesInput16 = `
	git push origin \`git subtree --split --prefix dist gh-pages\`:gh-pages –force`

const ghPagesInput17 = 'now what does this all mean? first of all, a `git subtree` allows you to insert any repository as a subdirectory of another one. It allows sub-projects to be included within a subdirectory of the main project, optionally including the sub-project’s entire history. In our case here, the subdirectory is the `dist` folder being pushed from the `master` branch to the remote `gh-pages` branch. The sub-projects are the files within the `dist` folder. a `subtree` is simply a subdirectory that can be committed to, branched, and merged along with your project any way you want. that being said, let’s look at the rest of the command. we are creating a `git subtree` out of our `dist` folder located in the root of our project, and `--split` does exactly what it sounds like. it is splitting away `dist` from the rest of the project transforming it into a subdirectory. `--prefix dist` means that you are signaling that `dist` is the directory in your project that has been selected as the folder to be made into the subdirectory that is being pushed to the remote `gh-pages` branch. and only what is contained in that subdirectory will be pushed to `gh-pages`. `:gh-pages --force` means that you are forcing the push of the `gh-pages` branch to the `remote gh-pages` branch at `origin`.'

const ghPagesInput18 = 'since you are likely to make changes to your project in the future and don’t want to continuously write a long command like `git subtree push --prefix dist origin gh-pages`, you can add a local script in your `package.json`. i created the following:'

const ghPagesInput19 = `
	"deploy": "npm run build && git subtree push --prefix dist origin gh-pages"`

const ghPagesInput20 = 'i took it up a notch more. i combined my `build script` with my `deploy script`. that way, whenever i make changes to my project, i first run the build command which entails deleting the previous `dist` build, replacing it with the `current` build, and then pushing it to the remote `gh-pages` branch. this ensures that your build is up to date with your latest changes in your project.'

const ghPagesInput21 = 'so not only has my coding evolved over time, but my devops skills have evolved as well. it reflects the need for greater workflow efficiency with more complex applications.'

const ghPagesInput22 = 'however, i cannot stress enough the need to understand every single aspect of commands that you implement. you need to know what you are doing, and not blindly execute commands focusing on the end goal and ignoring the process. otherwise, you will not grow as a developer! i also can’t emphasize enough how important it is to master `Git` AND to master the `Command Line` in Terminal. `Git` for the distributed version control, and `Command Line` so that you never have to leave the Terminal window. a great time saver. lastly, practice makes perfect! or at least … nearly so!'

const ghPagesInput23 = 'happy coding!'

const ghPagesInput24 = '**related links:**'

const ghPagesInput25 = '[one line deployment of your site to gh-pages](http://www.damian.oquanta.info/posts/one-line-deployment-of-your-site-to-gh-pages.html)'

const ghPagesInput26 = '[the power of git subtree](https://developer.atlassian.com/blog/2015/05/the-power-of-git-subtree/)'

const ghPagesInput27 = '[webpack 2: the complete developer’s guide](https://www.udemy.com/webpack-2-the-complete-developers-guide/learn/v4/overview)'

export const GhPagesGitSubtree = () => (
	<div className="subtree-content">
		<h2>deploying to gh pages with git subtree</h2>
		<img src={gitLogo2Color} />
		<div className="subtree-markdown">
			<Markdown source={ghPagesInput1} />
			<div className="meta">
				<div className="post-date-meta">posted on</div>
				<div className="pub-date-meta">aug 29, 2017</div>
			</div>
			<Markdown source={ghPagesInput2} />
			<Markdown source={ghPagesInput3} />
			<Markdown source={ghPagesInput4} />
			<Markdown source={ghPagesInput5} />
			<Markdown source={ghPagesInput6} />
			<Markdown source={ghPagesInput7} />
			<Markdown source={ghPagesInput8} />
			<Markdown source={ghPagesInput9} />
			<Markdown source={ghPagesInput10} />
			<Markdown source={ghPagesInput11} />
			<br />
			<code>
				<Markdown source={ghPagesInput12} />
			</code>
			<br/>
			<Markdown source={ghPagesInput13} />
			<Markdown source={ghPagesInput14} />
			<Markdown source={ghPagesInput15} />
			<br />
			<code>
				<Markdown source={ghPagesInput16} />
			</code>
			<br />
			<Markdown source={ghPagesInput17} />
			<Markdown source={ghPagesInput18} />
			<br />
			<code>
				<Markdown source={ghPagesInput19} />
			</code>
			<br />
			<Markdown source={ghPagesInput20} />
			<Markdown source={ghPagesInput21} />
			<Markdown source={ghPagesInput22} />
			<Markdown source={ghPagesInput23} />
			<Markdown source={ghPagesInput24} />
			<Markdown source={ghPagesInput25} />
			<Markdown source={ghPagesInput26} />
			<Markdown source={ghPagesInput27} />
		</div>
	</div>
)
