module.exports = (input = []) => {
	if (!Array.isArray(input)) {
		throw new TypeError(`Expected an array, got ${typeof input}`);
	}

	return input
		.filter(Boolean)
		.filter(v => !isNaN(v) && isFinite(v))
		.reduce((ac, curr) => ac + Number(curr), 0);
};
