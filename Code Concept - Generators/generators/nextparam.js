function* getId() {
  let id = 1;
  while (true) {
    let increment = yield id;
    if (increment) {
      id = id + increment;
      return("All done");
    } else {
      id++;
    }
  }
}

const numGen = getId();

console.log(numGen.next());
console.log(numGen.next());
console.log(numGen.next());
console.log(numGen.next());
console.log(numGen.next(23));
console.log(numGen.next());
console.log(numGen.next());
console.log(numGen.next());
console.log(numGen.next());
console.log(numGen.next());
console.log(numGen.next());
console.log(numGen.next());
console.log(numGen.next());
