'use server'
import { Type } from "lucide-react";
import { redirect } from "next/navigation";

export async function createCarInsurance(formData) {
    // Extract form data
    const formEntries = Object.fromEntries(formData);
    const fullName = formEntries.fullName || '';
    const phone = formEntries.phone || '';
    const brand = formEntries.brand || '';
    const insuranceType = formEntries.insuranceType || '';
    const model = formEntries.model || '';
    const subModel = formEntries.subModel || '';
    const year = formEntries.year || '';
    const insuranceFund = formEntries.insuranceFund || '';
    const discountAmount = formEntries.discountAmount || '';
    const discountPercent = formEntries.discountPercent || '';

    // console.log(fullName, phone, brand, insuranceType, model, subModel, year)



    let data = null;
    const currentYear = new Date().getFullYear();
    let totalYear = currentYear - parseInt(year);
    let customer = {
        name: fullName,
        phone: phone,
        car: `${brand} ${model} ${subModel} รุ่นปี ${year}`,
    }

    console.log(fullName, phone, brand, insuranceType, model, subModel, year, insuranceFund)
    // console.log(insuranceType, totalYear)

    try {
        const res = await fetch(`http://165.22.54.91:3001/cars/getCarInsuranceQuotation`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                car_type: 110, // You may want to make this dynamic
                insurance_type: insuranceType,
                brand_name: brand,
                model: model,
                sub_model: subModel,
                year: parseInt(totalYear),
                amount: insuranceFund,
            }),
        });


        if (!res.ok) {
            throw new Error('Failed to fetch insurance quotation');
        }

        data = await res.json();

    } catch (error) {
        console.error('Error:', error);
        // Handle the error appropriately, maybe redirect to an error page
        // redirect('/car-insurance/error');
    }

    // console.log(data)
    // Redirect to a new page with the result
    if (data?.data.length > 0) {
        return redirect(`/create-quotation/success?customer=${encodeURIComponent(JSON.stringify(customer))}&data=${encodeURIComponent(JSON.stringify(data))}&insuranceFund=${encodeURIComponent(insuranceFund)}&discountAmount=${encodeURIComponent(discountAmount)}&discountPercent=${encodeURIComponent(discountPercent)}`, 'push');
    } else {
        return redirect('/create-quotation/error')
    }
}