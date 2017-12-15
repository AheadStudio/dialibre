<template lang="jade">
    div(id="t1")
        my-checkbox11()
        span {{ greeting }}
</template>

<script>
    Vue.component('my-checkbox11', {
        template: `<div class="checkbox-wrapper" @click="check"><div :class="{ checkbox: true, checked: checked }"></div><div class="title">{{ title }}</div></div>`,
        data() {
            return {
              checked: false,
              title: 'register share success'
            }
        },
        methods: {
            check() {
              this.checked = !this.checked;
            }
        }
    });
</script>

<style scoped lang="stylus">
    span
        font-family 'Roboto', sans-serif
        color green

</style>
