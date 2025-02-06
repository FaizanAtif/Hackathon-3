interface CartSummaryProps {
    subtotal: number;
    savings?: number;
    tax?: number;
  }
  
  export const CartSummary = ({ subtotal, savings = 0, tax = 0 }: CartSummaryProps) => {
    const total = subtotal - savings + tax;
    
    return (
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Order Summary
        </h2>
        
        <div className="space-y-4">
          <dl className="space-y-2">
            <div className="flex justify-between">
              <dt className="text-gray-600 dark:text-gray-400">Subtotal</dt>
              <dd className="font-medium">${subtotal.toFixed(2)}</dd>
            </div>
            
            {savings > 0 && (
              <div className="flex justify-between">
                <dt className="text-gray-600 dark:text-gray-400">Savings</dt>
                <dd className="font-medium text-green-600">-${savings.toFixed(2)}</dd>
              </div>
            )}
            
            <div className="flex justify-between">
              <dt className="text-gray-600 dark:text-gray-400">Tax</dt>
              <dd className="font-medium">${tax.toFixed(2)}</dd>
            </div>
          </dl>
          
          <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
            <div className="flex justify-between">
              <dt className="text-lg font-bold">Total</dt>
              <dd className="text-lg font-bold">${total.toFixed(2)}</dd>
            </div>
          </div>
        </div>
      </div>
    );
  };