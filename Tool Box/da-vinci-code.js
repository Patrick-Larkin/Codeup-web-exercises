const APIKEY_ENCODED = 'DL}dV|Efg9eJGUN9TwGXI}Nr\\4<pkdFG\\|3jYyf';
// String.fromCharCode(“a”.charCodeAt(0))
const RING_SHIFT = 3;
const encoderRing = function (str) {
	// returns encoded string
	var output = [];
	var letters = str.split(“”);
	letters.forEach(function(letter) {
		output.push(String.fromCharCode(letter.charCodeAt(0) + RING_SHIFT));
	});
	return output.join(“”)
}
const decoderRing = function (str) {
	// returns decoded string
	var output = [];
	var letters = str.split(“”);
	letters.forEach(function(letter) {
		output.push(String.fromCharCode(letter.charCodeAt(0) - RING_SHIFT));
	});
	return output.join(“”)
}
console.log(APIKEY_ENCODED);
//how to use this in code:
console.log((decoderRing(APIKEY_ENCODED)));