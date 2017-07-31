## Build Setup

``` bash
# 의존 모듈 설치
npm install

# web server (localhost:8080)로 구동
npm run dev

# 배포를 위한 압축, build
npm run build

# 배포를 위한 압축, build와 bundle analyzer report 보기
npm run build --report
{{#unit}}

# unit test 수행
npm run unit
{{/unit}}
{{#e2e}}

# e2e test 수행
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# 모든 test 수행
npm test
{{/if_or}}
```

보다 자세한 사용법은 [가이드](https://vuejs-templates.github.io/webpack/), [vue-loader 문서(한국어 번역)](https://vue-loader.vuejs.org/kr/)를 읽어보세요.
