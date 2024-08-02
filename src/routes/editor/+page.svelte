<script>
    import { onMount } from 'svelte';
  
    // Function to load the external scripts
    function loadScript(src, callback) {
      const script = document.createElement('script');
      script.src = src;
      script.onload = callback;
      document.head.appendChild(script);
    }
  
    // Function to load the external CSS
    function loadCSS(href) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  
    onMount(() => {
      loadCSS('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/codemirror.min.css');
      loadCSS('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/theme/material.min.css');
      loadCSS('https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css');
      loadCSS('/editors.css');
  
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/codemirror.min.js', () => {
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/mode/xml/xml.min.js', () => {
          loadScript('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/mode/css/css.min.js', () => {
            loadScript('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/mode/javascript/javascript.min.js', () => {
              loadScript('/interpreter.js');
            });
          });
        });
      });
    });
  </script>
  
  <style>
    /* Add any additional styles if necessary */
  </style>
  
  <div id="code-editors">
    <div class="html-editor">
      <div class="card-header">
        <img src="/icons/html.png" alt="">
        <span>HTML</span>
      </div>
      <div class="card-content" contenteditable="true" id="html-editor"></div>
    </div>
  
    <div class="css-editor">
      <div class="card-header">
        <img src="/icons/css.png" alt="">
        <span>CSS</span>
      </div>
      <div class="card-content" contenteditable="true" id="css-editor"></div>
    </div>
  
    <div class="js-editor">
      <div class="card-header">
        <img src="/icons/js.png" alt="">
        <span>JavaScript</span>
      </div>
      <div class="card-content" contenteditable="true" id="js-editor"></div>
    </div>
  </div>
  
  <div id="view-page"></div>
  