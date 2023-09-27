type featuresArrayType = {
    title: string,
    description: string
}

type reviewDataType = {
    email: string,
    rating: number,
    text: string,
    date: string
}

export interface Phone {
    id: string,
    name: string,
    features: featuresArrayType[],
    price: number,
    rating: number,
    brand: string,
    image: string
};

export interface Review {
    id: string,
    data: reviewDataType[]
}

export interface Brand {
    id: string,
    name: string
};

export interface BasketPhone extends Phone {
    count: number
}
