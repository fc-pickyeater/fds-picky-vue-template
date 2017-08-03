// forked from: https://github.com/vuejs-templates/webpack/blob/master/meta.js
//              https://github.com/yamoo9/vue-full/blob/master/meta.js

module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "project 이름"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "project 설명",
      "default": "Fast Campus front-end dev. school 4기 team 7의 project. 주제는 '음식2: 오늘 뭐먹지?'"
    },
    "author": {
      "type": "string",
      "required": false,
      "message": "제작자",
      "default": "Fast Campus front-end dev. school 4기 team 7"
    },
    "build": {
      "type": "list",
      "message": "Vue 빌드",
      "choices": [
        {
          "name": "runtime + compiler",
          "value": "standalone",
          "short": "standalone"
        },
        {
          "name": "runtime Only: 가벼운 6KB min+gzip, 그러나 template (또는 Vue-specific HTML)은 오직 .vue file에서만 허용",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "pug": {
       "type": "confirm",
       "message": "Pug를 사용 하시겠습니까?",
       "default": true
    },
    "sass": {
       "type": "confirm",
       "message": "Sass를 사용 하시겠습니까?",
       "default": true
    },
    "router": {
      "type": "confirm",
      "message": "Vue-router를 사용 하시겠습니까?",
      "default": true
    },
    "vuex": {
      "type": "confirm",
      "message": "Vuex를 사용 하시겠습니까?",
      "default": true
    },
    "lint": {
      "type": "confirm",
      "message": "ESLint를 사용 하시겠습니까?",
      "default": true
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "message": "ESLint pre-set을 선택해 주세요.",
      "choices": [
        {
          "name": "Airbnb 스타일 (https://github.com/airbnb/javascript)",
          "value": "airbnb",
          "short": "Airbnb"
        },
        {
          "name": "Standard 스타일 (https://github.com/feross/standard)",
          "value": "standard",
          "short": "Standard"
        },
        {
          "name": "none (직접 규칙 설정)",
          "value": "none",
          "short": "none"
        }
      ]
    },
    "unit": {
      "type": "confirm",
      "message": "unit test를 위한 Karma와 Mocha를 설치 하시겠습니까?",
      "default": true
    },
    "e2e": {
      "type": "confirm",
      "message": "e2e test를 위한 Nightwatch를 설치 하시겠습니까?",
      "default": true
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "build/webpack.test.conf.js": "unit",
    "test/e2e/**/*": "e2e",
    "src/router/**/*": "router",
    "src/store/**/*": "vuex"
  },
  "completeMessage": "프로젝트 시작하기:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nhttps://vuejs-templates.github.io/webpack 에서 프로젝트 템플릿 사용 방법을 확인할 수 있습니다."
};