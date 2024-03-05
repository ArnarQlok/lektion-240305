function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Upphovsrätt &copy; {year}</p>
    </footer>
  );
}

export default Footer;
