import test from 'ava';
import arrayAdd from '.';

test('Return typeerror when input is not an array.', t => {
	const err = t.throws(() => {
		arrayAdd(23);
	}, TypeError);
	t.is(err.message, 'Expected an array, got number');
});

test('Return 0 when an array is empty.', t => {
	t.deepEqual(arrayAdd([]), 0);
	t.deepEqual(arrayAdd(), 0);
});

test('Sum up all the numbers in the array.', t => {
	t.deepEqual(arrayAdd([1, 2, 3, 4]), 10);
});

test('Sum up only numbers in the array.', t => {
	t.deepEqual(arrayAdd([1, 'abc', 3, 4, {}, 2, null]), 10);

	// Using decimal values
	t.deepEqual(arrayAdd([10, 1.5]), 11.5);
	t.deepEqual(arrayAdd([10, '1.5']), 11.5);

	// Using -ve values
	t.deepEqual(arrayAdd([10, -1]), 9);
	t.deepEqual(arrayAdd([10, '-1']), 9);

	// Using -ve decimal values
	t.deepEqual(arrayAdd([10, -1.1]), 8.9);
	t.deepEqual(arrayAdd([10, '-1.1']), 8.9);

	// Using string with 0 prefix
	t.deepEqual(arrayAdd(['0', 1, 2]), 3);
	t.deepEqual(arrayAdd(['01', 1, 2]), 4);

	// Using hex values, 0xAB = 171
	t.deepEqual(arrayAdd(['0xAB', 1]), 172);
	t.deepEqual(arrayAdd(['0xAB', 1, '0xAC']), 344);

	// Using exponential values
	t.deepEqual(arrayAdd([1e3, 1, 2, 3]), 1006);
	t.deepEqual(arrayAdd(['1e3', 1, 2, 3]), 1006);
});

test('Sum up integer strings in the array.', t => {
	t.deepEqual(arrayAdd(['1', '2', '3', '4']), 10);
});

test('Sum up integer strings & numbers mix in the array.', t => {
	t.deepEqual(arrayAdd(['1', 2, '3', 4]), 10);
});

test('Sum up only finite numbers.', t => {
	t.deepEqual(arrayAdd([1, 2, 3, 4, Infinity, NaN, -Infinity]), 10);
});
