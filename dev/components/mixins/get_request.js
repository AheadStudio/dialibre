export const getMixin = {
    methods:{
        sendRequest: function(){
            var self = this;

            axios.get(self.requestParams.url).then(function(answer) {
                self.requestParams.res = answer.data.data;
                console.log("Get all params" ,answer);
                self.resultHandler();
            });
        }
    },
    mounted: function() {
        var element = $(this.$el);

        this.$nextTick(function () {
            element.addClass("loading-opacity");

            setTimeout(function(){
                element.addClass("loading-opacity--show");
            }, 600);
        })
    }
}
