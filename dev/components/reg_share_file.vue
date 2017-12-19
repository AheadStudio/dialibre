<template lang="jade">
    div()
        div(class="page-heading")
            div(class="page-inner page-inner--w1")
                h1(class="h1") SHARE DEAL FROM your deAl flow

        div(class="page-inner page-inner--w1")
            div(class="register-share")
                div(class="register-share-title") Upload one or more deals using one of the popular file formats (doc, docx, pdf, xis, xlsx, txt, etc). Our analyst will review your deals, qalified deals will be shared with the community.
                div(class="register-share-subtitle") You will receive a notification whether the deals you shared were approved and how many points are awarded

                div(class="register-share-upload")
                    form(action="#", class="register-share-form-upload")
                        div(class="register-share-form-upload-row")
                            div(class="register-share-form-upload-holder")
                                input(type="file", name="files", class="register-share-form-upload-item-file")
                        div(class="register-share-form-upload-row")
                            label(class="register-share-form-upload-item-checkbox")
                                input(type="checkbox", class="register-share-form-upload-item-checkbox-item")
                                span(class="register-share-form-upload-item-checkbox-title") By click “SUBMIT DEAL” you agree with Terms of Service.

                        div(class="register-share-form-upload-row")
                            button(type="submit", class="btn btn--green register-share-form-upload-submit") Submit Deal
</template>

<script>
    export default {
        mounted: function() {
            DEALIBRE.forms.init(false);
            DEALIBRE.forms.fileUpload();
        }
    }
</script>
