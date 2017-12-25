<template lang="jade">
    div(class="geo-info")
        div(class="geo-item animation-block", data-animation="true", v-for="land in requestResult")
            select(class="geo-item-select", :placeholder="land.name", :data-map="land.name")
                option(value="1", v-for="country in land.countries") {{ country.name }}
</template>

<script>
    // connect mixins
    import { getMixin } from "../mixins/get_request.js"

    export default {
        data: function() {
            return {
                requestResult: [],
                requestParams: {
                    url: "/api/deal/options",
                    res: [],
                }
            }
        },
        mixins: [getMixin],
        methods: {
            resultHandler: function() {
                var self = this;

                for (var item = 0; item < self.requestParams.res.locations.length; item++) {
                    self.requestResult.push(self.requestParams.res.locations[item]);
                }
            }
        },
        created: function() {
            this.sendRequest();
        },
        updated: function() {
            DEALIBRE.forms.init(false);
            DEALIBRE.page.scrollAnimation.init();
        }
    }
</script>
