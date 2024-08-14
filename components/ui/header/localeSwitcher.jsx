"use client";
import { useParams, useRouter } from "next/navigation";
import { usePathname } from "@/navigation";
import { locales } from "@/config";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const handleChange = (nextLocale) => {
    const newPath = `/${nextLocale}${pathname}`;
    router.replace(newPath, { locale: nextLocale });
  };

  const options = locales.map((locale, i) => {
    if (locale.code === params.locale) return;

    return (
      <li
        onClick={() => handleChange(locale.code)}
        className="cursor-pointer rounded-md bg-zinc-800 p-2"
        key={i}
      >
        <a className="whitespace-no-wrap gap-x-2 px-3 py-2">
          <span>{locale.name}</span>
        </a>
      </li>
    );
  });

  return (
    <div className="group flex justify-center items-center flex-col text-center text-white text-xs font-semibold  transition-all">
      <button
        type="button"
        className="inline-flex relative bg-zinc-800 rounded-md justify-start items-center gap-x-2 px-3 py-2"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <span>{locales.find((locale) => locale.code === params.locale).name}</span>
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 15L12 9L18 15"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <ul className="group-hover:block my-1 group-hover:animate-fade-down group-hover:animate-duration-200 hidden pt-0.5">
        {options}
      </ul>
    </div>
  );
}
