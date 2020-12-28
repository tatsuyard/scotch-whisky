import React from "react";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";
import { useRouter } from "next/router"

const Brand: React.FC = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div className={styles.container}>
            <div>
                <Header />
            </div>
            <main className={styles.main}>
                <h1 className="title">Brand: {id}</h1>
                <p className="text-center text-teal-500 text-2xl py-4">This is an {id} detail Page.</p>
            </main>
        </div>
    )
};

export default Brand