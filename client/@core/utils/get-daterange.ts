import { addDays, differenceInDays, format } from 'date-fns';

export const getDateRange = (startDate: Date, endDate: Date) => {
  const days: any = differenceInDays(endDate, startDate);
  const data: any = Array(days + 1).keys();
  return [...data].map((i) => format(addDays(startDate, i), 'MM/dd/yyyy'));
};
