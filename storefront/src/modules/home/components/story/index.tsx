"use client";

import React, { useState } from 'react';
import { ChevronRight, Thermometer, Droplets, Sprout, Users,Microscope,  MapPin, Calendar, FlaskConical,ThumbsUp, TrendingUp, Search } from 'lucide-react';
import Button from '../../../components/UI/Button';
import Link from "next/link";

const Story = () => {
  const [activeSection, setActiveSection] = useState(0);

  const timelineEvents = [
    {
      year: "2000-2025",
      title: "Environmental Crisis",
      description: "Shifting weather patterns threaten farms with extreme drought and heat stress",
      icon: Thermometer,
      color: "red"
    },
    {
      year: "2002",
      title: "The Discovery",
      description: "Breakthrough research on plant adaptation in geothermal conditions",
      icon: Search,
      color: "blue"
    },
            {
      year: "2003 - 2020",
      title: "Trails and Studies",
      description: "Rigorous testing is conducted exploring the relationship between microorganisms and plant life",
      icon: Microscope,
      color: "red"
    },
            {
      year: "2021",
      title: "Formulation",
      description: "Our Proprietary formulation is developed combining the most effective symbiotic microorganisms",
      icon: FlaskConical,
      color: "green"
    },
        {
      year: "2022",
      title: "Commercialization",
      description: "Crop Defense was developed for commercial use",
      icon: ThumbsUp,
      color: "purple"
    },
    {
      year: "Present",
      title: "Global Solution",
      description: "CropDefense™ transforms agriculture worldwide",
      icon: TrendingUp,
      color: "green"
    }
  ];

  const challenges = [
    {
      title: "Drought Stress",
      description: "Prolonged water scarcity affecting crop survival and yield",
      icon: Droplets,
      stat: "70% of agricultural areas affected"
    },
    {
      title: "Extreme Heat",
      description: "Rising temperatures beyond plant tolerance thresholds",
      icon: Thermometer,
      stat: "Record-breaking temperatures yearly"
    },
    {
      title: "Marginal Soil",
      description: "Poor soil quality limiting nutrient availability",
      icon: Sprout,
      stat: "40% reduction in soil fertility"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="text-center text-white max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <Sprout className="h-5 w-5 text-green-400 mr-2" />
            <span className="text-sm font-medium">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            Defending Plant Life,
            <span className="block text-primary">Strengthening Ecosystems</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed animate-slide-up opacity-90">
            Our product was developed to defend plant life and strengthen ecosystems through groundbreaking scientific discovery and relentless innovation.
          </p>
          {/* <Button size="lg" className="animate-bounce-gentle">
            Discover Our Journey
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button> */}
        </div>
      </section>

{/* Timeline Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">The Journey of Discovery</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        From crisis to breakthrough - the remarkable story behind CropDefense™
      </p>
    </div>

    {/* MOBILE TIMELINE - Show only on mobile */}
    <div className="relative block sm:hidden">
      {/* Mobile Timeline Line */}
      <div className="absolute left-6 w-1 h-full bg-gradient-to-b from-red-200 via-blue-200 to-green-200"></div>
      
      {timelineEvents.map((event, index) => (
        <div key={index} className="relative mb-16 pl-16 w-full text-left">
          <div className={`absolute top-1/2 transform -translate-y-1/2 left-0 w-12 h-12 rounded-full bg-${event.color}-500 flex items-center justify-center shadow-lg z-10`}>
            <event.icon className="h-6 w-6 text-white" />
          </div>
          
          <div className={`bg-white rounded-xl p-4 shadow-lg border-l-4 border-${event.color}-500 hover:shadow-xl transition-shadow duration-300`}>
            <div className={`text-xs font-semibold text-${event.color}-600 mb-2`}>
              {event.year}
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 break-words hyphens-auto">
              {event.title}
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">{event.description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* DESKTOP/TABLET TIMELINE - Your original code - Show on sm and above */}
    <div className="relative hidden sm:block">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-red-200 via-blue-200 to-green-200"></div>
      
      {timelineEvents.map((event, index) => (
        <div key={index} className={`relative mb-16 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 ml-auto'} w-1/2`}>
          <div className={`absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-12 h-12 rounded-full bg-${event.color}-500 flex items-center justify-center shadow-lg z-10`}>
            <event.icon className="h-6 w-6 text-white" />
          </div>
          
          <div className={`bg-white rounded-xl p-2 sm:p-6 shadow-lg border-l-4 border-${event.color}-500 hover:shadow-xl transition-shadow duration-300`}>
            <div className={`text-xs sm:text-sm font-semibold text-${event.color}-600 mb-2`}>
              {event.year}
            </div>
            <h3 className="text-sm sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 break-words hyphens-auto">
              {event.title}
            </h3>
            <p className="text-xs sm:text-base text-gray-600 leading-relaxed">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Environmental Challenges Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Environmental Challenges in Agriculture</h2>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
        Since the beginning of agriculture, farmers have been vulnerable to environmental challenges such as drought, heat, and marginal soil. The United States has experienced extreme or exceptional drought and heat stress for 23 of the past 24 years since 2000.
      </p>
    </div>

    {/* Combined Visual Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      {/* Cracked Mud Visual */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <img
          src="https://images.pexels.com/photos/7836300/pexels-photo-7836300.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Cracked Mud - Environmental Challenge"
          className="w-full h-100 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-xl font-bold mb-2">The Reality of Climate Change</h3>
          <p className="text-sm opacity-90">Cracked earth tells the story of agricultural vulnerability</p>
        </div>
      </div>

      {/* US Drought Monitor */}
      <div className="bg-white rounded-2xl shadow-lg">
        
        <div className="relative">
          <img
            src="/us/drought.jpg"
            alt="US Drought Monitor Map 2022"
            className="w-full h-100 object-fit rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 rounded-xl" />
          <div className="absolute bottom-3 left-3 bg-white/60 backdrop-blur-0 rounded-lg p-3">
            <p className="text-xs font-semibold text-gray-900">2022 Drought Severity Map</p>
            <p className="text-xs text-gray-600">Extreme conditions affecting agricultural regions</p>
          </div>
        </div>
      </div>
    </div>

    {/* Challenge Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {challenges.map((challenge, index) => (
        <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6">
            <challenge.icon className="h-8 w-8 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{challenge.title}</h3>
          <p className="text-gray-600 text-center mb-4">{challenge.description}</p>
          <div className="bg-red-50 rounded-lg p-3 text-center">
            <span className="text-sm font-semibold text-red-700">{challenge.stat}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Discovery Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-6">
          <Calendar className="h-4 w-4 text-blue-600 mr-2" />
          <span className="text-sm font-semibold text-blue-800">2002 Discovery</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">The Discovery of Fungal Endophytes</h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          In 2002, our team made a significant discovery regarding how plants adapt to heat stress. Research on species in geothermal soil revealed that plants can sometimes survive in extreme conditions through a remarkable partnership.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Key Finding</h3>
          <p className="text-blue-800">
            Plant health is greatly influenced by a symbiotic relationship with fungal endophytes, which not only protect against heat stress but also a wide array of other environmental stressors.
          </p>
        </div>

      </div>
      
      <div className="flex justify-center">
        <div className="relative overflow-hidden rounded-2xl shadow-xl max-w-md">
          <img
            src="/us/nationalpark.jpg"
            alt="Geothermal Soil in Yellowstone National Park"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm font-semibold">Yellowstone National Park</p>
            <p className="text-xs opacity-80">Geothermal research site</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Field Tests Section */}
<section className="py-20 bg-primary text-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="flex justify-center">
        <div className="relative overflow-hidden rounded-2xl shadow-xl max-w-md">
          <img
            src="/us/growth.jpg"
            alt="Crop Growth Results"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <p className="text-sm font-semibold">Field Test Results</p>
            <p className="text-xs opacity-80">Proven crop enhancement</p>
          </div>
        </div>
      </div>
      <div className="text-center lg:text-left">
        <h2 className="text-4xl font-bold mb-6 ">Field Tests</h2>
        <p className="text-xl mb-8  opacity-90">
          CropDefense™ produces the most powerful endophytes on the planet. 
          Farmers globally have collected data to validate these claims.
        </p>
        <Button 
          variant="secondary" 
          size="lg"
          className="bg-black text-white hover:bg-black/90 hover:text-white-900 border-0"
          onClick={() => window.open('/Field_Test.pdf', '_blank')}
        
        >
          Learn More About Our Results
          <TrendingUp className="ml-2 h-5 w-5" />
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold mb-2 ">70%</div>
            <p className="text-sm  opacity-90">Yield Increase</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold mb-2 ">50+</div>
            <p className="text-sm  opacity-90">Countries Tested</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold mb-2 ">1000+</div>
            <p className="text-sm  opacity-90">Farmers Partnered</p>
          </div>
        </div>
      </div>


    </div>
  </div>
</section>



      {/* Partnership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Global Partnership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We work with farmers around the world to help crops grow stronger, more resilient, and more productive than ever before.
            </p>
            
<div className="flex flex-col sm:flex-row gap-6 justify-center">
  <Link href="/contact">
  <Button variant="outline" size="lg" className="bg-black text-white hover:bg-black/90 hover:text-white-900 border-0">
    Let's Work Together
    <Users className="ml-2 h-5 w-5" />
  </Button></Link>
  
  <Link href="/store">
  <Button variant="outline" size="lg" className="border-gray-300 text-gray-900 bg-white hover:bg-black hover:text-white-900">
    See Our Products
    <ChevronRight className="ml-2 h-5 w-5" />
  </Button></Link>
</div>
          </div>

          {/* Global Impact Visual */}
          <div className="bg-gray-50 rounded-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">North America</h3>
                <p className="text-gray-600">Leading agricultural innovation</p>
              </div>
              <div>
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Europe</h3>
                <p className="text-gray-600">Sustainable farming practices</p>
              </div>
              <div>
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Asia</h3>
                <p className="text-gray-600">Feeding growing populations</p>
              </div>
              <div>
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Africa</h3>
                <p className="text-gray-600">Climate resilient agriculture</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;