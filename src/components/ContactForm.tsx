
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { LoaderCircle } from "lucide-react";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel p-6 space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Input
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="bg-dark-accent/50 border-white/10 focus:border-blue"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="bg-dark-accent/50 border-white/10 focus:border-blue"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Input
            id="subject"
            name="subject"
            placeholder="Subject"
            required
            className="bg-dark-accent/50 border-white/10 focus:border-blue"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
            className="min-h-[120px] bg-dark-accent/50 border-white/10 focus:border-blue"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue hover:bg-blue-light text-white font-medium"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
