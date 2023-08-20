var x = window.matchMedia("(min-width: 768px)")

if (x.matches) {
    document.querySelector("img").src = "./assets/images/bg-sidebar-desktop.svg"
}