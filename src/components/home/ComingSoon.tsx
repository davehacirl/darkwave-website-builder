
import { Clock, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ComingSoon() {
  return (
    <section id="coming-soon" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Coming <span className="text-gradient">Soon</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sunset-orange to-sunset-gold mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We're constantly innovating. Here's a sneak peek at what's next on our roadmap.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-panel p-6 border-t-4 border-t-sunset-orange">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-sunset-orange mr-3" />
              <h3 className="text-xl font-semibold">Q3 2025</h3>
            </div>
            <h4 className="text-lg font-medium mb-3">Real-Time Analytics Platform</h4>
            <p className="text-gray-400 mb-4">
              Process and visualize streaming data in real-time with our next-generation analytics engine.
            </p>
            <div className="w-full bg-white/10 rounded-full h-2 mt-4">
              <div className="bg-gradient-to-r from-sunset-orange to-sunset-gold h-2 rounded-full w-4/5"></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">80% Complete</p>
          </div>
          
          <div className="glass-panel p-6 border-t-4 border-t-sunset-gold">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-sunset-gold mr-3" />
              <h3 className="text-xl font-semibold">Q4 2025</h3>
            </div>
            <h4 className="text-lg font-medium mb-3">Advanced NLP Engine</h4>
            <p className="text-gray-400 mb-4">
              Extract insights from unstructured text data with our new natural language processing capabilities.
            </p>
            <div className="w-full bg-white/10 rounded-full h-2 mt-4">
              <div className="bg-gradient-to-r from-sunset-orange to-sunset-gold h-2 rounded-full w-3/5"></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">60% Complete</p>
          </div>
          
          <div className="glass-panel p-6 border-t-4 border-t-sunset-orange">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-sunset-orange mr-3" />
              <h3 className="text-xl font-semibold">Q1 2026</h3>
            </div>
            <h4 className="text-lg font-medium mb-3">Data Intelligence Mobile App</h4>
            <p className="text-gray-400 mb-4">
              Access your analytics dashboard and receive insights on the go with our new mobile application.
            </p>
            <div className="w-full bg-white/10 rounded-full h-2 mt-4">
              <div className="bg-gradient-to-r from-sunset-orange to-sunset-gold h-2 rounded-full w-2/5"></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">40% Complete</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            className="border-sunset-orange/20 hover:bg-sunset-orange/5 text-white text-lg px-8 py-6"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Join the Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
}
