"use client"

import Link from 'next/link'
import styles from './AuthLink.module.css'
import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'

//return user options based on authentication status
function UserOptions({ status }) {
    if (status !== 'authenticated' ) {
        return <Link href="/login" className={styles.link}>Login</Link>
    }
    return (
        <>
            <Link href="/write" className={styles.link}>Write</Link>
            <span className={styles.link} onClick={signOut}>logout</span>
        </>
    )
}

//return jsx based on user authenticatin status
const AuthLink = () => {

    const { status } = useSession();

    const [open, setOpen] = useState(false);

    return (
        <>
            <UserOptions
                status={ status }
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
                            (status !== 'authenticated' ) ? (
                                <Link href="/login">Login</Link>
                            ) :
                            (<>
                                <Link href="/write">Write</Link>
                                <span onClick={signOut} style={{cursor:"pointer"}}>logout</span>
                            </>)
                        }
                    </div>
                )
            }
        </>
    )
}

export default AuthLink;