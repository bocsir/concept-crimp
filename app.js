if (!localStorage.getItem('hasRun')) {
    localStorage.setItem('hasRun', true);
    
    //underline home
    document.getElementById("home").classList.add("active");
}

const navLinks = document.querySelectorAll(".nav-item");
console.log(navLinks);

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", currentPage());
}



function currentPage() {
    console.log(window.location.pathname.split("/").pop());

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove("active");
    }

    if (window.location.pathname.split("/").pop() == "index.html") {
        document.getElementById("home").classList.add("active");
        console.log(document.getElementById("home"));
    } else if (window.location.pathname.split("/").pop() == "shop.html") {
        document.getElementById("shop").classList.add("active");
    } else if (window.location.pathname.split("/").pop() == "contact.html") {
        document.getElementById("contact").classList.add("active");
    } else if (window.location.pathname.split("/").pop() == "about.html") {
        document.getElementById("about").classList.add("active");
    } else if (window.location.pathname.split("/").pop() == "cart.html") {
        document.getElementById("cart").classList.add("active");
    }
}

function menuToggle(x) {
    x.classList.toggle("change");

    if (nav.style.display == "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }

    nav.classList.toggle("vertical");
}
