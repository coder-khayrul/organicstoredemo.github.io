
//get elements
const themb_image_area = document.querySelectorAll(".them_img");
const slide_image = document.querySelector(".main_image")
const themb_image = document.querySelector(".img_box");

themb_image_area.forEach(img => {
  img.addEventListener("click", () => {
    // Remove "active_img" class from all images
    themb_image_area.forEach(otherImg => {
      otherImg.classList.remove("active_img");
    });
    // Add "active_img" class to the clicked image
    img.classList.add("active_img");
    let img_src = img.querySelector("img");
    slide_image.src = img_src.src;
    img.classList.add("active_img")
  })

})

//img hover effect
const img_hover_effect = (img_area, imges) => {
  img_area.addEventListener("mousemove", (e) => {
    const m = e.clientX - e.target.offsetWidth;
    const n = e.clientY - e.target.offsetTop;
    imges.style.transformOrigin = `${m}px ${n}px`
    imges.style.transform = `scale(1.4)`
    })
  img_area.addEventListener("mouseleave", () => {
    imges.style.transformOrigin = `center`
    imges.style.transform = `scale(1)`
  })
}
img_hover_effect(themb_image,slide_image)

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
    spaceBetween: 0,
  
  
  });