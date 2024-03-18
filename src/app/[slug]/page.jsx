import Menu from "../../components/menu/Menu";
import Comments from "../../components/comments/Comments.jsx";
import styles from "./singlePage.module.css"
import Image from "next/image"

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>The Infinite Shades of Saudade Blue</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="auther image" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Maria Garcia</span>
                            <span className={styles.date}>Feb 12, 2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="post image" fill className={styles.image} />
                </div>

            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            It’s difficult to think of Portugal, and not think of “saudade”.

                            It’s one of those non-translate-able words. A word that captures the essence of a place. Its core feeling.

                            To know the word is to experience it for yourself.

                            Loosely described, in case this is your first time hearing the word, saudade is a melancholic feeling of longing or nostalgia.

                            Like a warm afternoon in soft light. Like thinking of someone you love. While its melancholic in nature, there is something profoundly beautiful in its center. Like a romantic divinity to the sorrow of it all.

                            It’s hard to explain. But you know it when you feel it.

                            You know it when you travel around Portugal. From coast to coast. It’s in the light.

                            And it’s in the color blue.

                        </p>
                    </div>
                    <div className={styles.comments}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
}

export default SinglePage;