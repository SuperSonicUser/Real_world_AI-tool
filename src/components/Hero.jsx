import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-5">
        <img src={logo} alt="Realworld_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/SuperSonicUser/Real-world-Ai-/tree/main?tab=readme-ov-file"
            )
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text ">
        Condense Articles with <br className="max-md:hidden" />
        <span className="purple_love_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        This AI-powered website that summarizes any article by simply providing
        its link. Quickly get concise, accurate summaries of complex content,
        saving time and enhancing understanding for users worldwide.
      </h2>
    </header>
  );
};

export default Hero;
