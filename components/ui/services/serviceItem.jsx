export default function ServiceItem({ title }) {
  return (
    <div 
      className="text-center group border border-zinc-800 bg-zinc-900 w-full min-h-[200px] max-w-[300px] place-content-center flex-1 rounded-lg" 
    >
      <h2
        className="text-2xl px-4 group-hover:opacity-70 opacity-50 font-bold text-white"
      >
        {title}
      </h2>
    </div>
  );
}