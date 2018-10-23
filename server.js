const express = require('express')
const app = express()
const mongoose = require('mongoose');
const graphqlHTTP = require("express-graphql");

mongoose.connect('mongodb://mongo/myappdb', (err) => {
    if (err) throw err;
    console.log("connected to mongo");
})




app.set('port', (process.env.PORT || 4000));
app.listen(app.get('port'),  () =>{
    console.log("Node app is running at localhost:" + app.get('port'))
});


const bookSchema = require('./graphql/BookSchema').BookSchema;
app.use('/graphql', graphqlHTTP({
    schema: bookSchema,
    rootValue: global,
    graphiql: true
}));

app.get('/', (req, res) => {

    res.send("hello world ! ")

})