
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { 
  ArrowDown, 
  Database, 
  BarChart3, 
  Brain, 
  Lock, 
  Zap, 
  Mail, 
  MapPin, 
  Phone, 
  Rocket,
  Star,
  Clock,
  Users,
  DataProcessors
} from 'lucide-react';

export default function Index() {
  // Adding title to the page
  useEffect(() => {
    document.title = "Data Intelligence | Advanced Analytics Solutions";
  }, []);

  return (
    <div className="min-h-screen bg-dark bg-data-pattern bg-fixed overflow-x-hidden">
      <Navbar />
      
      {/* Welcome Section */}
      <section id="welcome" className="min-h-screen flex items-center relative pt-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-gradient">Data</span> Into 
              <span className="text-gradient"> Intelligence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Unlock the power of advanced analytics and AI-driven insights to make better business decisions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Button 
                className="bg-blue hover:bg-blue-light text-white text-lg px-8 py-6"
                onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Solutions
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 hover:bg-white/5 text-white text-lg px-8 py-6"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </div>
          </div>
          
          {/* Animated data elements */}
          <div className="hidden md:block absolute top-1/2 left-10 transform -translate-y-1/2">
            <div className="relative">
              <Database className="h-16 w-16 text-blue/30 animate-pulse-slow" />
            </div>
          </div>
          <div className="hidden md:block absolute top-1/3 right-10 transform -translate-y-1/2">
            <div className="relative">
              <BarChart3 className="h-14 w-14 text-purple/30 animate-pulse-slow" style={{ animationDelay: '1s' }} />
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-10 w-10 text-white/50" />
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="about" className="py-20 bg-dark-accent/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Us</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue to-purple mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                Pioneering Data Intelligence for the Digital Age
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At Data Intelligence, we believe that data is the most valuable asset in today's digital landscape. 
                Our mission is to help organizations harness the full potential of their data through cutting-edge 
                analytics, machine learning, and artificial intelligence.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Founded by a team of data scientists and industry experts, we've been at the forefront of the data 
                revolution for over a decade. Our solutions have helped hundreds of businesses across finance, healthcare, 
                retail, and manufacturing sectors transform their operations and achieve measurable results.
              </p>
            </div>
            
            <div className="glass-panel p-8 grid grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue/20 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Expert Team</h4>
                <p className="text-gray-400">Data scientists with 10+ years experience</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple/20 flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-purple" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Proven Results</h4>
                <p className="text-gray-400">200+ successful client implementations</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue/20 flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-blue" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Advanced AI</h4>
                <p className="text-gray-400">Cutting-edge machine learning models</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple/20 flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-purple" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Data Security</h4>
                <p className="text-gray-400">Enterprise-grade security standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Solution Section */}
      <section id="solution" className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Solution</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue to-purple mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Comprehensive data intelligence solutions designed to transform raw data into actionable insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,112,243,0.15)]">
              <div className="w-14 h-14 rounded-full bg-blue/20 flex items-center justify-center mb-6">
                <DataProcessors className="h-7 w-7 text-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Processing & Integration</h3>
              <p className="text-gray-400">
                Seamlessly connect and process data from multiple sources, creating a unified view of your business landscape.
              </p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue mr-2"></div>
                  Real-time data processing
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue mr-2"></div>
                  Multi-source integration
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue mr-2"></div>
                  Data quality management
                </li>
              </ul>
            </div>
            
            <div className="glass-panel p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(109,40,217,0.15)]">
              <div className="w-14 h-14 rounded-full bg-purple/20 flex items-center justify-center mb-6">
                <Brain className="h-7 w-7 text-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
              <p className="text-gray-400">
                Leverage the power of advanced algorithms to uncover patterns, predict outcomes, and automate decisions.
              </p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple mr-2"></div>
                  Predictive analytics
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple mr-2"></div>
                  Natural language processing
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple mr-2"></div>
                  Anomaly detection
                </li>
              </ul>
            </div>
            
            <div className="glass-panel p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,112,243,0.15)]">
              <div className="w-14 h-14 rounded-full bg-blue/20 flex items-center justify-center mb-6">
                <BarChart3 className="h-7 w-7 text-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Visualization & Reporting</h3>
              <p className="text-gray-400">
                Transform complex data into intuitive visualizations that tell a story and drive action across your organization.
              </p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue mr-2"></div>
                  Interactive dashboards
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue mr-2"></div>
                  Automated reporting
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue mr-2"></div>
                  Custom visualization design
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button
              className="bg-gradient-to-r from-blue to-purple hover:from-blue-light hover:to-purple-light text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="mr-2 h-5 w-5" />
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-dark-accent/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Contact <span className="text-gradient">Us</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue to-purple mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Have questions or ready to start your data intelligence journey? Get in touch with our team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our experts are available to answer your questions and discuss how our solutions can benefit your organization.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue/20 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-blue" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-medium mb-1">Our Location</h4>
                    <p className="text-gray-400">123 Tech Plaza, San Francisco, CA 94105</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-purple/20 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-purple" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-medium mb-1">Phone Number</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue/20 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-medium mb-1">Email Address</h4>
                    <p className="text-gray-400">info@dataintelligence.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Coming Soon Section */}
      <section id="coming-soon" className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Coming <span className="text-gradient">Soon</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue to-purple mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We're constantly innovating. Here's a sneak peek at what's next on our roadmap.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-panel p-6 border-t-4 border-t-blue">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue mr-3" />
                <h3 className="text-xl font-semibold">Q3 2023</h3>
              </div>
              <h4 className="text-lg font-medium mb-3">Real-Time Analytics Platform</h4>
              <p className="text-gray-400 mb-4">
                Process and visualize streaming data in real-time with our next-generation analytics engine.
              </p>
              <div className="w-full bg-white/10 rounded-full h-2 mt-4">
                <div className="bg-gradient-to-r from-blue to-purple h-2 rounded-full w-4/5"></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">80% Complete</p>
            </div>
            
            <div className="glass-panel p-6 border-t-4 border-t-purple">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-purple mr-3" />
                <h3 className="text-xl font-semibold">Q4 2023</h3>
              </div>
              <h4 className="text-lg font-medium mb-3">Advanced NLP Engine</h4>
              <p className="text-gray-400 mb-4">
                Extract insights from unstructured text data with our new natural language processing capabilities.
              </p>
              <div className="w-full bg-white/10 rounded-full h-2 mt-4">
                <div className="bg-gradient-to-r from-blue to-purple h-2 rounded-full w-3/5"></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">60% Complete</p>
            </div>
            
            <div className="glass-panel p-6 border-t-4 border-t-blue">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue mr-3" />
                <h3 className="text-xl font-semibold">Q1 2024</h3>
              </div>
              <h4 className="text-lg font-medium mb-3">Data Intelligence Mobile App</h4>
              <p className="text-gray-400 mb-4">
                Access your analytics dashboard and receive insights on the go with our new mobile application.
              </p>
              <div className="w-full bg-white/10 rounded-full h-2 mt-4">
                <div className="bg-gradient-to-r from-blue to-purple h-2 rounded-full w-2/5"></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">40% Complete</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button
              variant="outline"
              className="border-white/20 hover:bg-white/5 text-white text-lg px-8 py-6"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Join the Waitlist
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-dark-accent border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-gradient">dataintelligence.com</h2>
              <p className="text-gray-400 mt-2">Transform your data into intelligence</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Careers
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Data Intelligence Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
