Meteor.startup(function() {
  Meteor.AdminAccountsConfig = {
    adminAccountsCreateUserErrorCallback: function(error) {
      console.error(error);
    },
    adminAccountsCreateUserSuccessCallback: function(user) {
      console.log(`New user created: ${JSON.stringify(user,null,2)}`);
    }
  };


});

Template.sideNav.onRendered(function(){
    $('.sidenav').sidenav();
});

Template.sideNav.events({
  'click .sign-out'() {
    AccountsTemplates.logout();
    $('.sidenav').sidenav('close');

  }
});