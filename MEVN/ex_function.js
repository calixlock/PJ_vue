let a = ["a", "b", "c", "d", "e", "f"];
const cl = console.log;
cl(a.includes("d"));
cl(a.includes("z"));
cl(a.indexOf("c"));
cl(a.indexOf("z"));

// includes => more speed faster
