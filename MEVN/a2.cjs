exports.sayFunc = (txt) => `${txt} 출력`;
exports.satFunc2 = (txt) => {
  console.log(this.sayFunc("func2_e"));
  return `${txt} 리턴`;
};
exports.value = "value_" + 1;
