import classNames from 'classnames';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      role="contentinfo"
      className={classNames(
        'relative w-full max-w-[350px] rounded-md bg-custom-gray-50 p-4 shadow-md',
        className,
      )}
    >
      {children}
    </div>
  );
}
