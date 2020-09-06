import mongoose, {Schema} from 'mongoose';
import bcrypt, { hash } from 'bcrypt';

mongoose.Promise = global.Promise;

const MongoUrl = 'mongodb+srv://RamsPantoja:Left4Dead2@devclosterrams-nodjj.mongodb.net/fimdb?retryWrites=true&w=majority';

mongoose.connect(MongoUrl, {useUnifiedTopology: true, useNewUrlParser: true});

// Estructura del schema para la base de datos.

const studentSchema = new Schema({
    enrollment: String,
    password: String,
    firstname: String,
    lastname: String,
    email: String,
    img: String,
    gender: String,
    isconfirmated: Boolean
});

studentSchema.pre('save', function (next) {
    if(!this.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next(err);
            this.password = hash;
            next();
        })
    })
})


export const Students = mongoose.model('Students', studentSchema);

const teacherSchema = new Schema({
    firstname: String,
    lastname: String,
    password: String,
    email: String,
    img: String,
    gender: String,
    isconfirmated: Boolean
});

teacherSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next(err);
            this.password = hash;
            next();
        })
    })
})

export const Teachers = mongoose.model('Teachers', teacherSchema);

const courseSchema = new Schema({
    coursename: String,
    section: String,
    teacher: Object
});

export const Courses = mongoose.model('Courses', courseSchema);

