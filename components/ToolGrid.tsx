import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Card } from './ui/card';
import { Skeleton } from './ui/skeleton';

type ToolGridProps = {
  toolIds: number[];
};

const Toolcard = dynamic(() => import('./Toolcard'), {
  suspense: true,
  loading: () => <SkeletonCard />,
});

const ToolGrid = ({ toolIds }: ToolGridProps) => {
  return (
    <div className="md:grid md:grid-cols-2 gap-5 my-6 flex flex-col">
      {toolIds.map((id) => (
        <Suspense key={id} fallback={<SkeletonCard />}>
          <Toolcard id={id} />
        </Suspense>
      ))}
    </div>
  );
};

export default ToolGrid;

function SkeletonCard() {
  return (
    <Card className="bg-muted/10">
      <div className="flex flex-col space-y-5 p-5">
        <Skeleton className="h-[300px] w-[530px] rounded-xl" />
        <div className="flex gap-3">
          <Skeleton className="w-16 h-16 rounded-xl" />
          <div className="flex flex-col justify-between py-2">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
        <div className="space-y-2.5">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </Card>
  );
}
