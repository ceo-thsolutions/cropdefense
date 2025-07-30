"use client";

import React, { useState } from 'react';
import { ChevronRight, Check, Minus, Plus, FileText, Wheat, Apple, Carrot } from 'lucide-react';
import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input';

const Hero = () => {
   const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const benefits = [
    'Increase crop yields',
    'Increase plant biomass',
    'Increase nutrient use efficiency (NUE) and yield nutrient density',
  ];

  const reductions = [
    'Reduce abiotic stress',
    'Reduce water and nutrient requirements',
    'Reduce reliance on pesticides',
  ];

  const compatibilities = [
    'Compatible with many Ag-chemicals',
    'Compatible with all seed treating equipments',
    'Apply to seed, in-furrow or foliar spray (into R phase)',
  ];

  const millingCrops = [
    { name: 'Rice', image: 'https://images.pexels.com/photos/33239/rice-field-vietnam-agriculture.jpg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Cotton', image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Alfalfa', image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  const nutritionCrops = [
    { name: 'Legumes', image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Berries', image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Vegetables', image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  const testedCrops = [
    'Alfalfa', 'Carrot', 'Dry Beans', 'Lentils', 'Onion', 'Rice', 'Sugar Beets', 'Soybean',
    'Barley', 'Corn', 'Field Peas', 'Millet', 'Pasture Grass', 'Sesame', 'Sunflower',
    'Blueberries', 'Cotton', 'Guar', 'Potato', 'Mung Bean', 'Wheat', 'Sorghum',
    'Canola', 'Cucumber', 'Leafy Greens', 'Okra', 'Raspberry',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            CropDefense™
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-slide-up">
            Our OMRI certified microbial seed + plant treatment increases crop yields up to 70% on both organic and conventional crops alike. It improves nutrient density and tolerance to environmental stressors, such as extreme temperatures, drought, and infertile soil.
          </p>
          <Button size="lg" className="animate-bounce-gentle">
            Learn More
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* CropDefense Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Wheat className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">CropDefense™ products</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Products contain proprietary blends of symbiotic microbes and fungal endophytes to organically increase the yield, nutrient density, and stress tolerance of crops. This provides resistance to drought, flooding, extreme temperatures, infertile soil and more.
            </p>
          </div>
        </div>
      </section>

      {/* CropDefense vs Other Symbionts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">CropDefense™ vs Other Symbionts</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Benefits */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-6">
                  <Plus className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reductions */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-6">
                  <Minus className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Reductions</h3>
                <ul className="space-y-3">
                  {reductions.map((reduction, index) => (
                    <li key={index} className="flex items-start">
                      <Minus className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{reduction}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compatibilities */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-6">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Compatibilities & Application</h3>
                <ul className="space-y-3">
                  {compatibilities.map((compatibility, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{compatibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button variant="outline" size="lg">
              Check Chemical Compatibility Doc
              <FileText className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Improved Milling and Ginning */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Improved Milling and Ginning</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {millingCrops.map((crop, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl shadow-lg mb-4 transform transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={crop.image}
                      alt={crop.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {crop.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Improved Nutrition and Shelf-life */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Improved Nutrition and Shelf-life</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {nutritionCrops.map((crop, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl shadow-lg mb-4 transform transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={crop.image}
                      alt={crop.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {crop.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Crops Tested */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Crops Tested</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {testedCrops.map((crop, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <span className="text-sm font-medium">{crop}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Inquire about samples or full scale application
            </h2>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thanks for submitting!</h3>
                <p className="text-gray-600">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div className="text-center">
                  <Button type="submit" size="lg">
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero
