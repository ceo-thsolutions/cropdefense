"use client";

import React, { useState } from 'react';
import {
  ChevronRight,
  Check,
  Shield,
  Droplets,
  Thermometer,
  Leaf,
  AlertTriangle,
  Info,
  Package,
  Users,
  Award,
  Calendar,
  Truck,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Button from '../../../components/UI/Button';

const CDShield = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const benefits = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Higher Stress Tolerance",
      description: "Protects crops from extreme temperatures, drought, and salt stress"
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Increased Nutrient Absorption",
      description: "Optimizes nutrient uptake and utilization for better crop performance"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Greater Crop Yields",
      description: "Proven to significantly increase overall crop productivity"
    }
  ];

  const applicationMethods = [
    {
      title: "Seed Treatment",
      description: "Apply directly to dry seed for optimal coverage",
      icon: <Package className="h-8 w-8" />,
      details: "Dilute with water and apply within 4 hours. Can be used with other registered treatments when applied from separate tanks."
    },
    {
      title: "In Furrow Application",
      description: "Apply directly onto seeds during planting",
      icon: <Truck className="h-8 w-8" />,
      details: "Dilute with water or fertilizer and apply during planting process. Use solution within 4 hours of mixing."
    },
    {
      title: "Foliar Spray",
      description: "Apply during vegetative or reproductive growth stages",
      icon: <Droplets className="h-8 w-8" />,
      details: "Dilute with water and apply directly onto plant tissue. Effective during both vegetative and reproductive phases."
    }
  ];

  const specifications = [
    { label: "Active Ingredient", value: "Trichoderma harzianum (~1x10⁶ spores/ml approx.)" },
    { label: "Inert Ingredients", value: "Water (H₂O)" },
    { label: "Density", value: "1kg/liter" },
    { label: "Net Volume", value: "4 or 169 fl. oz. (118 or 4,998 ml)" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 100, 0, 0.7), rgba(0, 50, 0, 0.8)), url(https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="text-center text-white max-w-5xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Shield className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in tracking-tight">
            CropDefense™
            <span className="block text-4xl md:text-6xl text-green-200 mt-2">Shield</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-slide-up max-w-4xl mx-auto">
            An endophytic* inoculant which establishes a beneficial symbiosis with treated plants, increasing crop yields and tolerance to environmental stress.

          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="animate-bounce-gentle bg-green-600 hover:bg-green-700">
              Learn More
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-800">
              View Product Details
            </Button>
          </div> */}
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced Crop Protection Technology
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                CropDefense™ Shield is designed to increase crop yields and tolerance to environmental stress
                including extreme temperatures, drought, salt stress, and nutrient deficiencies. Shield
                achieves this by forming a symbiotic relationship, which lends treated plants a reduced
                reactive oxygen species (ROS) response to environmental stress.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">OMRI Certified</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Easy Application</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Liquid Formulation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Beneficial Microorganisms</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="CropDefense Shield in action"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Agricultural Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how CropDefense™ Shield transforms your agricultural operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-6">
                  <div className="text-green-600">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Methods</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple application options for maximum flexibility and effectiveness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applicationMethods.map((method, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => toggleSection(`method-${index}`)}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-md">
                  <div className="text-green-600">{method.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>

                {expandedSection === `method-${index}` && (
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <p className="text-sm text-gray-700">{method.details}</p>
                  </div>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                >
                  {expandedSection === `method-${index}` ? 'Less Info' : 'More Info'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Specifications</h2>
            <p className="text-xl text-gray-600">Detailed composition and guaranteed analysis</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="bg-green-600 text-white p-6">
              <h3 className="text-2xl font-bold">Guaranteed Analysis</h3>
              <p className="text-green-100 mt-2">Contains Non-Plant Food Ingredients</p>
            </div>

            <div className="p-8">
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className={`flex justify-between items-center py-3 ${index < 3 ? 'border-b border-gray-200' : ''}`}>
                    <div className="flex-1">
                      <span className={`${index === 0 ? 'font-semibold text-green-600' : 'text-gray-700'}`}>
                        {spec.label}:
                      </span>
                      {spec.value && (
                        <span className="text-gray-600 ml-2">{spec.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mixing & Application Instructions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mixing & Application Instructions</h2>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 mb-8 border-l-4 border-yellow-400">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Safety Notice</h3>
                <p className="text-yellow-700">
                  <strong>Product mortality will occur if mixed in same tank as chemicals.</strong>
                  CropDefense™ Shield can be applied with other registered seed treatments only if done from a separate tank.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Usage Guidelines</h3>
              <ul className="space-y-3 text-blue-800">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Use solution within 4 hours of mixing
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Do not use with soil fumigants
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Do not exceed label dosage rates
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Always use separate tanks when other chemicals are necessary
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Compatibility</h3>
              <p className="text-green-800 mb-4">
                Ask us for approved chemicals tested for compatibility with CropDefense™ Shield.
              </p>
              {/* <Button className="bg-green-600 hover:bg-green-700">
                Get Compatibility List
                <Info className="ml-2 h-4 w-4" />
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Storage & Handling */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Storage & Disposal</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <Thermometer className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Temperature Requirements</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>• Keep from direct sunlight</li>
                  <li>• Avoid temperatures above 75°F (25°C)</li>
                  <li>• Best stored at refrigeration temperatures (40°F/4°C)</li>
                  <li>• Contains living microbes - follow expiration date</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Safe Handling</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Safety Guidelines</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>• Microbes are not harmful to humans</li>
                  <li>• Use gloves, eye protection, and mask if sensitive</li>
                  <li>• Wash hands with soap and water after use</li>
                  <li>• Keep out of reach of children and pets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Statement */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Warranty Statement</h2>
            <p className="text-lg leading-relaxed text-green-100">
              The seller warrants that this product contains a minimum number of viable beneficial
              microorganisms as indicated on this label. The seller makes no other warranty expressed
              or implied as to product viability or performance since storage, use and growing conditions
              are beyond the seller's control.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Boost Your Crop Yields?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the power of CropDefense™ Shield and transform your agricultural operations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={() => window.open('/us/store')}>
              View Product Page
              <Package className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" onClick={() => window.open('/us/products/1-acre-cropdefense-boost')}>
              Try CropDefense™ Boost
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CDShield;