//DOMContentLoaded attend que le DOM soit prêt
document.addEventListener("DOMContentLoaded", function () {
    
    var submenuItems = document.querySelectorAll('.has-submenu');

    submenuItems.forEach(function (item) {
        item.addEventListener('mouseover', function (event) {
            // Empêche le lien de fonctionner
            event.preventDefault();

            this.classList.toggle('active');
        });

        item.addEventListener('mouseout', function () {
        this.classList.remove('active');
    });
    });


    //fleche et changement couleur header
    var menu = document.querySelector('.menu');
    var logo = document.querySelector('.logo');
    var menuItems = document.querySelectorAll('.menuItems ul li a');
    
            var texte = document.querySelector('.texte');
    
            window.addEventListener('scroll', function () {
                // Récupère la hauteur de l'élément texte
                var texteHeight = texte.clientHeight;
    
                // Récupère la position de défilement verticale
                var scrollPosition = window.scrollY;
    
                if (scrollPosition > texteHeight) {
                    menu.style.position ="fixed";
                    menu.style.top = '0';
                    menu.style.backgroundColor = 'white';
                    logo.style.color = '#06A3DA';
                    // menuItems.style.color = '#06A3DA';
                    // menuItems.style.backgroundColor = 'red';
    
                    showFloatingArrow();
                } else {
                    menu.style.backgroundColor = '';
                    menu.style.position ='';
                    menu.style.top = '';
                    menu.style.color = '';
                    logo.style.color = '';
                    // menuItems.style.color = 'white';
    
                    hideFloatingArrow();
                }
            });
    
            

});

function showFloatingArrow() {
    var floatingArrow = document.querySelector('.floting-btn a');
    // floatingArrow.style.display = 'block';
    floatingArrow.style.backgroundColor = 'red';
    // console.log(floatingArrow.innerHTML)
}

function hideFloatingArrow() {
    var floatingArrow = document.querySelector('.floting-btn');
    floatingArrow.style.display = 'none';
    floatingArrow.style.backgroundColor = 'purple';

}

