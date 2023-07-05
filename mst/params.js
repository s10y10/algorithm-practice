function req(name) {
  throw new Error(`${name} is required`);
}

function aaa(f = req("f")) {
  console.log(f);
}

console.log(aaa("1"));
