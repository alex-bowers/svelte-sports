import Home from "./pages/Home.svelte"
import News from "./pages/News.svelte"
import Videos from "./pages/Videos.svelte"
import NotFound from "./pages/NotFound.svelte"

export default {
	// Exact path
	'/': Home,

	// Using named parameters, with last being optional
	'/news': News,

	// Wildcard parameter
	'/videos': Videos,

	// Catch-all
	// This is optional, but if present it must be the last
	'*': NotFound,
}
