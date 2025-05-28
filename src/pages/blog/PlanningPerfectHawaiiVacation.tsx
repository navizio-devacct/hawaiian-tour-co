<<<<<<< HEAD
=======

>>>>>>> d2ef9f4e48c057783b453f5a40b10a5dc58a18a2
import { BlogPost } from "@/components/BlogPost";
import { getBlogPostBySlug } from "@/data/blogPosts";

const PlanningPerfectHawaiiVacation = () => {
  const post = getBlogPostBySlug("planning-perfect-hawaii-vacation");
  
  if (!post) {
    return <div>Blog post not found</div>;
  }

  return <BlogPost post={post} />;
};

<<<<<<< HEAD
export default PlanningPerfectHawaiiVacation;
=======
export default PlanningPerfectHawaiiVacation;
>>>>>>> d2ef9f4e48c057783b453f5a40b10a5dc58a18a2
