<template lang="jade">
    div(id="t1")
        my-checkbox14()
        span {{ greeting }}
</template>

<script>
    Vue.component('my-checkbox14', {
        template: `<div class="checkbox-wrapper" @click="check"><div :class="{ checkbox: true, checked: checked }"></div><div class="title">{{ title }}</div></div>`,
        data() {
            return {
              checked: false,
              title: 'signin'
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
