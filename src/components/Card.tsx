interface CardProps {
    title: string;
    body: string;
    image: string;
    id: number;
  }
  
  const Card = ({ title, body, image, id }: CardProps) => {
    const imageUrl = `${image}?random=${id}`;
  
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105">
        {/* Gambar */}
        <div className="h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
  
        {/* Konten */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{body}</p>
  
          {/* Tombol lebih clean */}
          <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300">
            Read more
          </button>
        </div>
      </div>
    );
  };
  
  export default Card;