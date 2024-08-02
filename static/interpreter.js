// JavaScript interpreter.js
const htmlEditor = CodeMirror(document.getElementById('html-editor'), {
    mode: 'htmlmixed',
    lineNumbers: true,
    theme: 'darcula',
    autoCloseTags: true,
    matchTags: { bothTags: true }
});

const cssEditor = CodeMirror(document.getElementById('css-editor'), {
    mode: 'css',
    lineNumbers: true,
    theme: 'darcula',
    autoCloseBrackets: true
});

const jsEditor = CodeMirror(document.getElementById('js-editor'), {
    mode: 'javascript',
    lineNumbers: true,
    theme: 'darcula',
    autoCloseBrackets: true
});

const viewPage = document.getElementById('view-page');

function updateViewPage() {
    const htmlCode = htmlEditor.getValue();
    const cssCode = cssEditor.getValue();
    const jsCode = jsEditor.getValue();

    // Update the view-page content with HTML and apply CSS styles
    viewPage.innerHTML = `<style>${cssCode}</style>${htmlCode}`;

    // Execute JavaScript code
    const script = document.createElement('script');
    script.textContent = jsCode;
    viewPage.appendChild(script);
}

// Bind input events to the CodeMirror editors
htmlEditor.on('change', updateViewPage);
cssEditor.on('change', updateViewPage);
jsEditor.on('change', updateViewPage);

// Initial update
updateViewPage();
