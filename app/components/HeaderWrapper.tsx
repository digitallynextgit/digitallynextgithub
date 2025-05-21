'use client';

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper() {
  const pathname = usePathname();
  
  // Don't render the main header on the services page
  if (pathname.startsWith('/services')) {
    return null;
  }
  
  return <Header />;
} 