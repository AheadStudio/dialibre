<template lang="jade">
    div()
        div(class="page-profile-personal-info-name", v-cloak) {{ fullname }}
        div(class="page-profile-personal-info-company", v-cloak) {{ user.company }}
        div(class="page-profile-personal-info-position", v-cloak) {{ user.position }}
        a(href="mailto:JonSmit@ro.ro", class="link page-profile-personal-info-email", v-cloak) {{ user.email }}
        a(href="tell:+00000000000", class="link page-profile-personal-info-phone", v-cloak) {{ user.phone }}

</template>

<script>
export default {
    data: function() {
        return {
            user: {
                first_name :  "",
                last_name  :  "",
                company    :  "",
                position   :  "",
                email      :  "",
                phone      :  "",
            }
        }
    },
    computed: {
        fullname: function() {
            var self = this;
            return self.user.first_name + " " + self.user.last_name;
        }
    },
    created: function() {
        var self = this;
        self.sendRequest();
    },
    methods: {
        sendRequest: function(){
            var self = this;

            axios.get("/api/user/profile").then(function(answer) {
                var userInfo = answer.data.data;

                self.user.first_name = userInfo.name;
                self.user.last_name = userInfo.last_name;
                self.user.company = userInfo.company_name;
                self.user.position = userInfo.position;
                self.user.email = userInfo.email;
                self.user.phone = userInfo.phone;
            });
        }
    },
}
</script>

<style lang="css" scoped>
    [v-cloak] {
        opacity: 0;
    }
</style>
