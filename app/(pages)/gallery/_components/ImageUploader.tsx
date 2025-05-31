import React, { useState } from 'react';
// import { Upload } from 'lucide-react';

interface ImageUploaderProps {
  onImageUpload: (image: File) => void;
}

export function ImageUploader({ onImageUpload }: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files?.[0]) {
      onImageUpload(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.[0]) {
      onImageUpload(files[0]);
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center ${
        isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      {/* <Upload className="mx-auto h-12 w-12 text-gray-400" /> */}
      <span className="mx-auto h-12 w-12 text-gray-400">Upload Icon</span>
      <p className="mt-2 text-sm text-gray-600">Drag and drop an image, or</p>
      <label className="mt-2 cursor-pointer">
        <span className="text-blue-500 hover:text-blue-600">browse</span>
        <input type="file" className="hidden" accept="image/*" onChange={handleFileInput} />
      </label>
    </div>
  );
}
