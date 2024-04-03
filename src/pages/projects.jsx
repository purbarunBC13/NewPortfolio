import { Link } from "lucide-react";
import React from "react";

const Projects = () => {
  return (
    <>
      <section className="min-h-screen dark:bg-black px-8 pt-10 flex flex-col items-center gap-10">
        {/* Main head starts here */}
        <div className="w-1/2 flex flex-col items-center gap-10 lg:text-xl 2xl:text-2xl text-center">
          <h1 className="lg:text-5xl 2xl:text-6xl font-bold flex gap-5 text-[#a5b923] dark:text-slate-400">
            Featured Projects
            <a href="https://github.com/purbarunBC13" className="dark:hidden">
              <Link color="#475569" size={60} />
            </a>
            <a href="https://github.com/purbarunBC13" className="hidden dark:block">
              <Link color="red" size={60} />
            </a>
          </h1>
          <p className="dark:text-slate-400 text-slate-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur obcaecati dignissimos, perspiciatis consequatur ab nemo
            esse perferendis, asperiores voluptates facere necessitatibus <br />
            dolores accusantium ut harum amet repudiandae <br /> pariatur
            officia tenetur.
          </p>
        </div>
        {/* Main head ends here */}

        {/* Card starts here */}
        <div className="w-full grid py-2 gap-10">
          {/* Card 1 starts here*/}
          <div className="grid grid-cols-6">
            <div className="col-span-3 justify-self-center flex items-center">
              <img src="/images/HealthCare.png" alt="" className="dark:border-slate-100 border-2 border-[#b7c84c] p-2 object-cover  " />
            </div>
            <div className="col-span-3 flex flex-col gap-6 p-10 text-center justify-center">
              <h1 className="lg:text-3xl 2xl:text-4xl font-bold dark:text-slate-300 text-[#a5b923]">
                Modern Healthcare
              </h1>
              <p className="dark:text-slate-200 text-slate-600">
                Frontend is built using React and Tailwind CSS. React is a
                JavaScript library for building user interfaces. Tailwind CSS is
                a utility-first CSS framework for quickly building custom
                designs.
              </p>
              <p className="text-slate-400">
                This Modern Healthcare website is built using React and Tailwind
                CSS. React is a JavaScript library for building user interfaces.
                Tailwind CSS is a utility-first CSS framework for quickly
                building custom designs.
              </p>
              <div>
                <button className="lg:px-4 2xl:px-8 lg:py-2 2xl:py-3 rounded-md dark:text-zinc-100 text-slate-800 font-bold dark:bg-rose-500 shadow-lg bg-[#b7c84c] dark:shadow-rose-500/50 shadow-[#070703] transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:shadow-none text-xl">
                  <a href="https://health-care-tawny.vercel.app/">Visit it</a>
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 ends here */}

          {/* Card 2 starts here */}
          <div className="grid grid-cols-6">
            <div className="col-span-3 flex flex-col gap-6 p-10 text-center justify-center">
              <h1 className="lg:text-3xl 2xl:text-4xl font-bold dark:text-slate-300 text-[#a5b923]">
                Full-Stack MERN Application
              </h1>
              <p className="dark:text-slate-200 text-slate-600">
                MERN Application is a full-stack application that uses MongoDB,
                Express, React, and Node.js. It is a simple social media app
                that allows users to post interesting events that happened in
                their lives. Users can also like and delete posts.
              </p>
              <p className="text-slate-400">
                A full stack MERN application with authentication,
                authorization, and CRUD operations.The application is built
                using React, Node.js, Express, and MongoDB.This has login and
                register functionality, with a dashboard to view, add, update,
                and delete posts.
              </p>
              <div>
                <button className="lg:px-4 2xl:px-8 lg:py-2 2xl:py-3 rounded-md dark:text-zinc-100 text-slate-800 font-bold dark:bg-rose-500 shadow-lg bg-[#b7c84c] dark:shadow-rose-500/50 shadow-[#070703] transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:shadow-none text-xl">
                  <a href="https://github.com/purbarunBC13/MERN2023.git">Check Codebase</a>
                </button>
              </div>
            </div>
            <div className="col-span-3 flex items-center">
              <img
                src="/images/MERN2024.png"
                alt=""
                className="dark:border-slate-100 border-2 border-[#b7c84c] p-2 dark:bg-slate-500/50"
              />
            </div>
          </div>
          {/* Card 2 ends here */}
        </div>
        {/* Card ends here */}
      </section>
    </>
  );
};

export default Projects;
