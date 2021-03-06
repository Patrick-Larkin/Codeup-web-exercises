const users = [
	{
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash']
	},
	{
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript']
	},
	{
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php']
	},
	{
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql']
	},
	{
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php']
	},
];
// TODO: fill in your name and email and add some programming languages you know to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'patrick';
const email = 'patricklarkin995@gmail.com';
const languages = ['html', 'css', 'javascript'];

// TODO: rewrite the object literal using object property shorthand
//old
// users.push({
// 	name: name,
// 	email: email,
// 	languages: languages
// });

//new
users.push({
	name,
	email,
	languages
})

let emails = [];
let names = [];

// TODO: replace `var` with `let` in the following variable declarations
// TODO: rewrite the following using arrow functions
// Old
// users.forEach(function(user) {
// 	return emails.push(user.email);
// });
// users.forEach(function(user) {
// 	return names.push(user.name);
// });
// New thought this would work

users.forEach(user => emails.push(user.email));
users.forEach(user => names.push(user.name));

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function({name, email, languages}) {
	// TODO: rewrite the code below to use object destructuring assignment
	//       note that you can also use destructuring assignment in the function
	//       parameter definition
	// const name = user.name;
	// const email = user.email;
	// const languages = user.languages;

	// TODO: rewrite the assignment below to use template strings
	developers.push(`${name}'s email is ${email} ${name} knows ${languages.join(', ')}`);
});

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following lo op to use a for..of loop
for(developer of developers) {
	// TODO: rewrite the assignment below to use template strings
	list += '<li><h3>' + developer + '</h3></li>';
}
list += '</ul>';

document.write(list)

//todo:read reduce and filter
// todo refactor older javascript (weather, coffee project)
//todo:
