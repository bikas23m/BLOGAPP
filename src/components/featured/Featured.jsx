import styles from './Featured.module.css'
import Image from 'next/image'
const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>What's up, internet world?</b> Discover my stories and creative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill  className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                        Yo web dev peeps!
                    </h1>
                    <p className={styles.postDescription}>
                        Let's talk full stack development, shall we?  This realm where frontend meets backend and magic happens.  I'm your friendly neighborhood coder, Bikas, and I've been knee-deep in this world for a while now, focusing on some pretty awesome tech: React.js, Next.js, Java, Spring Boot, and the ever-so-trendy microservices architecture.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured;