<script>
  import PostPreview from "../components/PostPreview.svelte";
</script>


<main>
  <h1>My Projects</h1>
  <div class="posts">
    <PostPreview
      image_url="https://via.placeholder.com/150"
      title="Project 1"
      date="2021-01-01"
      content="This is a description of project 1."
    />
    <PostPreview
      image_url="https://via.placeholder.com/150"
      title="Project 2"
      date="2021-01-02"
      content="This is a description of project 2."
    />
    <PostPreview
      image_url="https://via.placeholder.com/150"
      title="Project 3"
      date="2021-01-03"
      content="This is a description of project 3."
    />
  </div>
</main>