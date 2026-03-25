export default function AboutMe() {
  return (
    <section className="flex w-full justify-center">
      <div
        className="
          grid grid-cols-2 min-h-screen max-w-[1500px] px-10
          max-[950px]:flex max-[950px]:flex-col
          max-[550px]:mt-[50px] max-[550px]:px-5 max-[550px]:gap-[50px]
          min-[1600px]:gap-[150px]
        "
      >
        <div
          className="
            flex flex-col justify-center items-center gap-10 p-[10%]
            bg-[url('/images/background-wavy-circle.png')] bg-left-bottom bg-no-repeat bg-[length:500px]
            max-[950px]:bg-[length:300px]
            max-[550px]:p-0
            min-[1600px]:bg-[length:600px]  min-[1600px]:p-0
          "
        >
          <h2
            className="
              text-white text-[3rem] font-medium font-['Lexend_Deca',sans-serif] text-left w-full
              max-[950px]:text-[2rem]
              min-[1600px]:text-[4rem]
            "
          >
            {'< About Me />'}
          </h2>

          <p
            className="
              text-white text-[1.3rem] text-justify bg-[#040d12a4]
              max-[950px]:text-[1rem]
              min-[1600px]:text-[1.5rem]
            "
          >
            Hi, my name is Petra. I started out as a freelance web designer in
            2024. However, over the past years I've been diving into web
            development because I wanted to really grow my skills and build
            things that people enjoy using. I mainly focus on front-end
            development, using React but I am also comfortabe working in the
            backend using Node.js, Express and SQL. I love creating websites and
            apps that are both functional and memorable. Everything you see in
            my projects was planned, designed, and built by me. My goal is to
            mix usability, fun, and performance so that my work leaves a lasting
            impression. If you're curious, feel free to check out my projects
            below!
          </p>
        </div>

        <div
          className="
            flex justify-center items-center
            bg-[url('/images/background-wavy-circle.png')] bg-[center_top_20%] bg-no-repeat bg-[length:50%]
            max-[950px]:w-full max-[950px]:bg-[length:350px]
            max-[550px]:bg-contain
            min-[1600px]:bg-[length:600px]  
          "
        >
          <img
            src="/images/about-me.png"
            alt="Petra, web designer and developer"
            className="w-full max-w-[500px] object-contain min-[1600px]:max-w-[700px]"
          />
        </div>
      </div>
    </section>
  );
}
