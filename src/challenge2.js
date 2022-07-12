function countEvenNumbers(arrayOfNumbers){
	var count = 0;
	for(let i = 0 ; i < arrayOfNumbers.length; i++) {
		if (arrayOfNumbers[i] % 2 === 0){
			count++;
		}
	}
	return arrayOfNumbers.length;
}

// console.log(countEvenNumbers([1,2,3,4,5,6,7,8,9,0,7]))