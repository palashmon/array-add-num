/**
 * Computes the sum of all finite numbers in the given array.
 *
 * @param {Array<unknown>=} input The input array to compute the sum. Optional, defaults to an empty array.
 * @throws {TypeError} If the input parameter is not an array.
 * @returns {number|TypeError} The computed sum of all finite numbers in the array, or a TypeError if the input is not an array.
 */
function arrayAdd(input = []) {
	if (!Array.isArray(input)) {
		throw new TypeError(`Expected an array, got ${typeof input}`);
	}

	const filteredArray = input.filter(value => Number.isFinite(Number(value)));

	let sum = 0;
	for (const value of filteredArray) {
		sum += Number(value);
	}

	return sum;
}

export default arrayAdd;
