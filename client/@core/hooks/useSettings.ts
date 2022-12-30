import { SettingsContext, SettingsContextValue } from '@core/context/settingsContext';
import { useContext } from 'react';

export const useSettings = (): SettingsContextValue => useContext(SettingsContext);
