# reisetopia-challenge

## back-end

To run the server, install the required packages.

`cd server && yarn`

Use the following command to run the server.

`yarn dev`

### Improvements that can be done

Keeping YAGNI and KISS principles in mind, I have used simple structure as we just had to return the list of all hotels. But in order to scale the api, we can make further changes such as:

#### Versioning
 
We can use versioning to make the separate versions so that can work on separate version in parallel with running version. We can create controllers, routes and services specific to versions and then can route the application specific to that version.

#### Documentation

We can use swagger api to create the documentation to better understand the api by providing examples.

#### Performance

May be, we can try caching to improve the performance by saving the results in cache.

## front-end

To run the application

`yarn start`