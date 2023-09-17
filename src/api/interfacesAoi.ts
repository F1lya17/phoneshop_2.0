type featuresArrayType = {
    title: string,
    description: string
}

export interface Phone {
    id: string,
    name: string,
    features: Array<featuresArrayType>,
    price: number,
    rating: number,
    brand: string,
    image: string
};

