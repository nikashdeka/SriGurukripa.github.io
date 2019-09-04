var burger = document.querySelector('#burger-menu');
var nav = document.querySelector('.nav-links');

    burger.addEventListener('click', function(){
        nav.classList.toggle('nav-active');
        // alert("Hello");
    });


var lastScrollTop = 0;
var header = document.getElementById("branding-box");

    window.addEventListener("scroll", function(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop){
            header.style.display = "none";
        } else {
            header.style.display = "grid";
        }
        // lastScrollTop = scrollTop;

        if (scrollTop > lastScrollTop){
            nav.style.display = "none";
        } else {
            nav.style.display = "grid";
        }
    });





var accordians = document.getElementsByClassName("accordian");

for (i = 0; i < accordians.length;  i++) {
    accordians[i].onclick = function() {
        this.classList.toggle("is-open");
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            // accordian is open, need to close it
            content.style.maxHeight = null;
        } else {
            // accordian is closed, need to open
            content.style.maxHeight = content.scrollHeight + "px";
        }
    };
}


