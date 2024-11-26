import React, { useState } from "react";
import { Button } from "./ui/Button";
import { QuestionLists } from "../constants";
import { iconarrow } from "../assets";
import { IoIosArrowUp } from "react-icons/io";

const Question: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);

  const toggleVisibility = (id: string) => {
    setVisibleItems((prevState) =>
      prevState.includes(id)
        ? prevState.filter((item) => item !== id)
        : [...prevState, id]
    );
  };
  return (
    <section className="w-full pb-32 mx-auto md:container max-w-7xl">
      <main className="flex flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-3xl font-semibold font-Rubik text-DarkBlue mx:w-64 mx:text-center md:w-full">
            {" "}
            Frequently Asked Questions
          </h3>
          <div className="text-center md:w-7/12 font-Rubik mx:w-10/12">
            <p className="text-[16px] font-normal text-GrayishBlue inline leading-[26.2px] -tracking-[2.5%]">
              Here are some of our FAQs. If you have any other questions you’d
              like answered please feel free to email us.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:w-[38rem] mx:w-[22rem]">
          {QuestionLists.map(({ id, question, answer }) => (
            <div key={id} className="flex flex-col gap-4 hover:text-SoftRed">
              <hr className="border w-[38rem] mx:hidden md:flex" />
              <div className="flex flex-col gap-3">
                <div className="flex flex-row justify-between">
                    <h2 className="pl-3 font-normal font-Rubik">{question}</h2>
                  <button className="pr-5" onClick={() => toggleVisibility(id)}>
                    {visibleItems.includes(id) ? (
                      <IoIosArrowUp className="w-[25px] h-[30px] text-SoftRed font-bold" />
                    ) : (
                      <img src={iconarrow} alt="Arrow Down" />
                    )}
                  </button>
                </div>
                {visibleItems.includes(id) && (
                  <div className="pl-3">
                    <p className="text-[14px] font-normal text-GrayishBlue inline leading-[26.2px] -tracking-[2.5%] font-Rubik">{answer}</p>
                  </div>
                )}
              </div>
              <hr className="border md:w-[38rem]" />
            </div>
          ))}
        </div>

        <div className="-mt-8">
          <Button className="text-white rounded-md bg-SoftBlue hover:text-SoftBlue hover:border-SoftBlue border-SoftBlue">
            <span className=" font-Rubik">More Info</span>
          </Button>
        </div>
      </main>
    </section>
  );
};

export default Question;
