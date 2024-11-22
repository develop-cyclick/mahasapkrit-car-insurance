export async function getProvinces() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json');
        if (!response.ok) {
            throw new Error('Failed to fetch provinces');
        }
        const provinces = await response.json();
        return provinces.map(province => ({
            id: province.id,
            name_th: province.name_th,
            name_en: province.name_en
        }));
    } catch (error) {
        console.error('Error fetching provinces:', error);
        return [];
    }
} 