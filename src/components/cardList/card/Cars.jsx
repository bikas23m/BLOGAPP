import { Fragment } from "react";
import styles from "./card.module.css"
import Image from "next/image"
import Link from "next/link"

const Card = ({ key, item }) => {

    return (
        <div className={styles.container} key={key}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>17.03.2014 - </span>
                    <span className={styles.category}>Culture</span>
                </div>
                <Link href="/"><h1>{item.title}</h1></Link>
                <p className={styles.desc}>A potential new path for those subjected to tech layoffs?</p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    );

}

export default Card