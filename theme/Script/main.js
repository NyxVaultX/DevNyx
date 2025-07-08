// Block right-click context menu (view source)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+Shift+C, Ctrl+P
// and other common devtools shortcuts
document.addEventListener('keydown', function(e) {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && (e.key === 'U' || e.key === 'S' || e.key === 'P'))
    ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
});

// Block opening devtools by resizing window (for some browsers)
setInterval(function() {
    if (window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160) {
        document.body.innerHTML = '<h2 style="color:#fff;text-align:center;margin-top:20vh;">DevTools is blocked.</h2>';
    }
}, 1000);
