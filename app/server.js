const express = require('express');
const app = express();
const mongoose = require('mongoose');
const graphqlExpress = require("express-graphql");
const schema = require('./graphql/schema').schema;
const graphql = require('graphql');


mongoose.connect('mongodb://mongo/myappdb', {useNewUrlParser: true} , (err) => {
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
    graphiql: true
}));

app.get('/', (req, res) => {

            res.send("Ursprung Sistema Taller New Generation 2")

        }
);