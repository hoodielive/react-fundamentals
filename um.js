/** 
 * @name titleCase
 * @param {String} str - The string to transform 
 * @returns {String} A new string with all words capitalized
 */

function titleCase(str) {
	// Break string into words 
	const parts = str.trim().split(' ')
	console.log(parts)
	// Remove extra white space
	const trimmed = parts.filter((next) => next.length > 0)
	console.log(trimmed)
	// Capitalized the first letter of each word
	const capitalized = trimmed.map((next) => {
		return next[0].toUpperCase() + next.substring(1)
	})
	// Join words back into string and return 
	return capitalized.join(' ')
}

console.log(titleCase('mephis'))
