import { Clock } from 'lucide-react';
import type { FunctionComponent } from 'react';

type ReadTimeProps = {
  readTime: number;
};

export const ReadTime: FunctionComponent<ReadTimeProps> = ({ readTime }) => {
  return (
    <span className="flex items-center gap-1 text-sm opacity-60">
      <Clock className="h-5 w-5" strokeWidth={1} />
      {readTime} min. de leitura
    </span>
  );
};
