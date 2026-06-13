const steps = [
  {
    number: "01",
    emoji: "✨",
    title: "Выбери стиль",
    description: "Листай галерею и выбирай образ, который откликается — романтика, киберпанк, бохо или аниме.",
  },
  {
    number: "02",
    emoji: "📋",
    title: "Скопируй промпт",
    description: "Нажми кнопку «Скопировать промпт» под понравившимся образом — готовый текст уже в буфере.",
  },
  {
    number: "03",
    emoji: "🤖",
    title: "Создай образ",
    description: "Вставь промпт в Midjourney, DALL·E или любую другую нейросеть и получи свой уникальный образ.",
  },
  {
    number: "04",
    emoji: "🌟",
    title: "Публикуй в блог",
    description: "Загружай готовый образ в соцсети — твой визуал будет выделяться и привлекать аудиторию.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6" style={{ background: "hsl(300 25% 96%)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            ✦ всё просто
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Как это работает
          </h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-lg mx-auto">
            От идеи до поста в Instagram — 4 простых шага
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px border-t-2 border-dashed border-border z-0" />
              )}
              <div className="relative z-10 w-20 h-20 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center text-3xl shadow-md mb-5">
                {step.emoji}
              </div>
              <span className="text-xs font-bold tracking-widest text-primary/50 mb-1">{step.number}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <div className="inline-block bg-card border border-border rounded-3xl px-8 py-6 max-w-lg">
            <p className="text-2xl mb-2">💡</p>
            <p className="text-foreground font-medium">
              Работает с любой нейросетью
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Midjourney · DALL·E · Stable Diffusion · Ideogram · Adobe Firefly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
