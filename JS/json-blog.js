(function () { // IFEE
	"use strict"
	$().ready(function () {
		$.ajax("../JSON/blog.json").done(function (data) {
			let titleInnerHTML = '';
			let contentInnerHTMl = '';
			let tagsInnerHTML = '';
			let dateInnerHTML = '';
			data.forEach(function (item) {
				titleInnerHTML += item['title']
				$('#title').html(titleInnerHTML);

				contentInnerHTMl += item['content']
				$('#content').html(contentInnerHTMl);

				tagsInnerHTML += item['categories']
				$('#categories').html(tagsInnerHTML);

				dateInnerHTML += item['date']
				$('#date').html(dateInnerHTML);
			});
		});
	})();