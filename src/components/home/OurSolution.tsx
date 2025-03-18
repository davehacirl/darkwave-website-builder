
import { Zap, ServerCog, Brain, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function OurSolution() {
  return (
    <section id="solution" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Solution</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-white/50 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Comprehensive data intelligence solutions designed to transform raw data into actionable insights
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-panel p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <ServerCog className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Data Processing & Integration</h3>
            <p className="text-gray-400">
              Seamlessly connect and process data from multiple sources, creating a unified view of your business landscape.
            </p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white mr-2"></div>
                Real-time data processing
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white mr-2"></div>
                Multi-source integration
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white mr-2"></div>
                Data quality management
              </li>
            </ul>
          </div>
          
          <div className="glass-panel p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <Brain className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
            <p className="text-gray-400">
              Leverage the power of advanced algorithms to uncover patterns, predict outcomes, and automate decisions.
            </p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white mr-2"></div>
                Predictive analytics
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white mr-2"></div>
                Natural language processing
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white mr-2"></div>
                Anomaly detection
              </li>
            </ul>
          </div>
          
          <div className="glass-panel p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <BarChart3 className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Visualization & Reporting</h3>
            <p className="text-gray-400">
              Transform complex data into intuitive visualizations that tell a story and drive action across your organization.
            </p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white mr-2"></div>
                Interactive dashboards
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white mr-2"></div>
                Automated reporting
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white mr-2"></div>
                Custom visualization design
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button
            className="bg-white text-black px-8 py-6 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Zap className="mr-2 h-5 w-5 text-black" />
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
