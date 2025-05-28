import { BlogPost } from "@/components/BlogPost";
import { getBlogPostBySlug } from "@/data/blogPosts";

const SunriseHaleakalaGuide = () => {
  const post = getBlogPostBySlug("sunrise-haleakala-complete-guide");
  
  if (!post) {
    return <div>Blog post not found</div>;
  }

  return <BlogPost post={post} />;
};

export default SunriseHaleakalaGuide;
