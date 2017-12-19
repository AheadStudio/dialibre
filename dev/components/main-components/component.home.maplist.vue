<template lang="jade">
    div(class="geo-info")
        div(class="geo-item animation-block", data-animation="true", v-for="land in locationlList")
            select(class="geo-item-select", :placeholder="land.name", :data-map="land.name")
                option(value="1", v-for="country in land.countries") {{ country.name }}
</template>

<script>
export default {
    data: function() {
        return {
            locationlList: [],
            url: "/api/deal/options",
        }
    },
    created: function() {
        this.getInfo();
    },
    methods: {
        getInfo: function() {
            var self = this;

            axios.get(self.url).then(function(answer) {
                for (var item = 0; item < answer.data.data.locations.length; item++) {
                    self.locationlList.push(answer.data.data.locations[item]);
                }
            });
        }
    },
    updated: function() {
        DEALIBRE.forms.init(false);
        DEALIBRE.page.scrollAnimation.init();
    }
}
</script>
