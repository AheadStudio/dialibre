<template lang="jade">
    div()
        div(class="register-share-form-big-row")
            div(class="register-share-form-big-row-title") Location
            div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                select(class="register-share-form-big-item register-share-form-big-item--select", placeholder="Continent", name="area", @change="getIdCountry")
                    option(:value="item.id", v-for="item in location.continent") {{ item.name }}
            div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                select(class="register-share-form-big-item register-share-form-big-item--select", placeholder="Country", name="country")
                    option(:value="item.id", v-for="item in location.country[0]") {{ item.name }}
        div(class="register-share-form-big-row")
            div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                select(class="register-share-form-big-item register-share-form-big-item--select", placeholder="State", name="region")
                    option(value="1") some text
                    option(value="2") some text
            div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                select(class="register-share-form-big-item register-share-form-big-item--select", placeholder="City", name="state")
                    option(value="1") some text
                    option(value="2") some text
</template>

<script>
    // connect mixins
    import { getMixin } from "../mixins/get_request.js";

    export default {
        data: function() {
            return {
                requestResult: [],
                requestParams: {
                    url: "/api/deal/options",
                    res: [],
                },
                location: {
                    continent: [],
                    country: [],
                    state: [],
                    city: [],
                },
            }
        },
        mixins: [getMixin],
        created: function() {
            var self = this;
            self.sendRequest();
        },
        methods: {
            resultHandler: function() {
                var self = this;

                    self.requestResult = self.requestParams.res.locations;
                    for (var i = 0; i < self.requestResult.length; i++) {
                        self.location.continent.push(self.requestResult[i]);
                    }

            },
            getIdCountry: function(event) {
                var self = this,
                    idSelectContinent = $(event.target).val();

                self.location.country = [];
                for (var cont = 0; cont < self.location.continent.length; cont++) {
                    if (self.location.continent[cont].id == idSelectContinent) {
                        self.location.country.push(self.location.continent[cont].countries);
                    }
                }
            }
        },
        mounted: function() {
            DEALIBRE.forms.init(this.$el);
        },
    }
</script>
