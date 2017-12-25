<template lang="jade">
    div(class="page-profile-personal-credits-items")
        div(class="page-profile-personal-credits-item", v-for="item in requestResult")
            label(class="page-profile-personal-credits-radio")
                input(type="radio", name="credits", class="page-profile-personal-credits-radio-item", @change="setDefFetch", :checked="item.def", :value="item.id")
                span(class="page-profile-personal-credits-radio-title") {{ item.brand }}
            div(class="page-profile-personal-credits-item-number") {{ item.last4 }}
            a(href="#", class="page-profile-personal-credits-item-close", @click.prevent="delDefFetch", :data-fetch="item.id")
</template>

<script>
    // connect mixins
    import { getMixin } from "../mixins/get_request.js"

    export default {
        data: function() {
            return {
                requestResult: [],
                requestParams: {
                    url: "/api/user/sources/fetch",
                    res: [],
                },
                fetch: {
                    getDefUrl: "/api/user/source/default/get",
                    setDefUrl: "/api/user/source/default/set",
                    delDefUrl: "/api/user/source/delete",

                    defParams: "",
                }
            }
        },
        mixins: [getMixin],
        methods: {
            resultHandler: function() {
                var self = this;

                if (self.fetch.defParams != null) {
                    for(var key in self.requestParams.res.data) {
                        if (self.fetch.defParams.id === self.requestParams.res.data[key].id) {
                            self.requestParams.res.data[key].def = "true";
                            self.requestResult.push(self.requestParams.res.data[key]);
                        } else {
                            self.requestResult.push(self.requestParams.res.data[key]);
                        }
                    }
                }
            },
            getDefFetch: function(callback) {
                var self = this;

                axios.get(self.fetch.getDefUrl).then(function(answer) {
                    self.fetch.defParams = answer.data.data;
                    callback();
                });
            },
            setDefFetch: function(event, checkElement = false) {
                var self = this,
                    el = $(event.target);

                if (checkElement == false) {
                    var idEl = el.val();
                } else {
                    var idEl = checkElement;
                }

                axios.post(self.fetch.setDefUrl, { "source_id": idEl }).then(function(answer) {
                    self.requestResult = [];
                    self.getDefFetch(self.sendRequest);
                });
            },
            delDefFetch: function(event) {
                var self = this,
                    el = $(event.target),
                    idEl = el.data("fetch"),
                    nextElem = $(".page-profile-personal-credits-items").find(".page-profile-personal-credits-radio-item"),
                    idNextElem = $(nextElem[1]).val();

                self.setDefFetch(event, idNextElem);
                axios.post(self.fetch.delDefUrl, { "source_id": idEl }).then(function(answer) {
                    self.requestResult = [];
                    self.getDefFetch(self.sendRequest);
                });
            }
        },
        created: function() {
            var self = this;
            self.getDefFetch(self.sendRequest);
        },
        updated: function() {
            var self = this;

            DEALIBRE.forms.init(this.$el);
        }
    }
</script>
