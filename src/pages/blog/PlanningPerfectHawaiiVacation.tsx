
import { BlogPost } from "@/components/BlogPost";
import { getBlogPostBySlug } from "@/data/blogPosts";

const PlanningPerfectHawaiiVacation = () => {
  const post = getBlogPostBySlug("planning-perfect-hawaii-vacation");
  
  if (!post) {
    return <div>Blog post not found</div>;
  }

  return <BlogPost post={post} />;
};

export default PlanningPerfectHawaiiVacation;
