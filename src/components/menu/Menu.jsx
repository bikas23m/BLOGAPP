import styles from "./Menu.module.css"
import Link from "next/link"
import Image from "next/image"

const MostPopular = () => {
    return (
        <>
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>
                            A potential new path for those subjected to tech layoffs?
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Joey Tribbiani</span>
                            <span className={styles.date}> - 17.03.2024</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>
                            Food
                        </span>
                        <h3 className={styles.postTitle}>
                            A potential new path for those subjected to tech layoffs?
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Joey Tribbiani</span>
                            <span className={styles.date}> - 17.03.2024</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.fashion}`}>
                            Fashion
                        </span>
                        <h3 className={styles.postTitle}>
                            A potential new path for those subjected to tech layoffs?
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Joey Tribbiani</span>
                            <span className={styles.date}> - 17.03.2024</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.coding}`}>
                            Coding
                        </span>
                        <h3 className={styles.postTitle}>
                            A potential new path for those subjected to tech layoffs?
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Joey Tribbiani</span>
                            <span className={styles.date}> - 17.03.2024</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>
                            A potential new path for those subjected to tech layoffs?
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Joey Tribbiani</span>
                            <span className={styles.date}> - 17.03.2024</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.culture}`}>
                            Culture
                        </span>
                        <h3 className={styles.postTitle}>
                            A potential new path for those subjected to tech layoffs?
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Joey Tribbiani</span>
                            <span className={styles.date}> - 17.03.2024</span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

const EditorsPick = () => {
    return (
        <>
            <h2 className={styles.subtitle}>Editors first choise</h2>
            <h1 className={styles.title}>Editors Pick</h1>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" fill alt="" className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>
                            A potential new path for those subjected to tech layoffs?
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Joey Tribbiani</span>
                            <span className={styles.date}> - 17.03.2024</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" fill alt="" className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>
                            Food
                        </span>
                        <h3 className={styles.postTitle}>
                            A potential new path for those subjected to tech layoffs?
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Joey Tribbiani</span>
                            <span className={styles.date}> - 17.03.2024</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" fill alt="" className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.fashion}`}>
                            Fashion
                        </span>
                        <h3 className={styles.postTitle}>
                            A potential new path for those subjected to tech layoffs?
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Joey Tribbiani</span>
                            <span className={styles.date}> - 17.03.2024</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" fill alt="" className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.coding}`}>
                            Coding
                        </span>
                        <h3 className={styles.postTitle}>
                            A potential new path for those subjected to tech layoffs?
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Joey Tribbiani</span>
                            <span className={styles.date}> - 17.03.2024</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" fill alt="" className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>
                            A potential new path for those subjected to tech layoffs?
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Joey Tribbiani</span>
                            <span className={styles.date}> - 17.03.2024</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" fill alt="" className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.culture}`}>
                            Culture
                        </span>
                        <h3 className={styles.postTitle}>
                            A potential new path for those subjected to tech layoffs?
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Joey Tribbiani</span>
                            <span className={styles.date}> - 17.03.2024</span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

const CatagoryList = () => {
    return (
        <>
            <h2 className={styles.subtitle}>Discover by topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <div className={styles.categoryList}>
                <Link
                    href="/blog?cat=fashion"
                    className={`${styles.categoryItem} ${styles.fashion}`}
                >
                    fashion
                </Link>
                <Link
                    href="/blog?cat=style"
                    className={`${styles.categoryItem} ${styles.style}`}
                >
                    Style
                </Link>
                <Link
                    href="/blog?cat=food"
                    className={`${styles.categoryItem} ${styles.food}`}
                >
                    food
                </Link>
                <Link
                    href="/blog?cat=codeing"
                    className={`${styles.categoryItem} ${styles.coding}`}
                >
                    codeing
                </Link>
                <Link
                    href="/blog?cat=travel"
                    className={`${styles.categoryItem} ${styles.travel}`}
                >
                    travel
                </Link>
                <Link
                    href="/blog?cat=culture"
                    className={`${styles.categoryItem} ${styles.culture}`}
                >
                    culture
                </Link>
            </div>
        </>
    );
}

const Menu = () => {
    return (
        <div className={styles.container}>

            <MostPopular />
            <CatagoryList/>
            <EditorsPick />

        </div>
    )
}



export default Menu;