# NodeJsGraphQLDockerApp
Simple crud App made with nodeJs and GraphQL under docker container

## Requirments 

you should have docker and docker-compose installed on your machine 

## installation 

* clone the project from the repo 
* cd -> project directory and run your project using the following command 
 ```
 $ docker-compose up 
 ```
 your node js project will run on http://localhost:4000/graphql
 
 * admin-mongo interface will be displayed on http://localhost:8082/
 
 * add a random name to your connection and in the field connection string put the following connection string 
 (mongodb://mongo/myappdb)
 
 

##Migrations
source: https://www.npmjs.com/package/migrate-mongo

##Mongo CSV import example
 docker-compose exec mongo mongoimport --host mongo --db myappdb  --collection ciudads --type csv --fields idProvincia,idCiudad,ciudad,ciudadCorta --file /data/db/CodCiudad.csv




