import React from 'react';

const Header = () => {
    return (
      <div className='flex justify-between items-center px-2 mt-3 border-b-2 pb-3'>
        <h1 className="md:text-4xl text-2xl font-bold">Knowledge Cafe</h1>
        <img src="/public/images/profile.png" alt="" />
      </div>
    );
};

export default Header;