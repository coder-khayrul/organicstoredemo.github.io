/** preloader initialize**/
$('.js-preloader').preloadinator({
  minTime: 2000
});

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
    if (maxValue - minValue >= price_gap && maxValue <= 1000)  {
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



var swiper = new Swiper(".mySwiper3", {
  spaceBetween: 1,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
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
    }
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



