
import { ArrowDown, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="welcome" className="min-h-screen flex items-center relative pt-20 bg-cover bg-center" style={{ backgroundImage: 'url("/lovable-uploads/277d2f8a-dd6c-484e-93e4-9f0a0afbd7ec.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
      <div className="absolute inset-0 bg-gradient-to-t from-sunset-blue-dark to-transparent opacity-90"></div>
      <div className="section-container relative z-10">
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
              className="bg-sunset-orange hover:bg-sunset-orange-light text-sunset-blue-dark text-lg px-8 py-6"
              onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Solutions
            </Button>
            <Button 
              variant="outline" 
              className="border-sunset-orange/20 hover:bg-sunset-orange/5 text-white text-lg px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>
        </div>
        
        {/* Animated data elements */}
        <div className="hidden md:block absolute top-1/3 right-10 transform -translate-y-1/2">
          <div className="relative">
            <BarChart3 className="h-14 w-14 text-sunset-orange/70 animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-10 w-10 text-sunset-orange/70" />
        </div>
      </div>
    </section>
  );
}
