
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-sunset-blue-dark/70">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sunset-orange to-sunset-gold mx-auto mb-6"></div>
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
                  <div className="w-12 h-12 rounded-full bg-sunset-orange/20 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-sunset-orange" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-medium mb-1">Our Location</h4>
                  <p className="text-gray-400">123 Tech Plaza, San Francisco, CA 94105</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-sunset-gold/20 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-sunset-gold" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-medium mb-1">Phone Number</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-sunset-orange/20 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-sunset-orange" />
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
  );
}
