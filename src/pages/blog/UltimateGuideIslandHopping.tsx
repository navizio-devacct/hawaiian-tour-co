import { BlogPost } from "@/components/BlogPost";
import { getBlogPostBySlug } from "@/data/blogPosts";

const UltimateGuideIslandHopping = () => {
  const post = getBlogPostBySlug("ultimate-guide-island-hopping");
  
  if (!post) {
    return <div>Blog post not found</div>;
  }

  return <BlogPost post={post} />;
};

export default UltimateGuideIslandHopping;
