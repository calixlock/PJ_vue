const a = () => {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 1000);
    setTimeout(() => {
      console.log(`a_delay : ${delay}`);
      resolve("result of a");
    }, delay);
  });
};
const b = () => {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 1000);
    setTimeout(() => {
      console.log(`b_delay : ${delay}`);
      resolve("result of b");
    }, delay);
  });
};
const c = () => {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 1000);
    setTimeout(() => {
      console.log(`c_delay : ${delay}`);
      resolve("result of c");
    }, delay);
  });
};
// a()
//   .then((ret) => b())
//   .then((ret) => c());
a().then(b()).then(c());
