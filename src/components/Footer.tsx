

interface ContactItemProps {
  text: string;
  href?: string; 
}

function ContactItem({ text, href }: ContactItemProps) {

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


export default function Footer() {

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
        
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-white text-[2.5rem] font-medium font-['Lexend_Deca',sans-serif] max-[950px]:text-[1.8rem]">
            Contact me
          </h2>

          <p className="text-white/70 text-base leading-relaxed max-w-sm">
            Feel free to reach out if you'd like to work on a project together
            or have any questions.
          </p>

          
          <div className="flex flex-col gap-3">
            {contactItems.map((item) => (
              <ContactItem key={item.text} text={item.text} href={item.href} />
            ))}
          </div>
        </div>

   
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
