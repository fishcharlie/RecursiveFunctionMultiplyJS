console.log("The result is: " + infiniteMult(2)(3)(3)(2));  // 18
console.log("The result is: " + tripleMult(2)(3)(3));  // 18

function tripleMult(numA) {
	return function (numB) {
		return function (numC) {
			return numA * numB * numC;
		}
	}
}

function infiniteMult(num) {
	let total = num;
	const funcToReturn = function (numB) {
		total = total * numB;
		return funcToReturn;
	}
	funcToReturn.valueOf = () => total;
	return funcToReturn;
}