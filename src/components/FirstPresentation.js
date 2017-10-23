import React from 'react';
import Markdown from 'react-markdown';

import reactWorkflows from '../../images/articles/reactWorkflows.jpg';

const presentationInput1 = "## my first presentation"

const presentationInput2 = "tonight i gave my first tech presentation (ever), and it was about creating your own ***React workflow*** without using create-react-app. i was nervous at first, but then after a minute or two, i relaxed and rode with it. 17 minutes into it, i was signaled that i only had 5 minutes left, and i still had 11 minutes to go. i had timed it quite a few times, and brought it down to 28 minutes. yikes! well, i was as cool as a cucumber and skipped part of it to move onto the section on configuring **POSTCSS** and then onto configuring **Jest** for **React** after that. luckily, i wrote the presentation in such a way that even though i might have skipped over a part of it, people still could refer to the whole thing online without missing out on anything."

const presentationInput3 = "i know that to most developers, talking about creating your ***own*** **React workflow** from scratch without the help of create-react-app, and dissecting each step might not be at all ***'sexy'***. however, i felt very strongly about presenting it. i know from my own experience that developing a good automated workflow is hard, and takes a long time to master and refine. it is also the area that developers don't want to spend too much time on to understand what is under the hood. we search for quick boilerplates or completed workflows we can copy from without really understanding why and how it works. workflow deep dives mean taking time away from learning ***sexy*** **JS**, **JSX**, **React**, or the latest in **GraphQL** or **Apollo**. But these workflows save us so much time in the long run. understanding how and why these automations work also permits us to expand our developer toolkits and horizons."

const presentationInput4 = "i felt it important to share some of the webpack fundamentals related to **React** that i amassed over time with others so that they could open their eyes to the possibilities available to them. and i am very grateful to the ReactNYC team for giving me the opportunity to present tonight!"

const presentationInput5 = "[react workflows without create react app](https://interglobalmedia.github.io/react-workflow-presentation/)"

export const FirstPresentation = () => (
	<div className="presentation-content">
		<h2>my first presentation</h2>
		<img src={reactWorkflows} />
		<div className="presentation-markdown">
			<Markdown source={presentationInput1} />
			<div className="meta">
    			<div className="post-date-meta">posted on</div>
    			<div className="pub-date-meta">sep 28, 2017</div>
    		</div>
			<Markdown source={presentationInput2} />
			<Markdown source={presentationInput3} />
			<Markdown source={presentationInput4} />
			<Markdown source={presentationInput5} />
		</div>
	</div>
);
