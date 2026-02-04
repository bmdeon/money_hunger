// src/components/IntroScreen.tsx
type Props = {
  title: string;
  buttonText?: string;
  youtubeId: string;
  onStart: () => void;
};

export function IntroScreen({
  title,
  buttonText = "Começar",
  youtubeId,
  onStart,
}: Props) {
  return (
    <div className="intro">
      <h1 className="intro__title">{title}</h1>

      <button className="btn-primary" onClick={onStart}>
        {buttonText}
      </button>

      <div className="intro__video">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
