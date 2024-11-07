import React, { useState } from 'react';
import { X, ThumbsUp } from 'lucide-react';

interface PreviewContainerProps {
  children: React.ReactNode;
  onClose: () => void;
  onCustomize: () => void;
}

export function PreviewContainer({ children, onClose, onCustomize }: PreviewContainerProps) {
  // Estado para controlar el "like" en el botón ThumbsUp
  const [liked, setLiked] = useState(false);

  // Función para manejar el clic en ThumbsUp y cambiar el estado
  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center z-50">
      {/* Barra de controles */}
      <div className="w-full bg-white/10 backdrop-blur-sm py-4 px-6 flex items-center justify-between sticky top-0 z-50">
        <div className="flex-1">
          {/* Espacio vacío para la alineación */}
        </div>
        
        <div className="flex items-center gap-4">
          {/* Botón Customize */}
          <button
            onClick={onCustomize}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Customize
          </button>

          {/* Botón ThumbsUp que cambia de color al hacer clic */}
          <button
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors group"
            onClick={handleLikeClick}
          >
            <ThumbsUp
              className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                liked ? 'text-green-500 fill-green-500' : 'text-white fill-none'
              }`}
            />
          </button>
        </div>

        <div className="flex-1 flex justify-end">
          {/* Botón Close */}
          <button
            onClick={onClose}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>

      {/* Contenido del template */}
      <div className="flex-1 w-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
