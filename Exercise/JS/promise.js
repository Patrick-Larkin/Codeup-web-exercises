$(document).ready(function () {
	let getDate = (gitUsername) => {
		let url = `https://api.github.com/users/${gitUsername}/events/public`;
		return fetch(url, {headers: {'Authorization': `token 
		${GITHUB_KEY}`}})
				.then(response => response.json())
				.then(events => events.filter(events => events.type === "PushEvent"))
				.then(pushEvents => pushEvents[0])
	}

  // Get value on button click and show alert
	$("#Btn").click(function () {
		let gitUsername = $("#gitUsername").value();
		console.log(gitUsername);
		getDate(gitUsername)
				.then(date => {
					$('#output').innerText = date;
				})
	});
	// .catch(error => console.log('error', error));
})
