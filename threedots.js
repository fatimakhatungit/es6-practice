const ages = [12, 23, 13, 16, 17];
const ages2 = [15, 16, 12];
conts ages3 = [23, 36, 22, 29]

const allAges = ages.concat(ages2).concat([5]).concat(ages3)
const allAges = [...ages, ...ages2, 5, ...ages3];

// console.log(allAges2);


const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisha =[650, 450, 250];
// const maximum = Math.max(business, minister,sochib, takaPoicha);
const maximum = Math.max(...takaPoisha);
console.log(maximum);