
//get element
const search_bar_icon = document.getElementById("search_icon");
const mobile_search_bar = document.querySelector(".mobile_search");
const desktop_search_icon = document.getElementById("desktop_search_icon");
const product_item = document.getElementById("product_item");
const product_item_message = document.querySelector(".product_msg");
const product_group = document.querySelectorAll(".p_group");
const product_title = document.querySelectorAll(".p_title");
const single_slider_box = document.querySelector(".single_slider");
const popup_exit_btn = document.querySelector(".exit_icon");
const popup_overlay = document.querySelector(".popup_overlay");
const popup_show_btn = document.querySelectorAll(".view_btn button");
const popup_page = document.querySelector(".popup_content");
const popup_product_img = document.querySelector(".popup_p_img");
const copyRightYear = document.getElementById("currentYear");

//header sticky animation

const header_element = document.querySelector("#header");
const hero_element = document.querySelector("#hero_section");
function handleScroll() {
  const heroRect = hero_element.getBoundingClientRect();
  
  // Check if the top of the hero section is in the viewport
  if (heroRect.top <= window.innerHeight && heroRect.bottom >= 0) {
    // Add the animation class
    header_element.classList.add("sticky_animation");

    // Remove the animation class after the animation ends
    header_element.addEventListener("animationend", () => {
      header_element.classList.remove("sticky_animation");
    }, { once: true });
  }
}
window.addEventListener("scroll", handleScroll);

//for sign up and login page tab function
const login_btn =document.getElementById("login_btn");
const signup_btn =document.getElementById("signup_btn");
const login_page =document.getElementById("login_from");
const signup_page =document.getElementById("signup_from");
const login_signup_paragraph = document.querySelector(".msg_box p");
const user_message = document.getElementById("user_msg");

//toggle signup and login page
const login_tab_handler = () => {
  signup_btn.style.display = "unset"
  login_page.style.display = "unset";
  login_btn.style.position = "absolute"
  login_btn.style.display = "none"
  signup_page.style.display = "none";
  user_message.textContent = "Hello Customer!"
  login_signup_paragraph.textContent = "Fill up personal information and start journey with us."
  signup_btn.style.position = "unset"
  
}
const signup_tab_handler = () => {
  signup_btn.style.display = "none";
  login_btn.style.display = "unset"
  login_page.style.display = "none";
  signup_page.style.display = "unset"
  user_message.textContent = "Wellcome Back!"
  login_signup_paragraph.textContent = "Login here by filling you're username and password or use your favorite social network account to enter to the site"
  signup_btn.style.position = "absolute"
  login_btn.style.position = "unset"
}

login_btn.addEventListener("click", login_tab_handler)
signup_btn.addEventListener("click", signup_tab_handler)







// user page sign page & login page > get elements
const user_popup_icon = document.getElementById("user_join_icon");
const user_popup_page = document.querySelector(".user_join_popup");
const user_popup_exit = document.querySelector("#user_popup_close");

//page popup function

const user_popup_page_handler = () => {
  user_popup_page.style.display = "flex";

}
const user_popup_exit_handler = () => {
  user_popup_page.style.display = "none";
 
}
user_popup_icon.addEventListener("click", user_popup_page_handler)
user_popup_exit.addEventListener("click", user_popup_exit_handler)

//to get current year
const currentDate = new Date();
let currentYear = currentDate.getFullYear();
copyRightYear.textContent = `${currentYear}`;

//get element for 
const category_select_item = document.querySelector(".category_items");
const toggle_open_btn = document.querySelector(".toggle_open");
const toggle_close_btn = document.querySelector(".toggle_close");

category_select_item.addEventListener("click", () => {
  let toggle = true;
  if(toggle){
    toggle_close_btn.style.display = "unset";
toggle_open_btn.style.display = "none";
toggle =false;

  }else{
    toggle_close_btn.style.display = "none";
    toggle_open_btn.style.display = "block";
    toggle =true;
  }
 
})

//medium screen search bar
const search_page_open_btn = document.querySelector(".search_icon ");
const search_page_close_btn = document.querySelector(".popup_search_close");
const medium_search_page = document.querySelector(".mobile_popup_search");

//medium screen search bar handling
search_page_open_btn.addEventListener("click", () => {
  medium_search_page.style.display = "flex"
   medium_search_page.style.animation = "mobile_popup_open 1s alternate forwards ease-in";
  medium_search_page.style.transition = "2s"
})
search_page_close_btn.addEventListener("click", () => {

  medium_search_page.style.animation = "mobile_popup_close 1s alternate forwards ease-in";
  medium_search_page.style.transition = "2s"
  
})




//  popup image changing
let popup_img = [
  "./img/p_a1.jpg",
  "./img/man_sut.jpg",
  "./img/watch.jpg",
  "./img/man_ganji.jpg",
  "./img/man_jcket.jpg",
  "./img/man_tshirt.jpg",
  "./img/man_shart.jpg",
  "./img/ban_jersey.jpg"
];

// popup screen show function
for (let i = 0; i < 8; i++) {
  popup_show_btn[i].addEventListener("click", function () {
    let current_product = popup_img[i];
    popup_product_img.setAttribute("src", current_product);
    popup_page.style.transform = "scale(1)";
    popup_page.style.transition = ".4s";
    popup_overlay.style.display = "flex";
  });
}
popup_exit_btn.addEventListener("click", popup_hide);

//popup screen hide function
function popup_hide() {
  popup_page.style.transform = "scale(0)";
  popup_page.style.transition = ".4s";
  popup_overlay.style.display = "none";

}

//product item message function here
let product_item_visible = false;


product_item.addEventListener("mouseover", () => {
  if (product_item_visible) {
    product_item_message.style.transform = "translate(0px, 30%)";
    product_item_message.style.opacity = "0";

  } else {
    product_item_message.style.transition = "transform 0.3s, opacity 0.3s"; // Add a transition property
    product_item_message.style.transform = "translate(0px, 0px)";
    product_item_message.style.opacity = "1";
    product_item_message.style.display = "unset";
  }

  product_item_visible = !product_item_visible;
})

product_item.addEventListener("mouseout", () => {
  if (product_item_visible) {
    product_item_message.style.transition = "transform 0.3s, opacity 0.3s"; // Add a transition property
    product_item_message.style.transform = "translate(0px, 30%)";
    product_item_message.style.opacity = "0";
  }
})

// product section button script here
let previousButton = product_group[0]; // Set the first button as default active

previousButton.style.color = "#88B813"; // Set the default color

for (let i = 0; i < 5; i++) {
  product_group[i].addEventListener("click", () => {
    // Reset color of previous button
    if (previousButton !== product_group[i]) {
      previousButton.style.color = "";
    }

    // Set color of current button
    product_group[i].style.color = "#88B813";

    // Update previous button reference
    previousButton = product_group[i];

  });
}

/** preloader initialize**/
$('.js-preloader').preloadinator({
  minTime: 2000
});




//****swiper script */
var swiper = new Swiper(".mySwiper6", {
  autoplay: true,
  keyboard: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next6',
    prevEl: '.swiper-button-prev6',
  },
  breakpoints: {
    640: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
    991: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },

});

var swiper = new Swiper(".mySwiper5", {
  autoplay: true,
  keyboard: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next5',
    prevEl: '.swiper-button-prev5',
  },
  breakpoints: {
    640: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
    991: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },

});
var swiper = new Swiper(".mySwiper4", {
  autoplay: true,
  keyboard: true,
  loop: true,
  navigation: true,
  navigation: {
    nextEl: '.swiper-button-next4',
    prevEl: '.swiper-button-prev4',
  },
  breakpoints: {
    640: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
    991: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },

});

var swiper = new Swiper(".mySwiper3", {
  // slidesPerView: 1,
  // mousewheel: true,
  keyboard: true,
  autoplay: false,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 0,
    },
    991: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },

});



var swiper = new Swiper(".mySwiper2", {
  // slidesPerView: 1,
  // mousewheel: true,
  keyboard: true,
  autoplay: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },
  breakpoints: {
    640: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 5,
    },
  },

});


var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 1,
  autoplay: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    640: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 5,
    },
  },

});

//****swiper script */
var swiper = new Swiper(".mySwiper-2", {
  // slidesPerView: 1,
  autoplay: true,
  loop: true,
  breakpoints: {
    400: {
      autoplay: true,
      loop: true,
      slidesPerView: 2,
      spaceBetween: 0,
    },
    600: {
      autoplay: true,
      loop: true,
      slidesPerView: 3,
      spaceBetween: 0,
    },
    900: {
      autoplay: true,
      loop: true,
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1080: {
      autoplay: true,
      loop: true,
      slidesPerView: 5,
      spaceBetween: 5,
    },
  },

});

// top to bottom toggle button 
$.elevator();
//Mixitup plugin call
var mixer = mixitup('.product_slider');


