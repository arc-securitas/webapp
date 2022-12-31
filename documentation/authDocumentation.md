# Authentication
The authentication service used by the application is Auth0. The application MongoDB database stores the Auth0 user records and their passwords. This is done by using Auth0's custom database connection feature.

## General Auth0 Setup
1. Navigate to Auth0 Dashboard and sign in with appropriate credentials
2. Select Applications -> Applications in the left navigation bar
3. Click on the Create Application in the top right
4. **<mark>TODO.....IDK MUCH ABOUT THE PROCESS THAT WAS FOLLOWED</mark>**

Alternatively, follow Auth0's get started guide: [Auth0 Quickstarts](https://auth0.com/docs/get-started)

## Session Management Settings
1. Navigate to Auth0 Dashboard and sign in with appropriate credentials.
2. Click on Setting in the left navigation bar.
3. In the Advanced tab, scroll to the Login Session Management section and select the Persistent Session option (if not already selected). This allows the user to remain logged in even if they close their browser and reopen it on the same device.
4. Set an appropriate value for Inactivity Timeout field (ex. 60 minutes).
5. Set an appropriate value for Require login after field (ex. 1000 minutes).
6. Click the Save button in the Login Session Management section

## Custom Database Connection
1. Navigate to Auth0 Dashboard and sign in with appropriate credentials
2. Select Authentication -> Database in the left navigation bar
3. Either use an existing database that DOES NOT contains users or create a new DB connection by clicking on the Create DB Connection button in the top right
4. Set up database's settings and password policy as per applications requirements in their corresponding tabs. Connect the database to the necessary application(s) in the Applications tab.
5. In the Custom Database tab, click on the Use my own database option and enable the Context object in database scripts.
6. Add the MongoDB connection string as a key in the Database settings section of the Custom Database tab. This key will be referenced in scripts to connect Auth0 to the MongoDB database
7. Write the scripts the required Database Action Scripts: Login, Create, Verify, Change Password, Get User, Delete, etc.
8. Test the scripts either by using the Try Connection tab or by clicking on the Save and Try button at the top of each script

### Database Action Scripts
A similar format is used to write all of the scripts. 
1. Get Auth0's template version of the script by opening the Load Template dropdown above the script editor and selecting MongoDB.
2. Locate the following line of code and change it so that the MongoDB connection string key is used instead
```
// Original code:
const client = new MongoClient('mongodb://user:pass@localhost'); 

// Replace with this code:
const client = new MongoClient(configuration.<replace with key name, Ex. REACT_APP_ATLAS_URI>);
```

3. Locate the following lines of code and change it so that the correct MongoDB database and correct collection/table is used.
```
// Original code:
const db = client.db('db-name');
const users = db.collection('users');

// Replace with this code:
const db = client.db('<replace with datbase name, Ex. web-test>');
const managers = db.collection('<Replace with collection/table name, Ex. managers>');
```
4. Locate all places in code with the template script's default collection/table name is used and replace it with the correct collection/table that should be used.
5. Click the Save button above the script editor to save the script.
6. Test the script using the Save and Try button above the script editor and checking the MongoDB database for visual confirmation of correct results.

Login Script Example:
```
function login(email, password, callback) {
  const bcrypt = require('bcrypt');
  const MongoClient = require('mongodb@3.1.4').MongoClient;
  const client = new MongoClient(configuration.REACT_APP_ATLAS_URI);

  client.connect(function (err) {
    if (err) return callback(err);

    const db = client.db('web_test');
    const managers = db.collection('managers');

    managers.findOne({ email: email }, function (err, user) {
      if (err || !user) {
        client.close();
        return callback(err || new WrongUsernameOrPasswordError(email));
      }

      bcrypt.compare(password, user.password, function (err, isValid) {
        client.close();

        if (err || !isValid) return callback(err || new WrongUsernameOrPasswordError(email));

        return callback(null, {
            user_id: user._id.toString(),
            nickname: user.nickname,
            email: user.email
          });
      });
    });
  });
}
```

Note for Create script: add the following line before the insert mutation is called in the script. This line ensures that there is a verification flag for the user being created and will aid in the email verification process. 
```
user.email_verified = false;
```


## Custom Signup Fields
By default, users only need to provide an email and password to sign up for the application using Auth0. However, additional user details might need to be collected on sign up to better serve the user. For example, the user's first and last name and phone number might be useful information to store. 

Follow the steps below to set up custom signup fields for the application.

1. Navigate to Auth0 Dashboard and sign in with appropriate credentials
2. Select Branding -> Universal Login in the left navigation bar
3. Select the Classic option (instead of the default New option) in the Universal Login Experience section. The CLassic options allows for custom signup fields.
4. In the Login tab, enable the Customize Login Page setting
5. In the code editor on the same page, locate the section of code that defines the Auth0 lock
```
var lock = new Auth0Lock(config.clientID, config.auth0Domain, {
  // This is the options parameter
  // Lots of code here
  // Truncated for brevity
}
```
6. The third parameter in this section of code is options parameter. There are a lot of different default options included. Add the following lines of code to add additional signup fields. Add a comma at the end of the previous option if there isn't one. Add a comma at the end of the ```additionalSignUpFields``` option if there are more options after it.
```
additionalSignUpFields: 
[
  // custom sign up fields will be defined here
]
```
7. Within the additionalSignUpFields option define a custom sign up field. Add a comma after the definition if more sign up fields need to be added. Below is an example of a custom name field.
```
{
  name: "firstName",
  placeholder: "First Name",
},
```
8. Click the Save Changes button to save the custom sign up fields.

Example configuration:
```
var lock = new Auth0Lock(config.clientID, config.auth0Domain, {
  auth: {
    redirectUrl: config.callbackURL,
    responseType: (config.internalOptions || {}).response_type ||
      (config.callbackOnLocationHash ? 'token' : 'code'),
    params: config.internalOptions
  },

  // Lots of code in between
  // Truncated for brevity

  additionalSignUpFields: 
  [
    {
      name: "firstName",
      placeholder: "First Name",
    },
    {
      name: "middleName",
      placeholder: "Middle Name (optional)",
      validator: function() { 
          return true;
      }
    },
    {
      name: "lastName",
      placeholder: "Last Name",
    },
    {
      name: 'phoneNumber',
      placeholder: 'Phone Number',
      validator: function(phoneNumber) { 
        let num = parseInt(phoneNumber);
        return {
          valid: !isNaN(num) && num > 0,
          hint: "Invalid phone number"
        };
      }
    }         
  ]
});
```

### Tips for Defining Custom Signup Fields
- Define a validator function to validate input. If the input is invalid, return false and Auth0 will not allow the user to submit the sign up form until a valid input is provided. If input is valid, return true.
```
validator: function(/** parameters such as the user provided value can be added here */) { 
  // Perform some logic to determine validity of input
  return true /** or return false if invalid */;
}
```
- To make a signup field optional define the validator function to always return true
```
validator: function() { 
    return true;
}
```
- Add a hint to the validator function to provide the user with an exaplanation why their input is invalid
```
{
  name: 'phoneNumber',
  placeholder: 'Phone Number',
  validator: function(phoneNumber) { 
    let num = parseInt(phoneNumber);
    return {
      valid: !isNaN(num) && num > 0,
      hint: "Invalid phone number"
    };
  }
}   
```

## Helpful Links
- [Auth0 Quickstarts](https://auth0.com/docs/get-started)
  - Official Auth0 getting started guide for connecting an application with Auth0

- [Configure Session Lifetime Settings](https://auth0.com/docs/manage-users/sessions/configure-session-lifetime-settings)
  - Official Auth0 guide for session management settings

- [Connecting Auth0 to MongoDB](https://auth0.com/blog/connecting-auth0-to-mongodb/)
  - Official Auth0 guide for setting up connecting Auth0 to custom MongoDB database

- [Lock Configuration Options](https://auth0.com/docs/libraries/lock/lock-configuration)
  - Official Auth0 reference for configuring the Lock object to include elements like custom sign up fields.

<sub>Note: The links above may be broken, unavailable, or outdated in the future after the publishing of this document</sub> 