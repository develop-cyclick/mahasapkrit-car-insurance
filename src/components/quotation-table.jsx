import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { quotations } from "@/app/data/quotation"


export function QuotationTable() {
    return (
        <Table className="min-w-full overflow-x-scroll">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow className="font-medium">
                    <TableHead className="w-12 text-center" > No.</TableHead>
                    <TableHead className="text-center w-[150px]">Status</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Insurance</TableHead>
                    <TableHead>Coverage</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead className="text-center">Agent</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {quotations.map((quotation) => (
                    <TableRow key={quotation.id}>
                        <TableCell>{quotation.id}</TableCell>
                        <TableCell className={`text-center ${quotation.status === 'รอการตอบรับ' ? 'bg-blue-100' :
                            quotation.status === 'ยอมรับแล้ว' ? 'bg-green-100' :
                                quotation.status === 'ปฏิเสธ' ? 'bg-red-100' : ''
                            }`}>{quotation.status}</TableCell>
                        <TableCell>{quotation.customer}</TableCell>
                        <TableCell>{quotation.insuranceType}</TableCell>
                        <TableCell className="line-clamp-1">{quotation.coverage}</TableCell>
                        <TableCell>{quotation.amount.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}</TableCell>
                        <TableCell>{quotation.createdAt}</TableCell>
                        <TableCell>{quotation.createdBy}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}