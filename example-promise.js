/*

Promise

function getTempPromise (location) {
	return new Promise(function (resolve, reject) {
		setTimeout (function() {
			resolve(76);
			reject('City is not found');
		}, 1000);	
	});
}

getTempPromise('Pasadena').then (function(temp) {
	console.log ('success', temp)
}, function (err) {
	console.log ('error', err)
})


if (typeof x === 'number') {

}



function addPromise (a, b) {
	return new Promise(function (resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a+b);
		} else
		reject('a and/or b is not a number');
	});
}

addPromise (9, 'ass').then (function(sum) {
	console.log ('success', sum)
}, function (err) {
	console.log ('error', err)
})

*/