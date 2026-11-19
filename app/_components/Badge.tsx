import {ReactNode} from "react";

type BadgeProps = {
  children: ReactNode;
}

export default function Badge({children}: BadgeProps) {
  return (
    <div className="badge bg-tertiary">
      {children}
    </div>
  );
}