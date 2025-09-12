const numArr = [0,1,2,3,4,5,6,7,8,9,10];

const oddNumArr = numArr.filter((n) => n%2!=0);

const evenNumArr = numArr.filter((n) => n%2==0);

console.log(`Actual Arrary : \n${numArr}`);

console.log(`Odd Number Array : ${oddNumArr}`);

console.log(`Even Number Array :  ${evenNumArr}`);
