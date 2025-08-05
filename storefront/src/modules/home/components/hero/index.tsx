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
    { name: 'Rice', image: 'https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Cotton', image: 'https://images.pexels.com/photos/5640079/pexels-photo-5640079.jpeg?auto=compress&cs=tinysrgb&w=400' },
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

            <Button variant="outline" size="lg" onClick={() => window.open('/us/compactability.pdf', '_blank')}>
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
{/* Crops Tested */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">Crops Tested</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {testedCrops.map((crop, index) => (
          <div
            key={index}
            className="group bg-gray-50 rounded-2xl p-6 text-center 
                       hover:bg-primary hover:shadow-lg transition-all duration-300 cursor-pointer
                       border border-gray-100 hover:border-primary
                       hover:-translate-y-1 transform"
          >
            {/* Tick Icon */}
            <div className="mb-4 flex justify-center">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center
                              shadow-sm group-hover:shadow-md transition-all duration-300">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Crop Name */}
            <span className="text-sm font-medium text-black">
              {crop}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Contact Form */}
<section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
  {/* Background pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}></div>
  </div>

  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <h2 className="text-5xl font-bold text-black mb-6 leading-tight">
        Ready to Transform <br />
        <span className="text-black/80">Your Agriculture?</span>
      </h2>
      <p className="text-xl text-black/80 max-w-3xl mx-auto">
        Inquire about samples or full scale application. Let's discuss how our innovative solutions can benefit your crops.
      </p>
    </div>

    <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
      {isSubmitted ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Check className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
          <p className="text-lg text-gray-600 mb-8">Thank you for reaching out. We'll get back to you within 24 hours.</p>
          <div className="inline-flex items-center space-x-2 text-primary font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>We've received your inquiry</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                First Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl 
                           focus:outline-none focus:ring-0 focus:border-primary focus:bg-white
                           transition-all duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="Enter your first name"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Last Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl 
                           focus:outline-none focus:ring-0 focus:border-primary focus:bg-white
                           transition-all duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="Enter your last name"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Email Address *
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl 
                         focus:outline-none focus:ring-0 focus:border-primary focus:bg-white
                         transition-all duration-200 text-gray-900 placeholder-gray-500"
                placeholder="your.email@example.com"
                required
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Your Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl 
                       focus:outline-none focus:ring-0 focus:border-primary focus:bg-white
                       transition-all duration-200 text-gray-900 placeholder-gray-500 resize-none"
              placeholder="Tell us about your project, crop type, scale of application, or any specific questions you have..."
              required
            />
            <div className="text-xs text-gray-500 text-right">
              {formData.message.length}/500 characters
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 space-y-4 sm:space-y-0">
            {/* <div className="flex items-center space-x-2 text-sm text-gray-600">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>We typically respond within 24 hours</span>
            </div> */}
            
            <button
              type="submit"
              className="group bg-black relative px-8 py-4 bg-gradient-to-r from-primary to-primary/90 
                       text-white font-semibold rounded-xl shadow-lg hover:shadow-xl 
                       hover:shadow-primary/25 transition-all duration-200 
                       hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-primary/20
                       disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
            >
              <span className="relative flex items-center justify-center space-x-2">
                <span>Send Message</span>
                {/* <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg> */}
              </span>
            </button>
          </div>
        </form>
      )}
    </div>

    {/* Contact info cards */}
    {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Quick Response</h3>
        <p className="text-white/80 text-sm">24-hour response guarantee</p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Expert Support</h3>
        <p className="text-white/80 text-sm">Agricultural specialists ready to help</p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Custom Solutions</h3>
        <p className="text-white/80 text-sm">Tailored to your specific needs</p>
      </div>
    </div> */}
  </div>
</section>
    </div>
  );
};

export default Hero
