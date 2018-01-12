<template lang="jade">
    div()
        div(class="register-share-form-big-row")
            div(class="register-share-form-big-row-title") Location
            div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                select(class="register-share-form-big-item register-share-form-big-item--select", placeholder="Continent", name="area", @change="getIdContinent")
                    option(:value="item.id", v-for="item in location.continent") {{ item.name }}
            div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                select(class="register-share-form-big-item register-share-form-big-item--select", placeholder="Country", name="country", @change="getIdCountry")
                    option(:value="item.id", v-for="item in location.country[0]") {{ item.name }}
        div(class="register-share-form-big-row")
            div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                select(class="register-share-form-big-item register-share-form-big-item--select", placeholder="State", name="region", @change="getIdState")
                    option(:value="1") region
                    //option(:value="item.id", v-for="item in location.state[0]") {{ item.name }}
            div(class="register-share-form-big-item-holder register-share-form-big-item-holder--w2")
                select(class="register-share-form-big-item register-share-form-big-item--select", placeholder="City", name="state", @change="getIdCity")
                    option(:value="1") state
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
                fields: {
                    location: {
                        name: {
                            area: "",
                            country: "",
                            region: "",
                            state: "",
                        },
                        area: "",
                        country: "",
                        region: "",
                        state: "",
                    }
                }
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
            getIdContinent: function(event) {
                var self = this,
                    idSelectContinent = $(event.target).val(),
                    nameSelectContinent = $(event.target).find("option:selected").text();

                self.location.country = [];
                self.fields.location.area = idSelectContinent;
                self.fields.location.name.area = nameSelectContinent;
                for (var cont = 0; cont < self.location.continent.length; cont++) {
                    if (self.location.continent[cont].id == idSelectContinent) {
                        self.location.country.push(self.location.continent[cont].countries);
                    }
                }
                this.$emit("location", self.fields.location);
            },
            getIdCountry: function(event) {
                var self = this,
                    idSelectContinent = $(event.target).val(),
                    nameSelectContinent = $(event.target).find("option:selected").text();

                self.location.state = [];
                self.fields.location.country = idSelectContinent;
                self.fields.location.name.country = nameSelectContinent;
                for (var cont = 0; cont < self.location.country.length; cont++) {
                    if (self.location.country[cont].id == idSelectContinent) {
                        self.location.state.push(self.location.country[cont].state);
                    }
                }
                this.$emit("location", self.fields.location);
            },
            getIdState: function() {
                var self = this,
                    idSelectContinent = $(event.target).val(),
                    nameSelectContinent = $(event.target).find("option:selected").text();

                self.location.city = [];
                self.fields.location.region = idSelectContinent;
                self.fields.location.name.region = nameSelectContinent;
                for (var cont = 0; cont < self.location.state.length; cont++) {
                    if (self.location.state[cont].id == idSelectContinent) {
                        self.location.city.push(self.location.state[cont].state);
                    }
                }
                this.$emit("location", self.fields.location);
            },
            getIdCity: function() {
                var self = this,
                    idSelectContinent = $(event.target).val(),
                    nameSelectContinent = $(event.target).find("option:selected").text();

                self.fields.location.state = idSelectContinent;
                self.fields.location.name.state = nameSelectContinent;
                this.$emit("location", self.fields.location);
            }
        },
        mounted: function() {
            DEALIBRE.forms.init(this.$el);
        },
    }
</script>
