import { Link } from "react-router-dom";

export default function Love() {
  return (
    <div className="relative flex min-h-screen flex-col md:flex-row">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center md:hidden"
        style={{ backgroundImage: 'url("/assets/love.jpg")' }}
      >
        <div className="absolute inset-0 dark:bg-sky-800 bg-opacity-70 dark:bg-opacity-30"></div>
      </div>

      <div className="relative flex flex-col gap-2 p-2 max-w-md mx-auto md:mt-0 md:mx-auto md:my-auto md:p-28 md:bg-opacity-100 md:bg-transparent rounded-lg md:rounded-none z-10 flex-grow md:items-center md:justify-center">
        <div className="flex flex-col md:items-center">
          <p className="text-md text-sky-700 dark:text-sky-400 flex flex-col text-center">
            Jack Russell Terrier
          </p>
          <h1 className="text-3xl font-sedan font-semibold text-center my-2">
            Lexberry&apos;s
            <br />
            <span className="md:hidden">Snow Star Love</span>
            <span className="hidden md:inline">Snow Star</span>
            <br className="hidden md:block" />
            <span className="hidden md:inline">Love</span>
          </h1>
        </div>
        <div className="flex flex-col mt-auto md:items-center">
          <p className="text-md text-sky-700 dark:text-sky-500 flex flex-col text-center">
            Born on 16.02.2015
          </p>
          <Link
            to="https://register.kennelliit.ee/index.php?page=dogCard&dogId=204097"
            target="_blank"
            rel="noopener noreferrer"
            className="text-md sm:text-lg text-sky-500 font-semibold hover:underline hover:text-sky-600 hover:font-bold text-center"
          >
            Love in Estonian Kennel Club Register
          </Link>
          <Link
            to="https://www.lexberrys.eu/?page_id=629"
            target="_blank"
            rel="noopener noreferrer"
            className="text-md sm:text-lg text-sky-500 font-semibold hover:underline hover:text-sky-600 hover:font-bold text-center"
          >
            Love&apos;s family in kennel Lexberry&apos;s homepage
          </Link>
        </div>
      </div>

      <div
        className="flex-1 bg-no-repeat bg-right bg-cover hidden md:block relative"
        style={{ backgroundImage: 'url("/assets/love.jpg")' }}
      >
        <div className="absolute inset-0 dark:bg-sky-700 dark:bg-opacity-30"></div>
      </div>
    </div>
  );
}
