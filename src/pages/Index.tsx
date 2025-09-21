import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  const poemCategories = [
    {
      title: "Любовная лирика",
      description: "Стихи о любви и страсти",
      count: 12,
      icon: "Heart",
      poems: [
        { title: "Я помню чудное мгновенье", year: "1825" },
        { title: "Я вас любил", year: "1829" },
        { title: "Мадонна", year: "1830" }
      ]
    },
    {
      title: "Природа",
      description: "Пейзажная лирика",
      count: 8,
      icon: "TreePine",
      poems: [
        { title: "Зимнее утро", year: "1829" },
        { title: "Осень", year: "1833" },
        { title: "Туча", year: "1835" }
      ]
    },
    {
      title: "Дружба",
      description: "Стихи о товариществе",
      count: 6,
      icon: "Users",
      poems: [
        { title: "19 октября", year: "1825" },
        { title: "К Чаадаеву", year: "1818" },
        { title: "Пущину", year: "1826" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-accent/50">
      {/* Header */}
      <header className="border-b border-primary/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-serif font-bold golden-gradient">
              Александр Сергеевич Пушкин
            </h1>
            <div className="flex items-center gap-4">
              <Icon name="BookOpen" size={24} className="text-primary" />
              <Icon name="Feather" size={24} className="text-secondary" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl font-serif font-bold text-muted">
                Солнце русской поэзии
              </h2>
              <p className="text-xl prose-pushkin">
                Александр Сергеевич Пушкин (1799-1837) — величайший русский поэт, 
                драматург и прозаик, заложивший основы русского реалистического направления, 
                создатель современного русского литературного языка.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="border-primary text-primary">
                  1799-1837
                </Badge>
                <Badge variant="outline" className="border-secondary text-secondary">
                  Поэт
                </Badge>
                <Badge variant="outline" className="border-primary text-primary">
                  Драматург
                </Badge>
              </div>
            </div>
            <div className="flex justify-center animate-scale-in">
              <Card className="elegant-card max-w-md">
                <CardContent className="p-6">
                  <img 
                    src="/img/f6000e1f-18d0-4d79-9758-1ae4ad5e2c7f.jpg" 
                    alt="Портрет А.С. Пушкина"
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Biography Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-serif font-bold text-center mb-12 golden-gradient">
            Жизнь и творчество
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="elegant-card animate-fade-in">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon name="GraduationCap" size={24} className="text-primary" />
                  <CardTitle className="font-serif">Детство и юность</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="prose-pushkin">
                  Родился в Москве в дворянской семье. Воспитывался французскими гувернёрами, 
                  рано приобщился к литературе. В 1811 году поступил в Царскосельский лицей.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="elegant-card animate-fade-in" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon name="Pen" size={24} className="text-secondary" />
                  <CardTitle className="font-serif">Творческий расцвет</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="prose-pushkin">
                  1820-1830 годы — период создания величайших произведений: 
                  "Евгений Онегин", "Борис Годунов", "Маленькие трагедии".
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="elegant-card animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon name="Crown" size={24} className="text-primary" />
                  <CardTitle className="font-serif">Наследие</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="prose-pushkin">
                  Создал около 800 лирических стихотворений, несколько поэм, 
                  сказок и повестей. Его творчество стало основой русской литературы.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Poems Catalog */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-serif font-bold text-center mb-12 golden-gradient">
            Каталог стихотворений
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {poemCategories.map((category, index) => (
              <Card key={category.title} className="elegant-card animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon name={category.icon as any} size={24} className="text-primary" />
                      <CardTitle className="font-serif">{category.title}</CardTitle>
                    </div>
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                  <CardDescription className="prose-pushkin">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.poems.map((poem) => (
                      <div key={poem.title} className="flex justify-between items-center p-3 rounded-md bg-accent/20 hover:bg-accent/30 transition-colors cursor-pointer">
                        <span className="poem-text text-sm">{poem.title}</span>
                        <Badge variant="outline" className="text-xs">{poem.year}</Badge>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Читать все стихи
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Famous Quote */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-3xl font-serif italic text-muted mb-4 animate-fade-in">
            "Чувства добрые я лирой пробуждал..."
          </blockquote>
          <cite className="text-primary font-semibold">— А.С. Пушкин</cite>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted text-muted-foreground py-8 border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-6 mb-4">
            <Icon name="BookOpen" size={20} />
            <Icon name="Feather" size={20} />
            <Icon name="Heart" size={20} />
          </div>
          <p className="text-sm">
            © 2024 Поэтическое наследие А.С. Пушкина
          </p>
        </div>
      </footer>
    </div>
  );
}