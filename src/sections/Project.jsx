import React from "react";
import Heading from "../components/Heading";
import projectData from "../project.json";

const Project = () => {
  const project = projectData.projects;
  return (
    <section className="w-11/12 md:px-10 px-5 md:my-10 my-16">
      <Heading title="projects" />
      <section className=" text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {project.map((item, index) => {
              const { name, image, des, live, preview } = item;
              return (
                <a
                  key={index}
                  className="group block rounded-xl border border-accent p-8 shadow-xl transition hover:border-green hover:shadow-green"
                  href={live}
                  target="_blank"
                >
                  <img
                    src={image}
                    alt={name}
                    className="group-hover:scale-110 duration-75 ease-in"
                  />

                  <h2 className="mt-4 text-xl font-bold capitalize text-white">
                    {name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-300">{des}</p>
                </a>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/surya-tamang"
              target="_blank"
              className="uppercase font-semibold inline-block rounded border border-green px-12 py-3 text-sm text-green transition hover:bg-green hover:text-black"
            >
              see more
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Project;
