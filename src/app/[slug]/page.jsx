import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css"
import Image from "next/image"

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Some Title</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="auther image" fill className={styles.image} />
                        </div>
                        <div className={userTextContainer}>
                            <span className={styles.username}>Joe Tribbiani</span>
                            <span className={styles.date}>18.03.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="post image" fill className={styles.image} />
                </div>

            </div>
            <div className={styles.content}>
                <div className={styles.post}></div>
                <Menu />
            </div>
        </div>
    );
}

export default SinglePage;