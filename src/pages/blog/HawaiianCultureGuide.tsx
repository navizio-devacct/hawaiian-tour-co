import { BlogPost } from "@/components/BlogPost";
import { getBlogPostBySlug } from "@/data/blogPosts";

const HawaiianCultureGuide = () => {
  const post = getBlogPostBySlug("hawaiian-culture-guide");
  
  if (!post) {
    return <div>Blog post not found</div>;
  }

  return <BlogPost post={post} />;
};

export default HawaiianCultureGuide;