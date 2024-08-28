import { useLatestBlogsQuery } from '@/redux/api/blogApi';
import React, { useState } from 'react';

interface LatestBlogsProps {

  blogId: string;     
}


const LatestNews : React.FC<LatestBlogsProps> = ({blogId}) => {
  const { data } = useLatestBlogsQuery(blogId);
  const [showAll, setShowAll] = useState(false); 


  const toggleShowAll = () => setShowAll(!showAll);


  const blogsToShow = showAll ? data?.data : data?.data.slice(0, 3);

  return (
    <div className="p-4 rounded-lg shadow-sm mb-6 bg-[#f8fcfd]">
      <h4 className="text-lg font-semibold mb-4">Latest News</h4>
      <ul className="space-y-4">
        {blogsToShow?.map((blog:any) => (
          <li key={blog.id} className="flex items-start">
            <img
              className="w-24 h-24 rounded-lg mr-4"
              src={blog.blogImg[0]}
              alt={blog.title}
            />
            <div>
              <p className="text-sm text-gray-500 mb-2">
                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <h4 className="text-md font-semibold">
                <a href="#" className="hover:underline">
                  {blog.title}
                </a>
              </h4>
            </div>
          </li>
        ))}
      </ul>

      {/* Show "See More" or "See Less" button if there are more than 4 blogs */}
      {data?.data.length > 3 && (
        <button
          onClick={toggleShowAll}
          className="text-blue-500 hover:underline mt-4"
        >
          {showAll ? 'See Less' : 'See More'}
        </button>
      )}
    </div>
  );
};

export default LatestNews;
