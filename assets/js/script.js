$(function(){

    // Tooltip: Incluido en botón de Form mensaje "Enviar por correo"
    // ==============================================================
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });


    // Funcionalidad Toggle en click sobre imágenes de Destacados
    // ==========================================================
    $('.imgdestacados').click(function(){
        $(".card-body").toggle();
    })

});
