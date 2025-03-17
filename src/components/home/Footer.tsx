
export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-input">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Data Intelligence</h2>
            <p className="text-gray-400 mt-2">Transform your data into intelligence</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Careers
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-input flex flex-col items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Data Intelligence Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
