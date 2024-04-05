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
      boxIcon = <AlertTriangle style={{ color: "#EF4C62" }} size={30}  />;
      break;
    case "warning":
      boxClass = "warning";
      boxIcon = <AlertCircle style={{ color: "#FDC02A" }} size={30}  />;
      break;
    case "information":
      boxClass = "information";
      boxIcon = <Info style={{ color: "#346DDB" }} size={30}  />;
      break;
    case "check":
      boxClass = "check";
      boxIcon = <CheckCircle2 style={{ color: "#33D29D" }} size={30} />;
      break;
    default:
      boxClass = "";
      break;
  }

  return (
    <div className={`infobox border-l-4 w-fit py-3 px-3.5 rounded-xl my-2 text-main-grey ${boxClass}`}>
      <div className="flex items-center">
        <div className="flex text-3xl">
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
