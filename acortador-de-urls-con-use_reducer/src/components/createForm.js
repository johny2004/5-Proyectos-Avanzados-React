import { useState } from 'react'
import styles from "./createForm.module.css";
export default function CreateForm({ dispatch }) {
 const [url, setUrl] = useState('')
    function handleChange(e) {
        const value = e.target.value;
        setUrl(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        if (url.trim()) {
            dispatch({ type: "ADD", data: url });
            setUrl('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Type a valid Url' value={url} onChange={handleChange} className={styles.input}/>{url}
           
        </form>
    );
}