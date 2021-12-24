const userModel = (Schema, model, bcrypt, bcryptRounds, ObjectId) => {
    const userSchema = new Schema(
        {
            email: {
                type: String,
                required: true,
                unique: true,
                lowercase: true,
            },

            username: {
                type: String,
                required: true,
                unique: true,
            },

            password: {
                type: String,
                required: true,
            },
            BoughtBooks: [
                {
                    type: ObjectId,
                    ref: 'book',
                },
            ],
        },
        { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
    );

    userSchema.methods = {
        passwordMatch(password) {
            return bcrypt.compare(password, this.password);
        },
    };

    userSchema.pre('save', function (next) {
        if (this.isModified('password')) {
            return bcrypt
                .genSalt(bcryptRounds)
                .then((salt) => bcrypt.hash(this.password, salt))
                .then((hash) => {
                    return (this.password = hash);
                })
                .catch((err) => next(err));
        }
        next();
    });

    return model('user', userSchema);
};

module.exports = userModel;
