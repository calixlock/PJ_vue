// 1---then----- error handling --------
// const a = (c = "data_c") => {
//   return new Promise((resolve, reject) => {
//     // reject 방법1
//     // throw new Error("방식1 : Error 발생");
//     // reject 방법2
//     // reject(new Error("방식2:Error발생"));
//     // reject 방법3
//     reject("방식3:Error");
//     setTimeout(() => {
//       resolve(`c : ${c}`);
//     }, 1000);
//   });
// };

// a()
//   .then((ret) => {
//     return a("data_new");
//   })
//   .then((ret) => {
//     console.log(ret);
//   })
//   .catch((e) => {
//     // console.log(`e : ${e} `);
//     console.log(`${e}`);
//   });

// 2---then----- error handling --------
// const async1 = (param) => {
//   return new Promise((resolve, reject) => {
//     resolve(param * 2);
//   });
// };
// const async2 = (param) => {
//   return new Promise((resolve, reject) => {
//     // 일부로 에러 발생시킴
//     throw "throwError";
//     resolve(param * 3);
//   });
// };
// async1(10)
//   .then(async2)
//   .then(
//     (result) => {
//       console.log("result: " + result);
//     },
//     (reason) => {
//       console.log(`${reason} > 종료되었습니다`);
//     }
//   );

// 3---then----- error handling --------
// const async1 = (param) => {
//   return new Promise((resolve, reject) => {
//     resolve(param * 2);
//   });
// };
// const async2 = (param) => {
//   return new Promise((resolve, reject) => {
//     resolve(param * 3);
//   });
// };
// async1(1)
//   .then(async2)
//   .then(
//     (result) => {
//       throw "throwError발생";
//       // console.log(result);// 6
//     },
//     (reason) => {
//       console.log(`error: ${reason}`);
//     }
//   );

// 4---catch----- error handling --------
const async1 = (param) => {
  return new Promise((resolve, reject) => {
    resolve(param * 2);
  });
};
const async2 = (param) => {
  return new Promise((resolve, reject) => {
    resolve(param * 3);
  });
};

async1(1)
  .then(async2)
  .then((result) => {
    console.log(result); //6
    throw "error 발생";
  })
  .catch((reason) => {
    console.log(`reason: ${reason}`);
  })
  .finally(() => {
    console.log("promise 이후 무조건 적으로 실행되는 finally 로직입니다.");
  }); //
