"use client"

import { signIn, useSession } from 'next-auth/react';
import styles from './login.module.css'
import { useRouter } from 'next/navigation';

const Login = () => {

    const { data: session, status } = useSession()

    const router = useRouter();

    if (status === "loading") {
        return <div className={styles.loading}>Hang on there...</div>
    }

    if (status === "authenticated") {
        router.push("/")
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.socialButton} onClick={() => signIn('google')}>Sign in with Google</div>
                <div className={styles.socialButton}>Sign in with FaceBook</div>
                <div className={styles.socialButton}>Sign in with GitHub</div>
            </div>
        </div>
    )
}

export default Login;