var MailListView = Backbone.View.extend({
    el: document.getElementById('mail_list'),
    template: _.template(document.getElementById('mail_list').innerHTML),
    render: function()
    {
        return this.template(this.model);
    }
});