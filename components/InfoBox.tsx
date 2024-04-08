import React, { ReactNode } from "react";
import { AlertCircle, CheckCircle2, AlertTriangle,Info } from "lucide-react";

interface InfoBoxProps {
  children: ReactNode;
  variant: string;
  title?: string
}

export const InfoBox = ({ children, variant,title }:InfoBoxProps) => {
  let boxClass = "";
  let boxIcon = null;

  switch (variant) {
    case "danger":
      boxClass = "danger";
      boxIcon = <AlertTriangle style={{ color: "#EF4C62" }}/>;
      break;
    case "warning":
      boxClass = "warning";
      boxIcon = <AlertCircle style={{ color: "#FDC02A" }} />;
      break;
    case "information":
      boxClass = "information";
      boxIcon = <Info style={{ color: "#346DDB" }}  />;
      break;
    case "check":
      boxClass = "check";
      boxIcon = <CheckCircle2 style={{ color: "#33D29D" }}/>;
      break;
    default:
      boxClass = "";
      break;
  }

  return (
    <div className={`infobox border-l-4 w-fit py-3 px-3.5 rounded-xl my-3 text-foreground ${boxClass}`}>
      <div className="flex items-center">
        <div className="flex text-3xl w-6 h-6">
          {boxIcon}
        </div>
        <div className="ml-4">
        {title && <p className="font-extrabold mb-2">{title}</p>}
        <p className=" text-sm leading-6">{children}</p>
        </div>
      </div>
    </div>
  );
};
