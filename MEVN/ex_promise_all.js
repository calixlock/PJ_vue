const async = (msg, ret) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log(msg);
      console.log(new Date());
      //
      resolve(ret);
    }, Math.random() * 1000)
  );
};
const promises = [async("비동기함수_1_실행", 1), async("비동기함수_2_실행", 2)];
Promise.all(promises).then((data) => {
  console.log(data); // [1,2] // 결과물들이 배열에 담겨 콘솔에 출력된다.
});
