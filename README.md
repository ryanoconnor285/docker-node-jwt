# docker-node-jwt

Quickly set up a node application that authenticates a user with json web tokens via docker container and images.  It stores user data in a mongodb.  


## Technologies Leveraged
* Node JS
* Express
* Mongoose
* MongoDB 
* Docker
* RESTful API

## Getting Started

As always, you should have a folder on your machine for repositories.  Once in that directory

```
$ git clone https://github.com/rocsteady888/aion.git
```


### Prerequisites

Node version 10
```bash
$ node -v
v10.13.0
```

Docker must be install on local machine

### Installing

if using docker no installation is necessary

## Starting Up

in the root directory navigate to ./config/default.json and the replace the existing mongoURI with your mongoURI.  If you don't have one you can set one up for free at (https://cloud.mongodb.com)

## Authors

* **Ryan O'Connor** - *Initial work* - [Portfolio](https://ryanoconnor-developer.com/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
