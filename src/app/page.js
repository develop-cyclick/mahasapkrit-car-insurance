import Link from "next/link"
import { Plus } from "lucide-react"
import { QuotationTable } from "@/components/quotation-table"

export default function Home() {
  return (
    <div className="flex flex-col p-8 gap-6">
      {/* Header */}
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">รายการใบเสนอราคา</h2>
          <p className="text-muted-foreground">
            รายการใบเสนอราคาทั้งหมดของคุณ
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/create-quotation" className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition-colors duration-300">
            <Plus />
            สร้างใบเสนอราคา
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="flex w-full overflow-x-scroll">
        <QuotationTable />
      </div>


    </div>
  );
}
