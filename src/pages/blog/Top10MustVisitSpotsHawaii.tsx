import { BlogPost } from "@/components/BlogPost";
import { getBlogPostBySlug } from "@/data/blogPosts";

const Top10MustVisitSpotsHawaii = () => {
  const post = getBlogPostBySlug("top-10-must-visit-spots-hawaii");
  
  if (!post) {
    return <div>Blog post not found</div>;
  }

  return <BlogPost post={post} />;
};

export default Top10MustVisitSpotsHawaii;