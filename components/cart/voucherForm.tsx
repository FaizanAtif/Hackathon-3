'use client';

import { useState } from 'react';

interface VoucherFormProps {
  onApply: (code: string) => void;
}

export const VoucherForm = ({ onApply }: VoucherFormProps) => {
  const [code, setCode] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApply(code);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="voucher"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Have a voucher or gift card?
        </label>
        <input
          type="text"
          id="voucher"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          placeholder="Enter code"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-slate-200 px-5 py-2.5 text-center text-sm font-medium text-black transition-colors hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700"
      >
        Apply Code
      </button>
    </form>
  );
};
