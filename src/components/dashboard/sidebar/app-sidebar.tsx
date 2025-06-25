"use client";

import * as React from "react";
import { Users, Inbox, LayoutDashboard } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { IUser } from "@/types/user";

const data = {
  navAdmin: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Manage HeroSection",
      url: "/admin/manage-hero-section",
      icon: Users,
    },
    {
      title: "Manage ServiceSection",
      url: "/admin/manage-service-section",
      icon: Inbox,
    },
  ],
};
interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  currentUserData: IUser;
}
export function AppSidebar({ currentUserData, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl">XYZ</h2>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* <p>Main Nav Item</p> */}
        <NavMain items={data.navAdmin} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser currentUserData={currentUserData} />
      </SidebarFooter>
    </Sidebar>
  );
}
