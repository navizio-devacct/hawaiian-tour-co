import { BlogPost } from "@/components/BlogPost";
import { getBlogPostBySlug } from "@/data/blogPosts";

const BestTimeVisitHawaii = () => {
  const post = getBlogPostBySlug("best-time-visit-hawaii");
  
  if (!post) {
    return <div>Blog post not found</div>;
  }

  return <BlogPost post={post} />;
};

export default BestTimeVisitHawaii;