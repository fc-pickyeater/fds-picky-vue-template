# pickyCookBook project를 위한 vue-template

전체 기능을 갖춘 Webpack with hot-reload, ESLint(file 저장 시 lint 됨), unit test, CSS 추출

## 문서

- [source영문문서](https://github.com/vuejs-templates/webpack/tree/master/docs)

아래 두 project가 이 project의 원형입니다.

- [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack)
- [yamoo9/vue-full](https://github.com/yamoo9/vue-full)

## 사용법

``` bash
$ npm install -g vue-cli
$ vue init fc-pickyeater/fds-picky-vue-template project-name
$ cd project-name
$ npm install
$ npm run dev
```

Port 번호는 기본 `8080`을 사용합니다. Port 변경이 필요한 경우 `config/index.js` 에서 수정하세요.

## 템플릿에 포함된 명령

- `npm run dev`: 개발 시작
  - 단독 vue file을 위한 Webpack + vue-loader
  - State 유지 hot-reload
  - State 유지 compilation error overlay
  - ESLint 저장 시 자동 lint
  - Source maps

- `npm run build`: Production ready build
  - UglifyJS를 이용하여 JavaScript 압축
  - Html-minifier를 이용하여 HTML 압축
  - Cssnano를 이용하여 모든 component로부터 CSS를 추출하여 하나의 file로 만들고 압축
  - production과 long-term caching을 위해 모든 정적 자원을 version hash로 complie
  - 이 생성된 자원들과 함께 적합한 URL과 함께 index.html 자동생성
  - bundle size 통계와 함께 npm run build --reportto build 사용

- `npm run unit`: Karma + Mocha + karma-webpack과 함께 PhantomJS에서 실행되는 unit test
  - ES2015이상인 test files 지원
  - 모든 webpack loaders 지원
  - 쉬운 mock 주입

- `npm run e2e`: End-to-end test
  - 다수의 browser에서 병렬 test 실행 가능
  - Box 밖에서 하나의 command로 작업:
    - Selenium과 chromedriver 의존성 자동 관리
    - Selenium server 자동 생성