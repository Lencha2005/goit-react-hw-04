import Modal from 'react-modal';
import { MdOutlineClose } from "react-icons/md";
import styles from './ImageModal.module.css';

const ImageModal = ({modalIsOpen, onCloseModal, imgModal}) => {
    return (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={onCloseModal}
            contentLabel="Image Modal"
            className={styles.modal}
          >
            
            {imgModal && 
            <div className={styles.wrap} onClick={onCloseModal}>
                <button onClick={onCloseModal} className={styles.btn}><MdOutlineClose /></button>
                <img src={imgModal.urls.regular} alt={imgModal.alt_description} className={styles.img}/>
                <div className={styles.wrapper}>
                <p className={styles.text}>Photo: {imgModal.alt_description}</p>
                <p className={styles.text}>Autor: {imgModal.user.name}</p>
                <p className={styles.text}>Likes: {imgModal.likes}</p>
                </div>
            </div>}
          </Modal>
      );
}
Modal.setAppElement('#root');

export default ImageModal