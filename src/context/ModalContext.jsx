import { createContext, useContext, useState } from 'react';

export const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

export const ModalContextProvider = ({children}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [imgModal, setImgModal] = useState(null);
   

    const onOpenModal = (images) => {
          setIsOpen(true);
          setImgModal(images)
         
        }

    const onCloseModal = () => {
          setIsOpen(false);
          setImgModal(null)
        }

    return (
            <ModalContext.Provider value={{ modalIsOpen, imgModal, onOpenModal, onCloseModal }}>
              {children}
            </ModalContext.Provider>
          );
};
