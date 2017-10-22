import React from 'react';
import Markdown from 'react-markdown';

import wikipediaViewer from '../../images/work/wikipediaViewer.jpg'

const wikiInput1 = "## wikipedia viewer"

const wikiInput2 = "### 🔎 description:"

const wikiInput3 = "* this was an intermediate project created for **free code camp**'s front end certification."

const wikiInput4 = "* as time wore on and i learned more on my own, i decided to upscale some projects, including this one. i added `modularization` and a `gulp workflow` (similar to the one described in my `simpleweather` project), and i revamped the visuals/functionality for the search bar. once you get a taste of what a `gulp workflow` does for you regarding your code and time saving, there is no going back!"

const wikiInput5 = "🔎 **What i needed to make happen in this program:**"

const wikiInput6 = "* user inputs a search query and submits."

const wikiInput7 = "* i need to take the text-area's input."

const wikiInput8 = "* query is used to get data from wikipedia."

const wikiInput9 = "* i need to create a connection to wiki."

const wikiInput10 = "* wiki returns `JSON`."

const wikiInput11 = "* data returned from `wikipedia` is structured on the page."

const wikiInput12 = "* i use that `JSON` to create elements."

const wikiInput13 = "* user can click an entry to visit the full article."

const wikiInput14 = "* each element has an `<a href=''>` wrapper."

const wikiInput15 = "🔎 **implementing autocomplete search using wikipedia opensearch api:**"

const wikiInput16 = "* **autocomplete search:** a search box that provides suggestions in a dropdown while typing the keywords in the text box."

const wikiInput17 = "* i used [wikipedia opensearch api](https://www.mediawiki.org/wiki/API:Opensearch) and [jquery autocomplete ui](http://jqueryui.com/autocomplete/)."

const wikiInput18 = "* making a [normal json request](http://stackoverflow.com/questions/3839966/can-anyone-explain-what-jsonp-is-in-layman-terms) to `wikipedia` would have resulted in a cross origin or cross site error `(CORS)` because `wikipedia` servers forbid `cross origin requests`. so instead, i did the following:"

const wikiInput19 = `
	function wikiViewer() {
        $('#searchterm').keyup(e => {
            // query variable
            const q = $("#searchterm").val();
            $.getJSON("http://en.wikipedia.org/w/api.php?callback=?",
            {
                // srsearch param: search for all page titles (or content)
                // that have this value. https://www.mediawiki.org/wiki/API:Search
                srsearch: q,
                action: "query",
                list: "search",
                format: "json"
            },
            data => {
                const el = \`Results for <b> \${q} </b>\`;
                $(".section").empty().append(el);
                $.each(data.query.search, (i, item) => {
                    $(".section").append(\`<div id='results'><a href='http://en.wikipedia.org/wiki/' \${encodeURIComponent(item.title)}> <h4> \${item.title} </h4>  \${item.snippet} </a></div>\`);
                    $("div #results a[href^='http://']").attr("target","_blank");
                });
            });
        });
	}`

const wikiInput20 = "* **[same-origin policy:](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)** restricts how a document or script loaded from one origin can interact with a resource from another origin. it is a critical security mechanism for isolating potentially malicious documents."

const wikiInput21 = "* normally when you make a `JSON` request, you would do the [following](http://stackoverflow.com/questions/3839966/can-anyone-explain-what-jsonp-is-in-layman-terms):"

const wikiInput22 = `
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // success
        };
    };

    xhr.open("GET", "somewhere.php", true);
    xhr.send();`

const wikiInput23 = "* instead, i used the `$.JSON ({})` in the `json format` to circumvent `same-origin policy`. for example, you are not allowed to make `AJAX requests` to a webpage perceived to be on a different server by the browser."

const wikiInput24 = "* the difference between a `JSON` response and a `JSONP` response (i use `JSONP`, which stands for `JSON Padding`), is that the `JSONP response object` is `passed as an argument to the callback function`:"

const wikiInput25 = `
	$.getJSON("http://en.wikipedia.org/w/api.php?callback=?",
    {
        // srsearch param: search for all page titles (or content)
        // that have this value. https://www.mediawiki.org/wiki/API:Search
        srsearch: q,
        action: "query",
        list: "search",
        format: "json"
    },`

const wikiInput26 = "* **JSON:**"

const wikiInput27 = `
	{
        "name": "wikipedia-viewer",
        "version": "0.0.2",
        "description": "A Wikipedia Search application",
        "main": "gulpfile.js",
        "scripts": {
            "styles": "gulp styles",
            "watch": "gulp watch",
            "webpack": "webpack",
            "scripts": "gulp scripts",
            "modernizr": "gulp modernizr",
            "build": "gulp build",
            "previewDist": "gulp previewDist",
            "deploy": "gulp deploy"
	    },`

const wikiInput28 = "* same as in your `package.json` file when you `install` and `use` `npm` in your workflows."

const wikiInput29 = "* the `JSONP` requests contain the `callback` parameter so the server knows the name of the function to wrap the response around."

const wikiInput30 = "* `srsearch: q, action: 'query', list: 'search', format: 'json'` are some of the available parameters for the `wikipedia opensearch api`."

const wikiInput31 = "* then i had to actually place the data into some `html` and also make sure that all old data from prior search is cleared to make way for a new search:"

const wikiInput32 = `
	}, data => {
        const el = \`Results for <b> \${q} </b>\`;
        $(".section").empty().append(el);
        $.each(data.query.search, (i, item) => {
            $(".section").append(\`<div id='results'><a href='http://en.wikipedia.org/wiki/\${item.title}' \${encodeURIComponent(item.title)}> <h4> \${item.title} </h4>  \${item.snippet} </a></div>\`);
            $("div #results a[href^='http://']").attr("target", "_blank");
        });
    });`

const wikiInput33 = "* `$('.section').empty()` empties `<div class='section'></div>` where the search results reside. `.append(el)` refers to the value of `el`, `Results for <b> ${q} </b>`. this is automatically appended whenever someone types a keyword in the search bar."

const wikiInput34 = "* the next section, starting with `$.each`, refers to the `html` for each result. when i went back as i was writing this post, i realized/remembered that links for the `divs` did not direct the user to the page associated with the particular keyword, but to the `wikipedia` main page. that's because i had ommitted to add `${item.title}` to `http://en.wikipedia.org/wiki/` within `<div=id='results'></div>`! who knows what i was thinking so long ago when i was first learning about `APIs` on my own. a lot has happened since then, and i have been lucky enough to come across some great online teachers, such as wes bos, for one, who have taught me ***how*** to think programmatically."

const wikiInput35 = "🔎 **implementing a fun and animated search bar with jquery and css3:**"

const wikiInput36 = "* the next step was to add a search bar (of course!). i didn't want to have just any ordinary one. i wanted an `animated` one! and i wanted to have a search icon as part of it. this is what i ended up with:"

const wikiInput37 = `
	function searchbarAnimate() {
        $('#new_search').on('focus', function() {
            $(this).parent('label').addClass('active');
        });
        $('#new_search').on('blur', function() {
            if($(this).val().length === 0) {
                $(this).parent('label').removeClass('active');
            }
        });
    }`

const wikiInput38 = "* this code resides in the `searchbarAnimate.js` module."

const wikiInput39 = "* when a user places the pointer in the search icon (input field) thus making the search bar `on focus` and ready for the next input, the class of `active` is applied to the search bar parent `<div class='center-inner'></div>`. this means that the search bar transforms into a rounded rectangle 200px wide, and the search icon disappears. the search icon also transforms into a reactangular, rounded search bar 200px wide (sans search icon) when `hovered`. when ***not*** hovered, the search bar transforms back to a search icon."

const wikiInput40 = "* when the user leaves the input field/search bar, the input field is `on blur`. if there are no characters in the search bar, the `active` class is removed. this also means that when the search bar is cleared of all characters and the user hits return, all search results disappear. only `Results for` is left. either one has to refresh the page in order for that to disappear, or leave the site and come back again to start afresh. this has to do with the line `$('.section').empty().append(el);` in the `wikiViewer.js` module. so even though `.section` has been emptied of all results, `Results for` is still appended."

const wikiInput41 = "[view wikipedia-viewer on github](http://interglobalmedia.github.io/wikipedia-viewer/)"

const wikiInput42 = "[source code](https://github.com/interglobalmedia/wikipedia-viewer)"

export const WikipediaViewer = () => (
	<div className="wiki-content">
		<h2>wikipedia viewer</h2>
		<img src={wikipediaViewer} />
		<div className="wiki-markdown">
			<Markdown source={wikiInput1} />
			<Markdown source={wikiInput2} />
			<Markdown source={wikiInput3} />
			<Markdown source={wikiInput4} />
			<Markdown source={wikiInput5} />
			<Markdown source={wikiInput6} />
			<Markdown source={wikiInput7} />
			<Markdown source={wikiInput8} />
			<Markdown source={wikiInput9} />
			<Markdown source={wikiInput10} />
			<Markdown source={wikiInput11} />
			<Markdown source={wikiInput12} />
			<Markdown source={wikiInput13} />
			<Markdown source={wikiInput14} />
			<Markdown source={wikiInput15} />
			<Markdown source={wikiInput16} />
			<Markdown source={wikiInput17} />
			<Markdown source={wikiInput18} />
			<br />
			<code>
				<Markdown source={wikiInput19} />
			</code>
			<Markdown source={wikiInput20} />
			<Markdown source={wikiInput21} />
			<Markdown source={wikiInput22} />
			<Markdown source={wikiInput23} />
			<Markdown source={wikiInput24} />
			<br />
			<code>
				<Markdown source={wikiInput25} />
				<br />
			</code>
			<br />
			<code>
				<Markdown source={wikiInput26} />
			</code>
			<br />
			<br />
			<code>
				<Markdown source={wikiInput27} />
			</code>
			<br />
			<Markdown source={wikiInput28} />
			<Markdown source={wikiInput29} />
			<Markdown source={wikiInput30} />
			<Markdown source={wikiInput31} />
			<br />
			<code>
				<Markdown source={wikiInput32} />
			</code>
			<br />
			<Markdown source={wikiInput33} />
			<Markdown source={wikiInput34} />
			<Markdown source={wikiInput35} />
			<Markdown source={wikiInput36} />
			<br />
			<code>
				<Markdown source={wikiInput37} />
			</code>
			<br />
			<Markdown source={wikiInput38} />
			<Markdown source={wikiInput39} />
			<Markdown source={wikiInput40} />
			<Markdown source={wikiInput41} />
			<Markdown source={wikiInput42} />
		</div>
	</div>
);
