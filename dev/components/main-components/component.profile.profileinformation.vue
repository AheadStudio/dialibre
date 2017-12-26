<template lang="jade">
    div(class="page-profile-personal--left")
        div(class="page-profile-personal-holder")
            img(:src="user.photo", class="page-profile-personal-holder-img")
        div(class="page-profile-personal-info")
            div(class="page-profile-personal-info-name") {{ fullname }}
            div(class="page-profile-personal-info-company") {{ user.company }}
            div(class="page-profile-personal-info-position") {{ user.position }}
            a(:href="'mailto:' + user.email", class="link page-profile-personal-info-email") {{ user.email }}
            a(:href="'tell:' + user.phone", class="link page-profile-personal-info-phone") {{ user.phone }}
            a(href="#edit-profile", class="btn btn--blue page-profile-personal-info-btn popup") Edit profile
            a(href="#change-password", class="btn btn--blue-inverse page-profile-personal-info-btn popup") Change password

</template>

<script>
    // connect mixins
    import { getMixin } from "../mixins/get_request.js"

    export default {
        data: function() {
            return {
                requestResult: [],
                requestParams: {
                    url: "/api/user/profile",
                    res: [],
                },
                user: {
                    first_name :  "",
                    last_name  :  "",
                    company    :  "",
                    position   :  "",
                    email      :  "",
                    phone      :  "",
                    photo      :  "",
                }
            }
        },
        mixins: [getMixin],
        computed: {
            fullname: function() {
                var self = this;
                return self.user.first_name + " " + self.user.last_name;
            }
        },
        created: function() {
            var self = this;
            self.sendRequest();
            upload.$on('uploadInfo', function (id) {
                if (id == 1) {
                    self.sendRequest();
                }
            })
        },
        methods: {
            resultHandler: function() {
                var self = this;
                self.user.first_name = self.requestParams.res.name;
                self.user.last_name = self.requestParams.res.last_name;
                self.user.company = self.requestParams.res.company_name;
                self.user.position = self.requestParams.res.position;
                self.user.email = self.requestParams.res.email;
                self.user.phone = self.requestParams.res.phone;
                self.user.photo = self.requestParams.res.photo.url;
            },
        }
    }
</script>

<style lang="css" scoped>
    [v-cloak] {
        opacity: 0;
    }
</style>
