# Bookshelf - Reviews

> Bookshelf is a clone of an item page from https://goodreads.com. Our team split up the project into four separate services. I was responsible for the reviews/ratings module. The user is able to see all reviews for specific books, interact with other reviews, post their own review, and sort through reviews by specific rating. 

> This service renders all reviews for a book, based on dynamic endpoints. There is a tooltip when a user hovers over "Filter" that allows users to filter reviews by rating. The user can also like other users' reviews, and the likes will immediately render and update the like count. The interactivity and filtering was achieved utilizing React state and ajax requests to the server. This service was deployed with AWS Elastic Beanstalk and images/static files were bundled and served on S3/Cloudfront. 

## Related Projects

  - https://github.com/hrr37-hermes-4/hannah-service
  - https://github.com/hrr37-hermes-4/kazshige-service
  - https://github.com/hrr37-hermes-4/andrew-fec-service
  - https://github.com/hrr37-hermes-4/hrr37-FEC-Ginger-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)


## Development
Workflow and sprint management can be seen at: https://trello.com/b/sI4IwOWn/fec. For a detailed Medium post on the project and my process, please see: https://medium.com/@hannahsohkim/frontend-capstone-4dc2725772d4. 

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install -g nodemon
```

### To Run 
  - Run 'npm run start:dev' to start server. Nodemon should be installed globally on your machine.
  - Run 'npm run build:dev' to build files with Webpack and create bundle.js. 
  - Run 'npm run seed-db' to seed the database.
  - Run 'npm test" to run tests. 

