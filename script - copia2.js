$(function(){


// MENU DESPLEGABLE //

    //Función para desplegar el menú
    $('.menu-toggle').click(function() {
        $('.menu').slideToggle('fast');
    });

    // Ocultar el menú si se hace clic fuera de él
    $(document).click(function(event) {
        var $target = $(event.target);
        if (!$target.closest('.menu-container').length && $('.menu').is(":visible")) {
            $('.menu').slideUp('fast');
        }
    });


// BOTÓN SALUDAR //

    // Función para saludar al hacer clic en el botón
    $("#saludarBtn").click(function(){
        alert("¡Hola! gracias por presionar el botón");
    });


// GALERÍA DE IMÁGENES

    // Código de la galería de imágenes
    var currentIndex = 0;
    var images = $('.gallery .images img');
    var totalImages = images.length;

    // Ocultar todas las imágenes excepto la primera
    images.slice(1).hide();

    // Función para mostrar la imagen siguiente
    $('#nextBtn').click(function() {
        images.eq(currentIndex).fadeOut('fast', function() {
            currentIndex = (currentIndex + 1) % totalImages;
            images.eq(currentIndex).fadeIn('fast');
        });
    });

    // Función para mostrar la imagen anterior
    $('#prevBtn').click(function() {
        images.eq(currentIndex).fadeOut('fast', function() {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            images.eq(currentIndex).fadeIn('fast');
        });
    });


// FORMULARIO DE REGISTRO
    
    // Código para el formulario de registro
    $('#registrationForm').submit(function(event) {
        event.preventDefault();
        
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        
        // Validación de nombre de usuario
        if (username.length < 3) {
            $('#usernameError').text('El nombre de usuario debe tener al menos 3 caracteres.');
        } else {
            $('#usernameError').text('');
        }
        
        // Validación de correo electrónico
        if (!isValidEmail(email)) {
            $('#emailError').text('Por favor, introduce un correo electrónico válido.');
        } else {
            $('#emailError').text('');
        }
        
        // Validación de contraseña
        if (password.length < 6) {
            $('#passwordError').text('La contraseña debe tener al menos 6 caracteres.');
        } else {
            $('#passwordError').text('');
        }
    });
    
    // Función para validar el formato del correo electrónico
    function isValidEmail(email) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

// MAPA INTERACTIVO

    // Inicializar el mapa y establecer la vista inicial
    var map = L.map('map').setView([41.3874, 2.1686], 13);
    map.invalidateSize();

    // Añadir una capa de mapa (en este caso, OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Añadir un marcador y una ventana emergente
    var marker = L.marker([41.3874, 2.1686]).addTo(map);
    marker.bindPopup("<b>Hola!</b><br>Esto es un marcador.").openPopup();

    /*
    // Añadir un círculo
    var circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
    circle.bindPopup("Soy un círculo.");

    // Añadir un polígono
    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(map);
    polygon.bindPopup("Soy un polígono.");
    */

});
