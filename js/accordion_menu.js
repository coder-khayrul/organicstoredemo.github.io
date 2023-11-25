//Create Function
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

        // if (!e.data.multiple) {
          //Show Only one Menu at the same time
            // $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
        // }

    };


    //Set Object
    var accordion = new Accordion($('.accordion-menu'), false);
});

