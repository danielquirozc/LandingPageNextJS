export default function ServiceItem({ title }) {
  return (
    <>
      <h2
        className="text-2xl px-4 group-hover:opacity-70 opacity-50 font-bold text-white"
      >
        {title}
      </h2>
    </>
  );
}