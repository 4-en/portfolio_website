<script>
  import { Link } from 'svelte-routing';
</script>

<style>
  header {
    background-color: white;
    color: white;
    padding: 10px;
  }

  nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  nav :global(a) {
    color: purple;
    text-decoration: none;
    transition: border-bottom 0.3s;
    border-bottom: 1px solid transparent;
  }

  nav :global(a):hover {
    border-bottom: 1px solid purple;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 960px;
  }
</style>

<header>
  <div class="header-content">
    <nav>
      <Link to="/">Home</Link>
      <a href="https://github.com/4-en">GitHub</a>
      <a href="http://aiko.lol">Aiko</a>
      <Link to="/about">About</Link>
    </nav>
  </div>
</header>