// ** Icon Imports
// ** Custom Components Imports
// ** Type Import
import { Settings } from '@core/context/settingsContext';
// ** Third Party Import

interface Props {
  settings: Settings;
  saveSettings: (values: Settings) => void;
}

const LanguageDropdown = ({ settings, saveSettings }: Props) => {
  return <></>;
};

export default LanguageDropdown;
