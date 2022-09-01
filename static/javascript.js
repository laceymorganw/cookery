
//Navigation bar shrink on scroll
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $('.navbar').addClass('scrolled');
    }
    else {
      $('.navbar').removeClass('scrolled');
    }
  });
});

//Recipe bootstrap modal for featured recipe
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

//Love button counter
var button = document.getElementById("loveCounter"),
  count = 0;
button.onclick = function () {
  count += 1;
  button.innerHTML = "<i class='fa-solid fa-heart mx-2'></i> " + count;
};

