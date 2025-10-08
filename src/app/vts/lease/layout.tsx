"use client";

import GlobalHeader from "../_shared/global-header";
import { LeftNav } from "../_shared/left-nav";
import { inventoryNavItems } from "../_shared/data/navigation";
import { useAppContext } from "@/app/context/AppContext";
import VtsAiFloatingCTA from "../_shared/vts-ai-floating-cta";
import SupportFloatingCTA from "../_shared/support-floating-cta";
import { usePathname } from "next/navigation";

export default function VtsLeaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const { closeVtsAiFromOverlay, isVtsAiOpen } = useAppContext();

  const leaseNavItems = [
    {
      sectionName: "",
      items: [
        { label: "Deals", href: "/vts/lease/deals" },
        { label: "Deal tasks", href: "/vts/lease/" },
        {
          label: "Tenant coordination",
          href: "/vts/lease/",
        },
        { label: "Leases", href: "/vts/lease/" },
        { label: "Options", href: "/vts/lease/" },
        { label: "Budgets", href: "/vts/lease/" },
        { label: "Appraisals", href: "/vts/lease/" },
        { label: "Comps", href: "/vts/lease/" },
        { label: "Tenants", href: "/vts/lease/" },
      ],
    },
    inventoryNavItems,
  ];

  const isActivatePage = pathname?.includes("/vts/lease/deals/profile") || pathname?.includes("/vts/activate");

  // For Activate page, only show the content and AI modal
  if (isActivatePage) {
    return (
      <div className="flex flex-col">
        {children}
        <VtsAiFloatingCTA />
        {isVtsAiOpen && <div className="fixed top-0 left-0 h-full w-full bg-black/0" onClick={closeVtsAiFromOverlay} />}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <GlobalHeader />
      <div className="mx-auto flex min-h-[calc(100dvh-50px)] w-full">
        <LeftNav navItems={leaseNavItems} />
        {children}
        <VtsAiFloatingCTA />
        <SupportFloatingCTA />
      </div>
      {isVtsAiOpen && <div className="fixed top-0 left-0 h-full w-full bg-black/0" onClick={closeVtsAiFromOverlay} />}
    </div>
  );
}
