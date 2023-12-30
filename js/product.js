try{
 //get elements

  const themb_image_area = document.querySelectorAll(".them_img");
const slide_image_1 = document.querySelector(".main_image")
const themb_image_1 = document.querySelector(".img_box");

themb_image_area.forEach(img => {
  img.addEventListener("click", () => {
    // Remove "active_img" class from all images
    themb_image_area.forEach(otherImg => {
      otherImg.classList.remove("active_img");
    });
    // Add "active_img" class to the clicked image
    img.classList.add("active_img");
    let img_src = img.querySelector("img");
    slide_image_1.src = img_src.src;
    img.classList.add("active_img")
  })
})

//img hover effect
const img_hover_effect_1 = (img_box, slide_img) => {
  img_box.addEventListener("mousemove", (e) => {
    const x= e.clientX - e.target.offsetWidth;
    const y = e.clientY - e.target.offsetTop;
    slide_img.style.transformOrigin = `${x}px ${y}px`
    slide_img.style.transform = `scale(1.4)`
    })

    img_box.addEventListener("mouseleave", () => {
      slide_img.style.transformOrigin = `center` 
      slide_img.style.transform = `scale(1)`
  })
}
img_hover_effect_1(themb_image_1,slide_image_1)

}catch{

 
}

//get elements
const slide_image = document.querySelectorAll(".img_area img")
const themb_image = document.querySelectorAll(".img_area");

//img hover effect
const img_hover_effect = (img_area, imges) => {
  img_area.forEach(area => {
    area.addEventListener("mousemove", (e) => {
      const m = e.clientX - e.target.offsetWidth /2 ;
      const n = e.clientY - e.target.offsetTop;
      imges.forEach(img => {
        img.style.transformOrigin = `${m}px ${n}px`
        img.style.transform = `scale(1.4)`
      })
    })
    area.addEventListener("mouseleave", () => {
      imges.forEach(img => {
        img.style.transformOrigin = `center`
        img.style.transform = `scale(1)`
      })
    })
  })
}
img_hover_effect(themb_image, slide_image)

//for countdown timier
const dayElement = document.querySelector(".day");
const hourElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondElement = document.querySelector(".second");

let endDate = "5 January 2024 12:00 pm"
const clock = () => {
  endDate = new Date(endDate);
  let currentDate = new Date()
  let diff = (endDate - currentDate);
  let sec = Math.floor(diff / 1000);
  let min = Math.floor(sec / 60);
  let hrs = Math.floor(min / 60);
  let days = Math.floor(hrs / 24);

  sec %= 60;
  min %= 60;
  hrs %= 24;

  dayElement.textContent = days;
  hourElement.textContent = hrs < 10 ? `0${hrs}` : hrs;
  minutesElement.textContent = min < 10 ? `0${min}` : min;
  secondElement.textContent = sec < 10 ? `0${sec}` : sec;
}
setInterval(clock, 1000)

//script for ask question popup form 
const user_questoin_popup = document.querySelector(".user_question_popup")
const question_popup_open_btn = document.querySelector(".question_button")
const question_popup_close_btn = document.querySelector(".form_close_btn");

const question_popup_show = () => {
  user_questoin_popup.style.display = "flex"
  document.body.style.overflow = "hidden"
}
const question_popup_close = () => {
  user_questoin_popup.style.display = "none"
  document.body.style.overflow = "scroll"
}
question_popup_close_btn.addEventListener("click", question_popup_close)
question_popup_open_btn.addEventListener("click", question_popup_show)



//review link
const review_area = document.querySelector("#Review-tab");
const review_container = document.querySelectorAll("#myTab li button");
const review_button = document.querySelector(".user_review")
const review_area_select = document.querySelectorAll(".tab-pane");
const review_section = document.querySelector("#Review");

review_button.addEventListener("click", () => {

  review_container.forEach(container => {
    container.classList.remove("active")
  })
  review_area.classList.add("active")
  review_area_select.forEach(select_area => {
    select_area.classList.remove("active")
    select_area.classList.remove("show")
  })
  review_section.classList.add("show")
  review_section.classList.add("active")


})

//script for adding gallary
var swiper = new Swiper(".mySwiper3", {
  spaceBetween: 1,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    380: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 480px
    668: {
      slidesPerView: 3,
      spaceBetween: 10
    },

  }
})
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  thumbs: {
    swiper: swiper,
  }
}
);

//to added header
// Fetch and inject the header
fetch('../additional_pages/header.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('header_section').innerHTML = html;
  })
  .catch(error => console.error('Error fetching header:', error));


//to added footer
// Fetch and inject the header
fetch('../additional_pages/footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer_section').innerHTML = html;
  })
  .catch(error => console.error('Error fetching header:', error));


//swiper slider for review tab
var swiper = new Swiper(".mySwiper", {
  // autoplay: true,
  keyboard: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 10,
});