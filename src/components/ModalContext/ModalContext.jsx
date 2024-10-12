import Modal from 'react-modal';
import { createContext, useContext, useState } from 'react';

export const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({children}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [imgModal, setImgModal] = useState(null);

    const openModal = (imgData) => {
          setIsOpen(true);
          setImgModal(imgData)
          console.log(imgData);
        }
        
    const closeModal = () => {
          setIsOpen(false);
          setImgModal(null)
        }

    return (
            <ModalContext.Provider value={{ modalIsOpen, imgModal, openModal, closeModal }}>
              {children}
            </ModalContext.Provider>
          );
};

Modal.setAppElement('#root');