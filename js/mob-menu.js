var button = document.querySelector('.search_btn');
var menu = document.querySelector('.btn-menu');
menu.style.display = "none";
button.addEventListener('click', function (event) {
      if (menu.style.display == "") {
          menu.style.display = "none";
      } else {
          menu.style.display = "";
      }
    }
  );
