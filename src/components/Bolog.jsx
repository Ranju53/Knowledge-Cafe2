import React from 'react';
import { BsBookmark } from "react-icons/bs";
const Bolog = ({ bolog, handleBookmark }) => {
  const { title, coverImg, author, postDate, readingTime, hashtags } = bolog;

  return (
    <div className="m-4">
      <div>
        <img src={coverImg} alt="coverImg" className="w-[900px]" />
      </div>
      <div className="md:flex py-2 mt-2 justify-between items-center mx-2 ">
        <div className="flex ">
          <img src={author.img} alt="profileImg" className="w-[50px]" />
          <div className="ml-3">
            <h1 className="text-xl font-semibold">{author.name}</h1>
            <h2>{postDate}</h2>
          </div>
        </div>
        <div className="mr-12 mt-3 md:mt-1">
          {" "}
          {readingTime} min read{" "}
          <BsBookmark title='add to bookmark'
            onClick={() => handleBookmark(bolog)}
            className="inline text-red-500 font-bold text-xl cursor-pointer"
          />
        </div>
      </div>
      <div className="space-y-4 mt-3">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="text-gray-500 text-xl">
          <span>{hashtags[0]}</span>
          <span className="ml-2">{hashtags[1]}</span>
        </div>
        <button className="text-blue-600 underline font-semibold">
          Mark as read
        </button>
      </div>
    </div>
  );
};

export default Bolog;