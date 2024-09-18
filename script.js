$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }
  });

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

document.getElementById('email').addEventListener('click', function() {
  const email = this.innerText;
  navigator.clipboard.writeText(email).then(() => {
      alert('Copied to clipboard: ' + email);
  }).catch(err => {
      console.error('Error copying text: ', err);
      alert('Failed to copy email.');
  });
});

