document.addEventListener('click', (e) => {
    const dropdownButton = e.target.matches('[data-dropdown-btn]');
    if (!dropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (dropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown');
        currentDropdown.classList.toggle('active')
    }
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})


const ham = document.querySelector('.ham');
const sideMenu = document.querySelector('.sidebar-mobile');
const closeMenu = document.querySelector('.sidebar-mobile>img');

const sideAnime = document.querySelectorAll('.sideAnime')
console.log(sideAnime)
sideAnime.forEach(animate => {
    animate.addEventListener('click', (e) => {
        sideMenu.classList.toggle('active')
    })
})
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.querySelector('.drop-toggle');
    var myElement = document.querySelector('.features-collapsed');

    toggleButton.addEventListener('click', function () {
        myElement.classList.toggle('visible');
        const arrow = document.querySelector('.drop-toggle>span');
        if (myElement.classList.contains('visible')) {
            arrow.innerHTML = '&#x25B2;'
        } else if (!myElement.classList.contains('visible')) {
            arrow.innerHTML = "&#x25BC;"
        }
    });

    var toggle2 = document.querySelector('.drop-toggle2');
    var myElement2 = document.querySelector('.company-collapsed');
    toggle2.addEventListener('click', () => {
        myElement2.classList.toggle('company-visible')
        const arrow2 = document.querySelector('.drop-toggle2>span');
        if (myElement2.classList.contains('company-visible')) {
            arrow2.innerHTML = '&#x25B2;'
        } else if (!myElement2.classList.contains('company-visible')) {
            arrow2.innerHTML = "&#x25BC;"
        }
    })
});
