(function () {
	$().ready(function () {
		"use strict"
		$.get("../JSON/blog.json").done(function (data, status) {
			alert("AJAX call completed successfully!");
			console.log("Request status: " + status);
			console.log("Data returned from server:");
			console.log(data);
		});
	});
})();
// 				function createCard() {
// 			data.forEach(function (item) {
// 					var html = '<div className="col mb-4">';
// 					html += '<div className="card">';
// 					html += '<h5 className="card-title __identify__">' + item['title'] + '</h3>';
// 					html += '<p className="card-text" id="content">' + item['content'] + '</p>';
// 					html += '<div className="card-footer">';
// 					html += '<button type="button" className="btn btn-outline-primary" id="catagories">' + +'</button>';
// 					html += '<p className="card-text" id="date"><small className="text-muted"></small>' + item['date'] + '</p>';
// 					html += '</div>';
// 					html += '</div>';
// 					html += '</div>';
// 					$('.cardTemplate').html(html);
// 				}
// 			});
// 		});
// 	});
// })();