import type { FunctionComponent, PropsWithChildren } from 'react';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { dayjs } from '@/lib/dayjs';
import { rangeDate } from '@/utils/range-date';

export type WorkExperience = {
  startDateStr: string;
  endDateStr?: string;
  company: string;
  workType: string;
  role: string;
  mainStacks: string[];
};

type AccordionDetailItemProps = PropsWithChildren<{
  detail: WorkExperience;
  hastTopBorder?: boolean;
}>;

export const AccordionDetailItem: FunctionComponent<
  AccordionDetailItemProps
> = ({ detail, hastTopBorder = false, children }) => {
  const startDate = dayjs(detail.startDateStr, 'DD/MM/YYYY');
  const end = detail.endDateStr ?? dayjs().format('DD/MM/YYYY');
  const endDate = dayjs(end, 'DD/MM/YYYY');
  const startYear = startDate.year();
  const endYear = endDate.year();
  const durationMessage = rangeDate(startDate, endDate);

  return (
    <AccordionItem className="border-b-0" value={detail.company}>
      <AccordionTrigger
        className={`!no-underline cursor-pointer items-center rounded-none border-accent-light ${hastTopBorder && 'border-t-[0.5px]'} max-w-full border-b-[0.5px] px-6 py-3 text-xl transition hover:bg-text hover:text-main`}
      >
        <div className="flex w-[100px] flex-col gap-2 lg:w-[200px] lg:gap-px">
          <p className="font-medium text-sm lg:text-lg">
            {startYear} - {detail.endDateStr ? endYear : 'Atualmente'}
          </p>
          <span className="font-medium text-accent-light text-xs lg:text-sm">
            {durationMessage}
          </span>
        </div>
        <div className="flex w-full flex-1 flex-col">
          <span className="font-medium text-sm lg:text-lg">
            {detail.company}
          </span>
          <span className="font-medium text-accent-light text-xs lg:text-sm">
            {detail.workType}
          </span>
        </div>
        <div className="hidden items-center justify-end gap-2 text-sm lg:flex lg:flex-1 lg:text-lg">
          <span>{detail.role}</span>{' '}
          {detail.mainStacks.length > 0 && (
            <>
              |
              <span className="font-normal font-title">
                {detail.mainStacks.join(' & ')}
              </span>
            </>
          )}
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-6 py-3 text-base">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
};
