
(function() {
    emailjs.init("ewZ_uvxVsdLOuCOsS"); // Sustituye TU_USER_ID_DE_EMAILJS con tu ID de usuario de EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_x7xbkkj', 'template_6vyy97c', this)
        .then(function() {
            alert('Mensaje enviado con éxito!');
        }, function(error) {
            alert('Error en el envío: ' + JSON.stringify(error));
        });
});


const btn_menu = document.querySelector("#btn_menu");
const cont_menu = document.querySelector("#cont_menu")

btn_menu.addEventListener("click", () => {
    if (cont_menu.className === "cont_menu") {
        cont_menu.className = "ocultar_menu"
        btn_menu.src = "./img/menu.png"
    } else {
        cont_menu.className = "cont_menu"
        btn_menu.src = "./img/x.png"
    }
})
