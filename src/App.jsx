import './App.css'
import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar';
import GalleryList from './components/GalleryList/GalleryList';
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


 const handleSubmit = (evt) => {
  evt.preventDefault();
  const form = evt.target;
  const value = form.elements.text.value.trim();
  setSearchValue(value);
  form.reset(); //очищуємо форму
  setImages([]); // Скидаємо зображення при новому пошуку
  setPage(1); // Скидаємо сторінку
 }

 const handleChangePage = () => {
  setPage(page + 1);
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
  <SearchBar onSubmit={handleSubmit}/>
  {loader && <Loader />}
  {images.length > 0 && <GalleryList images={images}/>}
  {error && <ErrorMessage/>}
  {images.length > 0 && page < totalPages && <LoadMoreBtn onClick={handleChangePage} />}
  <ImageModal />
  </div>
 )
}

export default App

