import CarOption from "@/components/form/car-option";
import { getCarBrands, getCarModels, getCarSubModels } from '@/lib/data'
import { getProvinces } from '@/lib/getProvinces'
import { createCarInsurance } from './action'
import { CurencyInput } from '@/components/form/curency-input'
import { Button } from '@/components/ui/button'


const years = [
    "2023", "2022", "2021", "2020",
    "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010",
    "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000",
    "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991", "1990",
    "1989", "1988", "1987", "1986", "1985", "1984", "1983", "1982", "1981", "1980"
]

export default async function CreateQuotationPage(props) {

    const searchParams = await props.searchParams;
    let carBrandParams = (await searchParams?.brand) ? searchParams.brand : null;
    let carModelParams = (await searchParams?.model) ? searchParams.model : null;
    let carSubModelParams = (await searchParams?.subModel) ? searchParams.subModel : null;
    let provinceParams = (await searchParams?.province) ? searchParams.province : null;

    const carBrands = await getCarBrands();
    const carModels = await getCarModels(carBrandParams);
    const carSubModels = await getCarSubModels(carModels, carModelParams);
    const provinces = await getProvinces();

    return (
        <div className="flex flex-col max-w-7xl mx-auto w-full p-8 gap-6">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">สร้างใบเสนอราคา</h2>
                    <p className="text-muted-foreground">
                        กรอกข้อมูลเพื่อสร้างใบเสนอราคาประกันรถยนต์
                    </p>
                </div>
            </div>

            {/* Form */}
            <form action={createCarInsurance}>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">ข้อมูลลูกค้า</h3>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="grid gap-2">
                                <label htmlFor="fullName">ชื่อ-นามสกุล</label>
                                <input type="text" id="fullName" name="fullName" className="w-full p-2 border rounded-md" placeholder="ระบุชื่อ-นามสกุล" />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="phone">เบอร์โทรศัพท์</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full p-2 border rounded-md"
                                    placeholder="ระบุเบอร์โทรศัพท์"
                                />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="email">อีเมล</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-2 border rounded-md"
                                    placeholder="ระบุอีเมล"
                                />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="address">ที่อยู่</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="w-full p-2 border rounded-md"
                                    placeholder="ระบุที่อยู่"
                                />
                            </div>
                        </div>
                        <CarOption
                            carBrandParams={carBrandParams}
                            carModelParams={carModelParams}
                            carSubModelParams={carSubModelParams}
                            carBrands={carBrands}
                            carModels={carModels}
                            carSubModels={carSubModels}
                            years={years}
                            provinces={provinces}
                        />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">ข้อมูลเบี้ยประกัน</h3>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="grid gap-2">
                                <label htmlFor="license-plate">ทุนประกัน</label>
                                <input type="text" id="insuranceFund" name="insuranceFund" className="w-full p-2 border rounded-md" placeholder="ระบุทุนประกัน *ขั้นต่ำ 100,000" />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="insuranceType">ประเภทประกัน</label>
                                <select id="insuranceType" name="insuranceType" className="w-full p-2 border rounded-md ">
                                    <option value="0">ประกันภัยรถยนต์</option>
                                    <option value="1">ประกันภัยรถยนต์ชั้น 1</option>
                                    <option value="2">ประกันภัยรถยนต์ชั้น 2</option>
                                    <option value="3">ประกันภัยรถยนต์ชั้น 3</option>
                                </select>
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="insurance-period">ประเภทอู่ซ่อม</label>
                                <select id="insurance-period" name="insurance-period" className="w-full p-2 border rounded-md">
                                    <option value="1">ซ่อมห้าง/ซ่อมอู่</option>
                                    <option value="2">ซ่อมห้าง</option>
                                    <option value="2">ซ่อมอู่</option>
                                </select>
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="first-damage">ค่าเสียหายส่วนแรก</label>
                                <CurencyInput id="first-damage" name="first-damage" placeholder="ระบุค่าเสียหายส่วนแรก" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">เพิ่มเติม</h3>
                            <div className="grid  gap-4 mt-4">
                                <div className="grid gap-2">
                                    <label htmlFor="discount">ส่วนลด</label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            id="discountAmount"
                                            name="discountAmount"
                                            placeholder="ระบุส่วนลด (บาท)"
                                            className="w-full p-2 border rounded-md placeholder:px-2"
                                        />
                                        <input
                                            type="text"
                                            id="discountPercent"
                                            name="discountPercent"
                                            placeholder="ระบุส่วนลด (%)"
                                            className="w-full p-2 border rounded-md placeholder:px-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-y-4">
                            <Button type="submit" className="w-1/2 p-6">สร้างใบเสนอราคา</Button>
                        </div>
                    </div>
                </div>
            </form>
            {/* End Form */}
        </div>
    )
}