import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";
import React from "react";

export type IconName = keyof typeof Icons;

interface IconWrapperProps extends LucideProps {
  name: IconName;
  fallback?: IconName;
}

const IconWrapper = ({
  name,
  fallback = "Circle",
  ...props
}: IconWrapperProps) => {
  const LucideIcon = (Icons[name] || Icons[fallback]) as React.FC<LucideProps>;
  return <LucideIcon {...props} />;
};
export default IconWrapper;

// import * as Icons from "lucide-react";
// import type { LucideProps } from "lucide-react";
// import React from "react";

// type IconName = keyof typeof Icons;

// interface IconWrapperProps extends LucideProps {
//   name: IconName;
//   fallback?: IconName;
// }

// const IconWrapper = ({ name, fallback = "Circle", ...props }: IconWrapperProps) => {
//   const LucideIcon = Icons[name] as React.FC<>|| Icons[fallback]; // ✅ kasih tahu ini React component
//   return <LucideIcon {...props} />;
// };
