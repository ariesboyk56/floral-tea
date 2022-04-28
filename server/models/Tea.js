import mongoose from "mongoose";

const TeaSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        description: { type: String },
        price: { type: Number },
        imgMain: { type: String },
        imgSup: { type: [String] },
        type: { type: String },
        caffeineLevel: { type: String },
        benefits: { type: String },
        flavor: { type: String },
        inventory: { type: Number, enum: ["In stock", "Sold out"] },
        weight: { type: Number },
        ingredients: { type: String },
        allergens: { type: String },
        instructions: { type: String },
        rating: { type: Number },
        author_id: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
    },
    { timestamps: true }
);
export default mongoose.model("Tea", TeaSchema)