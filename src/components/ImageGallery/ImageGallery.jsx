import css from './ImageGallery.module.css';
export function ImageGallery({ children }) {
  return <ul className={css.gallery}>{children}</ul>;
}
