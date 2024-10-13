import GalleryItem from "../GalleryItem/GalleryItem";
import styles from './GalleryList.module.css';

const GalleryList = ({images}) => {
  return (
    <ul className={styles.list}>
	{images.map((image) => 
    <li key={image.id} className={styles.item}>
    <GalleryItem 
    image={image}
    />
    </li>)}
    </ul>
  )
}

export default GalleryList