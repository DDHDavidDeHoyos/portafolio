
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
