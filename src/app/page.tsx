import styles from './page.module.css'
import Image from "next/image";
import hero from '../../public/hero.png'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.desc}>turning your idia into reality.we bring togerther the teans from the global tech  industry</p>
        <button className={styles.btn} >See our Works</button>
      </div>
      <div className={styles.imgContainer}>

        <Image src={hero} alt="hero" className={styles.img}></Image>
      </div>
    </div>
  );
}
