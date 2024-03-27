// 실행 방식 remote_control

const cl = console.log;
const a = {
  create: (r) => r.start(),
};
const a_b = {
  start: () => cl("a_b.start() 실행"),
};
const a_c = {
  start: () => cl("a_c.start() 실행"),
};
// cmd
a.create(a_b);
a.create(a_c);
