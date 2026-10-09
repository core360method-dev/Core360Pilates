import type { Metadata } from "next";
import { InstructorNav } from "./InstructorNav";

export const metadata: Metadata = {
  title: { default: "Instructor Hub", template: "%s · Instructor Hub · Core 360 Method™" },
};

export default function InstructorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="instructor">
      <InstructorNav />
      <div style={{ paddingTop: 32 }}>{children}</div>
    </div>
  );
}
