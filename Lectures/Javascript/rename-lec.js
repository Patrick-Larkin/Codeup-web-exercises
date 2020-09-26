		// .map: transforms each element in the collection.
		// .filter: filters our values, that is, makes sure each element in the collection meets some criteria or passes some test.
		// .reduce: reduces a collection to a single value.

		================================= Map, Filter, Reduce
		-- Array.map()
		// Great creating a new array with changed values.
		// 		Example:
		const names = ['justin', 'ViVIAN', 'boB', 'DANIEL', 'tRant'];
		const convertToTitleCase = str => str[0].toUpperCase() + str.substring(1).toLowerCase();
		const output = names.map(convertToTitleCase);
		console.log(output); // ['Justin', Vivian', 'Bob', 'Daniel', 'Trant'];
		-- Array.filter()
		// Great for removing elements in an array that fail a given test.
		// 		Example:
		const names = ['Justin', 'Vivian', 'Bob', 'Daniel', 'Trant'];
		const output = names.filter(name => name !== 'Bob'); // filter out 'Bob'
		console.log(output); // ['Justin', 'Vivian', 'Daniel', 'Trant']
		-- Array.reduce()
		// Great for combining the values of an array together in some way to create data of any type.
		// 		Example 1:
		const names = ['Justin', 'Vivian', 'Daniel', 'Trant'];
		const output = names.reduce((greeting, name) => greeting += `${name}, `, 'Welcome: ').slice(0, -2);
		console.log(output); // "Welcome Justin, Vivian, Daniel, Trant"
		// -- ULTRA COMBO!!!!!
		const names = ['justin', 'ViVIAN', 'boB', 'DANIEL', 'tRant'];
		const convertToTitleCase = str => str[0].toUpperCase() + str.substring(1).toLowerCase();
		const output = names.map(convertToTitleCase)
				.filter(name => name !== 'Bob')
				.reduce((greeting, name) => greeting += `${name}, `, 'Welcome: ').slice(0, -2);
		console.log(output);
		// Collapse



		// ========= MAP

		/*
				From an array, use map to return another array of the same length, transforming elements as needed.
		 */

		const fruits1 = ['apple', 'orange', 'banana'];

		// create messages for each fruit
		// const diet = fruits.map(fruit => `Currently eating ${fruit}`);
		// console.log(diet);

		// create an ordered list of fruit
		// const html = fruits.map(fruit => `<li>${fruit}</li>`).join("");
		// document.write(`<ol class="fruits">${html}</ol>`);

		const family1 = [
			{
				name: "Sally",
				gender: "female",
				age: 29,
			},
			{
				name: "Emily",
				gender: "female",
				age: 10,
			},
			{
				name: "Fred",
				gender: "male",
				age: 32,
			},
		];

		// create an array of just names for each person
		// const names = family.map(person => person.name);
		// console.log(names);

		// create an array of lengths of first names
		// const nameLengths = family.map(({ name }) => name.length);
		// console.log(nameLengths);

		// create an array of people where everyone is two years older

		// function makeOlderFamily(person) { // THIS MUTATES THE ORIGINAL!
		//     person.age += 2;
		//     return person;
		// }

		// function makeOlderFamily({ name, gender, age }) { // This does not mutate original objects
		//     return {name, gender, age: age + 2};
		// }

		// const olderFamily = family.map(makeOlderFamily);
		// console.log(olderFamily);
		// console.log(family);


		// ========= FILTER
		/*
				From an array, use filter to create a new array of elements that pass a filtering test.
		 */

		const fruits2 = ['banana', 'apple', 'orange', 'banana'];

		// remove banana's from list of favorite fruits
		// const favoriteFruits = fruits2.filter(fruit => fruit !== 'banana');
		// console.log(favoriteFruits);

		// create array of fruits with names shorter than six characters
		// const shorterFruitNames = fruits2.filter(fruit => fruit.length < 6);
		// console.log(shorterFruitNames);

		const family2 = [
			{
				name: "Sally",
				gender: "female",
				age: 29,
			},
			{
				name: "Emily",
				gender: "female",
				age: 10,
			},
			{
				name: "Fred",
				gender: "male",
				age: 32,
			},
		];

		// Filter out male family members
		// const females = family2.filter(person => person.gender === "female");
		// console.log(females);


		// ========= REDUCE
		/*
				From an array, use reduce to transform the elements of the array into another single value of any type
		 */

		const fruits3 = ['apple', 'orange', 'banana'];

		// concatenate all fruit names into one larger string
		// const smoothie = fruits3.reduce((total, current) => total += current );
		// console.log(smoothie);


		const family3 = [
			{
				name: "Sally",
				gender: "female",
				age: 29,
			},
			{
				name: "Emily",
				gender: "female",
				age: 10,
			},
			{
				name: "Fred",
				gender: "male",
				age: 32,
			},
		];

		// add ages of all family members up
		// const totalAges = family3.reduce((total, current) => total + current.age, 0);
		// console.log(totalAges);
		}
		​
    /**
     * This map function is an approximate representation of what the Array.prototype.map() method does.
     * @param array
     * @param callback
     * @returns {Array}
     */
    function map(array, callback) {
	    let output = [];
	    for (let i = 0; i < array.length; i += 1) {
		    output.push(callback(array[i]));
	    }
	    return output;
    }
​
    /**
     * This filter function is an approximate representation of what the Array.prototype.filter() method does.
     * @param array
     * @param callback
     * @returns {Array}
     */
    function filter(array, callback) {
	    let output = [];
	    for (let i = 0; i < array.length; i += 1) {
		    if (callback(array[i])) {
			    output.push(array[i]);
		    }
	    }
	    return output;
    }
​
    /**
     * This reduce function is an approximate representation of what the Array.prototype.reduce() method does.
     * Unlike the actual array reduce method, this function REQUIRES a default starting value.
     * @param array
     * @param callback
     * @param startingValue
     * @returns {*}
     */
    function reduce(array, callback, startingValue) {
	    let output = startingValue;
	    for (let i = 0; i < array.length; i += 1) {
		    output = callback(output, array[i]);
	    }
	    return output;
    }
​
		// ======================== TESTING THE FUNCTIONS
		​
		// const testArray = [1, 2, 3];
		//
		// const mapOutput = map(testArray, function(element) {
		//     return element + 1;
		// });
		//
		// console.log(mapOutput);
		//
		// const filterOutput = filter(testArray, function(element) {
		//     return element !== 2;
		// });
		//
		// console.log(filterOutput);
		//
		// const reduceOutput = reduce(testArray, function(accumulator, element) {
		//     return accumulator + element;
		// }, 0);
		//
		// console.log(reduceOutput);
		//  ======================== USING THE ACTUAL ARRAY METHODS
		// const arr = [1, 2, 3];
		//
		// const mapMethodOutput = arr.map(function(element) {
		//     return element + 1;
		// });
		//
		// console.log(mapMethodOutput);
		//
		// const filterMethodOutput = arr.filter(function(element) {
		//     return element !== 2;
		// });
		//
		// console.log(filterMethodOutput);
		//
		// const reduceMethodOutput = arr.reduce(function(accumulator, element) {
		//     return accumulator + element;
		// }, 0);
		//
		// console.log(reduceMethodOutput);



