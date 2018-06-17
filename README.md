# README

This is my sample todo app built with React and Redux.
Feel free to reuse or review any of the codebase for your study after reading introduction doc of React/Redux(if it ever helps...).

# Environment

- Docker 18.03.1-ce
- Ruby on Rails 5.2.0
- react@16.3.2
- redux@4.0.0
 - react-redux@5.0.7
 - redux-thunk@2.2.0
- jwt 2.1.0

# Setup
Please make sure to set your .env variables before setup like below.
```
RAILS_SERVER_PORT=5056
MONGO_HOST=mongo
```
Assuming that you already installed Docker for whichever versions of OS that your PC relates to, just follow these steps and you can access to the top page on your localhost.
```
$ git clone git@github.com:FumiyaShibusawa/react-redux-todoapp.git
$ docker-compose build
$ docker-compose up -d && docker-compose exec app bash
$ bundle install
$ yarn install
$ rails s
```

# Todo

- Error handling for redux actions
- Add update actions
- Refactor TodoListContainer.jsx with BindActionCreators?

# Contribute
Please create a new issue if you find anything that you think is a problem or can be improved!
