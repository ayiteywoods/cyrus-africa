import Image from 'next/image';
import Link from 'next/link';
import HeroSlider from './hero';
import { ImageSection } from './goal';

export default function Page() {
  // Sample data - replace with your actual data
  const categories = [
    { id: 1, name: 'Fashion', image: '/fashion-cat.jpg' },
    { id: 2, name: 'Electronics', image: '/electronics-cat.jpg' },
    // Add more categories...
  ];

  const products = [
    { id: 1, name: 'Wireless Headphones', price: 59.99, image: '/product1.jpg' },
    { id: 2, name: 'Organic Cotton Shirt', price: 29.99, image: '/product2.jpg' },
    // Add more products...
  ];

  const benefits = [
    { icon: '🚚', title: 'Free Shipping', description: 'On orders over $50' },
    { icon: '🔄', title: 'Easy Returns', description: '30-day policy' },
    // Add more benefits...
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* 1. Hero Banner */}
      <HeroSlider />   

      <section>
        <ImageSection />
      </section>

    
    </div>
  );
}