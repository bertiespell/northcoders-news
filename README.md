
# [Northcoders News] (http://utopian-dreams.surge.sh/)

Welcome to my Northcoders News end-to-end project, hosted [here](http://utopian-dreams.surge.sh/)! This project imitates the functionality of reddit using a dataset seeded to a MongoDB and hosted on mLabs. It uses Node.js and Express to provide custom API routes to a purpose-build React front-end. The back-end server is hosted on Heroku [here](https://pure-plateau-45897.herokuapp.com/api).

If you'd like to run the project locally, please ensure you have Node v7.0.0 or higher (or click [here](https://nodejs.org/en/download/) to do this).

Clone the project, navigate into the directory and then install the necessary dependencies:

```s
git clone https://github.com/bertiespell/northcoders-news.git 

cd northcoders-news

npm install

```

To run the project on local host (port 9090), run the following:

```s
npm run dev
```

### API Routes

The back-end serves the following routes:

```
GET /api/topics
```
Get all the topics

```
GET /api/topics/:topic_id/articles
```
Return all the articles for a certain topic

```
GET /api/articles
```
Returns all the articles

```
GET /api/articles/:article_id/comments
```
Get all the comments for a individual article

```
POST /api/articles/:article_id/comments
```
Add a new comment to an article. This route requires a JSON body with a comment key and value pair
e.g: {"comment": "This is my new comment"}

```
PUT /api/articles/:article_id
```
Increment or Decrement the votes of an article by one. This route requires a vote query of 'up' or 'down'
e.g: /api/articles/:article_id?vote=up

```
PUT /api/comments/:comment_id
```
Increment or Decrement the votes of a comment by one. This route requires a vote query of 'up' or 'down'
e.g: /api/comments/:comment_id?vote=down

```
DELETE /api/comments/:comment_id
```
Deletes a comment

```
GET /api/users/:username
```
Returns a JSON object with the profile data for the specified user.

