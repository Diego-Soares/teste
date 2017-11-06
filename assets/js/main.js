$(document).ready(function() {
    $('.phone').mask('(00)00000-0000');

        $("#fale-conosco").on("submit", function() {

            $('#fale-conosco input').val("");
            $('#fale-conosco textarea').val("");
            $('.alert-success').fadeIn();
        
            return false;
            
        });
});
	