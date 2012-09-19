var MailboxRouter = Backbone.Router.extend({
    routes: {
        'compose': 'composeEmail',
        'folder/:folder': 'showFolder',
        '*home': 'home'
    },
    composeEmail: function()
    {

    },
    showFolder: function( folder )
    {

    },
    home: function()
    {

    }
});

$(function()
{
    new MailboxRouter();
})
