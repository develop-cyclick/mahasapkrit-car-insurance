import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import { Home, Table2, Settings } from "lucide-react"
// Menu items.
const items = [
    {
        title: "ใบเสนอราคา",
        url: "/",
        icon: Home,
    },
    {
        title: "เปรียบเทียบเบี้ยประกัน",
        url: "/create-quotation",
        icon: Table2,
    },
    {
        title: "การตั้งค่า",
        url: "/settings",
        icon: Settings,
    },
]

export function AppSidebar() {

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="flex items-center justify-center text-base font-medium">
                        Mahasapkrit Insurance
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}