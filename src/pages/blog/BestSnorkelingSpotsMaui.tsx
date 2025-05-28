import { BlogPost } from "@/components/BlogPost";
import { getBlogPostBySlug } from "@/data/blogPosts";

const BestSnorkelingSpotsMaui = () => {
  const post = getBlogPostBySlug("best-snorkeling-spots-maui");
  
  if (!post) {
    return <div>Blog post not found</div>;
  }

  return <BlogPost post={post} />;
};

export default BestSnorkelingSpotsMaui;
