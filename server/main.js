import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  // create an admin account if there are no accounts
  if (Meteor.users.find().count() === 0) {
    let userid = Accounts.createUser(Meteor.settings.defaultUserAccount);
    Roles.addUsersToRoles(userid, ["admin"]);    
  }
  
});
