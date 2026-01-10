"use client";

import React, { useState } from 'react';
import {
  ChevronRight,
  Check,
  Zap,
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
  MapPin,
  Beaker,
  Target,
  FlaskConical,
  Microscope,
  Sprout,
  ArrowDown
} from 'lucide-react';
import Button from '../../../components/UI/Button';

const Boost = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const benefits = [
    {
      icon: <Beaker className="h-6 w-6" />,
      title: "Mineral Absorption",
      description: "Bacteria solubilize soil minerals and nutrients to enhance crop production"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Enhanced Nutrient Availability",
      description: "Increases the availability of plant nutrients through the root system"
    },
    {
      icon: <FlaskConical className="h-6 w-6" />,
      title: "Easy Integration",
      description: "Compatible with all seed treating equipment and most treatment chemicals"
    }
  ];

  const applicationMethods = [
    {
      title: "Seed Treatment",
      description: "Dissolve in CropDefense™ Shield solution and apply to dry seed",
      icon: <Sprout className="h-8 w-8" />,
      details: "Achieve optimal seed coverage by dissolving CropDefense™ Boost in CropDefense™ Shield solution. Apply within 4 hours of mixing. Do not tank-mix with fungicides or biocides."
    },
    {
      title: "In Furrow Application",
      description: "Add to delivery tank with water and CropDefense™ Shield",
      icon: <ArrowDown className="h-8 w-8" />,
      details: "Add to delivery tank containing water and CropDefense™ Shield. Apply directly onto seeds during planting. Use solution within 4 hours of mixing."
    },
    {
      title: "Foliar Spray",
      description: "Mix with water first, then add to spray tank with Shield",
      icon: <Droplets className="h-8 w-8" />,
      details: "Empty contents into 1 quart water, mix until dissolved, then add to spray tank containing CropDefense™ Shield for foliar application."
    }
  ];

  const activeIngredients = [
    { name: "Bacillus licheniformis", concentration: "~1x10⁸ CFU/g (approx.)" },
    { name: "Bacillus megaterium", concentration: "~1x10⁸ CFU/g (approx.)" },
    { name: "Bacillus pumilus", concentration: "~1x10⁸ CFU/g (approx.)" },
    { name: "Bacillus subtilis", concentration: "~1x10⁸ CFU/g (approx.)" },
    { name: "Bacillus amyloliquefaciens", concentration: "~1x10⁸ CFU/g (approx.)" }
  ];

  const specifications = [
    { label: "Inert Ingredient", value: "Sucrose Powder" },
    { label: "Density", value: "0.676g/ml @ 68°F" },
    { label: "Net Weights", value: "1.4, 2.8, 3.5, 149 oz. (40, 80, 100, 4225g)" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 100, 200, 0.7), rgba(0, 50, 150, 0.8)), url(https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="text-center text-white max-w-5xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Zap className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in tracking-tight">
            CropDefense™
            <span className="block text-4xl md:text-6xl text-blue-200 mt-2">Boost</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-slide-up max-w-4xl mx-auto">
            Endophytes* are beneficial microorganisms that live between living plant cells and strengthen the plant’s natural immune system and stress response.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="animate-bounce-gentle bg-blue-600 hover:bg-blue-700">
              Learn More
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-800">
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
                Advanced Bacterial Nutrient Enhancement
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The microbes in <strong>CropDefense™ Boost</strong> will remain inactive until soil moisture
                levels are sufficient to stimulate seed germination. Upon activation, the microbes establish
                in rhizosphere soils and solubilize bound minerals and nutrients.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                <strong>CropDefense™ Boost</strong> is formulated to be compatible with all existing seed
                treatment equipment and certain chemicals* and can be simply added as an additional component
                during the seed/crop treatment process.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Water Soluble Powder</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">5 Beneficial Bacterial Strains</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Equipment Compatible</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Works with Shield</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="CropDefense Boost in action"
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
              Unlock the full potential of soil nutrients with advanced bacterial technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                  <div className="text-blue-600">{benefit.icon}</div>
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
              Flexible application options designed to work seamlessly with CropDefense™ Shield
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applicationMethods.map((method, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => toggleSection(`method-${index}`)}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-md">
                  <div className="text-blue-600">{method.icon}</div>
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
                  className="mt-4 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Active Ingredients */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-6">
                <div className="flex items-center">
                  <Microscope className="h-6 w-6 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold">Active Ingredients</h3>
                    <p className="text-blue-100 mt-1">Five beneficial bacterial strains</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {activeIngredients.map((ingredient, index) => (
                    <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <span className="font-semibold text-blue-600 italic">{ingredient.name}</span>
                          <p className="text-sm text-gray-600 mt-1">({ingredient.concentration})</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Specifications */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-purple-600 text-white p-6">
                <div className="flex items-center">
                  <Package className="h-6 w-6 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold">Product Details</h3>
                    <p className="text-purple-100 mt-1">Physical properties and packaging</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {specifications.map((spec, index) => (
                    <div key={index} className={`flex justify-between items-center py-3 ${index < specifications.length - 2 ? 'border-b border-gray-200' : ''}`}>
                      <div className="flex-1">
                        <span className={`${index === 0 ? 'font-semibold text-purple-600' : 'text-gray-700'}`}>
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
        </div>
      </section>

      {/* Detailed Instructions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Directions for Use</h2>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 mb-8 border-l-4 border-yellow-400">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Application Notice</h3>
                <p className="text-yellow-700 mb-2">
                  <strong>Do not tank-mix with fungicides or products containing biocides.</strong>
                  CropDefense™ Boost and CropDefense™ Shield are living organisms.
                </p>
                <p className="text-yellow-700">
                  Always use the combined solution within 4 hours of mixing.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Application Notes</h3>
              <ul className="space-y-3 text-blue-800">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Do not use with soil fumigants
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Use solution within 4 hours of mixing
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Do not exceed label dosage rates
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Always use separate tanks with other chemicals
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Compatibility</h3>
              <p className="text-green-800 mb-4">
                Ask us for approved chemicals tested for compatibility with CropDefense™ Boost.
              </p>
              <p className="text-green-800 mb-4">
                Compatible with all seed treating equipment and most treatment chemicals, fertilizers, and biologicals*.
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
                  <li>• Keep container closed until use</li>
                  <li>• Avoid direct sunlight</li>
                  <li>• Do not expose to temperatures above 80°F/27°C</li>
                  <li>• Use by expiration date for best results</li>
                  <li>• Contains live microbes - follow storage guidelines</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Handling & Caution</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Safety Guidelines</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>• Microbes are not harmful to humans</li>
                  <li>• Use gloves, eye protection, and mask if sensitive</li>
                  <li>• Do not swallow or breathe powder</li>
                  <li>• Wash hands with soap and water after use</li>
                  <li>• Keep out of reach of children and pets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Statement */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Warranty Statement</h2>
            <p className="text-lg leading-relaxed text-blue-100 mb-6">
              The seller warrants that this product contains a minimum number of viable beneficial
              microorganisms as indicated on this label. The seller makes no other warranty expressed
              or implied as to product viability or performance since storage, use and growing conditions
              are beyond the seller's control.
            </p>
            <p className="text-blue-200">
              Seller's guarantee is limited to the terms set out on the label and subject thereto.
              Buyer assumes the risk to persons or property arising from the use or handling of this
              product and accepts the product on that condition.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Maximize Your Nutrient Potential</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unlock the power of soil minerals with CropDefense™ Boost and experience enhanced crop production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => window.open('/us/store')}>
              View Product Page
              <Package className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" onClick={() => window.open('/us/products/1-acre-cropdefense-shield')}>
              Try CropDefense™ Shield
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Boost;