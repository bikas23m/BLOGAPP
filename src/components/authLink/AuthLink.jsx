"use client"

import Link from 'next/link'
import styles from './AuthLink.module.css'
import { useState } from 'react'

//return user options based on authentication status
function UserOptions({ isAuthenticated }) {
    if (!isAuthenticated) {
        return <Link href="/login" className={styles.link}>Login</Link>
    }
    return (
        <>
            <Link href="/write" className={styles.link}>Write</Link>
            <span className={styles.link}>logout</span>
        </>
    )
}

//return jsx based on user authenticatin status
const AuthLink = () => {

    const [open, setOpen] = useState(false);

    //tamporary
    const isAuthenticated = true;
    return (
        <>
            <UserOptions
                isAuthenticated={isAuthenticated}
            />
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {
                open && (
                    <div className={styles.responsiveMenu}>
                        <Link href='/'>Homepage</Link>
                        <Link href='/'>Contact</Link>
                        <Link href='/'>About</Link>
                        {
                            !isAuthenticated ? (
                                <Link href="/login">Login</Link>
                            ) :
                            (<>
                                <Link href="/write">Write</Link>
                                <span>logout</span>
                            </>)
                        }
                    </div>
                )
            }
        </>
    )
}

export default AuthLink;