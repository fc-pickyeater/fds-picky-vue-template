<template{{#pug}} lang="pug"{{/pug}}>
{{#if pug}}
  .hello
    h1 \{{ msg }}
{{else}}
  <div class="hello">
    <h1>\{{ msg }}</h1>
  </div>
{{/if}}
</template>

<script>
export default {
  name: 'hello',
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      msg: 'template 설치 완료'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style scoped {{#sass}} lang="sass"{{/sass}}>

</style>
