export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 py-8 bg-darkBg">
      <p className="text-accentYellow text-center">&copy; {currentYear}</p>
    </footer>
  );
};
