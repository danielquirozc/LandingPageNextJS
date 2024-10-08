export default function Testimony({ testimony, name, position }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35px"
        height="35px"
        viewBox="0 0 24 24"
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#ef4444"
            d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
          />
        </g>
      </svg>
      <p className="text-medium text-start text-pretty leading-snug text-slate-300 mt-2 max-w-xl *:mb-4">
        &quot;{testimony}&quot;
      </p>
      <h3 className="text-sm mt-5 text-start text-slate-400">
        - {name}, {position}
      </h3>
    </>
  );
}
