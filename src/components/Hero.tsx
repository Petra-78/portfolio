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

        min-[1920px]:max-w-[1300px]  min-[1920px]:px-[100px] min-[1920px]:ml-[100px]
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
           min-[1920px]:text-[4rem]
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
           min-[1920px]:text-[3rem]
        "
        >
          {'< Webdesigner and Web Developer />'}
        </p>
      </div>
    </section>
  );
}
