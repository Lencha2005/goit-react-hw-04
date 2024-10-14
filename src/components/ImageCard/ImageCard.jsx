
import styles from './ImageCard.module.css';

const ImageCard = ({image, onOpenModal}) => {
  return (
        <img src={image.urls.small} alt={image.alt_description} className={styles.img} onClick={() => onOpenModal(image)}/>
  );
}

export default ImageCard