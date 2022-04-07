import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        firstName: { type: String },
        lastName: { type: String },
        address: { type: String },
        gender: { type: String },
        roleId: { type: String, enum: ["admin","shop","user"], default: "user" },
        phone: { type: Number },
        image: { type: String, default: "" },

    },
    { timestamps: true }
)

export default mongoose.model('user', UserSchema)