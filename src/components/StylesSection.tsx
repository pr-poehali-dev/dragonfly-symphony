import { useState } from "react";
import Icon from "@/components/ui/icon";

const styles = [
  {
    title: "Романтика",
    emoji: "🌸",
    image: "https://cdn.poehali.dev/projects/d4aa5165-587a-422c-affb-ae55e93d482b/files/8ea94b29-851b-478e-9d80-4ad3613164c3.jpg",
    description: "Нежный образ в цветах, мягкий свет и воздушная атмосфера",
    prompt: "A dreamy portrait of a beautiful young woman surrounded by soft pink and lavender flowers, ethereal lighting, romantic pastel tones, fashion editorial style, cinematic quality, soft bokeh background",
  },
  {
    title: "Ретро-гламур",
    emoji: "✨",
    image: "https://cdn.poehali.dev/projects/d4aa5165-587a-422c-affb-ae55e93d482b/files/dcd51405-7d9b-4edd-b664-b1a0f6a4480d.jpg",
    description: "Голливудский шик 50-х: золотой свет, элегантность и характер",
    prompt: "Glamorous 1950s Hollywood portrait of an elegant woman, vintage retro aesthetic, warm golden tones, classic red lips, pearls, cinematic film photography style, old Hollywood lighting",
  },
  {
    title: "Тёмное фэнтези",
    emoji: "🌙",
    image: "https://cdn.poehali.dev/projects/d4aa5165-587a-422c-affb-ae55e93d482b/files/bf739d06-2903-4efb-b6c6-14ea89f0c0e4.jpg",
    description: "Мистический лес, лунный свет и загадочный образ лесной феи",
    prompt: "Mysterious gothic fairytale portrait of a young woman in an enchanted forest, moonlight, dark romantic atmosphere, black floral dress, dramatic cinematic lighting, fantasy editorial photography",
  },
  {
    title: "Киберпанк",
    emoji: "💜",
    image: "https://cdn.poehali.dev/projects/d4aa5165-587a-422c-affb-ae55e93d482b/files/4ad66cc3-a6a6-4e20-8a14-939c7cba4a58.jpg",
    description: "Неоновые огни, футуристичный образ и атмосфера будущего",
    prompt: "Futuristic cyberpunk portrait of a beautiful woman, neon pink and purple lights, metallic futuristic outfit, night city background, glowing neon reflections, high fashion editorial, cinematic quality",
  },
  {
    title: "Бохо",
    emoji: "🌿",
    image: "https://cdn.poehali.dev/projects/d4aa5165-587a-422c-affb-ae55e93d482b/files/461b0357-9fd3-4011-ae74-e2a6451e32ab.jpg",
    description: "Золотой час, поле цветов и лёгкое платье — свобода и природа",
    prompt: "Bohemian cottagecore portrait of a young woman in a wildflower field, golden hour sunlight, flowing white dress, natural beauty, warm soft tones, dreamy pastoral editorial photography",
  },
  {
    title: "Аниме",
    emoji: "🌺",
    image: "https://cdn.poehali.dev/projects/d4aa5165-587a-422c-affb-ae55e93d482b/files/0c4b4cb5-b028-4d56-889d-74ed503fe7ca.jpg",
    description: "Японская эстетика, сакура и пастельные тона в стиле аниме",
    prompt: "Anime style portrait of a cute young woman with sakura blossoms, pastel pink background, kawaii fashion aesthetic, soft watercolor illustration style, delicate details, dreamy digital art",
  },
];

const StylesSection = () => {
  const [copied, setCopied] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            ✦ коллекция образов
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            6 стилей — готово к публикации
          </h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-xl mx-auto">
            Копируй промпт, вставляй в нейросеть и получай свой образ за секунды
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((style, i) => (
            <div
              key={i}
              className="group rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-2xl">{style.emoji}</span>
                  <h3 className="text-white text-xl font-bold mt-1">{style.title}</h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-muted-foreground text-sm mb-4">{style.description}</p>

                <div className="bg-muted rounded-2xl p-3 mb-3">
                  <p className="text-xs text-muted-foreground font-medium mb-1 uppercase tracking-wide">Промпт</p>
                  <p className="text-xs text-foreground leading-relaxed line-clamp-3">{style.prompt}</p>
                </div>

                <button
                  onClick={() => handleCopy(style.prompt, i)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-200"
                >
                  {copied === i ? (
                    <>
                      <Icon name="Check" size={15} />
                      Скопировано!
                    </>
                  ) : (
                    <>
                      <Icon name="Copy" size={15} />
                      Скопировать промпт
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StylesSection;
