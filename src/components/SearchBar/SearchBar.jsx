import { IoSearchSharp } from "react-icons/io5";
import styles from './SearchBar.module.css';

const SearchBar = ({onSubmit}) => {

    return (
        <header className={styles.header}>
        <form onSubmit={onSubmit} className={styles.form}>
          <input
            type="text"
            name='text'
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={styles.input}
          />
          <button type="submit" className={styles.btn}><IoSearchSharp /></button>
        </form>
      </header>
          )



}

export default SearchBar