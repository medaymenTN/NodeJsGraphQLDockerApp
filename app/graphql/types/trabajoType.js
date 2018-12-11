var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLList = require('graphql').GraphQLList;

//Tareas
var TareasModel = require('../../models/tarea');
var tareaType = require('../types/tareaType').tareaType;

//Autos
var AutoModel = require('../../models/auto');
var autoType = require('../types/autoType').autoType;

// Auto Type
exports.trabajoType = new GraphQLObjectType({
    name: 'trabajos',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            idTrabajo: {
                type: GraphQLInt
            },
            tareas: {
                type: new GraphQLList(tareaType),
                resolve: async (trabajo) => {
                    const lastareas = await TareasModel.find({'idTrabajo':trabajo.idTrabajo});
                    if (!lastareas) {
                        throw new Error('error while fetching data tarea related')
                    }
                    return lastareas;
                }
            },
            fechaPresupuesto: {
                type: GraphQLString
            },
            idCliente:{
                type: GraphQLInt
            },
            idAuto:{
                type: GraphQLInt
            },
            auto: {
                type: autoType,
                resolve: async (trabajo) => {
                    const elauto = await AutoModel.findOne({'idAuto':trabajo.idAuto});
                    if (!elauto) {
                        throw new Error('error while fetching data localizacion related')
                    }
                    return elauto;
                }
            },
            presupuesto: {
                type: GraphQLString
            },
            manoObra: {
                type: GraphQLString
            },
            repuestos: {
                type: GraphQLString
            },
            comentario: {
                type: GraphQLString
            },
            estado: {
                type: GraphQLString
            },
            fechaDespacho: {
                type: GraphQLString
            },
            fechaTurno: {
                type: GraphQLString
            },
            horaTurno: {
                type: GraphQLString
            },
            fechaCierre: {
                type: GraphQLString
            },
            seguro: {
                type: GraphQLString
            },
            company: {
                type: GraphQLString
            },
            comenRep: {
                type: GraphQLString
            }
        }
    }
});


