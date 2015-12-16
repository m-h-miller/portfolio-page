
$(window).bind('scroll', function() {
  $('.active').toggleClass('active');
  $('.navbar-home').toggleClass('active');

  if($(window).scrollTop() >= $('.headerwrap').offset().top + 300 + $('.headerwrap').outerHeight() - window.innerHeight) {
    $('.active').toggleClass('active');
    $('.navbar-about').toggleClass('active');
  }
  if($(window).scrollTop() >= $('.about').offset().top + 300 + $('.about').outerHeight() - window.innerHeight) {
    $('.active').toggleClass('active');
    $('.navbar-works').toggleClass('active');
  }
  if($(window).scrollTop() >= $('.works').offset().top + 300 + $('.works').outerHeight() - window.innerHeight) {
    $('.active').toggleClass('active');
    $('.navbar-skills').toggleClass('active');
  }
  if($(window).scrollTop() >= $('.skills').offset().top + 300 + $('.skills').outerHeight() - window.innerHeight) {
    $('.active').toggleClass('active');
    $('.navbar-contact').toggleClass('active');
  }
});
