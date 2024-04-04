<script>
	import { Router, Route } from "svelte-routing";
	import Home from "./pages/Home.svelte";
	import Project from "./pages/Project.svelte";
	import About from "./pages/About.svelte";
	import Header from "./components/Header.svelte";
</script>

<Router>
	<Header />
	<div class="content">
		<Route path="/" component={Home} />
		<Route path="/project" component={Project} />
		<Route path="/about" component={About} />
	</div>
</Router>

<style>
	.content {
		margin: 0 auto;
		max-width: 960px; /* Adjust this value based on your design preference */
		padding: 20px; /* Provides some padding around the content */
	}
</style>
