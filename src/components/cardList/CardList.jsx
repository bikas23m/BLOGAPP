import Pagination from '../pagination/Pagination';
import styles from './CardList.module.css'
import Card from './card/Cars.jsx'

const getData = async (page) => {
    console.log(page);
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
        cache: 'no-cache',
    });

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
}

const CardList = async ({ page }) => {

    const data = await getData(page);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Recent Posts
            </h1>
            <div className={styles.posts}>
                <div className={styles.posts}>
                    {data?.map(
                        (item) => (
                            <Card item = {item} key = {item._id} />
                        )
                    )}
                </div>
            </div>
            <Pagination />
        </div>
    )
}

export default CardList;