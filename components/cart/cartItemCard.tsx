import Image from 'next/image';
import { CartItem } from '@/app/store/types/cart';

interface CartItemCardProps {
  item: CartItem;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export const CartItemCard = ({
  item,
  onQuantityChange,
  onRemoveItem,
}: CartItemCardProps) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800 md:p-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <div className="relative h-20 w-20 shrink-0 md:order-1">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 80px, 80px"
            className="rounded-md object-cover"
            priority
          />
        </div>
        
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => onQuantityChange(item.id, Math.max(1, item.quantity - 1))}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-gray-100 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
              aria-label="Decrease quantity"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value > 0) onQuantityChange(item.id, value);
              }}
              className="w-16 rounded-md border-gray-300 text-center dark:border-gray-600 dark:bg-gray-700"
              min="1"
              aria-label="Quantity"
            />
            
            <button
              type="button"
              onClick={() => onQuantityChange(item.id, item.quantity + 1)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-gray-100 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
              aria-label="Increase quantity"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          
          <div className="ml-4 text-end md:w-32">
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
        
        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <h3 className="text-base font-medium text-gray-900 hover:underline dark:text-white">
            {item.title}
          </h3>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => onRemoveItem(item.id)}
              className="inline-flex items-center text-sm font-medium text-red-600 transition-colors hover:text-red-700 hover:underline dark:text-red-500"
            >
              <svg
                className="mr-1.5 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
