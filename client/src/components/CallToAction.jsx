import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-2 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2>Check out my previous blog!</h2>
      </div>
      <div className="flex-1 justify-center flex flex-col">
        <Button
          className="bg-gradient-to-r from-pink-500 to-yellow-500"
          type="button"
          size="xs"
        >
          <a
            href="https://laiskliidu.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            laiskliidu.blogspot.com
          </a>
        </Button>
      </div>
    </div>
  );
}
