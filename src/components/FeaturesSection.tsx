import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      title: "وصول مباشر",
      description: "تواصل مع عملائك مباشرة عبر الواتساب",
      icon: "💬"
    },
    {
      title: "معدل فتح عالي",
      description: "نسبة فتح تصل إلى 98% مقارنة بـ 20% للإيميل",
      icon: "📈"
    },
    {
      title: "سهولة الاستخدام",
      description: "واجهة بسيطة وسهلة للإدارة والمتابعة",
      icon: "⚡"
    },
    {
      title: "تكلفة أقل",
      description: "أوفر من الطرق التقليدية للتسويق",
      icon: "💰"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            لماذا التسويق عبر الواتساب؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف مزايا التسويق الحديث والفعال
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-brand transition-all duration-300 transform hover:-translate-y-2 border-border/50">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;