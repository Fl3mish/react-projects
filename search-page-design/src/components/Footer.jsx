const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-2  bg-violet-100 text-violet-400 text-sm">
      <div>(this is not a real site)</div>
      <div>
        <p>
          Made with <i className="fa-solid fa-heart text-red-600"></i> and
          <a href="https://tailwindcss.com" target="_blank">
            {" "}
            <span className="underline text-violet-600">Tailwind CSS</span>
          </a>
        </p>
      </div>
      <div>Created by Mitch Pauwels</div>
    </footer>
  );
};
export default Footer;
