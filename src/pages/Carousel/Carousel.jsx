import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { useState } from "react";

const slides = [
  "https://i0.wp.com/picjumbo.com/wp-content/uploads/pure-nature-landscape-single-tree-in-green-field-free-photo.jpg?w=600&quality=80",
  "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRin-RHdvU8GYNk8I2YPre0yYYHCJlY9GuAbsYmBF-AOTXZQXEOrOjF-etRUFagA9Gx0NE&usqp=CAU',
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    if(index > 0){
        setIndex(index - 1);
    }
    else{
        setIndex(slides.length - 1)
    }
  };


  const handleNext = () => {
    if(index < slides.length-1){
        setIndex(index + 1);
    }
    else{
        setIndex(0)
    }
  };

  return (
    <div className="px-4 md:px-8 lg:px-10">
      <h1 className="text-2xl md:text-3xl text-center font-medium text-gray-900 mt-8">Project: Carousel</h1>
      <div className="flex justify-between items-center gap-4 md:gap-6 my-12">
        {/* Previous Button */}
        <div>
          <button
            onClick={handlePrevious}
            className="text-gray-400 hover:text-gray-900"
          >
            <ArrowLeftCircle size={35} />
          </button>
        </div>

        {/* Slider Image */}
        <div className="w-full max-w-screen-sm">
          <img src={slides[index]} alt="" className="w-full h-auto"/>
        </div>

        {/* Next Button */}
        <div>
          <button
            onClick={handleNext}
            className="text-gray-400 hover:text-gray-900"
          >
            <ArrowRightCircle size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
