export default function Menu({ text, src }: { text: string; src: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <img src={src} alt="" className="w-[69px]" />
      <span className="text-[12px]">{text}</span>
    </div>
  );
}
