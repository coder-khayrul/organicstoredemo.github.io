
//get element
const search_bar_icon = document.getElementById("search_icon");
const mobile_search_bar = document.querySelector(".mobile_search");
const desktop_search_icon = document.getElementById("desktop_search_icon");
const desktop_close_icon = document.getElementById("dstp_close_btn");
const desktop_search_bar = document.querySelector(".dstp_search_bar");
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

console.log(popup_product_img)


//to get current year
const currentDate = new Date();
let currentYear = currentDate.getFullYear();
copyRightYear.textContent = `${currentYear}`;


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



//desktop search bar toggle function
function toggleSearchBar(displayValue, opacityValue) {
  desktop_search_bar.style.display = displayValue;
  desktop_search_bar.style.opacity = opacityValue;
}
desktop_search_bar.addEventListener('scroll', function (event) {
  event.preventDefault();
});
desktop_search_icon.addEventListener("click", () => {
  toggleSearchBar("flex", "1");
});

desktop_close_icon.addEventListener("click", () => {
  toggleSearchBar("none", "0");
});





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




//toggle search bar for mobile screen script
let isMobileSearchVisible = false;

search_bar_icon.addEventListener("click", () => {

  if (isMobileSearchVisible) {
    mobile_search_bar.style.transform = "translate(0px, 30%)";
    mobile_search_bar.style.opacity = "0";
    mobile_search_bar.style.visibility = "hidden";
  } else {
    mobile_search_bar.style.display = "unset";
    setTimeout(() => {
      mobile_search_bar.style.visibility = "visible";
      mobile_search_bar.style.transform = "translate(0px, 0px)";
      mobile_search_bar.style.opacity = "1";
    }, 0);

  }

  isMobileSearchVisible = !isMobileSearchVisible;
});




// mobile animated menubar icon
document.addEventListener('DOMContentLoaded', function () {
  var thirdButton = document.querySelector('.third-button');
  var animatedIcon = document.querySelector('.nav_animated_icon');

  thirdButton.addEventListener('click', function () {
    animatedIcon.classList.toggle('open');
  });
});

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

//****************owl carousel script**********
//owl carousel script
$(document).ready(function () {

  $(".owl-carousel").owlCarousel({

    slideSpeed: 300,
    paginationSpeed: 400,
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false,// Enable loop mode
    autoplay: true, // Enable auto play
    autoplayTimeout: 3000, // Set the time interval (1 second in this case)
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",

  });


})





//****swiper script */
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


