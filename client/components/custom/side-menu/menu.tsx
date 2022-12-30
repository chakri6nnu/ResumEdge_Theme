import { Drawer, List, Toolbar } from '@mui/material';
import Divider from '@mui/material/Divider';
import React, { useState } from 'react';

import Logo from '@/components/shared/Logo';
import { useAppSelector } from '@/store/hooks';

import { mainListItems, secondaryListItems } from './listItems';
type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Menu = (props: any) => {
  const [open, setOpen] = useState(true);
  const theme = useAppSelector((state) => state.build.theme);

  // const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
  //   if (
  //     event.type === 'keydown' &&
  //     ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
  //   ) {
  //     return;
  //   }

  //   setOpen(!open);
  // };

  const handleTriggerEdit = (e: any) => {
    props.handleTriggerEdit(e.target.innerText);
  };
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
          fontSize: '20px',
        }}
      >
        <div>
          <Logo size={256} logo={theme === 'light' ? '/images/logos/dark_logo.png' : '/images/logos/light_logo.png'} />
        </div>
      </Toolbar>
      <Divider />
      <List style={{ width: '9.7vw' }} component="div" onClick={handleTriggerEdit}>
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        {secondaryListItems}
      </List>
    </Drawer>
  );
};

export default Menu;
