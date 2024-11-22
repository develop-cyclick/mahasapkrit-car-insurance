const baseUrl = 'http://165.22.54.91:3001';


export const getCarBrands = async () => {
    const url = `${baseUrl}/brands/listBrand`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.data;

    } catch (error) {
        console.error('Error fetching car brands:', error);
        return [];
    }
}

export const getCarModels = async (brand) => {
    const url = `${baseUrl}/cars/listCar`;

    if (!brand) {
        return [];
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'brand_name': brand })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Transform data to group by model
        const transformedData = data.data.reduce((acc, car) => {
            if (!acc.find(item => item.id === car.model)) {
                acc.push({
                    id: car.model,
                    name: car.model,
                    subModels: data.data.filter(c => c.model === car.model).map(c => ({
                        id: c.sub_model,
                        name: c.sub_model
                    }))
                });
            }
            return acc;
        }, []);

        return transformedData;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const getCarSubModels = (carModels, model) => {

    try {
        if (!carModels) {
            throw new Error('Invalid model object');
        }

        let subModel = carModels.find((item) => item.id === model)?.subModels;

        return subModel;

    } catch (error) {
        console.error('Error fetching submodels:', error);
    }
}