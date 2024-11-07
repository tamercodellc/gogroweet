import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  onUpload: (url: string) => void;
  className?: string;
}

export function ImageUpload({ onUpload, className = '' }: ImageUploadProps) {
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        // In a real app, you would upload to a server/CDN here
        const reader = new FileReader();
        reader.onload = () => {
          onUpload(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    [onUpload]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file && file.type.startsWith('image/')) {
        // In a real app, you would upload to a server/CDN here
        const reader = new FileReader();
        reader.onload = () => {
          onUpload(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    [onUpload]
  );

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className={`border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-500 transition-colors ${className}`}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
        id="image-upload"
      />
      <label
        htmlFor="image-upload"
        className="cursor-pointer flex flex-col items-center"
      >
        <Upload className="w-8 h-8 text-gray-400" />
        <span className="mt-2 text-sm text-gray-600">
          Drag and drop an image, or click to select
        </span>
      </label>
    </div>
  );
}