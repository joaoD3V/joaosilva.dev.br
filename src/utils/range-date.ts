import type { Dayjs } from 'dayjs';

export const rangeDate = (start: Dayjs, end: Dayjs) => {
  const diffYears = end.diff(start, 'year');
  const diffMonths = end.diff(start, 'month');
  const remainingMonths = diffMonths - diffYears * 12;
  const yearDurationMessage = diffYears
    ? `${diffYears} ano${diffYears !== 1 ? 's' : ''} e`
    : '';
  const monthDurationMessage = `${remainingMonths} ${remainingMonths !== 1 ? 'meses' : 'mês'}`;

  const durationMessage = yearDurationMessage.concat(
    ` ${monthDurationMessage}`
  );

  return durationMessage;
};
