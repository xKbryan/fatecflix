$(document).ready(function(){
	$('.tooltipped').tooltip()
	$('.fixed-action-btn').floatingActionButton()
	$('.scrollspy').scrollSpy()
	$('.modal').modal()
	$('.collapsible').collapsible()
});

// $('.nav a[href^="#"]').on('click', function(e) {
// 	e.preventDefault();
// 	var id = $(this).attr('href'), targetOffset = $(id).offset().top;		
// 	$('html, body').animate({ 
// 		scrollTop: targetOffset - 100
// 	}, 500);
// });

function abreTrailer(url) {
	$('.modal').modal({
		dismissible: true, // Modal can be dismissed by clicking outside of the modal
		onCloseEnd: function() { // Callback for Modal close
			fechaTrailer()
		} 
	})
	$('#trailer').html(`
		<iframe class="videoModal" width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	`)
}

function fechaTrailer() {
	$(".videoModal").remove()
	document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal')
    var instances = M.Modal.init(elems, options)
		instances.destroy()
	});
}
