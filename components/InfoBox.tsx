import React, { ReactNode } from "react";
import { AlertCircle, CheckCircle2, AlertTriangle, Info } from "lucide-react";

interface InfoBoxProps {
  children: ReactNode;
  variant: string;
  title: string;
}

export const InfoBox = ({ children, variant, title }: InfoBoxProps) => {
  let boxClass = "";
  let boxIcon = null;

  switch (variant) {
    case "danger":
      boxClass = "danger";
      boxIcon = <AlertTriangle style={{ color: "#EF4C62" }} />;
      break;
    case "warning":
      boxClass = "warning";
      boxIcon = <AlertCircle style={{ color: "#FDC02A" }} />;
      break;
    case "information":
      boxClass = "information";
      boxIcon = <Info style={{ color: "#346DDB" }} />;
      break;
    case "check":
      boxClass = "check";
      boxIcon = <CheckCircle2 style={{ color: "#33D29D" }} />;
      break;
    default:
      boxClass = "";
      break;
  }

  return (
    <div
      className={`border-l-4 w-fit py-3 px-3.5 rounded-xl my-3 text-foreground ${boxClass}`}
    >
      <div className="flex items-center mb-2 gap-3 text-xl font-bold">
        <p>{boxIcon}</p>
        <p>{title}</p>
      </div>
      <p className=" text-base">{children}</p>
    </div>
  );
};
