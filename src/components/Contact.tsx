import { m } from "framer-motion";
import { ChangeEvent, FormEvent, useState } from "react";
import FadeIn from "react-fade-in";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const onMailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !mail || !message)
      return (
        <div className="py-4 text-center bg-indigo-900 lg:px-4">
          <div className="flex items-center p-2 leading-none text-indigo-100 bg-indigo-800 lg:rounded-full lg:inline-flex">
            <span className="flex px-2 py-1 mr-3 text-xs font-bold uppercase bg-indigo-500 rounded-full">
              Error
            </span>
            <span className="flex-auto mr-2 font-semibold text-left">
              Please fill out the form completely.
            </span>
            <svg
              className="w-4 h-4 opacity-75 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
            </svg>
          </div>
        </div>
      );
    window.open(
      `mailto:amineprojet7@gmail.com?body=${encodeURIComponent(
        `Hey, It's ${name} (${mail})\n\n${message}`
      )}`
    );
    <div className="py-4 text-center bg-indigo-900 lg:px-4">
      <div className="flex items-center p-2 leading-none text-indigo-100 bg-indigo-800 lg:rounded-full lg:inline-flex">
        <span className="flex px-2 py-1 mr-3 text-xs font-bold uppercase bg-indigo-500 rounded-full">
          Success
        </span>
        <span className="flex-auto mr-2 font-semibold text-left">
          Thanks for your message!
        </span>
        <svg
          className="w-4 h-4 opacity-75 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </div>
    </div>;
  };

  return (
    <FadeIn className="w-full max-w-2xl mx-auto">
      <form onSubmit={onSubmit}>
        <div className="flex mb-4 -mx-2">
          <div className="w-1/2 px-2">
            <input
              onChange={onMailChange}
              className="block w-full px-4 py-3 leading-tight text-gray-700 transition duration-200 border border-gray-200 rounded appearance-none dark:text-white focus:bg-white focus:border-indigo-400 dark:focus:border-indigo-300 focus:outline-none dark:bg-black dark:focus:bg-black dark:placeholder-white"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="w-1/2 px-2">
            <input
              onChange={onNameChange}
              className="block w-full px-4 py-3 leading-tight text-gray-700 transition duration-200 border border-gray-200 rounded appearance-none dark:text-white focus:bg-white focus:border-indigo-400 dark:focus:border-indigo-300 focus:outline-none dark:bg-black dark:focus:bg-black dark:placeholder-white"
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="mb-4">
          <textarea
            onChange={onMessageChange}
            className="block w-full px-4 py-3 leading-tight text-gray-700 transition duration-200 border border-gray-200 rounded appearance-none dark:text-white focus:bg-white focus:border-indigo-400 dark:focus:border-indigo-300 focus:outline-none dark:bg-black dark:focus:bg-black dark:placeholder-white"
            placeholder="Write something..."
            rows={5}
          ></textarea>
        </div>
        <div className="inline-flex items-center justify-center mb-1">
          <m.button
            aria-label="Submit"
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="inline-block px-5 py-2 m-0 font-semibold leading-none text-gray-800 transition transform border border-black rounded-md dark:border-white hover:scale-110 hover:transition hover:border-2 dark:text-white"
          >
            <span className="my-2 mr-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 80 80"
                className="inline mb-0.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M40 66C54.3594 66 66 54.3594 66 40C66 25.6406 54.3594 14 40 14C25.6406 14 14 25.6406 14 40C14 46.5596 16.4291 52.5518 20.4369 57.1261L16 66L40 66Z"
                  fill="currentColor"
                />
                <path
                  d="M40 66V68V66ZM20.4369 57.1261L22.2258 58.0206C22.5892 57.2938 22.4767 56.4193 21.9412 55.8082L20.4369 57.1261ZM16 66L14.2111 65.1056C13.9012 65.7255 13.9343 66.4618 14.2987 67.0515C14.6631 67.6411 15.3068 68 16 68L16 66ZM64 40C64 53.2548 53.2548 64 40 64V68C55.464 68 68 55.464 68 40H64ZM40 16C53.2548 16 64 26.7452 64 40H68C68 24.536 55.464 12 40 12V16ZM16 40C16 26.7452 26.7452 16 40 16V12C24.536 12 12 24.536 12 40H16ZM21.9412 55.8082C18.2407 51.5845 16 46.0564 16 40H12C12 47.0627 14.6176 53.519 18.9326 58.4441L21.9412 55.8082ZM17.7889 66.8944L22.2258 58.0206L18.6481 56.2317L14.2111 65.1056L17.7889 66.8944ZM40 64L16 64L16 68L40 68V64Z"
                  fill="currentColor"
                />
              </svg>
              Send
            </span>
          </m.button>
        </div>
      </form>
    </FadeIn>
  );
};
export default Contact;
