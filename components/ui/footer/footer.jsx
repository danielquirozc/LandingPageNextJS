import Logo from "@ui/logo";

export default function Footer() {
  return (
    <footer className="flex flex-col text-center lg:text-start lg:flex-row items-center mt-20 pb-5 font-inter min-h-36 gap-5 bg-zinc-900 border-t border-zinc-800">
      <div className="flex flex-col items-center gap-2 mx-5 my-5">
        <Logo />
      <p className="text-sm text-slate-400 ml-auto mr-5">© 2023 TechPro. All rights reserved.</p> 
      </div>

      <ul className="w-full lg:w-auto">
        <h1 className="text-sm font-bold italic">FOLLOW US</h1>
        <li className="font-medium text-sm text-slate-400">
          <a href="https://github.com/danielquirozc" target="_blank">Github</a>
        </li>
        <li className="font-medium text-sm text-slate-400">PortFolio</li>
      </ul>
      <ul className="w-full lg:w-auto">
        <h1 className="text-sm font-bold italic">LEGAL</h1>
        <li className="font-medium text-sm text-slate-400">Terms and Conditions</li>
        <li className="font-medium text-sm text-slate-400">Privacy Policy</li>
      </ul>
    </footer>
  );
}