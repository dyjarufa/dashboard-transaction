import { parseISO } from 'date-fns';

export const parseDate = (dateStr: string): Date => {
  return parseISO(dateStr);
};
