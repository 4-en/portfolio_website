<script>
  import { Link } from "svelte-routing";
  import { getTheme, toggleTheme as toggleThemeUtil } from "../utils.js";

  import { writable } from "svelte/store";

  let theme = writable(getTheme());

  $: currentTheme = $theme;

  function toggleTheme() {
    toggleThemeUtil();
    theme.update(() => getTheme());
  }
</script>

<header>
  <div class="header-content">
    <nav>
      <Link to="/">Home</Link>
      <a href="https://github.com/4-en">GitHub</a>
      <a href="http://aiko.lol">Aiko</a>
      <Link to="/about">About</Link>
      <button on:click={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"}
      </button>
    </nav>
  </div>
</header>

<style>
  header {
    background-color: var(--background-color-secondary);
    color: var(--text-color-primary);
    padding: 10px;
  }

  /* If mobile, show header on bottom and make it sticky */
  /* Fade out when scrolling down */
  @media (max-width: 600px) {

    
    header {
      position: fixed;
      bottom: 0;
      width: 100%;
      box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* Optional: adds shadow for depth */
      transition: transform 0.3s ease; /* Smooth transition for hiding */
      z-index: 100; /* Ensure header is above other content */


    }

    /* Hide header when scrolling down */
    /* not supported in all browsers */
    @supports (animation-timeline: scroll()) {
      header {
        animation: moveOut linear;
        animation-range-start: 100px;
        animation-range-end: 200px;
        animation-timeline: scroll();
        animation-fill-mode: forwards;
      }
    }

    @keyframes moveOut {
      from {
        transform: translateY(0);
        opacity: 1;
      }
      to {
        transform: translateY(100%);
        opacity: 0;
      }
      
    }
  }

  nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  nav :global(*) {
    all: unset;
  }

  nav :global(*) {
    color: purple;
    text-decoration: none;
    transition: border-bottom 0.3s;
    border-bottom: 1px solid transparent;
    font-size: 1rem;
    cursor: pointer;
  }

  nav :global(*:not(:last-child)) {
    margin-right: 10px;
  }

  :global(.dark) nav :global(*) {
    color: white;
  }

  nav :global(*):hover {
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
