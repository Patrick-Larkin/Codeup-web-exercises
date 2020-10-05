$(document).ready(function () {
	let getDateLastCommit = (username) => {
		let url = `https://api.github.com/users/${username}/events/public`;
		return fetch(url, {headers: {'Authorization': `token ${GITHUB_KEY}`}})
				.then(response => response.json())
				.then(console.log(response))
				.then(events => events.filter(event => event.type === "PushEvent"))
				.then(pushEvents => pushEvents[0].created_at)
				.catch(err => console.error(`Something went amiss: ${err}`));
	}

	$("#gitUsernameBtn").click(function () {
		let gitUsername = $('#gitUsername').value();
		console.log(gitUsername);
		getDateLastCommit(gitUsername)
				.then(events => {
					$('#gitUsername').innerText = gitUsername
					$('#output').innerText = events;
				})
	});
})



//Race
// let wait = (ms) => {
// 	return new Promise ((resolve) => {
// 		setTimeout(()=>{
// 			resolve("Hello World");
// 		}, ms);
// 	})
// }
//
// wait(3000).then((data) => console.log('You\'ll see this after 3 seconds ' + data));
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// let random = Math.floor(Math.random()*5000);
// wait(random).then(() => console.log(`You'll see this after ${random / 1000} seconds!`))