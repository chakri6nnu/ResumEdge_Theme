// ** Demo Components Imports
// ** Styled Component
import DatePickerWrapper from './../../../../@core/styles/libs/react-datepicker';
import Edit from './../../../../views/apps/invoice/edit/Edit';

const InvoiceEdit = () => {
  return (
    <DatePickerWrapper sx={{ '& .react-datepicker-wrapper': { width: 'auto' } }}>
      <Edit id="4987" />
    </DatePickerWrapper>
  );
};

export default InvoiceEdit;
