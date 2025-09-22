"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

import {ProjectStatus} from "../data/projectStatus";
import CardProject from "../components/cardProject";


export default function Home() {
  const [currentPicture, setCurrentPicture] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const togglePicture = () => {
    setIsAnimating(true);
    setCurrentPicture((prev) => (prev === 0 ? 1 : 0));
    setTimeout(() => setIsAnimating(false), 2000);
  };

  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % Projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + Projects.length) % Projects.length);
  };

  const pictures = [
    {
      src: "/profilepic.png",
      alt: "Carlos Andres Mendoza Garcia",
      decorator: { src: "/decorators.png", alt: "estrella" },
    },
    {
      src: "/pixelprofilepic.png",
      alt: "OrionByPixel",
      decorator: { src: "/estrella.svg", alt: "estrella" },
    },
  ];

  const Backend = [
    {
      name: "Node JS",
      proficiency: "80%",
    },
    {
      name: "Python",
      proficiency: "60%",
    },
    {
      name: "Java",
      proficiency: "50%",
    },
  ];

  const Frontend = [
    {
      name: "React",
      proficiency: "90%",
    },
    {
      name: "HTML+CSS+JS",
      proficiency: "85%",
    },
    {
      name: "Next JS",
      proficiency: "40%",
    },
  ];

  const CloudDB = [
    {
      name: "MongoDB",
      proficiency: "80%",
    },
    {
      name: "Firebase",
      proficiency: "50%",
    },
    {
      name: "SQL",
      proficiency: "50%",
    },
  ];

  const Extra = [
    {
      name: "Git/Github",
      proficiency: "80%",
    },
    {
      name: "Typescript",
      proficiency: "60%",
    },
    {
      name: "Zustand",
      proficiency: "40%",
    },
  ];

  const Projects = [
    {
      title: "InmueblesSA",
      img: "/InmueblesSA.png",
      resume: "lorem ipsum",
      url: "https://github.com/CarlosMendozaGarcia/InmueblesSA",
      state: "Completado" as ProjectStatus,
    },
    {
      title: "Connectlatam",
      img: "/ConnectLatam.png",
      resume: "lorem ipsum",
      url: "https://github.com/CarlosMendozaGarcia/ConnectLatam",
      state: "En progreso" as ProjectStatus,
    },
    {
      title: "PriceHive",
      img: "/PriceHive.png",
      resume: "",
      url:"https://github.com/CarlosMendozaGarcia/PriceHive-Parcial-FrontEnd",
      state: "Arreglos" as ProjectStatus,
    },
    {
      title: "Carpool",
      img: "/Carpool.png",
      resume: "lorem ipsum",
      url:"",
      state: "Completado" as ProjectStatus,
    },
  ];

  return (
    <div className={styles.background}>
      <section id="Aboutme" className={styles.welcome_section}>
        <div className={styles.welcome_content}>
          <div
            className={styles.welcome_profile_picture}
            onClick={() => togglePicture()}
          >
            <div className={styles.welcome_background}>
              <Image
                src={pictures[(currentPicture + 1) % pictures.length].src}
                alt={pictures[(currentPicture + 1) % pictures.length].alt}
                fill
              />
            </div>
            <div
              className={`${
                isAnimating ? styles.open : styles.welcome_picture
              }`}
            >
              <Image
                key={currentPicture} // fuerza re-render al cambiar imagen
                src={pictures[currentPicture].src}
                alt={pictures[currentPicture].alt}
                fill
              />
            </div>
            <div className={styles.decorator_1}>
              <Image
                src={pictures[currentPicture].decorator.src}
                alt={pictures[currentPicture].decorator.alt}
                width={50}
                height={50}
              />
            </div>
            <div className={styles.decorator_2}>
              <Image
                src={pictures[currentPicture].decorator.src}
                alt={pictures[currentPicture].decorator.alt}
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className={styles.welcome_profile_info}>
            <h1>Carlos Andres Mendoza Garcia</h1>
            <h2>Ingenierio de Sistemas y Computación</h2>
            <p>
              Desarrollo Full-Stack de aplicaciones y sitios web con innovación
              y arquitecturas diferentes
            </p>
            <div className={styles.contact}>
              <a
                href="https://github.com/CarlosMendozaGarcia"
                className={styles.contacts_button}
              >
                <Image src="/github.png" alt="github" width={50} height={50} />
                <p>Github</p>
              </a>
              <a
                href="https://www.linkedin.com/in/carlos-andres-mendoza-garcia-7023412b3/"
                className={styles.contacts_button}
              >
                <Image
                  src="/linkedin.png"
                  alt="github"
                  width={50}
                  height={50}
                />
                <p>Linkedin</p>
              </a>
              <a
                href="mailto:carlosmendozagarcia30@gmail.com"
                className={styles.contacts_button}
              >
                <Image src="/email.png" alt="github" width={50} height={50} />
                <p>Email</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="Technologies" className={styles.technologies_section}>
        <div className={styles.technologies_content}>
          <h1>Tecnologias</h1>
          <div className={styles.technologies_view}>
            <div className={styles.technologies_card}>
              <h2>Front-End</h2>
              {Frontend.map((language, index) => (
                <div key={index}>
                  <p>{language.name}</p>
                  <div
                    style={{
                      width: language.proficiency,
                      background: "#5A189A",
                      height: "10px",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className={styles.technologies_card}>
              <h2>Back-End</h2>
              {Backend.map((language, index) => (
                <div key={index}>
                  <p>{language.name}</p>
                  <div
                    style={{
                      width: language.proficiency,
                      background: "#5A189A",
                      height: "10px",
                    }}
                  >
                    {" "}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.technologies_card}>
              <h2>Cloud-Base de datos</h2>
              {CloudDB.map((language, index) => (
                <div key={index}>
                  <p>{language.name}</p>
                  <div
                    style={{
                      width: language.proficiency,
                      background: "#5A189A",
                      height: "10px",
                    }}
                  >
                    {" "}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.technologies_card}>
              <h2>Mix</h2>
              {Extra.map((language, index) => (
                <div key={index}>
                  <p>{language.name}</p>
                  <div
                    style={{
                      width: language.proficiency,
                      background: "#5A189A",
                      height: "10px",
                    }}
                  >
                    {" "}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="Projects" className={styles.projects_section}>
        <div className={styles.projects_content}>
          <h1> Proyectos</h1>
          <div className={styles.accordion}>
            <div className={styles.prev_project} onClick={prevProject}>
              <CardProject
                title={
                  Projects[
                    (currentProject - 1 + Projects.length) % Projects.length
                  ].title
                }
                img={
                  Projects[
                    (currentProject - 1 + Projects.length) % Projects.length
                  ].img
                }
                resume={
                  Projects[
                    (currentProject - 1 + Projects.length) % Projects.length
                  ].resume
                }
                state={
                  Projects[
                    (currentProject - 1 + Projects.length) % Projects.length
                  ].state
                }
              />
            </div>
            <a href={Projects[currentProject].url} className={styles.current_project}>
              <CardProject
                title={Projects[currentProject].title}
                img={Projects[currentProject].img}
                resume={Projects[currentProject].resume}
                state={Projects[currentProject].state}
              />
            </a>
            <div className={styles.next_project} onClick={nextProject}>
              <CardProject
                title={Projects[(currentProject + 1) % Projects.length].title}
                img={Projects[(currentProject + 1) % Projects.length].img}
                resume={Projects[(currentProject + 1) % Projects.length].resume}
                state={Projects[(currentProject + 1) % Projects.length].state}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
