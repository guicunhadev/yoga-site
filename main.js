// -------------Cookies----------------

window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#f5f5f5",
      "text": "#000000"
    },
    "button": {
      "background": "#fdaa3a",
      "text": "#1e293b"
    }
  },
  "content": {
    "message": "Este site usa cookies para garantir que você obtenha a melhor experiência de navegação. Desativar os cookies do site pode prejudicar a funcionalidade de alguns recursos.",
    "dismiss": "Concordar e fechar",
    "link": "Ler mais",
    "href": "https://policies.google.com/?hl=pt-BR"
  }
});






//----------------  Side Menu small screen----------------------
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}



// ----------------------ScrollReveal-----------


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// ---------Header Container------

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__container h2", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header__container img", {
    ...scrollRevealOption,
    origin: "right",
});



// ----------------------Hero Container -------------

ScrollReveal().reveal(".hero__card", {
    ...scrollRevealOption,
    interval: 500,
})


// -------------Online Class Container------------

ScrollReveal().reveal(".online__container", {
    ...scrollRevealOption,
    interval: 500,
})

ScrollReveal().reveal(".online__class__content .para", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".online__class__card", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
});

ScrollReveal().reveal(".online__class__image img", {
    ...scrollRevealOption,
    origin: "right",
});

// -------------Class Container------------

ScrollReveal().reveal(".class__card", {
    ...scrollRevealOption,
    interval: 500,
});



// ------------About Container------------

ScrollReveal().reveal(".about__container .section__header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__container p", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".about__container li", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
});

ScrollReveal().reveal(".about__container img", {
    ...scrollRevealOption,
    origin: "left",
});



// --------------Stories Container------------

ScrollReveal().reveal(".stories__card", {
    ...scrollRevealOption,
    interval: 500,
})

// -------------Posts Container-----------

ScrollReveal().reveal(".posts__card", {
    ...scrollRevealOption,
    interval: 500,
})

// -------------Photos Container------------

ScrollReveal().reveal(".photos__card", {
    duration: 1000,
    interval: 500,
})
