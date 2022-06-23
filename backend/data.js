import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'Ritu',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'latest',
            email: 'rj@gmail.com',
            password: bcrypt.hashSync('latest', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {

            name: 'Earpod',
            category: 'Electronics',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Apple',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'iphone',
            category: 'Electronics',
            image: '/images/p2.jpg',
            price: 100,
            countInStock: 20,
            brand: 'Apple',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'Sony PlayStation',
            category: 'Electronics',
            image: '/images/p3.jpg',
            price: 220,
            countInStock: 0,
            brand: 'Sony',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product',
        },
        {

            name: 'Alexa',
            category: 'Electronics',
            image: '/images/p4.jpg',
            price: 78,
            countInStock: 15,
            brand: 'Apple',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
        },
        {

            name: 'Logitech Mouse',
            category: 'Electronics',
            image: '/images/p5.jpg',
            price: 65,
            countInStock: 30,
            brand: 'Logitech',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'Canon Camera',
            category: 'Electronics',
            image: '/images/p6.jpg',
            price: 139,
            countInStock: 5,
            brand: 'Canon',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product',
        },
    ],
};
export default data;