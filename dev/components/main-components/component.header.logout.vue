<template lang="jade">
    div(class="popup-profile-container")
        div(class="popup-profile-holder")
            img(src="../i/profile.jpg", class="popup-profile-holder-img", v-show="!info.photoUrl")
            img(:src="info.photoUrl", class="popup-profile-holder-img", v-show="info.photoUrl")
        div(class="popup-profile-personal")
            div(class="popup-profile-name") {{ fullname }}
            a(href="profile.html", class="link link--blue popup-profile-link") Profile
            div(class="popup-profile-events")
                a(href="#", class="popup-profile-events-alerts")
                    span(class="popup-profile-events-count") 566
                a(href="#", class="popup-profile-events-mail")
                    span(class="popup-profile-events-count") 566
        form(class="form", v-bind:action="form.action", @submit.prevent="send")
            button(type="submit", class="btn btn--green-inverse popup-profile-btn") Sign out
</template>

<script>
    export default {
        data: function() {
            return {
                form: {
                    action: "/api/logout",
                    message: "",
                    success: false
                }
            }
        },
        props: ["info"],
        computed: {
            fullname: function() {
                var self = this;
                return self.info.name + " " + self.info.lastName;
            },
        },
        methods: {
            send: function() {
                var self = this,
                    $form = $(this.$el).find("form");

                    axios.get(self.form.action)
                        .then(function(answer) {
                            document.location.href = "home.html";
                        })
                        .catch(function(error) {
                            console.log(error);
                        });
            }
        },
    }
</script>

<style lang="styl">
</style>
