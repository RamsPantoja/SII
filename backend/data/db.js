import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const MongoUrl = 'mongodb+srv://RamsPantoja:Left4Dead2@devclosterrams-nodjj.mongodb.net/fimdb?retryWrites=true&w=majority';

mongoose.connect(MongoUrl, {useUnifiedTopology: true, useNewUrlParser: true});

