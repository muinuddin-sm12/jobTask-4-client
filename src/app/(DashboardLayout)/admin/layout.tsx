import { AppSidebar } from "@/components/dashboard/sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { getCurrentUser } from "@/services/auth";
// import { getWaitUntilPromiseFromEvent } from "next/dist/server/web/spec-extension/fetch-event";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  console.log(currentUser)
//   const currentUserData = await getWaitUntilPromiseFromEvent(currentUser._id);
  return (
    <SidebarProvider>
      <AppSidebar currentUserData={currentUser.data} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
          </div>
        </header>
        <div className="min-h-[calc(100vh-64px)]">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
