import React from 'react';
import Header from './Header';
import RecurringInvoiceGrid from './RecurringInvoiceGrid';

function RecurringInvoices() {
  return (
    <>
      <Header title='Recurring Invoices' />
      <div className='invBody'>
        <div className='gridDiv'>
          <RecurringInvoiceGrid />
        </div>
      </div>
    </>
  )
}

export default RecurringInvoices;

