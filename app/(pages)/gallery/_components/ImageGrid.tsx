import React from 'react';
// import { Trash2 } from 'lucide-react';
import { ImageItem } from '../page';
import Image from 'next/image';
// import { ImageItem } from '../types';

import image1 from '../../../../public/assets/images/nate+lisa-01.jpeg';

interface ImageGridProps {
  images: ImageItem[];
  onDelete: (id: string) => void;
}

export function ImageGrid({ images, onDelete }: ImageGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div key={image.id} className="relative group rounded-lg overflow-hidden shadow-md">
          {/* <img src={image.url} alt={image.title} className="w-full h-48 object-cover" /> */}
          {/* <Image src={image.url} alt={image.title} width={48} height={48} className="w-full h-48 object-cover" /> */}
          <Image src={image1} alt={image.title} width={155} height={48} className="w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
              <p className="text-sm font-medium">{image.title}</p>
              <p className="text-xs opacity-75">{image.uploadDate}</p>
              <button
                onClick={() => onDelete(image.id)}
                className="absolute top-2 right-2 p-2 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
              >
                {/* <Trash2 className="h-4 w-4 text-white" /> */}
                <span className="h-4 w-4 text-white">Trash Icon</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
