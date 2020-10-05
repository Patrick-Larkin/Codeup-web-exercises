"use strict"
$(document).ready(function () {
	$('dd').addClass('invisible');

	$("#toggle").click(function () {
		$("dd").toggleClass("invisible");
	});
});

$("#btn3").click(function () {
	//     // if (!$("#panel3").hasClass("hidden")) {
	$("#panel3").toggleClass("hidden");
//     // } else {
//     //     $("#panel3").removeClass("hidden");
//     // }