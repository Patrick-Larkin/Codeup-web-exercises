"use strict";
(function () {
	$(document).ready(function () {
///////////////////////////////////////////////////////////Exercise #1 ID Selector \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

		$().ready(function () {
			let contents = $('#codeup').html();
			alert(contents);
			$('#codeup').html('<strong>The switch</strong>');
		});

///////////////////////////////////////////////////////////Exercise #2 CLASS Selector \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

		// $().ready(function () {
		// 	alert("The DOM has finished loading!")
		// });
		// $().ready(function () {
		// 	$('.important').css('background-color', '#ff0');
		// 	$('.important').css('color', '#1e16d2');
		// });

///////////////////////////////////////////////////////////Exercise #3 Element Selector \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

		// $('p').css('font-size', '14px');

///////////////////////////////////////////////////////////Exercise #4 Multiple Selectors \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

		$('.important, p').css('background-color', '#FF0');

///////////////////////////////////////////////////////////Exercise #5 All Selector \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

		$('*').css('border', '1px solid #F00');

///////////////////////////////////////////////////////////////Exercise #6-1 ID Selector\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

		let contents = $('#h1').html();
		alert(contents);
		let contents2 = $('#p').html();
		alert(contents2);
		let contents3 = $("#li").html();
		alert(contents3);

//////////////////////////////////////////////////////////////Exercise #6-2 Class Selector\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


	  // $(".codeup").css('border', '1px solid #000');

/////////////////////////////////////////////////////////////Exercise #6-3 Element Selector\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


		// let h1 = $('h1').html()
		// alert(h1);
		// $('h1').css('background-color', '#FF0');
		// $('p').css('background-color', '#FF0');
		// $('li').css('background-color', '#FF0');
		// $('ul').css('font-size', '20px');

///////////////////////////////////////////////////////////Exercise #6-4 Multiple Selectors \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

		// $('h1, p, li').css('background-color', '#448ab0');
		// $('li').css('font-size', '20px');


////////////////////////////////////////////////////////////////////////Events Lecture\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

		$('#codeup').click(function() {
			alert('h1 with id "codeup" was clicked');
		});

		// This is the same code
		// var ele = document.getElementById('my-element');
		// ele.addEventListener('click', function(e) {
		// 	alert('My element was clicked!');
		// });
		//
		// $('#codeup').hover(
		// 		function() {
		// 			$(this).css('background-color', '#FF0');
		// 		},
		// 		function() {
		// 			$(this).css('background-color', '#FFF');
		// 		}
		// );

////////////////////////////////////////////////////////////////////////Exercise #5 Mouse Events\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


		$('h1').click(function () {
			$(this).css('background-color', '#1a3888')
		})
		$('p').click(function () {
			$(this).css('background-color', '#68b854')
		})
		$('p').dblclick(function () {
			$(this).css('font-size', '200px')
		})
		$('ul').click(function () {
			$(this).css('background-color', '#d28025')
		})
		$('li').hover(
				function() {
					$(this).css('background-color', '#af0bdd');
				},
				function() {
					$(this).css('background-color', '');
				}
		);
		$('div').click(function () {
			$(this).css('background-color', '#14b58f')
		})


////////////////////////////////////////////////////////////////////////Exercise #5 Keyboard Events\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
})();
})();