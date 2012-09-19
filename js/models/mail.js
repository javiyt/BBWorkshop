var MailModel = Backbone.Model.extend({
    defaults: {
        'to': '',
        'from': '',
        'subject': '',
        'message': ''
    }
});