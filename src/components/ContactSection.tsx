import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-t from-brand-blue-light/5 to-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            ابق على تواصل معنا
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            سجل بياناتك لتكون أول من يعلم بإطلاق الخدمة
          </p>

          <Card className="p-8 lg:p-12 bg-card border-border/50 shadow-brand">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  قريباً جداً
                </h3>
                <p className="text-muted-foreground text-lg">
                  نعمل بجد لتقديم أفضل خدمة تسويق رقمي في سوريا
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-brand-blue">📱</span>
                  <span>واتساب</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-brand-yellow">⚡</span>
                  <span>سريع</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">🇸🇾</span>
                  <span>محلي</span>
                </div>
              </div>

              <Button variant="accent" size="lg" className="text-xl px-12 py-6">
                أشعرني عند الإطلاق
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;