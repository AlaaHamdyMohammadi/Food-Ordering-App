const { Schema, models, model } = require("mongoose");

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        validate: (value) => {
            if(!value?.length || value?.length < 5){
                new Error('Password must be at least 5 characters.');
            }
        }
    },
}, {timeStamp: true});

export const User = models?.User || model('User', UserSchema);