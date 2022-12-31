# Authentication ----- IN PROGRESS
The authentication service used by the application is Auth0. The application MongoDB database stores the Auth0 user records and their passwords. This is done by using Auth0's custom database connection feature.

## General Auth0 Setup
1. Navigate to Auth0 Dashboard and sign in with appropriate credentials
2. Select Applications -> Applications in the left navigation bar
3. Click on the Create Application in the top right
4. TODO.....IDK MUCH ABOUT THE PROCESS THAT WAS FOLLOWED

Alternatively, follow Auth0's get started guide: [Auth0 Quickstarts](https://auth0.com/docs/get-started)

## Session Management Settings ---> Needed??????????
TODO

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
5. Test the script using the Save and Try button aobve the script editor and checking the MongoDB database for visual confirmation of correct results.

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
TODO

## Helpful Links
- [Auth0 Quickstarts](https://auth0.com/docs/get-started)
    - Official Auth0 getting started guide for connecting an application with Auth0

<sub>Note: The links above may be broken, unavailable, or outdated in the future after the publishing of this document</sub> 