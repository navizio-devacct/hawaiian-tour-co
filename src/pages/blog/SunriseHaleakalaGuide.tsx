<<<<<<< HEAD
=======

>>>>>>> d2ef9f4e48c057783b453f5a40b10a5dc58a18a2
import { BlogPost } from "@/components/BlogPost";
import { getBlogPostBySlug } from "@/data/blogPosts";

const SunriseHaleakalaGuide = () => {
  const post = getBlogPostBySlug("sunrise-haleakala-complete-guide");
  
  if (!post) {
    return <div>Blog post not found</div>;
  }

  return <BlogPost post={post} />;
};

<<<<<<< HEAD
export default SunriseHaleakalaGuide;
=======
export default SunriseHaleakalaGuide;
>>>>>>> d2ef9f4e48c057783b453f5a40b10a5dc58a18a2
