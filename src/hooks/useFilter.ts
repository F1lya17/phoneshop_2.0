import { Brand, Phone } from "@/api/interfacesAoi";
import { useMemo } from "react";

function useFilterByBrand(phones: Phone[], brand: Brand | null): Phone[] {
    const filteredByBrandPhones = useMemo(() => {
        return phones.filter(ph => ph.brand === brand?.name || brand?.id === '-1');
    }, [brand, phones])
    return filteredByBrandPhones;
}

function useFilterByToPrice(phones: Phone[], brand: Brand | null, to: string): Phone[] {
    const filteredByBrandPhones: Phone[] = useFilterByBrand(phones, brand);
    const filteredByTopricePhones = useMemo(() => {
        if (to) {
            return filteredByBrandPhones.filter(ph => ph.price <= parseInt(to));
        }
        return filteredByBrandPhones;
    }, [brand, to, phones])
    return filteredByTopricePhones;
}

const useFilter = (phones: Phone[], brand: Brand, to: string, from: string): Phone[] => {
    const filteredByToPricePhones: Phone[] = useFilterByToPrice(phones, brand, to);
    const filteredPhones = useMemo(() => {
        if (from) {
            return filteredByToPricePhones.filter(ph => ph.price >= parseInt(from));
        }
        return filteredByToPricePhones
    }, [from, phones, brand, to])
    return filteredPhones;
}

export default useFilter;