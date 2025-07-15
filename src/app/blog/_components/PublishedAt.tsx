import { CalendarDays } from 'lucide-react';
import type { FunctionComponent } from 'react';

type PublishedAtProps = {
  publishedAt: string;
};

export const PublishedAt: FunctionComponent<PublishedAtProps> = ({
  publishedAt,
}) => {
  return (
    <time
      className="flex items-center gap-1 text-sm opacity-60"
      dateTime={publishedAt}
    >
      <CalendarDays className="h-5 w-5" strokeWidth={1} />
      {new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }).format(new Date(publishedAt))}
    </time>
  );
};
