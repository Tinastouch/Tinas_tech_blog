# Tinas_tech_blog

  ## About The Project

  This is a blog for techs to add information they would like to share with other tech ppl.  You can create an account and log in, create a post, edit or delete post.  You as a user also have the oppurtunity to commment on other post and view different post

 ## Table of Contents

  * [Installation](#installation)

  * [Built With](#languages)
  
  * [Usage](#usage)

  * [Contributing](#contributing)

  * [Users](#users)

    * [Posts](#posts)

  * [Questions](#questions)


    ## Installation

  To install necessary dependencies, run the following command:
  
  npm install

  ## Built With

  JavaScript,HTML,CSS,ES6,Node,SQL, sequalize

  ## Usage

  run node index.js 

  ## Contributing

 @stevedusome , TA assistanceIsmeal and Tutor assistance Joem Casusi


## Users

(review whether we even need get requests for user information, probably not?)
- Get all users /api/users/
returns an array of objects containing id's and emails (probably shouldn't return emails without auth)
- Get single user /api/user/id#
returns a single object containing id and username
- Post /api/users/
create a user account, expects json
{
  "username":"test",
  "password":"goodpassword"
}
- Put /api/user/id# (this probably wants to live in dashboard specific routes with authorization later)
updates user at said id with a new username or password or both, whatever the json in body contains
- Post /api/user/login
expects a json {"username":"test", "password":"goodpassword"} begins a login session, sets session.loggedIn true and returns a success message on success, error on failure
- Post /api/user/logout
requires no body, destroys the current session
- Delete /api/user/id#
Deletes user at given id

## Posts

- Get all posts /api/posts/
Returns an array containing all posts with their id, text, user information, category name and an array of user ids that have liked the post
- to be added - Get all posts by category
- Get single post /api/posts/id#
Returns a single post as an object containing id, text, user information category name and an array of user ids that have liked the post
- Post /api/posts/ - Expects json {"text":"big example post", "user_id":1, "category":"example category"}
Adds a post to the db
- Put /api/posts/like/ - expects json, user_id is provided by session, only post_id is required from a request {"user_id":1,"post_id":1}
creates an entry in the like database linking a user to a post
- Put /api/posts/unlike/ - same expectation as like, destroys like entry
- Put /api/posts/id# - expects json {"text":"updated post example"}
updates a post at the id
- Delete /api/posts/id#
Deletes post at given id

live server available at: 

Running the server locally requires a .env file with the following information:
SECRET=BIGSECRET
DB_USER=root
DB_PW=password
DB_NAME=tinas_tech_blog_db

Where DB_ variables are your local SQL credentials and an existing database. Secret can be anything, more important for when the page is live.

## Questions

If you have any questions about the repo, open an issue or contact me directly at
tinastouch@gmail.com. 

You can find more of my work at https://github.com/tinastouch.
