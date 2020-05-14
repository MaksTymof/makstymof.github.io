window.onload = function (){
	 var thanks = document.getElementById('thanks');
	hideThanks();
}
function hideThanks(){
	thanks.classList.remove("show-my");
}

	

 $("#modal").removeClass("show-my");
 	$("#thanks").addClass("show-my");
 
 $("#cont").click(function(e){
 	$('#modal').addClass("show-my");
  });

 $('#closeModal').click(function(event){
 	$('#modal').removeClass("show-my");
  });
 $('#closeThanks').click(function(event){
 	$('#thanks').removeClass("show-my");
  });

[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
img.setAttribute('src', img.getAttribute('data-src'));
img.onload = function() {
img.removeAttribute('data-src');
};
});

  