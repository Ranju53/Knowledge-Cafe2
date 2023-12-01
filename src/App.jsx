import { useState } from "react";
import Bologs from "./assets/Bologs"
import Bookmark from "./components/Bookmark";
import Header from "./components/Header"
 

function App() {
  const [reciveData, setReciveData] = useState([])
  const [readingTime , setReadingTime] = useState(0)
  const handleBookmark = (data) => {
       setReciveData([...reciveData, data])
  }
  return (
    <div className="md:px-4   pb-4  px-4   ">
      <Header />
      <div className="flex mt-3    flex-col-reverse lg:flex-row">
        <div className="md:w-9/12">
          <Bologs handleBookmark={handleBookmark} />
        </div>
        <div className="md:w-1/4  lg:mr-4">
          <div className="bg-gray-100 ring-1 rounded text-xl text-blue-500 font-semibold shadow-md text-center m-3 p-2">
            Spent time on read : {readingTime} min
          </div>
          <Bookmark reciveData={reciveData} />
        </div>
      </div>
    </div>
  );
}

export default App
