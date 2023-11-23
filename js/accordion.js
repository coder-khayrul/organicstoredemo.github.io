//Create Function

//get elements
const dropdownIconsPlus = document.querySelectorAll("#plus_icon");
const dropdownIconMinus = document.querySelectorAll("#minus_icon");
const dropdownLink = document.querySelector(".dropdownlink");

// Get all elements with the id "plus_icon"


// Define the click function
function PlusHandleClick() {
    this.style.display = "none";
    const dropdownIconMinus = this.nextElementSibling;
    dropdownIconMinus.style.display = "unset";
    dropdownIconMinus.style.backgroundColor = "#88B813";
    dropdownIconMinus.style.color = "white";
}
function MinusHandleClick() {
    this.style.display = "none";
    const dropdownIconPlus = this.previousElementSibling;
   
    dropdownIconPlus.style.display = "unset";
    dropdownIconPlus.style.backgroundColor = "white";
  
    
}

// Loop through each element and add the event listener
dropdownIconsPlus.forEach(icon => {
    icon.addEventListener("click", PlusHandleClick);
});
dropdownIconMinus.forEach(icon => {
    icon.addEventListener("click", MinusHandleClick);
});




$(function () {

    var Accordion = function (el, multiple) {
        this.el = el || {};
        //More Than One Menu Open
        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.dropdownlink');
        dropdownlink.on('click', {
            el: this.el,
            multiple: this.multiple
          
        },
            this.dropdown
            
        );
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el,
            $this = $(this),
            //ul submenuItems
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            //Show Only one Menu at the same time
           // $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
        }

    };


    //Set Object
    var accordion = new Accordion($('.accordion-menu'), false);
});


