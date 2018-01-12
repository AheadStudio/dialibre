export const getMixin = {
    methods:{
        sendRequest: function(){
            var self = this;

            axios.get(self.requestParams.url).then(function(answer) {
                self.requestParams.res = answer.data.data;
                console.log(answer);
                self.resultHandler();
            });
        }
    },
    mounted: function() {
        var element = $(this.$el);
        element.addClass("loading-opacity");
        this.$nextTick(function () {

            setTimeout(function(){
                element.addClass("loading-opacity--show");
            }, 300);

        })
    }
}
