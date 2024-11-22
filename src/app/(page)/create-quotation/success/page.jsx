import Link from "next/link";

const ResultPage = async ({ searchParams }) => {

    const quotation = JSON.parse(searchParams.data);
    const customer = JSON.parse(searchParams.customer)
    const insuranceFund = searchParams.insuranceFund;
    const discountAmount = searchParams.discountAmount;
    const discountPercent = searchParams.discountPercent;

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('th-TH', {
            style: 'currency',
            currency: 'THB',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    };

    return (
        <main className="flex flex-col min-h-screen max-w-7xl mx-auto p-12">
            <div className="flex justify-between mb-8">
                <Link
                    href="/create-quotation"
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                    ย้อนกลับ
                </Link>
            </div>
            {/* Header: Customer information */}
            <section className="flex flex-col w-full justify-start gap-4">
                <h1 className="lg:text-3xl font-semibold text-center w-full ">{'ใบเสนอราคาเบี้ยประกันภัยรถยนต์'}</h1>
                <div className="flex  items-start justify-between p-4 border-gray-300 border-[1px] border-b-0">
                    <div className="flex flex-col">
                        <p className="text-base">{`ชื่อผู้เอาประกัน: ${customer.name}`}</p>
                        <p className="text-base">{`รถยนต์เอาประกันภัย: ${customer.car}`}</p>
                        <p className="text-base">{'ระยะเวลาเอาประกันภัย: 1 ปี นับตั้งแต่ที่ได้ทำการตกลง'}</p>
                        <p>{`ทุนประกัน: ${formatCurrency(parseInt(insuranceFund))}`}</p>
                        <p className="text-base">{'หมายเหตุ:'}</p>
                    </div>
                    <div className="flex flex-col">
                        <p>{'วันที่'} {new Date().toLocaleDateString('th-TH')}</p>
                    </div>
                </div>
            </section>

            {/* Comparing Table */}
            <section className="flex flex-row w-full bg-white">
                {/* Talble main item */}
                <div className="flex flex-grow flex-col border-[1px] border-indigo-300 w-[380px] gap-2">
                    <p className="flex h-16 items-center justify-center text-base text-center font-semibold border-b-[1px] border-indigo-300 bg-indigo-100">{'รายละเอียดความคุ้มครอง'}</p>
                    <div className="flex flex-col p-4 gap-2 items-end">
                        <p className="text-base font-medium">{'ความรับผิดชอบต่อบุคคลภายนอก'}</p>
                        <p className="text-base">{'ความรับผิดชอบต่อชีวิต ร่างกายบุคคลภายนอก'}</p>
                        <p className="text-base">{'ไม่เกิน/ครั้ง'}</p>
                        <p className="text-base">{'ความรับผิดชอบต่อทรัพย์สินบุคคลภายนอก'}</p>

                        <p className="text-base font-medium mt-4">{'ความคุ้มครองรถยนต์ที่เอาประกันภัย'}</p>
                        <p className="text-base">{'ความเสียหายต่อตัวรถยนต์'}</p>
                        <p className="text-base">{'ความเสียหายส่วนแรก'}</p>
                        <p className="text-base">{'รถยนต์สูญหาย / ไฟไหม้'}</p>

                        <p className="text-base font-medium mt-4">{'ความคุ้มครองตามเอกสารแนบท้าย'}</p>
                        <p className="text-base">{'อุบัติเหตุส่วนบุคคล (ผู้ขับขี่/ผู้โดยสารในรถ)'}</p>
                        <p className="text-base">{'ค่ารักษาพยาบาล'}</p>
                        <p className="text-base">{'การประกันตัวผู้ขับขี่คดีอาญา'}</p>
                    </div>

                    <p className="flex text-base text-center font-semibold border-y-[1px] border-indigo-300 h-20 items-center justify-center">{'ประเภท เบี้ยประกันภัย'}</p>
                    <div className="flex flex-col gap-2 divide-y-[1px] divide-indigo-300">
                        <p className="text-base px-4 py-1">{'ค่าเบี้ยประกันภัย (บาท)'}</p>
                        <p className="text-base px-4 py-1">{'ค่าเบี้ยประกันภัย (บาท) พรบ.'}</p>
                        <p className="text-base px-4 py-2 font-semibold bg-gray-200">{'ยอดรวมค่าเบี้ยประกันภัย (บาท) '}</p>
                        <p className="text-base px-4 py-2 font-semibold bg-gray-200">{`ส่วนลด ${discountPercent}%`}</p>
                        <p className="text-base px-4 py-2 font-semibold bg-gray-200">{'ยอดรวมค่าเบี้ยประกันภัย (บาท) หลังหักส่วนลด'}</p>
                    </div>

                </div>
                <div className="flex overflow-x-scroll">
                    {
                        quotation.data?.filter((q) =>
                            q.insurance_premium_type !== 'ซ่อมอู่'
                        ).slice(0, 3).map((q, index) => {

                            const netInsuranceFund = q.fund_regis_bkk + 645.21 + (q.fund_regis_bkk * (7 / 100));
                            const discountAmount = netInsuranceFund * (discountPercent / 100);
                            const netInsuranceFundAfterDiscount = netInsuranceFund - discountAmount;


                            return (
                                <div key={index} className="flex flex-col border-r-[1px] border-y-[1px] border-indigo-300 gap-2 min-w-[264px]">
                                    <p className="flex h-16 items-center justify-center text-base text-center font-semibold border-b-[1px] border-indigo-300 bg-indigo-100">{q.company_name}</p>
                                    <div className="flex flex-col p-4 gap-2 items-center">
                                        <p className="text-base font-medium justify-center">{`ประเภท ${q.insurance_type}`}</p>
                                        <p className="text-base">{`${formatCurrency(parseInt(q.responsibility_body_person))}.- บาท/คน`}</p>
                                        <p className="text-base">{`${formatCurrency(parseInt(q.responsibility_body_times))}.- บาท/ครั้ง`}</p>
                                        <p className="text-base">{`${formatCurrency(parseInt(q.responsibility_asset))}.- บาท/ครั้ง`}</p>

                                        <p className="text-base font-medium h-[24px] mt-4">{''}</p>
                                        <p className="text-base">{`${formatCurrency(parseInt(insuranceFund))}.- บาท/ครั้ง`}</p>
                                        <p className="text-base">{q.first_damage ? `${formatCurrency(parseInt(q.car_damage))}.- บาท/ครั้ง` : `- ไม่มี -`}</p>
                                        <p className="text-base">{`${formatCurrency(parseInt(insuranceFund))}.- บาท/ครั้ง`}</p>

                                        <p className="text-base font-medium h-[24px] mt-4">{''}</p>
                                        <p className="text-base">{`${formatCurrency(parseInt(q.personal_accident))}.- บาท/คน (${q.personal_accident_number})`}</p>
                                        <p className="text-base">{`${formatCurrency(parseInt(q.medical))}.- บาท/คน (${q.personal_accident_number})`}</p>
                                        <p className="text-base">{`${formatCurrency(parseInt(q.criminal_driver))}.- บาท/ครั้ง`}</p>
                                    </div>

                                    <p className="flex flex-col text-xl text-center font-semibold border-indigo-300 border-y-[1px] py-4 h-20">
                                        {`${q.insurance_premium_type}`}
                                        <span className="text-sm font-light">{q.insurance_premium_condition}</span>
                                    </p>
                                    <div className="flex flex-col gap-2 divide-y-[1px] divide-indigo-300 text-end">
                                        <p className="text-base py-1 px-2">{`${formatCurrency(parseInt(q.fund_regis_bkk))}`}</p>
                                        <p className="text-base py-1 px-2">{`${formatCurrency(645.21)}`}</p>
                                        <p className="text-base py-2 font-semibold px-2 bg-gray-200">{`${formatCurrency(parseInt(netInsuranceFund) + 645.21)}`}</p>
                                        <p className="text-base py-2 font-semibold px-2 bg-gray-200">{`${formatCurrency(parseInt(discountAmount))}`}</p>
                                        <p className="text-base py-2 font-semibold px-2 bg-gray-200">{`${formatCurrency(parseInt(netInsuranceFundAfterDiscount))}`}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <section className="flex flex-col p-4 gap-2">
                <p>{'หมายเหตุ:'}</p>
                <p className=" whitespace-pre-line">{'1. ขอตรวจสภาพรถก่อนการรับประกันภัย (ตรวจสภาพรถผ่าน/ ต้องไม่มีร่องรอยความเสียหาย) \nและขอสงวนสิทธิ์ในการพิจารณาไม่รับประกันภัย กรณีตรวจสภาพรถไม่ผ่านเกณฑ์ของบริษัทรับประกันภัย'}</p>
                <p className=" whitespace-pre-line">{'2. อัตราเบี้ยประกันภัยดังกล่าวข้างต้นคุ้มครองเฉพาะอุปกรณ์มาตรฐานตามโรงงานเท่านั้น \n **ไม่คุ้มครอง แคฟร่า, คาร์บอน,สติ๊กเกอร์, แรฟสี, เคลือบแก้วทุกชนิด, กระจกกันกระสุน, เก้าอี้ไฟฟ้า, กล้อง CCTV ฯลฯ'}</p>
            </section>
        </main>
    )
}

export default ResultPage;