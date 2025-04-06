import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perspective Funnel | We Market Fence",
  description: "Complete our marketing assessment to help us understand your fence business needs.",
};

export default function FunnelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
