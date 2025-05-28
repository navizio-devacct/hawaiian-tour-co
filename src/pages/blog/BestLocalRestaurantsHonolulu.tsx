<<<<<<< HEAD
=======

>>>>>>> d2ef9f4e48c057783b453f5a40b10a5dc58a18a2
import { BlogPost } from "@/components/BlogPost";
import { getBlogPostBySlug } from "@/data/blogPosts";

const BestLocalRestaurantsHonolulu = () => {
  const post = getBlogPostBySlug("best-local-restaurants-honolulu");
  
  if (!post) {
    return <div>Blog post not found</div>;
  }

  return <BlogPost post={post} />;
};

<<<<<<< HEAD
export default BestLocalRestaurantsHonolulu;
=======
export default BestLocalRestaurantsHonolulu;
>>>>>>> d2ef9f4e48c057783b453f5a40b10a5dc58a18a2
