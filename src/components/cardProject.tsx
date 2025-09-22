import Image from "next/image";
import styles from "./cardProject.module.css";
import { ProjectStatus, ProjectStatusColors } from "../data/projectStatus";

type CardProjectProps = {
  title: string;
  img: string;
  resume: string;
  state: ProjectStatus;
};


export default function CardProject({
  title,
  img,
  resume,
  state,
}: CardProjectProps) {
  return (
    <div className={styles.projectcard}>
      <Image
        src={img}
        alt={title}
        height={250}
        width={300}
        style={{ borderRadius: "1rem" , objectFit:"cover"}}
      />
      <div className={styles.mainInfo}>
        <h2>{title}</h2>
        <label className={styles.tag} style={{color: ProjectStatusColors[state], borderColor:ProjectStatusColors[state],  }}>{state}</label>
      </div>
      <p>{resume}</p>
    </div>
  );
}
