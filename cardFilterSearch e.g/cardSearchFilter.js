document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search').addEventListener('keyup', function() {
        let filterRegex = new RegExp('\\b' + this.value, 'gi');

        document.querySelectorAll('.cardscss').forEach(function(item) {
            item.classList.toggle('search-hide', !item.innerText.match(filterRegex));
        });
    });
});