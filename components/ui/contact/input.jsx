export default function Input(props) {
  return (
    <input
      {...props}
      className="w-full md:w-1/3 outline-none border border-zinc-700 bg-transparent rounded p-2 mb-4"
      autoComplete="off"
    />
  );
}
