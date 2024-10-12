import { useModal } from '../ModalContext/ModalContext';
import styles from './GalleryItem.module.css';

const GalleryItem = ({urls, alt_description, user, likes, id}) => {
  const {openModal} = useModal();
  const imgData = {urls, alt_description, user, likes, id };
  console.log(imgData);
  return (
    <div onClick={() => openModal(imgData)}>
        <img src={urls.small} alt={alt_description} className={styles.img} />
    </div>
  )
}

export default GalleryItem