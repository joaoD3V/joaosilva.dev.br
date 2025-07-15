import type { FunctionComponent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PublishedAt } from './PublishedAt';

type PostCardProps = {
  title: string;
  excerpt: string;
  createdAt: string;
};

export const PostCard: FunctionComponent<PostCardProps> = ({
  title,
  excerpt,
  createdAt,
}) => {
  return (
    <Card className="gap-2 rounded-4xl border-[0.5px] border-text bg-main text-text">
      <CardHeader>
        <div className="mb-1">
          <PublishedAt publishedAt={createdAt} />
        </div>
        <CardTitle className="font-semibold font-title text-xl leading-relaxed">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="font-title text-sm leading-relaxed">
        <div className="flex flex-col gap-2">{excerpt}</div>
      </CardContent>
    </Card>
  );
};
