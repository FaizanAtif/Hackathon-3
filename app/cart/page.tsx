import { Metadata } from 'next';
import { CartClient } from '@/app/cart/cartClient';

export const metadata: Metadata = {
  title: 'Shopping Cart | Your Store Name',
  description: 'View and manage items in your shopping cart',
  openGraph: {
    title: 'Shopping Cart | Your Store Name',
    description: 'View and manage items in your shopping cart',
    type: 'website',
  },
};

export default function CartPage() {
  return (
    <>
      <h1 className="sr-only">Shopping Cart</h1>
      <CartClient />
    </>
  );
}