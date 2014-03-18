App.Router = Backbone.Router.extend({
    routes: {
        '': 'home'
        , '/': 'home'
        , '/test': 'test'
    },

    initialize: function (options) {
        App.debug('App.Router.initialize()');
        this.userModel = new App.UserModel();
        this.appView = new App.AppView({
            userModel: this.userModel
        })
    },

    home: function () {
        App.debug('Route: home');
        App.debug(this.appView.el);
        placeholder="#home";
      //  self._showPlaceholder(placeholder);
        $('.content').html(this.appView.el)
    },

    test: function () {
        App.debug('Route: test');
        placeholder="#test";
        self._showPlaceholder(placeholder);
      //  $('.content').html(this.appView.el)
    },

    defaultRoute: function (routeId) {
        App.debug('Default route');
        console.log('Default route: ' + routeId);
    },

    _showPlaceholder: function (placeholder) {
        var self = this;
        $(placeholder).parent().children().hide();
        $(placeholder).show();
}
})
