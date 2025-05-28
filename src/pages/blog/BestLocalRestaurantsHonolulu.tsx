
import { BlogPost } from "@/components/BlogPost";
import { getBlogPostBySlug } from "@/data/blogPosts";

const BestLocalRestaurantsHonolulu = () => {
  const post = getBlogPostBySlug("best-local-restaurants-honolulu");
  
  if (!post) {
    return <div>Blog post not found</div>;
  }

  return <BlogPost post={post} />;
};

export default BestLocalRestaurantsHonolulu;
