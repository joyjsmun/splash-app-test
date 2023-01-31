import React from "react";
import { Button as NextButton } from "@nextui-org/react";

const Button: React.FC<{ label: string; primary?: boolean }> = ({ label }) => {
  return (
    <NextButton
    // css={{ background: "secondary", "&:hover": { opacity: "0.8" } }}
    // color={"secondary"}
    >
      {label}
    </NextButton>
  );
};

export default Button;
