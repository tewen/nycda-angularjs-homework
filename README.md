nycda-angularjs-homework
===============

##Forking

In order to receive updates to the repo, you will need to pull from the main branch. For your convenience, I have added a
script entitled 'pull_from_main.sh' you can run this as follows:

```
sh pull_from_main.sh
```

This will sync your repository with the remote repository. Git will encourage you to commit your changes first, before
pulling from the remote repo.


##Assignments

The class assignments and reference code for the New York Code &amp; Design Academy's Angular JS 101.

##Homework 1

Core JavaScript and basic unit testing.

Your Assignment: Rewrite app/apply.js, app/conditional.js, and app/get.js so the unit tests pass in the following case. 
Run the following commands and you will see much red. The goal is to get all tests to pass. We will demo in class.

###Requirements
```
cd hw-1
sudo npm install -g karma-cli
npm install
```

In order to complete the assignment you will need to run the unit tests from the same directory:

```
karma start karma.conf.js
```

##Homework 2

Core AngularJS and basic unit testing.

###Requirements
```
cd hw-2
npm install
sudo npm install -g bower
bower install
sudo npm install -g httpster
httpster
```

Navigate your browser to http://localhost:3333

Much like the last assignment, you can run tests by:

```
karma start karma.conf.js
```

###Assignment
Write (and unit test) a mechanism for informing users of whether or not they have chosen the correct answer.

Some ideas:
- Indicate a the correct answer upon selection
- Use a 'submit assignment' button at the base of the app to grade the questions

We will go over some ideas in class, and we will have some more time throughout the week.

##Homework 3

Integrating APIs and data services.


###Assignment
Implement article search, using the New York Times API:

Documentation: http://developer.nytimes.com/docs/read/article_search_api_v2
API Key: 052861d142cf4eb7fa12bb79781fdbe1:11:69591426

A standard application would show a search field and a search button the screen (think Google). 
When a search is run, it should pull in the remote result and display them on the screen. I encourage you to
use Yeoman to generate the project structure. 

##Homework 4

Integrating Firebase with your New York Times application.

###Requirements
We will start prep on the assignment by creating your firebase account at firebase.com. 

When you have the name of your db instance, you need to replace the string 'nycda-instance' in the following project file:

apps/scripts/angularfire/config.js


###Assignment
Add the ability for the user of your New York Times feed to save articles in a side bar. The articles need to be saved to firebase.

