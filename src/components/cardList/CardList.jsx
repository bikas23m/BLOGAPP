import Pagination from '../pagination/Pagination';
import styles from './CardList.module.css'

const CardList = () => {
    return (
        <div className={styles.container}>
            Card List Component!
            <Pagination />
        </div>
    )
}

export default CardList;