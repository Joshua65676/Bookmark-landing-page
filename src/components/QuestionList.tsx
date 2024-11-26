import React, { useState } from "react";
import { iconarrow } from "../assets";
import { IoIosArrowUp } from "react-icons/io";

const QuestionList: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <section className="w-full mx-auto md:container max-w-7xl">
      <main className="flex flex-col gap-5 w-[38rem]">
        <hr className="" />
        {/* Question 1  */}
        <div className="">
          <div className="flex flex-row justify-between">
            <h2 className="">What is Bookmark?</h2>
            <button className="mr-5" onClick={toggleVisibility}>
              {!isVisible ? (
                <img src={iconarrow} alt="Arrow Down" />
              ) : (
                <IoIosArrowUp className="w-[25px] h-[30px] text-[#5267DF] font-bold" />
              )}
            </button>
          </div>
          {/* Answer 1  */}
          {isVisible && (
            <div className="">
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt justo eget ultricies fringilla. Phasellus blandit
                ipsum quis quam ornare mattis.
              </p>
            </div>
          )}
        </div>
        <hr className="" />
        {/* Question 2  */}
        <div className="">
          <div className="flex flex-row justify-between">
            <h2 className="">How can I request a new browser?</h2>
            <button className="mr-5" onClick={toggleVisibility}>
              {!isVisible ? (
                <img src={iconarrow} alt="Arrow Down" />
              ) : (
                <IoIosArrowUp className="w-[25px] h-[30px] text-[#5267DF] font-bold" />
              )}
            </button>
          </div>
          {/* Answer 2  */}
          {isVisible && (
            <div className="">
              <p className="">
                Vivamus luctus eros aliquet convallis ultricies. Mauris augue
                massa, ultricies non ligula. Suspendisse imperdiet. Vivamus
                luctus eros aliquet convallis ultricies. Mauris augue massa,
                ultricies non ligula. Suspendisse imperdie tVivamus luctus eros
                aliquet convallis ultricies. Mauris augue massa, ultricies non
                ligula. Suspendisse imperdiet.
              </p>
            </div>
          )}
        </div>
        <hr className="" />
        {/* Question 3  */}
        <div className="">
          <div className="flex flex-row justify-between">
            <h2 className="">Is there a mobile app?</h2>
            <button className="mr-5" onClick={toggleVisibility}>
              {!isVisible ? (
                <img src={iconarrow} alt="Arrow Down" />
              ) : (
                <IoIosArrowUp className="w-[25px] h-[30px] text-[#5267DF] font-bold" />
              )}
            </button>
          </div>
          {/* Answer 3  */}
          {isVisible && (
            <div className="">
              <p className="">
                Sed consectetur quam id neque fermentum accumsan. Praesent
                luctus vestibulum dolor, ut condimentum urna vulputate eget.
                Cras in ligula quis est pharetra mattis sit amet pharetra purus.
                Sed sollicitudin ex et ultricies bibendum.
              </p>
            </div>
          )}
        </div>
        <hr className="" />
        {/* Question 4  */}
        <div className="">
          <div className="flex flex-row justify-between">
            <h2 className="">What about other Chromium browsers?</h2>
            <button className="mr-5" onClick={toggleVisibility}>
              {!isVisible ? (
                <img src={iconarrow} alt="Arrow Down" />
              ) : (
                <IoIosArrowUp className="w-[25px] h-[30px] text-[#5267DF] font-bold" />
              )}
            </button>
          </div>
          {/* Answer 4  */}
          {isVisible && (
            <div className="">
              <p className="">
                Integer condimentum ipsum id imperdiet finibus. Vivamus in
                placerat mi, at euismod dui. Aliquam vitae neque eget nisl
                gravida pellentesque non ut velit.
              </p>
            </div>
          )}
        </div>
        <hr className="" />
      </main>
    </section>
  );
};

export default QuestionList;
