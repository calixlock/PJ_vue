### CJS방식 CommonJS module

CommonJS에서

- require 함수를 사용
  ```js
  const t = require("./a2.js");
  ```
- 파일의 확장자가 `.cjs`로 설정

### ESM방식 ECMAScript module

ES 모듈에서

- import 문을 사용
  ```js
  import { b, c } from "./a.js";
  ```
- 파일의 확장자가 `.mjs`로 설정
- package.json 파일에 `{"type": "module"}` 설정

에러 메시지에서 제공된 정보를 기반으로 추정하면, 되어 있기 때문에 ES 모듈로 처리되고 있습니다.


#### 참고

https://ui.toast.com/weekly-pick/ko_20180402

https://velog.io/@wejaan/webpack-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0

https://toss.tech/article/commonjs-esm-exports-field