import Modal from 'react-modal';
import { MdOutlineClose } from "react-icons/md";
import styles from './ImageModal.module.css';
import { useModal } from '../ModalContext/ModalContext';

const ImageModal = () => {
    const {modalIsOpen, closeModal, imgData} = useModal();
    console.log(imgData);
    return (
        
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Image Modal"
            className={styles.modal}
          >
            <button onClick={closeModal}><MdOutlineClose /></button>
            <div>
            <button onClick={closeModal}><MdOutlineClose /></button>
            console.log(imgData);
                <img src={imgData.urls.regular}/>
                {/* <p>{imgData.description}</p> */}
                {/* <p>Autor: {imgData.user.name}</p> */}
                {/* <p>Likes: {imgData.likes}</p> */}
            </div>
          </Modal>
      );
}

export default ImageModal