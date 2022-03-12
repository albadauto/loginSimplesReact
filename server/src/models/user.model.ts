import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    nome: String,
    sobrenome: String,
    cpf: String
});


export default model('user', userSchema);