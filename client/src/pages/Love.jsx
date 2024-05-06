import { Link } from "react-router-dom";

export default function Love() {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col gap-2 lg:p-28 px-4 max-w-md mx-auto my-auto">
        <p className="text-md text-sky-700 dark:text-sky-500 flex flex-col mt-6 text-center">
          Jack Russell Terrier
        </p>
        <h1 className="text-3xl font-sedan font-semibold text-center my-2">
          Lexberry&apos;s
          <br /> Snow Star
          <br /> Love
        </h1>
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
      <div
        className="flex-1 bg-no-repeat bg-right bg-cover relative"
        style={{ backgroundImage: 'url("/assets/love.jpg")' }}
      >
        <div className="absolute inset-0 dark:bg-sky-700 dark:bg-opacity-30"></div>
      </div>
    </div>
  );
}
