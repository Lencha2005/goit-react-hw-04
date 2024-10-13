import { useModal } from '../../context/ModalContext';
import styles from './ImageCard.module.css';

const GalleryItem = ({image}) => {
  const {onOpenModal} = useModal();
  
  return (
    <div onClick={() => onOpenModal(image)}>
        <img src={image.urls.small} alt={image.alt_description} className={styles.img}/>
    </div>
  );
}

export default GalleryItem