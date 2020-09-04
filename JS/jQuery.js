"use strict";
(function () {
	$(document).ready(function () {
/////////////////////////////////////////////////////////////Exercise #1 ID Selector \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


		$().ready(function () {
			let contents = $('#codeup').html();
			alert(contents);
			$('#codeup').html('<strong>The switch</strong>');
		});


/////////////////////////////////////////////////////////////Exercise #2 CLASS Selector \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

		$().ready(function () {
			alert("The DOM has finished loading!")
		});
		$().ready(function () {
			$('.important').css('background-color', '#ff0');
			$('.important').css('color', '#1e16d2');
		});


/////////////////////////////////////////////////////////////Exercise #3 Element Selector \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

		$('p').css('font-size', '14px');


/////////////////////////////////////////////////////////////Exercise #4 Multiple Selectors \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
		$('.important, p').css('background-color', '#FF0');

/////////////////////////////////////////////////////////////Exercise #5 All Selector \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
		$('*').css('border', '1px solid #F00');
	})();
})();
