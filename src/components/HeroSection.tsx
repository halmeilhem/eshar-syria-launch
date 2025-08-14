import { Button } from "@/components/ui/button";
import heroImage from "@/assets/whatsapp-hero.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-brand-blue-light/10 to-brand-yellow-light/10 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="رسائل واتساب تسويقية" 
                className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-brand"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-accent rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-hero rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 text-center lg:text-right space-y-8">
            {/* Brand Name */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black text-transparent bg-gradient-hero bg-clip-text">
                إشعار
              </h1>
              <div className="w-24 h-1 bg-gradient-accent mx-auto lg:mx-0 lg:mr-auto rounded-full"></div>
            </div>

            {/* Main Message */}
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-4xl font-bold text-foreground leading-relaxed">
                لأول مرة في سوريا
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
                رسائل دعائية عن طريق الواتساب
              </p>
            </div>

            {/* Coming Soon Message */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-brand">
              <p className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                ترقبونا
              </p>
              <p className="text-muted-foreground text-lg">
                قريباً سنطلق خدمة التسويق الرقمي الأولى من نوعها
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                اشترك للإشعارات
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                تعرف أكثر
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;