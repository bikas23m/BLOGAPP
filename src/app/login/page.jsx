import styles from './login.module.css'

const Login = ()=>{
    return (
        <div className={styles.container}>
           <div className={styles.wrapper}>
                <div className={styles.socialButton}>Sign in with Google</div>
                <div className={styles.socialButton}>Sign in with FaceBook</div>
                <div className={styles.socialButton}>Sign in with GitHub</div>
            </div> 
        </div>
    )
}

export default Login;