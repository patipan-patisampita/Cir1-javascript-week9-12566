//Object.assing() method
const cat = { 1: "Srisawat", 2: "cat" };
const dog = { 3: "Plug", 4: "dog" };
const brid = { 5: "Penquin", 6: "bird" };

//Using Object.assign
const animal = Object.assign(cat, dog, brid);
console.log(animal);
//Using spread 
const animal2 = { ...cat, ...dog, ...brid }
console.log(animal2)
