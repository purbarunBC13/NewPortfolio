import React from "react";

const Home = () => {
  return (
    <>
      <section className="px-10 pt-6 lg:pt-8 2xl:pt-12 flex flex-col items-center gap-6 lg:gap-3 2xl:gap-5 dark:bg-black min-h-screen">
        <div>
          <img
            src="/images/profile-pic.png"
            alt=""
            className="w-32 h-32 lg:w-36 lg:h-36 2xl:h-44 2xl:w-44 object-cover"
          />
        </div>
        <div className="text-slate-600 text-2xl lg:text-4xl font-bold">
          Its me, Purbarun👋
        </div>
        <div className="text-center text-4xl lg:text-8xl 2xl:text-9xl font-extrabold uppercase dark:text-slate-400 text-[#a5b923]">
          full-stack <br /> web developer
        </div>
        <div className="dark:text-slate-400 text-slate-600 lg:text2xl 2xl:text-3xl text-center">
          A passionate <strong className="dark:text-indigo-600 text-[#2c792f]">
            Web Developer
          </strong> and an <strong className="dark:text-indigo-600 text-[#2c792f]">AI</strong> learner skillfully transforms
          <br className="hidden lg:block" /> designs into functional,
          user-friendly websites,continuously learning new
          <br className="hidden lg:block" />
          technologies to enhance <br className="lg:hidden" /> user
          experiences.
        </div>
        <div>
          <button className="px-4 2xl:px-8 py-2 2xl:py-3 rounded-md dark:text-zinc-100 text-sky-950 font-bold dark:bg-rose-500 shadow-lg bg-[#b7c84c] dark:shadow-rose-500/50 shadow-[#070703] transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:shadow-none text-xl">
            <a href="https://twitter.com/DevPurbarunOfc">Reach Out</a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
