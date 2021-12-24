const refreshToken = (Schema, model, ObjectId) => {
    const refreshTokenSchema = new Schema(
        {
            user: {
                type: ObjectId,
                ref: 'user',
            },
            refreshToken: {
                type: String,
            },
        },
        { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
    );

    return model('refreshToken', refreshTokenSchema);
};

module.exports = refreshToken;
