'use client'
import { useCallback } from 'react';
import { useAppSelector } from '@/app/store/hooks/useAppSelector';
import { useAppDispatch } from '@/app/store/hooks/useAppDispatch';
import { removeItem, updateQuantity } from '@/app/store/feature/cart';
import { CartItemCard } from '@/components/cart/cartItemCard';
import { CartSummary } from '@/components/cart/cartSummary';
import { VoucherForm } from '@/components/cart/voucherForm';
import Link from 'next/link';

export function CartClient() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const handleRemoveItem = useCallback((id: string) => {
    dispatch(removeItem(id));
  }, [dispatch]);

  const handleQuantityChange = useCallback((id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  }, [dispatch]);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Shopping Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
            </h2>
            
            <div className="mt-6 space-y-4">
              {cartItems.map((item) => (
                <CartItemCard
                  key={item.id}
                  item={item}
                  onQuantityChange={handleQuantityChange}
                  onRemoveItem={handleRemoveItem}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-8 lg:col-span-4 lg:mt-0">
            <div className="space-y-6 sticky top-4">
              <CartSummary subtotal={subtotal} />
              
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <VoucherForm onApply={console.log} />
              </div>
              
              <div className="space-y-4">
                <Link
                  href="/checkout"
                  className="block w-full rounded-lg bg-red-600 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300"
                >
                  Proceed to Checkout
                </Link>
                
                <Link
                  href="/shop"
                  className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <span>Continue Shopping</span>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}