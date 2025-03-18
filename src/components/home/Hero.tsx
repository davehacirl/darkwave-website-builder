import { ArrowDown, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="welcome" className="min-h-screen flex items-center relative pt-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Aidan McHugh</span> has great 
            <span className="text-gradient"> dance moves</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Unlock the power of advanced analytics and AI-driven insights to make better business decisions.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button 
              className="bg-white hover:bg-gray-200 text-black text-lg px-8 py-6"
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
        
        <div className="hidden md:block absolute top-1/3 right-10 transform -translate-y-1/2">
          <div className="relative">
            <BarChart3 className="h-14 w-14 text-white/30 animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-10 w-10 text-white/50" />
        </div>
      </div>
    </section>
  );
}
