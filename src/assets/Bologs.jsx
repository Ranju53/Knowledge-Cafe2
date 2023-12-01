import React, {   useEffect, useState } from 'react';
import Bolog from '../components/Bolog';

const Bologs = ({ handleBookmark }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data.map((bolog) => (
        <Bolog key={bolog.id} handleBookmark={handleBookmark} bolog={bolog} />
      ))}
    </div>
  );
};

export default Bologs;