### package.json에서

```json
      "dependencies": {
        "a_package": "^0.21.3",
        "b_package": "~0.12.1
      }
```

`~` : 마이너 릴리스까지

- `b_package`의 경우 0.12.1~0.13미만의 버전과 호환

`^` : 메이저 릴리스까지

- `a_package`의 경우 0.21.3~1.0미만의 버전과 호환

### cf. 패치를 올릴때

- 0.0.x 패치 릴리스
- 0.x.0 마이너 릴리스
- x.0.0 메이저 릴리스

---

### scripts 활용

```json
  "scripts": {

    "test": "node test.js"
  },
```

```bash
# 실행방법 - 1
node test.js
# 실행방법 - 2
npm run test
```

### 必.

> 실행전에 package.json 파일 위치에 test.js파일이 존재 해야한다.

---

### npm 설치 안될때

1. node_modules 폴더 완전히 제거후 node.js 버전을 올려 재설치 시도
2. yarn을 통해 설치한다

```bash
# yarn 패키지 설치
npm install -g yarn
# 모듈 설치 명령어
yarn add [모듈]
```
