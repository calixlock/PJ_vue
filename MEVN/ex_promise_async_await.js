// promise > async / await
const a = () => {
  return new Promise((resolve, reject) => {
    let t = Math.random() * 1000;
    setTimeout(() => {
      console.log(`console_a : ${t}`);
      resolve(1);
    }, t);
  });
};
const b = () => {
  return new Promise((resolve, reject) => {
    let t = Math.random() * 1000;
    setTimeout(() => {
      console.log(`console_b : ${t}`);
      resolve(2);
    }, t);
  });
};
const c = () => {
  return new Promise((resolve, reject) => {
    let t = Math.random() * 1000;
    setTimeout(() => {
      console.log(`console_c : ${t}`);
      resolve(3);
    }, t);
  });
};
const main = async () => {
  await a();
  await b();
  await c();
};
main();
