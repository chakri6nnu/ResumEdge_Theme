// ** React Imports
// ** Axios Import
import axios from 'axios';
import { useEffect, useState } from 'react';

// ** Type Import
import { HorizontalNavItemsType } from './../../../@core/layouts/types';

const ServerSideNavItems = () => {
  // ** State
  const [menuItems, setMenuItems] = useState<HorizontalNavItemsType>([]);

  useEffect(() => {
    axios.get('/api/horizontal-nav/data').then((response) => {
      const menuArray = response.data;

      setMenuItems(menuArray);
    });
  }, []);

  return { menuItems };
};

export default ServerSideNavItems;
