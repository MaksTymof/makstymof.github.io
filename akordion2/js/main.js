var accordion;
var accContent;


	window.onload = function(){
	 accContent = document.getElementsByClassName('accContent');
	 accordion = document.getElementsByClassName('accordion');

	hidePanel(0);
}
function hidePanel(a){
	for(var i=a; i<accContent.length; i++){
		accContent[i].classList.remove('show');
		accContent[i].classList.add('hide');
		accordion[i].classList.remove('rotation');				
	}
}
document.getElementById('accordion-list').onclick = function(event){
	var target = event.target;
	if (target.className=="accordion"){
		for(var i=0; i<accordion.length; i++){
			if(target == accordion[i]){
				showPanel(i);
				break;
			}
		}
	}
}
function showPanel(b){
	if(accContent[b].classList.contains('hide')){
		hidePanel(0);
		accContent[b].classList.remove('hide');
		accContent[b].classList.add('show');
		accordion[b].classList.add('rotation');
		accordion[b].innerHTML.textContent;


	}
}
