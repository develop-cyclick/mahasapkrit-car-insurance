export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
            <h1 className="text-3xl font-bold text-red-600 mb-4">ขออภัย! เกิดข้อผิดพลาด</h1>
            <p className="text-gray-600 text-center mb-6">
                ไม่พบข้อมูลประกันที่ตรงตามเงื่อนไขที่ท่านระบุ กรุณาลองใหม่อีกครั้งหรือติดต่อเจ้าหน้าที่
            </p>
            <a
                href="/create-quotation"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
                กลับไปหน้าสร้างใบเสนอราคา
            </a>
        </div>
    )
}
