import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt='blog logo' width={50} height={50} />
                    <h1 className={styles.logoText}>Blogger</h1>
                </div>
                <p className={styles.desc}>
                    Software engineer by day, adventurer by heart, this blog explores the intersection of tech and travel. Join me as I share coding insights and travel escapes, proving there's a wild world out there for everyone.
                </p>
                <div className={styles.icons}>
                    <Image src='/facebook.png' alt="facebook" width={24} height={24} />
                    <Image src='/instagram.png' alt="instagram" width={24} height={24} />
                    <Image src='/x.png' alt="x" width={24} height={24} />
                    <Image src='/youtube.png' alt="youtube" width={24} height={24} />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/">Style</Link>
                    <Link href="/">Fashion</Link>
                    <Link href="/">Coding</Link>
                    <Link href="/">Travel</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">X</Link>
                    <Link href="/">LinkedIn</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;