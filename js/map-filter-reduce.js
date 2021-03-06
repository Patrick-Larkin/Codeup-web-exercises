"use strict";

const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];


// PROBLEM 2
//Todo: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const moreLanguageUsers = users.filter(({ languages }) => languages.length >= 3);
console.log(moreLanguageUsers);

// PROBLEM 3
//Todo: Use .map to create an array of strings where each element is a user's email address
const emails = users.map(({ email }) => email);
console.log(emails);

// PROBLEM 4
//Todo: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const totalYears = users.reduce((total, { yearsOfExperience }) => total + yearsOfExperience, 0);
const averageYearsOfExperience = totalYears/users.length;
console.log(averageYearsOfExperience);

// PROBLEM 5
//Todo: Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((longestEmail, {email}) => (email.length > longestEmail.length) ? email : longestEmail, '');
console.log(longestEmail);

// PROBLEM 6
//Todo: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const instructors = users.reduce((message, { name }) => `${message} ${name},`, 'Your instructors are:').slice(0, -1).concat(".");
console.log(instructors);



