'use client'

import { useRef } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { Check, X } from 'lucide-react'

export function QuotationResult() {
    const insuranceCompanies = [
        {
            name: "บริษัท A ประกันภัย",
            premium: 25000,
            discount: 2500,
            netPremium: 22500,
            features: {
                repairType: "ซ่อมห้าง",
                firstDamage: 5000,
                personalAccident: 100000,
                medicalExpense: 100000,
                bailBond: 300000
            }
        },
        {
            name: "บริษัท B ประกันภัย",
            premium: 23000,
            discount: 1500,
            netPremium: 21500,
            features: {
                repairType: "ซ่อมอู่",
                firstDamage: 3000,
                personalAccident: 200000,
                medicalExpense: 200000,
                bailBond: 300000
            }
        },
        {
            name: "บริษัท C ประกันภัย",
            premium: 27000,
            discount: 3000,
            netPremium: 24000,
            features: {
                repairType: "ซ่อมห้าง",
                firstDamage: 6000,
                personalAccident: 300000,
                medicalExpense: 300000,
                bailBond: 500000
            }
        }
    ]

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">เปรียบเทียบเบี้ยประกัน</h2>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[200px]">รายละเอียด</TableHead>
                        {insuranceCompanies.map((company) => (
                            <TableHead key={company.name}>{company.name}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">เบี้ยประกันภัย</TableCell>
                        {insuranceCompanies.map((company) => (
                            <TableCell key={company.name}>{company.premium.toLocaleString()} บาท</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">ส่วนลด</TableCell>
                        {insuranceCompanies.map((company) => (
                            <TableCell key={company.name} className="text-red-500">
                                -{company.discount.toLocaleString()} บาท
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">เบี้ยประกันภัยสุทธิ</TableCell>
                        {insuranceCompanies.map((company) => (
                            <TableCell key={company.name} className="font-bold">
                                {company.netPremium.toLocaleString()} บาท
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">ประเภทอู่ซ่อม</TableCell>
                        {insuranceCompanies.map((company) => (
                            <TableCell key={company.name}>{company.features.repairType}</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">ความเสียหายส่วนแรก</TableCell>
                        {insuranceCompanies.map((company) => (
                            <TableCell key={company.name}>{company.features.firstDamage.toLocaleString()} บาท</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">อุบัติเหตุส่วนบุคคล</TableCell>
                        {insuranceCompanies.map((company) => (
                            <TableCell key={company.name}>{company.features.personalAccident.toLocaleString()} บาท</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">ค่ารักษาพยาบาล</TableCell>
                        {insuranceCompanies.map((company) => (
                            <TableCell key={company.name}>{company.features.medicalExpense.toLocaleString()} บาท</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">ประกันตัวผู้ขับขี่</TableCell>
                        {insuranceCompanies.map((company) => (
                            <TableCell key={company.name}>{company.features.bailBond.toLocaleString()} บาท</TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>

            <div className="flex justify-end gap-4">
                {insuranceCompanies.map((company) => (
                    <Button key={company.name} className="min-w-[200px]">
                        เลือก {company.name}
                    </Button>
                ))}
            </div>
        </div>
    )
}
