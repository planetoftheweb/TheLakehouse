import React, { useState } from 'react';
import { Menu, MapPin, Phone, Mail, ChevronDown, Facebook, Instagram, Twitter, Clock, Calendar, Users, X } from 'lucide-react';
import { ReservationModal } from './components/ReservationModal';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <ReservationModal 
        isOpen={isReservationModalOpen} 
        onClose={() => setIsReservationModalOpen(false)} 
      />
      
      {/* Hero Section */}
      <header className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("/photos/industrialchefcutting.jpeg")',
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
          }}
        />
        <nav className="relative z-30 flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <img src="/artwork/logo-lettermark.svg" alt="The Lakehouse" className="h-12 brightness-0 invert" />
          </div>
          <div className="hidden md:flex items-center space-x-8 text-white">
            <a href="#menu" className="hover:text-gray-300">Menu</a>
            <a href="#locations" className="hover:text-gray-300">Locations</a>
            <a href="#events" className="hover:text-gray-300">Events</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <button 
              className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100"
              onClick={() => setIsReservationModalOpen(true)}
            >
              Reserve
            </button>
          </div>
          <button 
            className="md:hidden text-white z-50"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <div className={`
          fixed inset-0 bg-black bg-opacity-90 z-40 transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-white text-2xl">
            <a href="#menu" className="hover:text-gray-300" onClick={toggleMobileMenu}>Menu</a>
            <a href="#locations" className="hover:text-gray-300" onClick={toggleMobileMenu}>Locations</a>
            <a href="#events" className="hover:text-gray-300" onClick={toggleMobileMenu}>Events</a>
            <a href="#about" className="hover:text-gray-300" onClick={toggleMobileMenu}>About</a>
            <button 
              className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100"
              onClick={() => {
                setIsReservationModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
            >
              Reserve
            </button>
          </div>
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to The Lakehouse</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Experience rustic elegance and innovative cuisine in a warm, welcoming atmosphere
          </p>
          <div className="flex space-x-4">
            <button 
              className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100"
              onClick={() => setIsReservationModalOpen(true)}
            >
              Reserve a Table
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900">
              View Menu
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <ChevronDown size={40} className="text-white animate-bounce" />
        </div>
      </header>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Starters</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium">Parmesan Deviled Eggs</h4>
                    <p className="text-gray-600">Organic eggs, fresh Parmesan, chopped pine nuts</p>
                  </div>
                  <span className="text-lg">$9</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium">Artichokes with Garlic Aioli</h4>
                    <p className="text-gray-600">Olive oil and rosemary blend, creamy garlic aioli</p>
                  </div>
                  <span className="text-lg">$9</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium">French Onion Soup</h4>
                    <p className="text-gray-600">Caramelized onions, savory broth, sourdough, provolone blend</p>
                  </div>
                  <span className="text-lg">$8</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium">Mini Cheeseburgers</h4>
                    <p className="text-gray-600">Fresh pretzel bun, lettuce, tomato, avocado, choice of cheese</p>
                  </div>
                  <span className="text-lg">$10</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium">Panko Stuffed Mushrooms</h4>
                    <p className="text-gray-600">Cream cheese, bacon, panko stuffing, cheddar cheese</p>
                  </div>
                  <span className="text-lg">$9</span>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-6 mt-12">Entrees</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium">Classic Burger</h4>
                    <p className="text-gray-600">100% pure angus beef, lettuce, tomatoes, onions, pickles, choice of cheese</p>
                  </div>
                  <span className="text-lg">$12</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium">Tomato Bruschetta Tortellini</h4>
                    <p className="text-gray-600">Cheese tortellini, sundried tomato sauce, bruschetta</p>
                  </div>
                  <span className="text-lg">$14</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium">Handcrafted Pizza</h4>
                    <p className="text-gray-600">Thin crust, fresh toppings, choice of sauce. Includes two toppings</p>
                  </div>
                  <span className="text-lg">$12</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium">Barbecued Tofu Skewers</h4>
                    <p className="text-gray-600">Tofu, vegetables, ginger sesame sauce, steamed rice</p>
                  </div>
                  <span className="text-lg">$12</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium">Fiesta Family Platter</h4>
                    <p className="text-gray-600">Buffalo wings, nachos, quesadillas, guacamole</p>
                  </div>
                  <span className="text-lg">$20</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Salads</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium">Garden Select</h4>
                    <p className="text-gray-600">Fresh local, organically grown ingredients</p>
                  </div>
                  <span className="text-lg">$10</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium">House Salad</h4>
                    <p className="text-gray-600">Romaine, spinach, fresh vegetables, choice of dressing</p>
                  </div>
                  <span className="text-lg">$7</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium">Chef's Salad</h4>
                    <p className="text-gray-600">Grilled chicken, eggs, cheese, vegetables, croutons</p>
                  </div>
                  <span className="text-lg">$12</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium">Quinoa Salmon Salad</h4>
                    <p className="text-gray-600">Quinoa, tomatoes, cucumber, smoked salmon</p>
                  </div>
                  <span className="text-lg">$14</span>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-6 mt-12">Desserts</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium">Crème Brûlée</h4>
                    <p className="text-gray-600">Vanilla custard, caramelized sugar, seasonal fruit</p>
                  </div>
                  <span className="text-lg">$9</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium">Cheesecake</h4>
                    <p className="text-gray-600">New York Style, choice of seasonal toppings</p>
                  </div>
                  <span className="text-lg">$9</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium">Chocolate Chip Brownie</h4>
                    <p className="text-gray-600">Warm brownie, ice cream, chocolate sauce</p>
                  </div>
                  <span className="text-lg">$8</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium">Apple Pie</h4>
                    <p className="text-gray-600">Local granny smith apples, classic recipe</p>
                  </div>
                  <span className="text-lg">$7</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium">Mixed Berry Tart</h4>
                    <p className="text-gray-600">Raspberries, blueberries, strawberries, crispy tart</p>
                  </div>
                  <span className="text-lg">$8</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800">
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Portland, Maine</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin size={20} className="mr-2 text-gray-600" />
                  <span>123 Main Street, Old Port</span>
                </div>
                <div className="flex items-center">
                  <Clock size={20} className="mr-2 text-gray-600" />
                  <span>Open daily 3:00 – 10:30</span>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="mr-2 text-gray-600" />
                  <span>(555) 123-4567</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Asheville, NC</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin size={20} className="mr-2 text-gray-600" />
                  <span>456 River Road</span>
                </div>
                <div className="flex items-center">
                  <Clock size={20} className="mr-2 text-gray-600" />
                  <span>Tue – Sun 3:30 – 10:00</span>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="mr-2 text-gray-600" />
                  <span>(555) 234-5678</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Boulder, CO</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin size={20} className="mr-2 text-gray-600" />
                  <span>789 Mountain View Dr</span>
                </div>
                <div className="flex items-center">
                  <Clock size={20} className="mr-2 text-gray-600" />
                  <span>Open daily 3:00 – 10:30</span>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="mr-2 text-gray-600" />
                  <span>(555) 345-6789</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Nashville, TN</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin size={20} className="mr-2 text-gray-600" />
                  <span>321 Music Row</span>
                </div>
                <div className="flex items-center">
                  <Clock size={20} className="mr-2 text-gray-600" />
                  <span>Open daily 3:00 – 10:30</span>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="mr-2 text-gray-600" />
                  <span>(555) 456-7890</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Charleston, SC</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin size={20} className="mr-2 text-gray-600" />
                  <span>567 King Street</span>
                </div>
                <div className="flex items-center">
                  <Clock size={20} className="mr-2 text-gray-600" />
                  <span>Tue – Sun 3:30 – 10:00</span>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="mr-2 text-gray-600" />
                  <span>(555) 567-8901</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Special Events & Catering</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img 
                src="/photos/cookiechefs.jpeg" 
                alt="Events at The Lakehouse" 
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Create Lasting Memories</h3>
              <p className="text-gray-600 mb-6">
                From intimate gatherings to corporate events, we offer customized catering and event planning services that reflect your unique style and preferences. Our team handles everything from custom menu planning to full event coordination.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Calendar className="mr-4 text-gray-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-medium">Custom Menu Planning</h4>
                    <p className="text-gray-600">Our chefs will work with you to develop a tailored menu that reflects your group's tastes, dietary needs, and event theme.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="mr-4 text-gray-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-medium">Full-Service Events</h4>
                    <p className="text-gray-600">From setup to cleanup, our team ensures your event runs smoothly. We can coordinate entertainment, handle logistics, and manage all the details.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <h4 className="text-lg font-medium">Perfect For:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Corporate Events & Business Meetings</li>
                  <li>Weddings & Rehearsal Dinners</li>
                  <li>Family Celebrations</li>
                  <li>Holiday Parties</li>
                </ul>
              </div>
              <button 
                className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800"
                onClick={() => setIsReservationModalOpen(true)}
              >
                Plan Your Event
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="/photos/fishplate.jpeg" 
                alt="Signature Dish" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="/photos/spinachsalad.jpeg" 
                alt="Fresh Salads" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="/photos/croissant.jpeg" 
                alt="Fresh Pastries" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                The Lakehouse Restaurant offers a memorable menu with selections innovated by our founding owner/chefs. 
                Our atmosphere is a balance of what we think of as functional minimalist industrial with pops of rustic 
                elegant touches. This results in an open, welcoming space that seamlessly supports the tastes and comfort 
                of our patrons while serving as a purposeful, efficient workspace for our employees.
              </p>
              <p className="text-gray-600 mb-6">
                We source from area organic farmers and socially responsible enterprises, offering fine dining without 
                the conventional stiffness that can detract from the experience. Our mission is to provide our customers 
                with a memorable and remarkable dining experience that supports and reflects their creativity and individuality.
              </p>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Our Values - BRAVE</h3>
                <ul className="space-y-4 text-gray-600">
                  <li><strong>Balance:</strong> Maintaining harmony in flavors, prices, and work-life balance</li>
                  <li><strong>Responsible:</strong> Taking ownership of our actions and quality</li>
                  <li><strong>Altruistic:</strong> Supporting our internal and external community</li>
                  <li><strong>Versatile:</strong> Adapting to customer needs and preferences</li>
                  <li><strong>Ethical:</strong> Maintaining honesty and transparency in all operations</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-4">
                <img src="/artwork/icon-organic.svg" alt="Organic" className="h-12" />
                <img src="/artwork/icon-vegan.svg" alt="Vegan Options" className="h-12" />
                <img src="/artwork/icon-gluttenfree.svg" alt="Gluten Free" className="h-12" />
                <img src="/artwork/icon-paleo.svg" alt="Paleo" className="h-12" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <img 
                  src="/photos/cookiechefs.jpeg" 
                  alt="Our Chefs" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <img 
                  src="/photos/oldercouple.jpeg" 
                  alt="Happy Customers" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden col-span-2">
                <img 
                  src="/photos/chefsandwich.jpeg" 
                  alt="Chef Preparing Food" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                "This is my favorite local restaurant in the area. The owners are personable, the space is amazing, and the food is delicious. I love to take advantage of the outdoor tables on warm nights. Their waitress, Tracy, is always super friendly and makes us feel right at home."
              </p>
              <p className="font-semibold">- Gabriel Souza</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                "We brought my grandma here to celebrate her 60th birthday and it was a fantastic experience. I am a huge fan of their handmade pizzas, and my grandma loved their pasta. The desserts are great too! Thanks for making her celebration one we won't forget."
              </p>
              <p className="font-semibold">- Philip Ransu</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                "What a great restaurant! This place is nice and intimate and was perfect for our small get together with about 10 friends. I love their farm to table concept, and that the food is organic. The staff are friendly, the food is excellent, and the ambience was perfect."
              </p>
              <p className="font-semibold">- Sophie Dupont</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex space-x-4">
              <Facebook size={24} className="hover:text-gray-300 cursor-pointer" />
              <Instagram size={24} className="hover:text-gray-300 cursor-pointer" />
              <Twitter size={24} className="hover:text-gray-300 cursor-pointer" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>info@lakehousefood.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Portland, Maine</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Hours</h3>
            <p>Monday - Sunday</p>
            <p>3:00 PM - 10:30 PM</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for updates and special offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-l-full text-gray-900 flex-1"
              />
              <button className="bg-white text-gray-900 px-6 py-2 rounded-r-full hover:bg-gray-100">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} The Lakehouse Restaurant. All rights reserved.
          </p>
          <p className="text-center text-gray-500 text-sm mt-2">
            This demo includes AI-generated content.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;