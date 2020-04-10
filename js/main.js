$(document).ready(function(){
 $('.header').height($(window).height());
})
$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  })
$(function(){
 $("#phone").mask('+38(000) 000-0000');
 $('#applyForm').submit(function(e){
 	e.preventDefault();
 	var studentName = $("#name").val();
 	var phone = $("#phone").val();
 	var email = $("#email").val();
 	var course = $('#applyForm').data('course');
 	Email.send({
    SecureToken : "d9002110-31e1-475d-8538-090d7003327b",
    To : 'maksym198858@gmail.com',
    From : "maksvopak1988@gmail.com",
    Subject : "Test Subject",
    Body : "Hello World"
}).then(
  message => alert("thanks")
);
 	$("#modal").removeClass("show-my");
 	$("#thanks").addClass("show-my");
 });
 $(".showModal").click(function(e){
 	$('#modal').addClass("show-my");
 	$('#applyForm').data('course',$(this).attr('id'));
 });

 $('#closeModal').click(function(event){
 	$('#modal').removeClass("show-my");
  });
 $('#closeThanks').click(function(event){
 	$('#thanks').removeClass("show-my");
  });

});
