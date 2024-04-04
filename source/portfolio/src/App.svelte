<script>
  import { Router, Route } from 'svelte-routing';
  import Home from './pages/Home.svelte';
  import Project from './pages/Project.svelte';
  import About from './pages/About.svelte';
  import Header from './components/Header.svelte';
</script>

<Router>
  <Header />
  <Route path="/" component={Home} />
  <Route path="/project" component={Project} />
  <Route path="/about" component={About} />
</Router>