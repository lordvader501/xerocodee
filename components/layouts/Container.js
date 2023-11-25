import classNames from "classnames";

export function Container({ className, ...props }) {
  return (
    <div
      className={classNames(
        "mx-auto max-w-[1440px] px-4 sm:px-4 lg:px-8 flex flex-col items-center pt-20",
        className
      )}
      {...props}
    />
  );
}
