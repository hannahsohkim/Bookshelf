# Bookshelf

> Bookshelf is a clone of an item page from https://goodreads.com. Our team split up the project into four separate services. I was responsible for the reviews/ratings module. The user is able to see all reviews for specific books, post their own review, and sort through reviews by specific rating. 

> This service renders all reviews for a book, based on dynamic endpoints. There is a tooltip when a user hovers over "Filter" that allows users to filter reviews by rating. This was achieved utilizing React state and ajax requests to the server. This service was deployed with AWS Elastic Beanstalk and images/static files were bundled and served on S3/Cloudfront. 

> 

## Related Projects

  - https://github.com/hrr37-hermes-4/hannah-service
  - https://github.com/hrr37-hermes-4/kazshige-service
  - https://github.com/hrr37-hermes-4/andrew-fec-service
  - https://github.com/hrr37-hermes-4/hrr37-FEC-Ginger-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development
Workflow and sprint management can be seen at: https://trello.com/b/sI4IwOWn/fec. 

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### To Run 
  - Run 'npm run start:dev' to start server. Nodemon should be installed globally on your machine.
  - Run 'npm run build:dev' to build files with Webpack and create bundle.js. 
  - Run 'npm run seed-db' to seed the database.
  - Run 'npm test" to run tests. 

