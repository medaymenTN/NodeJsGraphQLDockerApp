var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
//var GraphQLSDateTime = require('graphql').GraphQLString;

//Marcas
var MarcasModel = require('../../models/marca');
var marcaType = require('../types/marcaType').marcaType;

//TODO Add a new data type DATETIME to the graphql (CHM75)

// Auto Type
exports.autoType = new GraphQLObjectType({
    name: 'autos',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            idAuto: {
                type: GraphQLInt
            },
            idMarca: {
                type: GraphQLInt
            },
            marca:{
                type: marcaType,
                resolve: async (auto) => {
                    const lamarca = await MarcasModel.findOne({'idMarca':auto.idMarca});
                    if (!lamarca) {
                        throw new Error('error while fetching data marca related')
                    }
                    return lamarca;
                }
            },
            modelo: {
                type: GraphQLString
            },
            tipo: {
                type: GraphQLString
            },
            patente: {
                type: GraphQLString
            },
            color: {
                type: GraphQLString
            },
            fechaAlta: {
                type: GraphQLString
            }
        }
    }
});


