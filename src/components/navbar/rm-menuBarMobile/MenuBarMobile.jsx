import { useState } from "react"
import styles from "./menuBarMobile.module.css"
import Link from "next/link"
import AuthLink from "@/components/authLink/AuthLink";

export default function MenuBarMobile() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {
                open && (
                    <div className={styles.links}>
                        <Link href='/'>Home</Link>
                        <Link href='/'>Contact</Link>
                        <Link href='/'>About</Link>
                        <AuthLink />
                    </div>
                )
            }
        </>
    )
}