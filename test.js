import test from 'ava';
import imageExtensions from './';

test(t => {
	t.true(Array.isArray(imageExtensions));
	t.true(imageExtensions.length > 0);

	t.end();
});
