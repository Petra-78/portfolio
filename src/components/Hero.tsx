

// ============================================================
// COMPONENT
// ------------------------------------------------------------
// In plain JS you'd write:
//   const Hero = () => { ... }
//
// In TypeScript we add a RETURN TYPE after the colon:
//   const Hero = (): JSX.Element => { ... }
//
// JSX.Element means "this function returns some JSX/HTML".
// It's TypeScript's way of making sure you don't accidentally
// return undefined or a number from a React component.
// ============================================================

export default function Hero() {
return (
  <section
    className="
      min-h-screen w-full flex items-center relative justify-center md:justify-start
      bg-[#040d12]
      bg-[url('/images/background-pattern.png')] bg-right bg-no-repeat bg-[length:100vh]
    "
  >
    <div
      className="
        flex flex-col justify-center items-start gap-5
        bg-[url('/images/title-background.png')] bg-center bg-contain bg-no-repeat
        
        w-full max-w-[900px] px-[70px] min-h-[600px]
        ml-[50px]

        min-[1500px]:max-w-[1200px]  min-[1500px]:px-[100px] min-[1500px]:ml-[100px]
        max-[950px]:max-w-[90%] max-[950px]:ml-[20px] max-[950px]:bg-[length:100%]
        max-[550px]:ml-0 max-[550px]:px-[10%]
        max-[550px]:bg-[url('/images/title-background-phone.png')] max-[550px]:gap-[30px]
      "
    >
      <h1
        className="
          text-white text-[3rem] font-semibold
          font-['Lexend_Deca',sans-serif]
          max-[950px]:text-[2rem]
          max-[350px]:text-[1.5rem]
        "
      >
        Hi, I'm Petra
      </h1>

      <p
        className="
          text-white text-[2rem]
          font-['Inconsolata',monospace]
          max-[950px]:text-[1.5rem]
          max-[350px]:text-[1rem]
        "
      >
        {'< Webdesigner and Web Developer />'}
      </p>
    </div>
  </section>
);
};


