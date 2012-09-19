var MailboxRouter = Backbone.Router.extend({
    routes: {
        'compose': 'composeEmail',
        'folder/:folder': 'showFolder',
        '*home': 'home'
    },
    view: {},
    composeEmail: function()
    {

    },
    showFolder: function( folder )
    {

    },
    home: function()
    {

    },
    initialize: function()
    {
        this.view = new MailBoxView();
    }
});

$(function()
{
    new MailboxRouter();
})
