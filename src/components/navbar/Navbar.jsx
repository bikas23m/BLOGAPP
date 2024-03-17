"use client";

import React from "react";
import styles from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AuthLink from "../authLink/AuthLink";
import ThemeToggle from "../themeToggle/ThemeToggle";

function NavBarLinks() {
    return (
        <>
                
                <div className={styles.links}>
                <ThemeToggle />
                <Link href='/' className={styles.link}>Homepage</Link>
                <Link href='/' className={styles.link}>Contact</Link>
                <Link href='/' className={styles.link}>About</Link>
                <AuthLink />
                </div>
                
        </>
    );
}

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src='/facebook.png' alt="facebook" width={24} height={24} />
                <Image src='/instagram.png' alt="instagram" width={24} height={24} />
                <Image src='/x.png' alt="x" width={24} height={24} />
                <Image src='/youtube.png' alt="youtube" width={24} height={24} />
            </div>
            <div className={styles.logo}>Blogger</div>
            <NavBarLinks />
        </div>
    )
}

export default Navbar;