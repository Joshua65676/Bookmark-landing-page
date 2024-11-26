import React from "react";
import ContactForm from "./ContactForm";

const StayUptoDate: React.FC = () => {
  return (
    <section className="w-full bg-SoftBlue">
      <main className="flex flex-col items-center justify-center w-full gap-16 py-20 mx-auto md:container max-w-7xl">
        <div className="flex flex-col gap-8">
          <span className="inline text-sm text-center text-white uppercase font-Rubik leading-[26.2px] -tracking-[2.5%]">35,000+ already joined</span>
          <h1 className="text-4xl font-medium text-center text-white w-[31rem] font-Rubik">Stay up-to-date with what we’re doing</h1>
        </div>
        <ContactForm />
      </main>
    </section>
  );
};

export default StayUptoDate;