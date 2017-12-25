<template lang="jade">
    div
        form(class="subscribe-form form", v-on:submit.prevent="redirectUrl", method="post", :action="form.action")
            div(class="subscribe-form-input-holder")
                div(class="form-item-holder form-item-holder--full")
                    input(type="email", class="form-item form-item--text subscribe-form-input", placeholder="Email adress", required, name="sf1", v-model.trim="fields.email")
            button(type="submit", class="btn btn--green subscribe-form-submit") Join free
</template>

<script>
    export default {
        data: function() {
            return {
                form: {
                    action: "register.html",
                },
                fields: {
                    email: "",
                }
            }
        },
        methods: {
            redirectUrl: function() {
                var self = this,
                    url = self.form.action,
                    params = self.fields.email 

                if (url.indexOf("?") === -1) {
                    url += "?emailUser=" + params;
                } else {
                    url += "&emailUser=" + params;
                }
                window.location.replace(url);
            }
        }
    }
</script>
