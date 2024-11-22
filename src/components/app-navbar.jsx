import { SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"


export function AppNavbar() {
    return (
        <div className="flex items-center justify-between border-b border-sidebar-border px-4 py-2">
            <SidebarTrigger />
            <div className="flex gap-2">
                <Input placeholder="Search..." />
                <Button variant="outline">
                    <Bell />
                </Button>
            </div>
        </div>
    )
}