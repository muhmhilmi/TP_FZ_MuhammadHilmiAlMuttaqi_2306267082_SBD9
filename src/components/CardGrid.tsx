import { useState, useEffect } from "react";
import Card from "./Card";
import { postsData } from "../data/posts";

const CardGrid = () => {
  const [posts, setPosts] = useState(postsData.results);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="products" className="py-20 px-6 sm:px-12 lg:px-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl mb-4">
            Our Featured Products
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 opacity-80 leading-relaxed">
            Explore our carefully curated selection designed for efficiency and elegance.
          </p>
        </div>

        {/* Grid Layout yang lebih proporsional */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 transform transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {posts.map((post) => (
            <Card
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;