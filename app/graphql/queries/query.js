var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var BookModel = require('../../models/book');
var bookType = require('../types/bookType').bookType;
var graphql = require('graphql');

//Autos
var AutoModel = require('../../models/auto');
var autoType = require('../types/autoType').autoType;

//Clientes
var ClienteModel = require('../../models/cliente');
var clienteType = require('../types/clienteType').clienteType;

//Marcas
var MarcasModel = require('../../models/marca');
var marcaType = require('../types/marcaType').marcaType;

//Trabajos
var TrabajosModel = require('../../models/trabajo');
var trabajoType = require('../types/trabajoType').trabajoType;

//Tareas
var TareasModel = require('../../models/tarea');
var tareaType = require('../types/tareaType').tareaType;

//Localizaciones
var LocalizacionesModel = require('../../models/localizacion');
var localizacionType = require('../types/localizacionType').localizacionType;

//Ciudades
var CiudadesModel = require('../../models/ciudad');
var ciudadType = require('../types/ciudadType').ciudadType;

//Provincias
var ProvinciasModel = require('../../models/provincia');
var provinciaType = require('../types/provinciaType').provinciaType;

// Query
exports.query = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            books: {
                type: new GraphQLList(bookType),
                resolve: async () => {
                    const books = await BookModel.find();
                    if (!books) {
                        throw new Error('error while fetching data books')
                    }
                    return books
                }

            },
            autos: {
                type: new GraphQLList(autoType),
                args: {
                    _id:        {type: graphql.GraphQLID},
                    id:         {type: graphql.GraphQLInt},
                    modelo:     {type: graphql.GraphQLString},
                    tipo:       {type: graphql.GraphQLString},
                    patente:    {type: graphql.GraphQLString},
                    color:      {type: graphql.GraphQLString},
                    marca:      {type: graphql.GraphQLString}
                },
                resolve: async (root, args) => {
                    if (args) {
                        const autos = await AutoModel.find(args);
                        if (!autos) {
                            throw new Error('error while fetching data autos')
                        }
                        return autos
                    } else {
                        const autos = await AutoModel.find();
                        if (!autos) {
                            throw new Error('error while fetching data autos')
                        }
                        return autos
                    }
                }
            },
            clientes: {
                type: new GraphQLList(clienteType),
                args: {
                    idCliente: {type: graphql.GraphQLInt},
                },
                resolve: async (root, args) => {
                    const clientes = await ClienteModel.find(args);
                    if (!clientes) {
                        throw new Error('error while fetching data clientes')
                    }
                    return clientes
                }
            },
            ciudades: {
                type: new GraphQLList(ciudadType),
                resolve: async () => {
                    const ciudades = await CiudadesModel.find();
                    if (!ciudades) {
                        throw new Error('error while fetching data ciudades')
                    }
                    return ciudades
                }
            },
            provincias: {
                type: new GraphQLList(provinciaType),
                resolve: async () => {
                    const provincias = await ProvinciasModel.find();
                    if (!provincias) {
                        throw new Error('error while fetching data provincias')
                    }
                    return provincias
                }
            },
            marcas: {
                type: new GraphQLList(marcaType),
                args: {
                    idMarca:    {type: graphql.GraphQLInt},
                    marca:      {type: graphql.GraphQLString}
                },
                resolve: async (root, args) => {

                    const marcas = await MarcasModel.find(args);
                    if (!marcas) {
                        throw new Error('error while fetching data marcas')
                    }
                    return marcas

                }
            },
            localizaciones: {
                type: new GraphQLList(localizacionType),
                args: {
                    idLocalizacion: {type: graphql.GraphQLInt},
                },
                resolve: async (root,args) => {
                    const localizaciones = await LocalizacionesModel.find(args);
                    if (!localizaciones) {
                        throw new Error('error while fetching data localizaciones')
                    }
                    return localizaciones
                }
            },
            trabajos: {
                type: new GraphQLList(trabajoType),
                args: {
                    idCliente: {type: graphql.GraphQLInt},
                    idTrabajo: {type: graphql.GraphQLInt}
                },
                resolve: async (root,args) => {
                    const trabajos = await TrabajosModel.find(args);
                    if (!trabajos) {
                        throw new Error('error while fetching data trabajos')
                    }
                    return trabajos
                }
            },
            tareas: {
                type: new GraphQLList(tareaType),
                args: {
                    idTrabajo: {type: graphql.GraphQLInt}
                },
                resolve: async (root,args) => {
                    const tareas = await TareasModel.find(args);
                    if (!tareas) {
                        throw new Error('error while fetching data tareas')
                    }
                    return tareas
                }
            }
        }
    }
});