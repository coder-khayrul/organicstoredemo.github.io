
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




