window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    shownBackToTopButtonOnScroll()
}

function showNavOnScroll() {
        if(scrollY > 0) {
            navigation.classList.add('scroll')
        } else {
            navigation.classList.remove('scroll')
        }
}
    

function shownBackToTopButtonOnScroll() {
    if(scrollY > 600) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}