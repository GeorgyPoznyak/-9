function toggleMenu() {
    let menuList = document.getElementById("menu-list");
    menuList.classList.toggle("active");
    document.getElementById("menu-bar").classList.toggle("change");
}

window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})