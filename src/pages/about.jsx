import React from "react";
import { about } from "../constants/about";

const About = () => {
  return (
    <>
      <section className="min-h-screen dark:bg-black px-4 lg:px-8 pt-10 lg:flex lg:gap-10">
        <div className="dark:text-slate-400 text-slate-600 lg:w-1/2 flex flex-col gap-8 lg:gap-10 2xl:gap-16 lg:text-xl 2xl:text-2xl">
          <h1 className="text-3xl lg:text-4xl 2xl:text-6xl font-bold dark:text-slate-400 text-[#a5b923]">
            About Me
          </h1>
          <p>
            I am{" "}
            <strong
              className="
            text-indigo-500"
            >
              Purbarun
            </strong>
            , a skilled
            <strong
              className="
            text-rose-500"
            >
              {" "}
              Full-Stack web developer
            </strong>{" "}
            proficient in
            <strong
              className="
            text-blue-400"
            >
              {" "}
              React{" "}
            </strong>
            ,{" "}
            <strong
              className="
            text-green-600"
            >
              Node.js{" "}
            </strong>
            ,
            <strong
              className="
            text-yellow-500"
            >
              {" "}
              Express,
            </strong>{" "}
            and
            <strong
              className="
            text-sky-500"
            >
              {" "}
              Tailwind CSS
            </strong>
            . My expertise extends to backend development with{" "}
            <strong
              className="
            text-emerald-600"
            >
              Spring Boot
            </strong>
            , enabling robust and scalable web applications.
          </p>
          <p>
            Currently delving into{" "}
            <strong
              className="
            text-blue-500"
            >
              Machine
            </strong>{" "}
            <strong
              className="
            text-yellow-400"
            >
              Learning
            </strong>
            , I aim to seamlessly integrate AI capabilities into my web
            development projects.
          </p>
          <p>
            Driven by curiosity and a passion for innovation, I thrive in
            dynamic tech environments, constantly expanding my skills and
            knowledge.
          </p>
          <div className="flex gap-8 lg:gap-10">
            <a href="https://github.com/purbarunBC13">
              <img
                src="/images/github-logo.png"
                alt="githubLogo"
                className="w-16 2xl:w-20 h-16 2xl:h-20"
              />
            </a>
            <a href="https://www.linkedin.com/in/purbarun-mondal-5067a1250/">
              <img
                src="/images/linkedin-logo.png"
                alt="linkedinlogo"
                className="w-16 2xl:w-20 h-16 2xl:h-20"
              />
            </a>
          </div>
        </div>

        <div className="dark:text-slate-400 text-slate-600 lg:w-1/2 flex flex-col gap-8 lg:gap-10 text-3xl mt-16 lg:mt-24">
          <h2 className="text-3xl 2xl:text-4xl font-bold dark:text-slate-400 text-[#a5b923]">
            Tech-Stack
          </h2>
          <div className="flex 2xl:gap-40 lg:gap-20 gap-2">
            <ul className="flex flex-col gap-10">
              {about
                .filter((item, index) => index < 3)
                .map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex text-lg lg:text-xl items-center gap-4 2xl:gap-8"
                    >
                      <img
                        src={item.source}
                        alt=""
                        className="w-14 lg:w-16 2xl:w-20"
                      />
                      {item.title}
                    </li>
                  );
                })}
            </ul>
            <ul className="flex flex-col gap-10">
              {about
                .filter((item, index) => index >= 3)
                .map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex text-lg lg:text-xl items-center gap-4 2xl:gap-8"
                    >
                      <img
                        src={item.source}
                        alt=""
                        className="w-14 lg:w-16 2xl:w-20"
                      />
                      {item.title}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
