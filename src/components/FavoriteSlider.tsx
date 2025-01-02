import React from 'react';
import { Event } from '../types/event';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FavoriteSliderProps {
  favorites: Event[];
  onToggleFavorite: (eventId: string) => void;
}

export const FavoriteSlider: React.FC<FavoriteSliderProps> = ({ favorites, onToggleFavorite }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % favorites.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + favorites.length) % favorites.length);
  };

  if (favorites.length === 0) {
    return (
      <div className="bg-gray-100 p-6 rounded-lg text-center">
        <p className="text-gray-600">No favorite events yet</p>
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Favorite Events</h2>
      <div className="relative">
        <img
          src={favorites[currentIndex].imageUrl}
          alt={favorites[currentIndex].title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 rounded-b-lg">
          <h3 className="text-white text-lg font-semibold">{favorites[currentIndex].title}</h3>
          <p className="text-white/80">{favorites[currentIndex].date}</p>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};