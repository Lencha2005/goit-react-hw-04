import GalleryItem from "../GalleryItem/GalleryItem";
import styles from './GalleryList.module.css';


const GalleryList = ({images}) => {
  return (
    <ul className={styles.list}>
	{images.map((img) => 
    <li key={img.id} className={styles.item}>
    <GalleryItem urls={img.urls} alt_description={img.alt_description}/>
    </li>)}
    </ul>
  )
}

export default GalleryList