import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.models.users || mongoose.model("users", userSchema);

const blogCategorySchema = new mongoose.Schema({
    name: String
});

export const BlogCategory = mongoose.models.blog_categories || mongoose.model("blog_categories", blogCategorySchema);

const blogSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        category: { type: mongoose.Types.ObjectId, required: true },
        readDuration: { type: String },
        body: { type: String, required: true },
        cover: { type: String },
    },
    {
        timestamps: true,
    }
);

export const Blog = mongoose.models.blogs || mongoose.model("blogs", blogSchema);

const designationSchema = new mongoose.Schema({
    name: String
});

export const Designations = mongoose.models.designations || mongoose.model("designations", designationSchema);

const testimonialSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        designation: { type: mongoose.Types.ObjectId, required: true },
        testimonial: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

export const Testimonial = mongoose.models.testimonials || mongoose.model("testimonials", testimonialSchema);