"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, ChevronDown, ChevronUp, Users, MessageCircle, Globe, Shield } from 'lucide-react';
import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the difference between CropDefense™ Shield and CropDefense™ Boost?",
      answer: "Shield increases stress tolerance in addition to both water and nutrient use efficiency. Boost is a microbial fertilizer that provides nutrients and assists in mineralizing nutrients from the soil. The best examples we have seen so far are in Ghana and India, where stresses are high and the combination of products compensate for 100% of the fertilizer normally applied. The combination of Shield and Boost products work synergistically, conferring elevated stress tolerance and resource availability."
    },
    {
      question: "How many applications are recommended per crop? Is there any data of further benefits from additional application?",
      answer: "The optimal situation is to first treat seeds so germlings can get established sooner and stronger, and then follow that with a later season foliar spray either just before forecasted heat waves or when plants are in reproductive stage. In the US, the best results occur when farmers foliar apply between late July and mid-August. Times may vary seasonally in Africa. A second foliar application may be applied any time during the growing season – especially if plants appear stressed. Some crops such as maize that grow quite tall, due to height limitations, may require earlier second foliar application depending upon the equipment available to farmers. For non-annual crops such as alfalfa that are grown for 3-7 years and have multiple cuttings during the growing season, several applications during growing season has shown added positive benefits in plant health and yields."
    },
    {
      question: "It can be difficult to understand around how such a small amount of product can have an impact on such a large amount of farmland. What is a way of effectively communicating this?",
      answer: "Think of it this way - each 4oz bottle of Shield contains more than 14 billion spores and the optimal application rates range from 100 to 1000 spores/plant. These spores are microscopic – tiny, and not visible to the naked eye. Our products are very concentrated, allowing for easy transport that is cost effective. These savings we pass along to the farmer. It may be a small package, but the products are packed full to provide optimal results to large amounts of acres."
    },
    {
      question: "What sets CropDefense™ Shield apart from other Trichoderma products on the market?",
      answer: "Virtually all Trichoderma products on the market are described similarly. The main difference that sets our product apart is that the CropDefense™ fungi are endophytes and do not live in soil, but instead within the non-reproductive plant tissues. These unique Trichoderma endophytes are not able to survive in the surrounding soils as they cannot compete with other microbes. They chose an alternative lifestyle and live symbiotically within plants. These fungi communicate with the plants and through direct manipulation of plant gene expression from inside the plants. They are able to help the plant, and in so doing itself - the fungi, survive stressful environments. Together the plant and fungi work to mutually to benefit both partners in the relationship."
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@cropdefense.com",
      description: "Send us your questions anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 8AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Agriculture Blvd",
      description: "Innovation City, State 12345"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/325944/pexels-photo-325944.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <MessageCircle className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in">
            Connect with us
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-slide-up opacity-90 max-w-3xl mx-auto">
            Whether you are a farm owner or an affiliate, we look forward to working together to combat world hunger and create agricultural stability for us all. Feel free to contact us with any further questions!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      {/* <section className="py-20 bg-white relative -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{info.title}</h3>
                <p className="text-lg font-medium text-primary mb-2 text-center">{info.details}</p>
                <p className="text-gray-600 text-center text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Enquire Form</h2>
            <p className="text-xl text-gray-600">
              Ready to transform your agricultural practices? Let's start the conversation.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">Thank you for reaching out!</h3>
                <p className="text-lg text-gray-600 mb-2">We've received your message and will get back to you soon.</p>
                <p className="text-sm text-gray-500">Our team typically responds within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Input
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="text-lg"
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="text-lg"
                  />
                </div>
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="text-lg"
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your farming needs, questions, or how we can help..."
                    required
                  />
                </div>
                <div className="text-center pt-4">
                  <Button type="submit" size="lg" className="px-12 bg-black">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-3 mb-6">
              <MessageCircle className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-semibold text-primary">Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">FAQ Section</h2>
            <p className="text-xl text-gray-600">
              Get answers to the most common questions about CropDefense™ products.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="h-6 w-6 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-8 pb-6">
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA Section */}
      {/* <section className="py-20 bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-8">
              Join thousands of farmers worldwide who are already benefiting from CropDefense™ technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Farm Owners</h3>
              <p className="text-white opacity-80">Increase yields and crop resilience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Affiliates</h3>
              <p className="text-white opacity-80">Partner with innovative agriculture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Distributors</h3>
              <p className="text-white opacity-80">Bring solutions to your region</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="secondary">
                Become a Partner
                <Users className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Download Brochure
                <MessageCircle className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;