import ImageCard from "../ImageCard/ImageCard";
import styles from './ImageGallery.module.css';

const GalleryList = ({images}) => {
  return (
    <ul className={styles.list}>
	{images.map((image) => 
    <li key={image.id} className={styles.item}>
    <ImageCard
    image={image}
    />
    </li>)}
    </ul>
  )
}

export default GalleryList