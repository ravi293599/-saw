$(document).ready(function(){
	$('.caller').click(function(){
		$(this).next(".slide").slideToggle('slow');
	});
});



function menuChange(){
	var menu = document.getElementById('menu-bars');
	var navbar = document.querySelector('.navbar');
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}

var section = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header .navbar');


window.onscroll = () =>{
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
}
