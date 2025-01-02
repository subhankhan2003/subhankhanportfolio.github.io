import React from 'react';
import { Heart } from 'lucide-react';
import { Event } from '../types/event';

interface EventCardProps {
  event: Event;
  isFavorite: boolean;
  onToggleFavorite: (eventId: string) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, isFavorite, onToggleFavorite }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={event.imageUrl} 
        alt={event.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold">{event.title}</h3>
          <button 
            onClick={() => onToggleFavorite(event.id)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Heart 
              className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
            />
          </button>
        </div>
        <p className="text-gray-600 mt-2">{event.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500">{event.location}</span>
          <span className="text-sm font-medium text-indigo-600">{event.date}</span>
        </div>
      </div>
    </div>
  );
};