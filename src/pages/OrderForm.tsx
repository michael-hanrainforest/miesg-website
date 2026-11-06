import React, { useEffect } from 'react';

const BOOK_ORDER_URL = 'https://book.miesg.org/#order';

// Keep existing bookmarked order links working while orders move to the book site.
const OrderForm: React.FC = () => {
  useEffect(() => {
    window.location.replace(BOOK_ORDER_URL);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-center">
      <p>
        Taking you to the MiESG book order page.{' '}
        <a className="text-green-700 underline" href={BOOK_ORDER_URL}>Continue to book.miesg.org</a>
      </p>
    </div>
  );
};

export default OrderForm;
