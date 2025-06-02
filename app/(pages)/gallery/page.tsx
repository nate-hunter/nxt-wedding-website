'use client';

import React, { useState, useEffect } from 'react';
import { ImageUploader } from './_components/ImageUploader';
import { ImageGrid } from './_components/ImageGrid';
import { saveToLocalStorage, loadFromLocalStorage } from './_utils/image-local-storage';
// import { Images } from 'lucide-react';

// import image1 from '../../../public/assets/images/nate+lisa-01.jpeg';
// import image2 from '../../../public/assets/images/nate+lisa-02.jpeg';
// import image3 from '../../../public/assets/images/nate+lisa-03.jpeg';
// import image4 from '../../../public/assets/images/nate+lisa-04.jpeg';
// import image5 from '../../../public/assets/images/nate+lisa-05.jpeg';
// import Image, { StaticImageData } from 'next/image';

export type ImageItem = {
  id: string;
  url: string;
  title: string;
  uploadDate: string;
};

const IMAGES: Array<ImageItem> = [
  // { id: 'image-1', url: '../../../public/assets/images/nate+lisa-01.jpeg', title: 'Image 1', uploadDate: '2025-02' },
];

export default function GalleryPage() {
  const [images, setImages] = useState<ImageItem[]>(IMAGES);

  useEffect(() => {
    const savedImages = loadFromLocalStorage();
    setImages(savedImages);
  }, []);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const newImage: ImageItem = {
        id: crypto.randomUUID(),
        url: reader.result as string,
        title: file.name,
        uploadDate: new Date().toLocaleDateString(),
      };

      const updatedImages = [...images, newImage];
      setImages(updatedImages);
      saveToLocalStorage(updatedImages);
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = (id: string) => {
    const updatedImages = images.filter((image) => image.id !== id);
    setImages(updatedImages);
    saveToLocalStorage(updatedImages);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-8">
          {/* <Images className="h-8 w-8 text-blue-500" /> */}
          {/* <p>images icon</p> */}
          {/* <h1 className="text-3xl font-bold text-gray-900">Local Image Gallery</h1> */}
          {/* <Image src={image1} alt="test image" width={155} height={48} className="object-cover" /> */}
          {/* <Image src={image1} alt="test image" width={48} height={48} className="w-full h-48 object-cover" /> */}
        </div>

        <div className="mb-8">
          <ImageUploader onImageUpload={handleImageUpload} />
        </div>

        {images.length > 0 ? (
          <ImageGrid images={images} onDelete={handleDelete} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No images yet. Upload some to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}
