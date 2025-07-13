import type { ComponentProps, FunctionComponent } from 'react';

type DecorativeCircleType = ComponentProps<'div'>;

export const DecorativeCircle: FunctionComponent<DecorativeCircleType> = ({
  className,
}) => {
  return (
    <div
      className={`-z-10 absolute h-[500px] w-[500px] rounded-full border-2 border-accent opacity-20 ${className}`}
    />
  );
};
