
//get element
const search_bar_icon = document.getElementById("search_icon");
const mobile_search_bar = document.querySelector(".mobile_search");
const desktop_search_icon = document.getElementById("desktop_search_icon");
const product_item = document.getElementById("product_item");
const product_item_message = document.querySelector(".product_msg");
const popup_exit_btn = document.querySelector(".exit_icon");
const popup_overlay = document.querySelector(".popup_overlay");
const popup_show_btn = document.querySelectorAll(".view_btn button");
const popup_page = document.querySelector(".popup_content");
const popup_product_img = document.querySelector(".popup_p_img");
const category_select_item = document.querySelector(".category_items");
const toggle_open_btn = document.querySelector(".toggle_open");
const toggle_close_btn = document.querySelector(".toggle_close");

//--------------header sticky animation-------------------------
$(document).ready( () => {
  $(window).on("scroll", () => {
    if($(window).scrollTop()){
      $("#header").addClass("sticky_animation")
    }else{
      $("#header").removeClass("sticky_animation")
    }
  })
})

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


//get element for 
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

//for sign up and login page tab function
const login_btn = document.getElementById("login_btn");
const signup_btn = document.getElementById("signup_btn");
const login_page = document.getElementById("login_from");
const signup_page = document.getElementById("signup_from");
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
  document.body.style.overflow = 'hidden'

}
const user_popup_exit_handler = () => {
  user_popup_page.style.display = "none";
  document.body.style.overflow = 'scroll'

}
user_popup_icon.addEventListener("click", user_popup_page_handler)
user_popup_exit.addEventListener("click", user_popup_exit_handler)



