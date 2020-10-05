let fetchStarWars = fetch('https://swapi.dev/api/people/8/')
			.then(result => {
				console.log(result)
				return result.json()
			})
			.then(data => {
				console.log(data);
				// return
			})
let fetchGithub = fetch('https://api.github.com/uses')
		.then(response => response.json())
		.then(result => {
			result.forEach(user => console.log(user))
		})
		.catch(error => console.log(error))

Promise.all([fetchStarWars, fetchGithub ])
		.then(data => {
			console.log("Both are Complete!!!");
			console.log(data)
		})


let redTurtle = Math.floor(Math.random()*10000);
let blueTurtle = Math.floor(Math.random()*10000);
let greenTurtle = Math.floor(Math.random()*10000);
let orangeTurtle = Math.floor(Math.random()*10000);

let goRedTurtle = new Promise((resolve) => {
	setTimeout(() => {
		resolve(`Red Turtle Finished in ${redTurtle}ms!`)
	}, redTurtle)
}).then(data => {
	console.log(data)
})
let goGreenTurtle = new Promise((resolve) => {
	setTimeout(() => {
		resolve(`Green Turtle Finished in ${greenTurtle}ms!`)
	}, blueTurtle)
}).then(data => {
	console.log(data)
})
let goBlueTurtle = new Promise((resolve) => {
	setTimeout(() => {
		resolve(`Blue Turtle Finished in ${blueTurtle}ms!`)
	}, greenTurtle)
}).then(data => {
	console.log(data)
})
let goOrangeTurtle = new Promise((resolve) => {
	setTimeout(() => {
		resolve(`Orange Turtle Finished in ${orangeTurtle}ms!`)
	}, orangeTurtle)
}).then(data => {
	console.log(data)
})
console.log("When will this output be seen?");



// console.log("And They're off")
// Promise.race([goRedTurtle, goGreenTurtle, goBlueTurtle, goOrangeTurtle])
// 		.then(console.log(data))


