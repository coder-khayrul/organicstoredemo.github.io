/** preloader initialize**/
$('.js-preloader').preloadinator({
  minTime: 2000
});

//for grid and list view
const single_box_area = document.querySelectorAll(".product_box_wrapper");
const grid_view_button = document.querySelector(".grid_view");
const list_view_button = document.querySelector(".list_view");
const single_boxs = document.querySelectorAll(".single_shop_product");
const product_content = document.querySelectorAll(".product_info");
const product_img = document.querySelectorAll(".product_img");
const list_view_product_summary = document.querySelectorAll(".product_title p");

const list_view_handler = () => {
  list_view_button.classList.add("active")
  grid_view_button.classList.remove("active")
  list_view_product_summary.forEach(summary => {
    summary.style.display = "block"
  })
  product_img.forEach(img => {
    img.classList.remove("product_img_border")
    img.classList.add("product_img_border_list")
  })
  product_content.forEach(content => {
    content.classList.remove("product_info_grid")
    content.classList.remove("product_info_style")
    content.classList.add("product_info_list_border_radius");
    content.classList.remove("product_info_grid_border_radius");

  })
  single_boxs.forEach(box => {
    box.classList.add("single_shop_product_style")
  })
  single_box_area.forEach(area => {
    area.classList.remove("col-sm-6")
    area.classList.remove("col-md-4")
  })
}


const grid_view_handler = () => {
  list_view_button.classList.remove("active")
  grid_view_button.classList.add("active")
  list_view_product_summary.forEach(summary => {
    summary.style.display = "none"
  })
  product_img.forEach(img => {
    img.classList.add("product_img_border")
    img.classList.remove("product_img_border_list")

  })
  product_content.forEach(content => {
    content.classList.add("product_info_grid")
    content.classList.add("product_info_style")
    content.classList.remove("product_info_list_border_radius");
    content.classList.add("product_info_grid_border_radius");
  })
  single_boxs.forEach(box => {
    box.style.display = "block"
    box.classList.remove("single_shop_product_style")
  })
  single_box_area.forEach(area => {
    area.classList.add("col-sm-6")
    area.classList.add("col-md-4")
  })
}

grid_view_button.addEventListener("click", grid_view_handler)
list_view_button.addEventListener("click", list_view_handler)

//sciprt for expand product description
const show_more_button = document.querySelector("#expand_btn");
const show_more_button_text = document.querySelector("#expand_btn span");
const expand_content = document.querySelector(".expand_content");
const button_icon = document.querySelector(".description button i");

  let content_show = true;
const description_toggler = () => {

  if (content_show) {  
    show_more_button_text.textContent = "Show less"
    expand_content.classList.remove("expand_content_hide")
    button_icon.style.transform = "rotate(180deg)"
   
  } else {
    show_more_button_text.textContent = "Show more"
    expand_content.classList.add("expand_content_hide")
    button_icon.style.transform = "rotate(0deg)"
  }
  content_show = !content_show
}
show_more_button.addEventListener("click", description_toggler)


//script for wishlist alert
const wishlist_message = document.querySelector(".wishlist_alert");
const wishlist_btns = document.querySelectorAll(".wishlist");
const wishlist_view_handler = () => {

  wishlist_message.style.animation=  "wishlist_animation .3s ease-in-out  forwards alternate"

setTimeout(() => {
  wishlist_message.style.animation=  "wishlist_animation_hide .3s ease-in-out  forwards alternate"
}, 3000)
}


wishlist_btns.forEach(wishlist_btn => {
  wishlist_btn.addEventListener("click", wishlist_view_handler)
})



//script for ask question popup form 
const user_questoin_popup = document.querySelector(".user_question_popup")
const question_popup_open_btn = document.querySelectorAll(".question_button")
const question_popup_close_btn = document.querySelector(".form_close_btn");

const question_popup_show = () => {
  user_questoin_popup.style.display= "flex"
  document.body.style.overflow = "hidden"
}
const question_popup_close = () => {
  user_questoin_popup.style.display= "none"
  document.body.style.overflow = "scroll"
}
question_popup_close_btn.addEventListener("click", question_popup_close)
question_popup_open_btn.forEach(question_btn => {
  question_btn.addEventListener("click" , question_popup_show)
})


//get elements
const color_areas = document.querySelectorAll(".color_box");

color_areas.forEach((color_area) => {
  const color_display_board = color_area.querySelector(".color_board");
  const color_sport = color_area.querySelector(".color_div");
  const color_card = color_area.querySelector(".color_field");
  const color_uniqe_name = color_area.querySelector(".color_name");
  color_area.addEventListener("mouseover", () => {
    color_display_board.style.display = "flex"
    let current_bg_color = getComputedStyle(color_sport, null)["backgroundColor"];
    color_card.style.backgroundColor = `${current_bg_color}`


    //***color name founder */
    function getClosestColorName(rgbCode) {
      // Define a list of color names and their RGB values
      const colorNames = {
        "Red": [255, 0, 0],
        "Green": [0, 255, 0],
        "Blue": [0, 0, 255],
        "Crimson": [220, 20, 60],
        "Darkcyan": [0, 139, 139],
        "Violet": [238, 130, 238],

      };

      // Convert the input RGB code to an array of integers
      const rgbArray = rgbCode.replace(/[^\d,]/g, '').split(',').map(Number);

      // Calculate the Euclidean distance between the input RGB and each color in the list
      let closestColor = null;
      let closestDistance = Number.MAX_SAFE_INTEGER;

      for (const [colorName, colorValue] of Object.entries(colorNames)) {
        const distance = calculateEuclideanDistance(rgbArray, colorValue);

        if (distance < closestDistance) {
          closestColor = colorName;
          closestDistance = distance;
        }
      }

      return closestColor;
    }

    function calculateEuclideanDistance(arr1, arr2) {
      return Math.sqrt(arr1.reduce((sum, value, index) => sum + Math.pow(value - arr2[index], 2), 0));
    }

    // Example usage
    const rgbCode = current_bg_color; // Replace with your RGB code
    const colorName = getClosestColorName(rgbCode);
    color_uniqe_name.textContent = colorName

  })
  color_area.addEventListener("mouseout", () => {
    color_display_board.style.display = "none"
  })
})

//script for price range making
const price_ranges = document.querySelectorAll(".range_div input");
const progress_bar = document.querySelector(".price_progress");
const price_inputs = document.querySelectorAll(".field input");
let price_gap = 100;

price_inputs.forEach(input => {
  input.addEventListener("input", (e) => {
    let minValue = parseInt(price_inputs[0].value);
    let maxValue = parseInt(price_inputs[1].value)
    if (maxValue - minValue >= price_gap && maxValue <= 1000) {
      if (e.target.className === "minNumber") {
        price_ranges[0].value = minValue;
        progress_bar.style.left = (minValue / price_ranges[0].max) * 100 + "%";
      } else {
        price_ranges[1].value = maxValue;
        progress_bar.style.right = 100 - (maxValue / price_ranges[1].max) * 100
      }
    }
  })
})

price_ranges.forEach(input => {
  input.addEventListener("input", (e) => {
    let minValue = parseInt(price_ranges[0].value);
    let maxValue = parseInt(price_ranges[1].value)
    if (maxValue - minValue < price_gap) {
      if (e.target.className === "min_price_range") {
        price_ranges[0].value = maxValue - price_gap
      } else {
        price_ranges[1].value = minValue + price_gap
      }
    } else {
      price_inputs[0].value = minValue;
      price_inputs[1].value = maxValue;
      progress_bar.style.left = (minValue / price_ranges[0].max) * 100 + "%";
      progress_bar.style.right = 100 - (maxValue / price_ranges[1].max) * 100 + "%"
    }
  })
})

//quick view popup handler
const quick_view_body = document.querySelector(".quick_view_area");
const quick_view_close_btn = document.querySelector(".close_button span")
const quick_view_show_btn = document.querySelectorAll(".quick_view");
const quick_view_close = () => {
  quick_view_body.style.display = "none"
  document.body.style.overflow = "scroll"
}
const quick_view_show = () => {
  quick_view_body.style.display = "flex"
  document.body.style.overflow = "hidden"
}
quick_view_show_btn.forEach(button => {
  button.addEventListener("click", quick_view_show)
})

quick_view_close_btn.addEventListener("click", quick_view_close)
//img hover effect
const shop_img_area = document.querySelectorAll(".img_area");
const shop_img = document.querySelectorAll(".img_area img");

const image_hover_effect = (hero_animation_area, slide_imgs) => {
  hero_animation_area.addEventListener("mousemove", (e) => {
    const m = e.clientX - e.target.offsetWidth;
    const n = e.clientY - e.target.offsetTop;

    slide_imgs.forEach((img) => {
      img.style.transformOrigin = `${m}px ${n}px`;
      img.style.transform = "scale(1.5)";
    });
  });
  hero_animation_area.addEventListener("mouseleave", () => {
    slide_imgs.forEach((img) => {
      img.style.transformOrigin = "center";
      img.style.transform = "scale(1)";
    });
  });
};

shop_img_area.forEach((area) => {
  image_hover_effect(area, shop_img);
});

//to added footer
// Fetch and inject the header
fetch('../additional_pages/footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer_container').innerHTML = html;
  })
  .catch(error => console.error('Error fetching header:', error));

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


var swiper = new Swiper(".mySwiper", {
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
    el: '.swiper-pagination2',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
  },

});



