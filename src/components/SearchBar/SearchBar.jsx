import { IoSearchSharp } from "react-icons/io5";
import styles from './SearchBar.module.css';
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({onSubmit}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const value = form.elements.text.value.trim();
    if(value === '' || value === null){
      toast.error('This is an invalid request. Try again!');
      return;
      } else {
        onSubmit(value)
        form.reset(); //очищуємо форму
      }
   }
    return (
        <header className={styles.header}>
        <form onSubmit={handleSubmit} className={styles.form}>
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
        <Toaster position="top-right"/>
      </header>
      )
}

export default SearchBar