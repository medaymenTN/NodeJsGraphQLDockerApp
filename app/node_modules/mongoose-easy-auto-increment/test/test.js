
var mongoose = require('mongoose');
var autoIncrement = require('../index');
var expect = require('chai').expect;
mongoose.Promise = require('bluebird');

var connection;

describe('mongoose-easy-auto-increment test', function() {

    beforeEach(function(done) {
        connection = mongoose.createConnection('mongodb://localhost:27017/mongoose-easy-auto-increment');
        connection.on('error', function() {
            console.error.bind(console);
        });
        connection.once('open', function() {
            return done();
        });
    });

    afterEach(function(done) {
        connection.db.dropDatabase(function(err) {
            if(err) {
                return done(err);
            }
            mongoose.plugins.pop();
            return connection.close(done);
        });
    })

    describe('auto increment', function() {
        it('user sn should be 1', function(done) {
            
            var userSchema = new mongoose.Schema({
                name: String,
                age: Number
            });

            userSchema.plugin(autoIncrement, { field: 'sn', collection: 'Counters' });

            var User = connection.model('User', userSchema);

            new User({ name: 'SBKXC', age: 30 }).save()
                .then(function(doc) {
                    expect(doc.sn).to.equal(1);
                    return done();
                })
                .catch(function(err) {
                    return done(err);
                });
        });
    });

});