import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const MongoUrl = 'mongodb+srv://RamsPantoja:Left4Dead2@devclosterrams-nodjj.mongodb.net/fimdb?retryWrites=true&w=majority';

mongoose.connect(MongoUrl, {useUnifiedTopology: true, useNewUrlParser: true});

// Estructura del schema para la base de datos.

const studentSchema = new mongoose.Schema({
    matricula: String,
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    email: String,
    img: String,
    gender: String
});

export const Students = mongoose.model('Students', studentSchema);

