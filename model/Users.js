const {Schema, model} = require('mongoose');
const bycrypt = require('bcryptjs');

const UsersSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
});

// encriptar password
UsersSchema.methods.encryptPassword = async password => {
    return await bycrypt.hash(password, 12);
};

// desencriptar password y comparar con el password en bd
UsersSchema.methods.matchPassword = async function (password) {
    return await bycrypt.compare(password, this.password);
}

const Users = model('Users', UsersSchema);

module.exports = Users;
