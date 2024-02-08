import mongoose from "mongoose";

const Blog = mongoose.Schema(
    {
        title: String
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.blogs || mongoose.model("blogs", Blog);