import './App.css'
import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMesssage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchImages } from './api/unsplash-api';


function App() {
 const [images, setImages] = useState([]);
 const [searchValue, setSearchValue] = useState(null);
 const [loader, setLoader] = useState(false);
 const [error, setError] = useState(null);
 const [page, setPage] = useState(1);
 const [totalPages, setTotalPages] = useState(null);
 const [modalIsOpen, setIsOpen] = useState(false);
  const [imgModal, setImgModal] = useState(null);


 const handleSubmit = (value) => {
  setSearchValue(value);
  setImages([]); // Скидаємо зображення при новому пошуку
  setPage(1); // Скидаємо сторінку
//     }
 }

 const handleChangePage = () => {
  setPage(page + 1);
 }

 const onOpenModal = (images) => {
  setIsOpen(true);
  setImgModal(images)
 
}

const onCloseModal = () => {
  setIsOpen(false);
  setImgModal(null)
}
 
 useEffect(() => {
  const onFormSerchSubmit = async () => {
    if (!searchValue) return;

  try {
      setLoader(true);
      const response = await fetchImages(searchValue, page);
        if(images.length === 0){
          setImages(response.data.results);
        } else {
          setImages(prevImages => [...prevImages, ...response.data.results])
        }
      setTotalPages(response.data.total_pages);
}
  catch(error) {
    setError(error);
  } finally {
    setLoader(false)
  }
}
onFormSerchSubmit()
}, [searchValue, page])


useEffect(() => {
  if (page > 1) {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }
}, [images]);

 return (
  <div>
  <SearchBar onSubmit={handleSubmit} />
  {loader && <Loader />}
  {images.length > 0 && <ImageGallery images={images} onOpenModal={onOpenModal}/>}
  {error && <ErrorMessage/>}
  {images.length > 0 && page < totalPages && <LoadMoreBtn onClick={handleChangePage} />}
  {modalIsOpen && <ImageModal imgModal={imgModal} onCloseModal={onCloseModal} modalIsOpen={modalIsOpen}/>}
  </div>
 )
}

export default App

