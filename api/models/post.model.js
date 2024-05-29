import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    images: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
      default: "uncategorized",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// Indexes
postSchema.index({ title: 1 }, { unique: true });
postSchema.index({ slug: 1 }, { unique: true });

// Pre-save hook for slug generation
postSchema.pre("save", async function (next) {
  if (this.isModified("title")) {
    this.slug = this.title.toLowerCase().split(" ").join("-");
    // Ensure unique slug
    const existingPost = await Post.findOne({ slug: this.slug });
    if (existingPost && existingPost._id.toString() !== this._id.toString()) {
      this.slug += `-${Date.now()}`;
    }
  }
  next();
});

const Post = mongoose.model("Post", postSchema);

export default Post;
