const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
username: {
    type: String,
    unique: true,
    required: true,
    trimmed: true,
},

email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, ]
},
thoughts: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
    },
],

friends: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
],
},

{
    toJSON: {
        getters: true
    },
    id: false
}
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;