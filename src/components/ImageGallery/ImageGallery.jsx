import ImageCard from "../ImageCard/ImageCard";
import styles from './ImageGallery.module.css';

const ImageGallery = ({images, onOpenModal}) => {
  return (
    <ul className={styles.list}>
	{images.map((image) => 
    <li key={image.id} className={styles.item}>
    <ImageCard
    image={image}
    onOpenModal={onOpenModal}
    />
    </li>)}
    </ul>
  )
}

export default ImageGallery