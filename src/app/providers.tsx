"use client";

import { NextUIProvider } from "@nextui-org/react";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: Readonly<ProvidersProps>) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
