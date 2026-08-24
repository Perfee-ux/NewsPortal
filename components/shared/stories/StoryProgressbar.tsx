interface StoryProgressBarProps {
  total: number;
  current: number;
}

export default function StoryProgressBar({ total, current }: StoryProgressBarProps) {
  return (
    <div className="flex gap-1 px-3 pt-3">
      {Array.from({ length: total }).map((_, index) => (
        <div key={index} className="h-1 flex-1 overflow-hidden rounded-full bg-white/30">
          <div className={`h-full bg-white ${index <= current ? "w-full" : "w-0"}`} />
        </div>
      ))}
    </div>
  );
}