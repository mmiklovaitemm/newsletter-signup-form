import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-[hsl(234,29%,20%)] text-white flex items-center justify-center">
      <SignUpForm />
    </div>
  );
}

export default App;

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!emailPattern.test(email)) {
      setError("Valid email required");
      return;
    }

    setIsSuccess(true);
  }

  if (isSuccess) {
    return (
      <div
        className="bg-white w-full max-w-none md:max-w-[400px]
             rounded-none md:rounded-2xl
             min-h-screen md:min-h-0
             rounded-none md:rounded-2xl
             flex flex-col justify-between gap-8
             px-6 pt-10 pb-8 md:p-10
             animate-fade-in-up"
      >
        <div className="mt-12 md-mt-0">
          <img
            src="/images/icon-success.svg"
            alt=""
            className="md:h-12 md:w-12 mb-10 md:mb-6"
          ></img>

          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(234,29%,20%)] mb-10 md:mb-8">
            Thanks for subscribing!
          </h2>

          <p className="max-w-[320px] text-sm font-medium leading-relaxed text-[hsl(235,22%,26%)] mb-6">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}</span>. Please open it and click
            the button inside to confirm your subscription
          </p>
        </div>

        <button
          onClick={() => {
            setIsSuccess(false);
            setEmail("");
            setError("");
          }}
          className="
                w-full 
                bg-[hsl(234,29%,20%)] 
                text-white text-sm font-bold 
                py-3.5 rounded-lg 
                mt-10 md:mt-0
                shadow-lg shadow-[hsla(234,29%,20%,0.3)]
                transition-all duration-700 ease-out

                hover:bg-gradient-to-r 
                hover:from-[hsl(1,100%,67%)] 
                hover:to-[hsl(15,85%,60%)]
                hover:shadow-[hsla(4,100%,67%,0.4)]
                hover:translate-y-1.5"
        >
          Dismiss message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl w-full max-w-[375px] md:max-w-[800px] flex flex-col-reverse md:flex-row overflow-hidden">
      <div className="flex-1 px-6 py-2 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 mt-6 md:mt-6 text-[hsl(234,29%,20%)]">
          Stay updated!
        </h1>

        <p className="text-[hsl(235,22%,26%)] max-w-[350px] text-sm font-medium leading-relaxed">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul className="mt-8 space-y-2">
          <li className="flex items-start gap-3">
            <img
              src="/images/icon-list.svg"
              alt=""
              className="mt-[2px] h-5 w-5"
            ></img>
            <p className="text-[hsl(235,22%,26%)] text-sm font-medium">
              Product discovery and building what matters
            </p>
          </li>

          <li className="flex items-start gap-3">
            <img
              src="/images/icon-list.svg"
              alt=""
              className="mt-[2px] h-5 w-5"
            ></img>
            <p className="text-[hsl(235,22%,26%)] text-sm font-medium">
              Measuring to ensure updates are a success
            </p>
          </li>

          <li className="flex items-start gap-3">
            <img
              src="/images/icon-list.svg"
              alt=""
              className="mt-[2px] h-5 w-5"
            ></img>
            <p className="text-[hsl(235,22%,26%)] text-sm font-medium">
              And much more!
            </p>
          </li>
        </ul>

        <form
          onSubmit={handleSubmit}
          className="mt-8 md:mt-12 flex flex-col gap-3"
        >
          <div className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="text-xs font-bold tracking-wide text-[hsl(235,22%,26%)]"
            >
              Email address
            </label>
            {error && (
              <p className="text-xs font-medium text-[hsl(1,100%,67%)]">
                {error}
              </p>
            )}
          </div>

          <input
            id="email"
            type="email"
            placeholder="email@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            className={`w-full rounded-lg border px-4 py-2.5 md:py-3 text-sm outline-none transition-colors duration-300 ${
              error
                ? "border-[hsl(4,100%,67%)] bg-[hsla(4,100%,67%,0.1)] text-[hsl(234,29%,20%)] placeholder:text-[hsl(4,100%,67%)]"
                : "border-[hsl(0,0%,85%)] bg-transparent text-[hsl(234,29%,20%)] placeholder:text-[hsl(0,0%,58%)]"
            }
            focus:border-[hsl(235,18%,26%)] focus:ring-0`}
          />

          <button
            type="submit"
            className="
                mt-2 w-full 
                bg-[hsl(234,29%,20%)] 
                text-white text-sm font-bold 
                mb-4 py-3 md:py-3.5 rounded-lg 
                shadow-lg shadow-[hsla(234,29%,20%,0.3)]
                transition-all duration-700 ease-out

                hover:bg-gradient-to-r 
                hover:from-[hsl(1,100%,67%)] 
                hover:to-[hsl(15,85%,60%)]
                hover:shadow-[hsla(4,100%,67%,0.4)]
                hover:translate-y-1
                md:hover:translate-y-1.5"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <div className="w-full md:flex-1 md:p-6">
        <img
          src="/images/illustration-sign-up-mobile.svg"
          alt=""
          className="w-full md:hidden"
        ></img>

        <img
          src="/images/illustration-sign-up-desktop.svg"
          alt="Newsletter sign-up illustration"
          className="hidden md:block h-full w-full object-cover rounded-lg"
        ></img>
      </div>
    </div>
  );
}
