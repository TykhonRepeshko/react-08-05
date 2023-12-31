type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray:Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '64',
        price: 1000,
        image: "/images/iphone-purple.webp"
    },
    {
        id: 2,
        title: 'iPhone 11',
        description: 'This is iPhone 11',
        type: 'phone',
        capacity: '64',
        price: 500,
        image: "/images/iphone-black.webp"
    },
    {
        id: 3,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '128',
        price: 830,
        image: "/images/iphone-gold.webp"
    },
    {
        id: 4,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '256',
        price: 955,
        image: "/images/iphone-white.webp"
    },
    {
        id: 5,
        title: 'iPhone 12',
        description: 'This is iPhone 12',
        type: 'phone',
        capacity: '128',
        price: 700,
        image: "/images/iphone-black.webp"
    },
    {
        id: 6,
        title: 'iPhone 11 Pro',
        description: 'This is iPhone 11 Pro',
        type: 'phone',
        capacity: '64',
        price: 650,
        image: "/images/iphone-gold.webp"
    },
]
export default productsArray