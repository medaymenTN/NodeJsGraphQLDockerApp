var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require('graphql').GraphQLBoolean;
var GraphQLInt = require('graphql').GraphQLInt;
var tareaType = require('../types/tareaType');
var tareaModel = require('../../models/tarea');


exports.add = {
    type: tareaType.tareaType,
    args: {
        idTrabajo: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        idPersonal: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        idLocalizacion: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        estadoReparacion: {
            type: new GraphQLNonNull(GraphQLString)
        },
        color: {
            type: new GraphQLNonNull(GraphQLString)
        },
        comentario: {
            type: new GraphQLNonNull(GraphQLString)
        },
        reemplazar: {
            type: new GraphQLNonNull(GraphQLBoolean)
        },
        reparar: {
            type: new GraphQLNonNull(GraphQLBoolean)
        },
        cromar: {
            type: new GraphQLNonNull(GraphQLBoolean)
        },
        pintar: {
            type: new GraphQLNonNull(GraphQLBoolean)
        },
        ubicacion: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async (root, args) => {
        const uModel = new tareaModel(args);
        const newTarea = await uModel.save();
        if (!newTarea) {
            throw new Error('error');
        }
        return newTarea
    }
};