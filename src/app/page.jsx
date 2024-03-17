import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import Link from 'next/link'
import CatagoryList from "@/components/catagoryList/CatagoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CatagoryList />
      <div className={styles.content}>
      <CardList />
      </div>
      <Menu />
    </div>
  );
}
