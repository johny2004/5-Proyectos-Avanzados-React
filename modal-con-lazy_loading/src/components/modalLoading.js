import styles from "./modal.module.scss";

export default function ModalLoading() {
    return (
        // The container element is used to center the loading animation.
        <div className ={styles.loadingContainer}>
            <div className={styles.loadingView}>Loading...</div>
        </div>
    );
}
