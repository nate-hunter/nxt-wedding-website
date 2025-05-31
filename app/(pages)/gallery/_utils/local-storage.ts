import { type ImageItem } from '../page';

export const saveToLocalStorage = (images: ImageItem[]): void => {
  localStorage.setItem('gallery-images', JSON.stringify(images));
};

export const loadFromLocalStorage = (): ImageItem[] => {
  const saved = localStorage.getItem('gallery-images');
  return saved ? JSON.parse(saved) : [];
};
