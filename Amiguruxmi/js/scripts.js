/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

// JavaScript pentru comutarea temei
document.getElementById('theme-toggle').addEventListener('click', () => {
    // Comută tema între luminoasă și întunecată
    document.body.classList.toggle('dark-mode');
    document.querySelector('.navbar').classList.toggle('dark-mode');
    document.querySelectorAll('.product-details-container').forEach(el => el.classList.toggle('dark-mode'));

    // Salvează preferința temei în localStorage
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);

    // Schimbă imaginea butonului în funcție de tema activă
    const themeButton = document.getElementById('theme-toggle');
    if (theme === 'dark') {
        themeButton.style.backgroundImage = "url('pics/theme-dark.png')"; // Imaginea pentru tema întunecată
    } else {
        themeButton.style.backgroundImage = "url('pics/theme.png')"; // Imaginea pentru tema luminoasă
    }
});

// La încărcarea paginii, setează tema pe baza preferinței salvate în localStorage
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').style.backgroundImage = "url('pics/theme-dark.png')";
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('theme-toggle').style.backgroundImage = "url('pics/theme.png')";
    }
});
