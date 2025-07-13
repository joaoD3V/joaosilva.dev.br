import type { FunctionComponent, PropsWithChildren } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type AchievementDetailProps = PropsWithChildren<{
  title: string;
  isDark?: boolean;
}>;

export const AchievementDetail: FunctionComponent<AchievementDetailProps> = ({
  title,
  children,
  isDark,
}) => {
  return (
    <Card
      className={`gap-2 rounded-4xl ${isDark && 'border-[0.5px] border-text bg-main text-text'}`}
    >
      <CardHeader>
        <CardTitle className="font-normal text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="font-title text-sm leading-relaxed">
        <div className="flex flex-col gap-2">{children}</div>
      </CardContent>
    </Card>
  );
};
