function* random() {
  while (true) {
    yield Math.random();
  }
}

const a = random();
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
