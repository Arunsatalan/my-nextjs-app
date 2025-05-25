import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import img from "../../../public/pexels-vanessa-garcia-6326025.jpg";
import Button from "../../components/Button/Button";

const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={img} alt="Man typing on laptop" fill={true} className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storyteller</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award-winning digital experiences
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            We are a passionate team of creative professionals dedicated to crafting innovative digital solutions that tell compelling stories. 
            Our expertise spans web development, design, and digital marketing — all aimed at creating immersive and meaningful experiences for our clients and their audiences.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What defines us?</h1>
          <p className={styles.desc}>
            We value collaboration, creativity, and excellence in everything we do. Our approach combines technical skill with a deep understanding of user needs, ensuring that every project delivers both impact and lasting value. 
            Driven by curiosity and innovation, we continuously push boundaries to bring fresh ideas to life.
          </p>
          <Button url="contacts" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default about;
