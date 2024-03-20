var numbers = [10, 2, 4, 28, 47, 9, 25]
console.log (numbers);



var index = 0;
while (index < numbers. length){


    if (numbers[index] <= 20) {
     console.log(`before adding 3: number = ${numbers[index]} after adding 3: number = ${numbers[index] += 3}`)
    }


   else if (numbers[index] > 20 && numbers[index] <= 30) {
    console.log(`before adding 5: number = ${numbers[index]} after adding 5: number = ${numbers[index] -= 5}`)
   }


    else if (numbers[index] > 30){
        console.log(`multiplying by 2: number = ${numbers[index]} multiplying by 2: number = ${numbers[index] *= 2}`)
    }




    index += 1;
}

console.log (numbers)



