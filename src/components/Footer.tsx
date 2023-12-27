export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 by Sardor Madaminov:
        <a className="text-dark" href="https://www.instagram.com/sardormd/">
          @sardor_md
        </a>{" "}
        |
        <a
          className="text-dark"
          href="https://www.linkedin.com/in/sardor-madaminov/"
        >
          LinkedIn
        </a>{" "}
        |
        <a className="text-dark" href="https://www.sardor-m.dev/">
          sardor-m.dev
        </a>
      </div>
    </footer>
  );
}
