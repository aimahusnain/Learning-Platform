// MyButton.tsx
import React from "react";
import { Button } from "../ui/button";

interface MyButtonProps {
  variant: any;
  onClick: () => void;
  children: React.ReactNode;
}

const MyButton: React.FC<MyButtonProps> = ({ variant, onClick, children }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
};

export default MyButton;
