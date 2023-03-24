function* getId() {
  let id = 1;
  while (true) {
    yield id;
    id++;
  }
}

const numGen = getId();
const numGen2 = getId();

for (i = 1; i < 5; i++) {
  console.log(numGen.next());
}
for (i = 1; i < 5; i++) {
  console.log(numGen2.next());
}
