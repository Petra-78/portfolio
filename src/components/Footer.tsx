// ============================================================
// ANCHOR ELEMENT TYPING
// ------------------------------------------------------------
// We introduce one new concept here: typing event handlers
// and HTML element props. You'll see this pattern constantly
// in real React + TypeScript codebases.
// ============================================================

// ─────────────────────────────────────────────────────────────
// CHILD: ContactItem
// ------------------------------------------------------------
// A small reusable component for each piece of contact info.
// Notice the props can accept an optional 'href' — if it's
// provided we wrap the content in an <a>, otherwise just <p>.
// ─────────────────────────────────────────────────────────────

interface ContactItemProps {
  text: string;
  href?: string; // optional — not every contact item is a link
}

function ContactItem({ text, href }: ContactItemProps) {
  // ----------------------------------------------------------
  // CONDITIONAL RENDERING WITH TERNARY
  // If href exists → render a link
  // If not → render a plain paragraph
  //
  // This is cleaner than two separate if/return blocks
  // for something this simple.
  // ----------------------------------------------------------
  return href ? (
    <a
      href={href}
      className="text-white/80 text-lg hover:text-[#aef5c5] transition-colors duration-200"
    >
      {text}
    </a>
  ) : (
    <p className="text-white/80 text-lg">{text}</p>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN: Footer
// ─────────────────────────────────────────────────────────────

export default function Footer() {
  // ----------------------------------------------------------
  // TYPED CONSTANT ARRAYS
  // ------------------------------------------------------------
  // We define the contact details as a typed array right inside
  // the component. The type is inferred automatically here —
  // TypeScript sees 'text' is always a string and 'href' is
  // sometimes a string, sometimes missing, so it types it as
  // { text: string; href?: string }[] on its own.
  //
  // Keeping data close to where it's used is fine for small,
  // static content like this. For bigger data, use a data file
  // like we did with projects.
  // ----------------------------------------------------------
  const contactItems = [
    { text: 'Velence, Hungary' },
    {
      text: 'partos.petra.0305@gmail.com',
      href: 'mailto:partos.petra.0305@gmail.com',
    },
  ];

  return (
    <footer
      className="
        flex justify-center items-center w-full min-h-[70vh]
        mt-24 px-6 py-16
        bg-[url('/images/website-images.png')] bg-right-bottom bg-no-repeat bg-[length:400px]
        max-[550px]:bg-none
      "
    >
      <div
        className="
          grid grid-cols-2 gap-12 w-full max-w-[1100px]
          bg-[#040d12a4] border-2 border-[#aef5c5] rounded-2xl p-12
          max-[950px]:grid-cols-1 max-[550px]:p-8
        "
      >
        {/* ---- LEFT: contact info ---- */}
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-white text-[2.5rem] font-medium font-['Lexend_Deca',sans-serif] max-[950px]:text-[1.8rem]">
            Contact me
          </h2>

          <p className="text-white/70 text-base leading-relaxed max-w-sm">
            Feel free to reach out if you'd like to work on a project together
            or have any questions.
          </p>

          {/* --------------------------------------------------
            .map() over our contactItems array.
            TypeScript knows exactly what shape each item is,
            so you get autocomplete on 'item.text' and 'item.href'
            inside this callback — try it in your editor!
            -------------------------------------------------- */}
          <div className="flex flex-col gap-3">
            {contactItems.map((item) => (
              <ContactItem key={item.text} text={item.text} href={item.href} />
            ))}
          </div>
        </div>

        {/* ---- RIGHT: image ---- */}
        <div className="flex justify-center items-center">
          <img
            src="/images/footer-image.png"
            alt="graphic line art"
            className="w-full max-w-[350px] object-contain opacity-90"
          />
        </div>
      </div>
    </footer>
  );
}
