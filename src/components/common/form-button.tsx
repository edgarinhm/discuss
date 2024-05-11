"use client";

import { Button } from "@nextui-org/react";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface FormButtonProps {
  children: ReactNode;
}

export default function FormButton({ children }: Readonly<FormButtonProps>):JSX.Element {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" isLoading={pending}>
      {children}
    </Button>
  );
}
