
import { Users, Star, Brain, Lock } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-sunset-blue-dark/70">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sunset-orange to-sunset-gold mx-auto"></div>
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
              <div className="w-16 h-16 rounded-full bg-sunset-orange/20 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-sunset-orange" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Expert Team</h4>
              <p className="text-gray-400">Data scientists with 10+ years experience</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-sunset-gold/20 flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-sunset-gold" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Proven Results</h4>
              <p className="text-gray-400">200+ successful client implementations</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-sunset-orange/20 flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-sunset-orange" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Advanced AI</h4>
              <p className="text-gray-400">Cutting-edge machine learning models</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-sunset-gold/20 flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 text-sunset-gold" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Data Security</h4>
              <p className="text-gray-400">Enterprise-grade security standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
