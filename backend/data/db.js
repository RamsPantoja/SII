import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const MongoUrl = 'mongodb+srv://RamsPantoja:Left4Dead2@devclosterrams-nodjj.mongodb.net/fimdb?retryWrites=true&w=majority';

mongoose.connect(MongoUrl, {useUnifiedTopology: true, useNewUrlParser: true});

// Estructura del schema para la base de datos.

const studentSchema = new mongoose.Schema({
    enrollment: String,
    password: String,
    firstname: String,
    lastname: String,
    email: String,
    img: String,
    gender: String
});

export const Students = mongoose.model('Students', studentSchema);

const teacherSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    password: String,
    email: String,
    img: String,
    gender: String
});

export const Teachers = mongoose.model('Teachers', teacherSchema);