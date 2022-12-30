// ** MUI Imports
// ** Types
import { ThemeColor } from '@core/layouts/types';
import { AvatarProps } from '@mui/material/Avatar';

export type CustomAvatarProps = AvatarProps & {
  color?: ThemeColor;
  skin?: 'filled' | 'light' | 'light-static';
};
