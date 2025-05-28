import { BlogPost } from "@/components/BlogPost";
import { getBlogPostBySlug } from "@/data/blogPosts";

const HawaiianCulturalExperiences = () => {
  const post = getBlogPostBySlug("hawaiian-cultural-experiences");
  
  if (!post) {
    return <div>Blog post not found</div>;
  }

  return <BlogPost post={post} />;
};

export default HawaiianCulturalExperiences;
