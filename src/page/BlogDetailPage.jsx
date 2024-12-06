import { Calendar, Tag, BookOpen } from 'lucide-react';
import BlogCard from '@/components/BlogCard';

// Sample blog post data
const mainBlogPost = {
  title: "Exploring the Future of Artificial Intelligence",
  date: "December 7, 2024",
  image: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
  author: "Sarah Thompson",
  content: `
    Artificial Intelligence (AI) continues to reshape our world in unprecedented ways. From healthcare to education, 
    the potential applications of AI are vast and transformative. In this article, we'll dive deep into the emerging 
    trends that are set to revolutionize how we interact with technology.

    The past decade has seen exponential growth in AI capabilities. Machine learning algorithms have become 
    increasingly sophisticated, enabling more nuanced and context-aware solutions across various industries.

    Key areas of AI advancement include:
    1. Natural Language Processing
    2. Computer Vision
    3. Predictive Analytics
    4. Autonomous Systems

    As we look to the future, the integration of AI into everyday life seems not just probable, but inevitable.
  `,
  tags: ['Technology', 'AI', 'Future Trends']
};

const BlogDetailPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:flex">
      {/* Main Blog Content */}
      <div className="lg:w-2/3 lg:pr-8">
        {/* Blog Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-primary mb-4">{mainBlogPost.title}</h1>
          
          {/* Blog Meta Information */}
          <div className="flex items-center text-muted-foreground mb-4">
            <Calendar className="w-5 h-5 mr-2" />
            <span className="mr-4">{mainBlogPost.date}</span>
            <BookOpen className="w-5 h-5 mr-2" />
            <span>{mainBlogPost.author}</span>
          </div>

          {/* Blog Image */}
          <div className="mb-6">
            <img 
              src={mainBlogPost.image} 
              alt={mainBlogPost.title} 
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Blog Content */}
          <div className="prose max-w-none text-primary">
            <p>{mainBlogPost.content}</p>
          </div>

          {/* Tags */}
          <div className="flex items-center mt-6">
            <Tag className="w-5 h-5 mr-2 text-primary" />
            <div className="space-x-2">
              {mainBlogPost.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="bg-primary text-secondary px-2 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Blogs Sidebar */}
      <div className="lg:w-1/3 mt-8 lg:mt-0">
        <h2 className="text-xl font-semibold mb-6 text-primary">Related Blogs</h2>
        <div className="flex flex-col justify-center items-center gap-y-4">
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;