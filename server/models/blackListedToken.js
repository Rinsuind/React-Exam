const blackTokenModel = (Schema, model) => {
    const blackTokenSchema = new Schema(
        {
            token: String,
        },
        { timestamps: { createdAt: 'created_at' } }
    );
    return model('blackListedToken', blackTokenSchema);
};

module.exports = blackTokenModel;
