import Featured from "../components/featured/Featured";
import styles from "./homepage.module.css";
import Link from 'next/link'
import CategoryList from "../components/catagoryList/CategoryList";
import CardList from "../components/cardList/CardList";
import Menu from "../components/menu/Menu";

export default function Home({searchParams}) {

  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page = {page} />
        <Menu />
      </div>
    </div>
  );
}
