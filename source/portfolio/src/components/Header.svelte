<script>
  import { Link } from 'svelte-routing';
  import { getTheme, toggleTheme as toggleThemeUtil } from '../utils.js';

  import { writable } from 'svelte/store';

  let theme = writable(getTheme());

  $: currentTheme = $theme;

  function toggleTheme() {
    toggleThemeUtil();
    theme.update(() => getTheme());
  }


</script>

<style>
  header {
    background-color: var(--background-color-secondary);
    color: var(--text-color-primary);
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

  button {
    background-color: transparent;
    border: none;
    color: purple;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem;
  }
</style>

<header>
  <div class="header-content">
    <nav>
      <Link to="/">Home</Link>
      <a href="https://github.com/4-en">GitHub</a>
      <a href="http://aiko.lol">Aiko</a>
      <Link to="/about">About</Link>
      <button on:click={toggleTheme}>
        {currentTheme === 'light' ? 'Dark' : 'Light'}
      </button>
    </nav>
  </div>
</header>