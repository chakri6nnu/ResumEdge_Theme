// ** MUI Imports
// ** Util Import
import { hexToRGBA } from '@core/utils/hex-to-rgba';
import { Theme } from '@mui/material/styles';

const Tooltip = (theme: Theme) => {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 6,
          lineHeight: 1.455,
          backgroundColor: hexToRGBA(theme.palette.customColors.tooltipBg, 0.9),
        },
        arrow: {
          color: hexToRGBA(theme.palette.customColors.tooltipBg, 0.9),
        },
      },
    },
  };
};

export default Tooltip;
