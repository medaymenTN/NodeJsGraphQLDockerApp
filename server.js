const express = require('express');
const app = express();
const mongoose = require('mongoose');
const graphqlExpress = require("express-graphql");
const schema = require('./graphql/schema').schema;

mongoose.connect('mongodb://mongo/myappdb', (err) => {
    if (err) throw err;
    console.log("connected to mongo");
});




app.set('port', (process.env.PORT || 4000));
app.listen(app.get('port'), () => {
    console.log("Node app is running at localhost:" + app.get('port'))
});



app.use('/graphql', graphqlExpress({
    schema: schema,
    rootValue: global,
    graphiql: trued
}));

app.get('/', (req, res) => {

            res.send("hello world 2223333! ")

        }
);