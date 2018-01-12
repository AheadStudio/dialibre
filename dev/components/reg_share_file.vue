<template lang="jade">
    div()
        header(class="page-header", id="page-header", itemscope, itemtype="http://schema.org/WPHeader")
            newheader(:headersetting="headerProps")
        main(class="page-content")
            div(class="page-heading")
                div(class="page-inner page-inner--w1")
                    h1(class="h1") SHARE DEAL FROM your deAl flow

            div(class="page-inner page-inner--w1")
                div(class="register-share")
                    div(class="register-share-title") Upload one or more deals using one of the popular file formats (doc, docx, pdf, xis, xlsx, txt, etc). Our analyst will review your deals, qalified deals will be shared with the community.
                    div(class="register-share-subtitle") You will receive a notification whether the deals you shared were approved and how many points are awarded

                    div(class="register-share-upload")
                        form(action="#", class="register-share-form-upload", v-on:submit.prevent="submitForm")
                            div(class="register-share-form-upload-row")
                                div(class="register-share-form-upload-holder")
                                    input(type="file", name="files", class="register-share-form-upload-item-file")
                            div(class="register-share-form-upload-row")
                                label(class="register-share-form-upload-item-checkbox")
                                    input(type="checkbox", class="register-share-form-upload-item-checkbox-item", v-model="checked")
                                    span(class="register-share-form-upload-item-checkbox-title") {{ fileText }}

                            div(class="register-share-form-upload-row")
                                button(type="submit", class="btn btn--green register-share-form-upload-submit") Submit Deal
</template>

<script>
    // connect components in home page
    import newheader from './header.vue';

    export default {
        data: function() {
            return {
                checked: false,
                file: "",
                fileText: "By click “SUBMIT DEAL” you agree with Terms of Service.",
                fileTextStyle: "",
                headerProps: {
                    pageTitle    :  "",
                    mobileClass  :  "",
                    headerType   :  "",
                    isUserAuth   :   false,
                },
            }
        },
        components: {
            "newheader"  : newheader,
        },
        created: function() {
            var self = this,
                $body = $("body");
            DealibreApp.methods.checkAuthorized(function(isAuth) {
                self.headerProps.isUserAuth = isAuth;
                if (!isAuth) {
                    self.headerProps.pageTitle = "register-step-two";
                    self.headerProps.mobileClass = "header-mobile--white";
                    self.headerProps.headerType = "black";
                } else {
                    self.headerProps.pageTitle = "register-step-two";
                    self.headerProps.mobileClass = "header-mobile--aut";
                    self.headerProps.headerType = "black";
                }
            });

            if ($body.hasClass("page-home")) {
                $body.removeClass("page-home");
                $(".page-content", $body).addClass("page-content--auth");
            }

            DealibreApp.methods.showFooter();
        },
        methods: {
            submitForm: function() {
                var self = this,
                    textCheckbox = $(".register-share-form-upload-item-checkbox-title"),
                    arrayFile = fileUploadApi.getChoosedFiles(),
                    formData = new FormData();

                    if (self.checked == false || arrayFile.length === 0 ) {
                        self.fileText = 'You forgot to click "SUBMIT DEAL" you agree with Terms of Service';
                        textCheckbox.addClass("error");
                    } else {
                        textCheckbox.removeClass("error");
                        self.fileText = 'By click “SUBMIT DEAL” you agree with Terms of Service.';

                        for (var i = 0; i < arrayFile.length; i++) {
                            formData.append('files[]', arrayFile[i].file);
                        }

                        const config = {
                            headers: { 'content-type': 'multipart/form-data' }
                        }

                        axios.post("/api/deal/suggest", formData, config)
                            .then(function(answer) {
                                var redirect = "register_share_success.html";

                                setTimeout(function(){
                                    document.location.href = redirect;
                                }, 600);

                            }).catch(function(info) {
                            });
                    }
            }
        },
        mounted: function() {
            DEALIBRE.forms.init(false);
            DEALIBRE.forms.fileUpload();
        }
    }
</script>
