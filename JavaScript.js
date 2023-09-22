function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
  });