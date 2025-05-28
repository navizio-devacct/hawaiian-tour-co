
import { BlogPost } from "@/components/BlogPost";
import { getBlogPostBySlug } from "@/data/blogPosts";

const HiddenWaterfallsBigIsland = () => {
  const post = getBlogPostBySlug("hidden-waterfalls-big-island");
  
  if (!post) {
    return <div>Blog post not found</div>;
  }

  return <BlogPost post={post} />;
};

export default HiddenWaterfallsBigIsland;
