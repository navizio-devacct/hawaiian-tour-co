<<<<<<< HEAD
=======

>>>>>>> d2ef9f4e48c057783b453f5a40b10a5dc58a18a2
import { BlogPost } from "@/components/BlogPost";
import { getBlogPostBySlug } from "@/data/blogPosts";

const HiddenWaterfallsBigIsland = () => {
  const post = getBlogPostBySlug("hidden-waterfalls-big-island");
  
  if (!post) {
    return <div>Blog post not found</div>;
  }

  return <BlogPost post={post} />;
};

<<<<<<< HEAD
export default HiddenWaterfallsBigIsland;
=======
export default HiddenWaterfallsBigIsland;
>>>>>>> d2ef9f4e48c057783b453f5a40b10a5dc58a18a2
