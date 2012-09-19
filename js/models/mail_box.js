var MailBoxModel = Backbone.Model.extend({
    defaults: {
        inbox: {},
        sent: {},
        draft: {}
    },
    initialize: function()
    {
        this.set({
            inbox: new MailsCollection(),
            sent: new MailsCollection(),
            draft: new MailsCollection()
        });
    }
});