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
                photo      :  "",
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
        self.getInfo();
        upload.$on('uploadInfo', function (id) {
            if (id == 1) {
                self.getInfo();
            }
        })
    },
    methods: {
        getInfo: function(){
            var self = this;

            axios.get("/api/user/profile").then(function(answer) {
                var userInfo = answer.data.data;

                self.user.first_name = userInfo.name;
                self.user.last_name = userInfo.last_name;
                self.user.company = userInfo.company_name;
                self.user.position = userInfo.position;
                self.user.email = userInfo.email;
                self.user.phone = userInfo.phone;
                self.user.photo = userInfo.photo.url;
            });
        }
    },
    mounted: function() {
        var element = $(this.$el);

        element.addClass("loading-opacity");

        setTimeout(function(){
            element.addClass("loading-opacity--show");
        }, 600);
    }
}
</script>

<style lang="css" scoped>
    [v-cloak] {
        opacity: 0;
    }
</style>
