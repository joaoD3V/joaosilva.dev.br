import type { FunctionComponent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type StackProps = {
  title: string;
  tools: string[];
  isDark?: boolean;
};

export const Stack: FunctionComponent<StackProps> = ({
  title,
  tools,
  isDark = false,
}) => {
  return (
    <Card
      className={`gap-2 rounded-4xl ${isDark && 'border-[0.5px] border-text bg-main text-text'}`}
    >
      <CardHeader>
        <CardTitle className="font-normal text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="font-title text-sm leading-relaxed">
        {tools.join(' / ')}
      </CardContent>
    </Card>
  );
};
