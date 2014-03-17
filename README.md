
This is a skeleton web application using the MongoDB, Flask, backbone.js,
bootstrap.js stack.  You can use it as a starting point to create your own
web app based on this stack.

## Contents
* [Installation](#installation)
* [Managing Users](#managing-users)
* [Running](#running)


## Installation
To install this app, first install the dependencies, and then create a
configuration file.

### Dependencies

* flask
* flask-login
* pymongo

### Configuration

To configure, copy the sample configuration file and fill it in with your info.

    $ cp app.config.sample app.config

## Managing Users
The command line tool `userconfig` can be used to add, modify, and remove users.

To see usage, just run `userconfig` with no arguments:

    $ ./userconfig
    Usage:
      userconfig add <username> <password>
      userconfig remove <username>
      userconfig password <username> <password>

To add a user named `alice` with password `topsecret`:

    $ ./userconfig add alice topsecret
    
To change the password for user `alice` to `bettersecret`:

    $ ./userconfig password alice bettersecret
    
To remove user `alice`:

    $ ./userconfig remove alice

## Running

To run the app locally, just run `server.py`:

    $ python server.py

