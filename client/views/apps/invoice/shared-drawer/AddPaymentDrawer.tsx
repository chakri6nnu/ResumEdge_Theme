// ** React Imports
import Box, { BoxProps } from '@mui/material/Box';
// ** MUI Imports
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
// ** Third Party Imports

interface Props {
  open: boolean;
  toggle: () => void;
}

// const CustomInput = forwardRef(({ ...props }, ref: ForwardedRef<HTMLElement>) => {
//   return <TextField inputRef={ref} label="Payment Date" {...props} />;
// });

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default,
}));

const EditInvoiceDrawer = ({ open, toggle }: Props) => {
  // ** State

  return (
    <Drawer
      open={open}
      anchor="right"
      onClose={toggle}
      variant="temporary"
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: [300, 400] } }}
    ></Drawer>
  );
};

export default EditInvoiceDrawer;
