import styles from './comments.module.css';
import Link from 'next/link';
import Image from 'next/image';

const CommentsAre = () => {
    return (
        <div className={styles.write}>
            <textarea name="comment" id="1" placeholder="write your comment..." className={styles.input} />
            <button className={styles.button}>Send</button>
        </div>
    )
}

const SingleComment = () => {

    return (
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                <div className={styles.userInfo}>
                    <span className={styles.username}>John Week</span>
                    <span className={styles.date}>12 Feb, 2024</span>
                </div>
            </div>
            <p className={styles.desc}>
                259 drafts here! at least 1/3 are me quickly testing various aspects of our product functionality, but several are stories i actually worked on for a while and never published... i gotta get back to those!
            </p>
        </div>
    );
}

const isAuthenticated = true;

const Comments = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {
                isAuthenticated ? (
                    <CommentsAre />
                ) : (
                    <Link href="/login">Login to write comment</Link>
                )
            }
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Week</span>
                            <span className={styles.date}>12 Feb, 2024</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        259 drafts here! at least 1/3 are me quickly testing various aspects of our product functionality, but several are stories i actually worked on for a while and never published... i gotta get back to those!
                    </p>
                </div>
                <SingleComment />
                <SingleComment />
                <SingleComment />
                <SingleComment />
                <SingleComment />
            </div>
        </div>
    );
}

export default Comments;