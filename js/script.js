$(document).ready(function() {
    $('form').submit(function(event) {
    	event.preventDefault();
    	var value=$("#myText").val();
		$("ul").append("<li>" + value + "</li>");
		$('#myText').val('');
    });

    $('ul').on('click' , 'li' , function(event) {
    	$(this).closest('li').toggleClass('lined');
    });

    $(document).on('dblclick' , 'li' , function() {
    	$(this).remove();
    });
});
