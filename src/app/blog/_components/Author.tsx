import { User } from 'lucide-react';
import type { FunctionComponent } from 'react';

export const Author: FunctionComponent = () => {
  return (
    <div>
      <span className="flex items-center gap-1 text-sm opacity-60">
        <User className="h-5 w-5" strokeWidth={1} />
        João Silva
      </span>
    </div>
  );
};
