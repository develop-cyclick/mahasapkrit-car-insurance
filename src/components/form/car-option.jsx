'use client'

import { useRouter, useSearchParams } from 'next/navigation'


export default function CarOption({ carBrands, carModels, carSubModels, carBrandParams, carModelParams, carSubModelParams, years, provinces }) {

    const searchParams = useSearchParams()
    const router = useRouter()

    const handleSelectChange = (e) => {
        const { name, value } = e.target
        const params = new URLSearchParams(searchParams)

        // Clear dependent fields when parent selection changes
        if (name === 'brand') {
            params.delete('model')
            params.delete('subModel')
        } else if (name === 'model') {
            params.delete('subModel')
        }

        if (value) {
            params.set(name, value)
        } else {
            params.delete(name)
        }

        router.push(`?${params.toString()}`)
    }

    return (
        <div>
            <h3 className="text-lg font-medium">ข้อมูลรถยนต์</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="grid gap-2">
                    <label htmlFor="brand">ยี่ห้อรถ</label>
                    <select
                        id="brand"
                        name="brand"
                        className="w-full p-2 border rounded-md capitalize"
                        defaultValue={carBrandParams || ""}
                        onChange={handleSelectChange}
                    >
                        <option value="">เลือกยี่ห้อรถ</option>
                        {carBrands?.map((brand, index) => (
                            <option key={index} value={brand.id} className="capitalize">
                                {brand.brand_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="grid gap-2">
                    <label htmlFor="model">รุ่นรถ</label>
                    <select
                        id="model"
                        name="model"
                        className="w-full p-2 border rounded-md"
                        defaultValue={carModelParams?.model || ""}
                        // disabled={!carBrandParams?.brand}
                        onChange={handleSelectChange}
                    >
                        <option value="">เลือกรุ่นรถ</option>
                        {carModels?.map((model) => (
                            <option key={model.id} value={model.id}>
                                {model.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="grid gap-2">
                    <label htmlFor="subModel">รุ่นย่อย</label>
                    <select
                        id="subModel"
                        name="subModel"
                        className="w-full p-2 border rounded-md"
                        defaultValue={carSubModelParams || ""}
                        disabled={!carModelParams}
                        onChange={handleSelectChange}
                    >
                        <option value="">เลือกรุ่นย่อย</option>
                        {carSubModels?.map((subModel) => (
                            <option key={subModel.id} value={subModel.id}>
                                {subModel.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="grid gap-2">
                    <label htmlFor="year">ปีรถ</label>
                    <select
                        id="year"
                        name="year"
                        className="w-full p-2 border rounded-md"
                        defaultValue={carBrandParams?.year || ""}
                        onChange={handleSelectChange}
                    >
                        <option value="">เลือกปีรถ</option>
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="grid gap-2">
                    <label htmlFor="province">จังหวัดที่จดทะเบียน</label>
                    <select
                        id="province"
                        name="province"
                        className="w-full p-2 border rounded-md"
                        defaultValue={carBrandParams?.province || ""}
                        onChange={handleSelectChange}
                    >
                        <option value="">เลือกจังหวัด</option>
                        {provinces?.map((province) => (
                            <option key={province.id} value={province.id}>
                                {province.name_th}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="grid gap-2">
                    <label htmlFor="license-plate">ทะเบียนรถ</label>
                    <input
                        type="text"
                        id="license-plate"
                        className="w-full p-2 border rounded-md"
                        placeholder="ระบุทะเบียนรถ"
                    />
                </div>
            </div>
        </div>
    )
}