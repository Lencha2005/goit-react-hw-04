import styles from './GalleryItem.module.css';

const GalleryItem = ({urls, alt_description}) => {
  return (
    <div>
        <img src={urls.small} alt={alt_description} className={styles.img}/>
    </div>
  )
}

export default GalleryItem