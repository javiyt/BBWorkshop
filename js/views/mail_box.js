var MailBoxView = Backbone.View.extend({
    el: document.getElementById('mail_box'),
    initialize: function()
    {
        this.model = new MailBoxModel();
    }
});