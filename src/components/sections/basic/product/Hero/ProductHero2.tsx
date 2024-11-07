import React from 'react';
import { ShoppingCart, Heart, Check } from 'lucide-react';

interface ProductHero2Props {
  productName: string;
  description: string;
  price: string;
  originalPrice?: string;
  features: string[];
  image: string;
  colors: string[];
}

export function ProductHero2({
  productName = "Smart Fitness Watch",
  description = "Track your health and fitness goals with advanced monitoring and personalized insights.",
  price = "$199",
  originalPrice = "$249",
  features = ["Heart Rate Monitor", "Sleep Tracking", "Water Resistant"],
  image = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  colors = ["#000000", "#FFFFFF", "#FF0000"]
}: ProductHero2Props) {
  const [selectedColor, setSelectedColor] = React.useState(colors[0]);

  return (
    <section className="relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary-green/10 rounded-3xl transform rotate-6"></div>
              <img
                src={image}
                alt={productName}
                className="relative rounded-2xl shadow-xl w-full h-auto"
              />
              <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              New Arrival
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900">
              {productName}
            </h1>
            
            <p className="text-xl text-gray-600">
              {description}
            </p>

            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Available Colors</h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? 'border-primary' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Key Features</h3>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold text-gray-900">{price}</span>
              {originalPrice && (
                <span className="text-xl text-gray-400 line-through">
                  {originalPrice}
                </span>
              )}
            </div>

            <div className="flex gap-4">
              <button className="flex-1 px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
              <button className="w-14 h-14 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}