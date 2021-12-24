const bookModel = (Schema, model, ObjectId) => {
    const bookSchema = new Schema(
        {
            title: {
                required: true,
                type: String,
            },
            author: {
                required: true,
                type: String,
            },
            imageUrl: {
                required: true,
                type: String,
            },
            price: {
                required: true,
                type: Number,
            },
            description: {
                required: true,
                type: String,
            },
            creator: {
                type: ObjectId,
                ref: 'user',
            },
        },
        { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
    );

    return model('book', bookSchema);
};

module.exports = bookModel;
