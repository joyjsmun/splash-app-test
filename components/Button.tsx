import React from "react";
import { Button as NextButton } from "@nextui-org/react";

const Button: React.FC<{ label: string; primary?: boolean }> = ({ label }) => {
  return (
    <NextButton css={{ background: "$purple", "&:hover": { opacity: "0.8" } }}>
      {label}
    </NextButton>
  );
};

export default Button;
