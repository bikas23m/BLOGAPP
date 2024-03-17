import { Fragment } from "react";
import styles from "./card.module.css"
import Image from "next/image"
import Link from "next/link"

const Card = () => {

    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image src = "/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.detail}>
                        <span className={styles.date}>17.03.2014 - </span>
                        <span className={styles.category}>Culture</span>
                    </div>
                    <Link href="/"><h1>What I Learned in my First 3 Months as a Freelance Data Scientist</h1></Link>
                    <p className={styles.desc}>A potential new path for those subjected to tech layoffs?</p>
                    <Link href="/" className={styles.link}>Read More</Link>
                </div>
            </div>
        </Fragment>
    );

}

export default Card