// ** React Imports
// ** Types
import { ThemeColor } from '@core/layouts/types';
import { ReactNode } from 'react';

export type CardStatsHorizontalProps = {
  title: string;
  stats: string;
  icon: ReactNode;
  color?: ThemeColor;
  trendNumber: string;
  trend?: 'positive' | 'negative';
};

export type CardStatsVerticalProps = {
  title: string;
  stats: string;
  icon: ReactNode;
  chipText: string;
  color?: ThemeColor;
  trendNumber: string;
  trend?: 'positive' | 'negative';
};

export type CardStatsCharacterProps = {
  src: string;
  title: string;
  stats: string;
  chipText: string;
  trendNumber: string;
  chipColor?: ThemeColor;
  trend?: 'positive' | 'negative';
};
