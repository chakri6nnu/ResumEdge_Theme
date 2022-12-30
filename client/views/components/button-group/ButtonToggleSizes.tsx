// ** React Imports
// ** MUI Imports
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MouseEvent, useState } from 'react';

// ** Icon Imports
import Icon from './../../../@core/components/icon';

const ButtonToggleSizes = () => {
  // ** State
  const [alignment, setAlignment] = useState<string | null>('left');

  const handleAlignment = (event: MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="demo-space-y">
      <div>
        <ToggleButtonGroup
          exclusive
          size="small"
          value={alignment}
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <Icon icon="mdi:format-align-left" />
          </ToggleButton>
          <ToggleButton value="center" aria-label="center aligned">
            <Icon icon="mdi:format-align-center" />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <Icon icon="mdi:format-align-right" />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            <Icon icon="mdi:format-align-justify" />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div>
        <ToggleButtonGroup exclusive value={alignment} onChange={handleAlignment} aria-label="text alignment">
          <ToggleButton value="left" aria-label="left aligned">
            <Icon icon="mdi:format-align-left" />
          </ToggleButton>
          <ToggleButton value="center" aria-label="center aligned">
            <Icon icon="mdi:format-align-center" />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <Icon icon="mdi:format-align-right" />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            <Icon icon="mdi:format-align-justify" />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div>
        <ToggleButtonGroup
          exclusive
          size="large"
          value={alignment}
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <Icon icon="mdi:format-align-left" />
          </ToggleButton>
          <ToggleButton value="center" aria-label="center aligned">
            <Icon icon="mdi:format-align-center" />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <Icon icon="mdi:format-align-right" />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            <Icon icon="mdi:format-align-justify" />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default ButtonToggleSizes;
