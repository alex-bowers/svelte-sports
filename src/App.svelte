<script lang="ts">
	import axios, { AxiosResponse } from "axios"
	import Router from 'svelte-spa-router'
	import { onMount } from 'svelte'

	import routes from './routes'
	import { news } from "./store"
	import testData from "./test-data.js"

	onMount(async () => {
		await getNewsArticles()
	});

	function getNewsArticles() {
		const url: string = `${process.env.NEWS_URL}${process.env.NEWS_KEY}`

		// To save requests on the API, we can use some test data in development.
		if (process.env.isProd) {
			axios.get(url)
				.then(function (response: AxiosResponse) {
					news.set(response.data.articles)
				}).catch(function () {
					news.set([])
			})
		} else {
			news.set(testData.news)
		}
	}
</script>

<main>
	<div class="header">
		<h1>SVELTE SPORTS</h1>
		<nav>
			<ul>
				<li><a href="#/">Home</a></li>
				<li><a href="#/news">News</a></li>
				<li><a href="#/videos">Videos</a></li>
			</ul>
		</nav>
	</div>

	<Router {routes}/>
</main>

<style>
	main {
		padding: 1rem;
	}

	.header {
		border-bottom: 1px solid lightgrey;
		margin-bottom: 3rem;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		margin: 0;
	}

	nav ul {
		list-style: none;
		padding-inline-start: 0;
	}


	nav li {
		display: inline;
	}

	nav li a {
		color: black;
	}

	li + li {
		padding-left: 1rem;
	}

	@media (min-width: 1024px) {
		main {
			padding: 2rem 5rem;
		}

		.header {
			display: flex;
			align-items: baseline;
			margin-bottom: 5rem;
		}

		h1 {
			margin-right: 2rem
		}
	}
</style>
