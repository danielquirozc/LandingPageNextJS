"use client"
import { useFormStatus } from 'react-dom'

export default function Button({ pendingText, buttonText }) {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      type="submit"
      className={`w-full md:w-1/3 bg-zinc-300 text-black border-zinc-800 border font-medium py-2 px-4 rounded-lg`}
    >
      {pending ? pendingText : buttonText}
    </button>
  );
}
