import React from 'react';

const Bookmark = ({ reciveData }) => {
    
     
    return (
      <div className='bg-gray-400  mx-2 text-white rounded shadow-md py-2'>
        <h1 className='text-2xl font-bold mx-2'>Bookmarked Blogs : {reciveData.length}</h1>
        <div className="text-center">
          <div className="">
            {reciveData.map((roni) => (
              <h1 key={roni.id} className="bg-white py-2 text-justify px-2 text-xl font-semibold rounded  text-black shadow-lg m-3 ">{roni.title} </h1>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Bookmark;