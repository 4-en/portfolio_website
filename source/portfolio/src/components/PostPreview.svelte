<script>
    export let image_url;
    export let title;
    export let date;
    export let content;
  </script>
  
  <div class="post-preview show-area">
      <div class="preview-image show-area">
          <img src={image_url} alt={title} />
      </div>
      <div class="preview-content show-area">
          <h2>{title}</h2>
          <p>{content}</p>
      </div>
      <div class="preview-date show-area">
          <p>{date}</p>
      </div>
  </div>
  
  <style>
      .post-preview {
          display: flex;
          align-items: stretch; /* Change from center to stretch to fill the height */
          justify-content: stretch; /* Ensures elements stretch to fill the space */
          width: 100%; /* Ensures the container fills its parent's width */
          padding: 0px;
          margin: 10px;
          border: 1px solid transparent; /* Add a border to visualize the area */
          box-sizing: border-box; /* Ensures padding and border are included in the width */
      }
      
      .preview-image, .preview-content, .preview-date {
          display: flex; /* Makes these containers flex containers too */
          align-items: center; /* Centers items vertically */
          justify-content: center; /* Centers items horizontally (for date after rotation) */
          flex-grow: 1; /* Allows the containers to expand */
      }
      
      .preview-image img {
          width: 100%; /* Makes the image fill its container */
          height: auto;
      }
      
      .preview-content {
          flex-grow: 2; /* Gives the content area more room to expand */
          padding: 20px; /* Adds some padding around the content */
          flex-direction: column; /* Stacks the title and content vertically */
          align-items: flex-start; /* Aligns the title and content to the left */
      }
      
      .preview-date {
          writing-mode: vertical-lr; /* Rotates the date */
          transform: rotate(180deg); /* Corrects the orientation */
          flex-grow: 0; /* Prevents the date from growing */
          flex-basis: 20px; /* Sets a base width for the date area */
          padding: 0 10px; /* Adjust padding to ensure it fits and is aligned */
          box-sizing: border-box;
      }
  
      .show-area {
        background-color: #00000020; /* Slightly dark background to show the area */
      }
  </style>

