// ** MUI Imports
// ** Type Import
import { LayoutProps } from '@core/layouts/types';
import Box from '@mui/material/Box';
// ** Config Import
import themeConfig from 'configs/themeConfig';

// ** Menu Components
import HorizontalNavItems from './HorizontalNavItems';

// ** Types
interface Props {
  settings: LayoutProps['settings'];
  horizontalNavItems: NonNullable<NonNullable<LayoutProps['horizontalLayoutProps']>['navMenu']>['navItems'];
}

const Navigation = (props: Props) => {
  return (
    <Box
      className="menu-content"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        '& > *': {
          '&:not(:last-child)': { mr: 2 },
          ...(themeConfig.menuTextTruncate && { maxWidth: 220 }),
        },
      }}
    >
      <HorizontalNavItems {...props} />
    </Box>
  );
};

export default Navigation;
