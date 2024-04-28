import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer
      container
      className="border border-t-8 border-sky-500 bg-gradient-to-r from-sky-100 via-sky-300 to-sky-500 rounded-lg dark:bg-gradient-to-r dark:from-sky-700 dark:via-sky-800 dark:to-sky-950"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center text-sm sm:text-xl font-emilysCandy font-semibold hover:font-extrabold dark:text-sky-50 hover:text-sky-500 dark:hover:text-sky-500"
            >
              Laiskliidu&apos;s Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title
                title="About"
                className="font-emilysCandy text-sky-700 dark:text-sky-300"
              />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-800 dark:text-sky-300 hover:text-sky-600 hover:font-bold dark:hover:text-sky-500"
                >
                  Laiskliidu&apos;s Blog
                </Footer.Link>
                <Footer.Link
                  href="https://www.laiskliidu.blogspot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-800 dark:text-sky-300 hover:text-sky-600 hover:font-bold dark:hover:text-sky-500"
                >
                  Laiskliidu&apos;s Blogspot
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Follow Me"
                className="font-emilysCandy text-sky-700 dark:text-sky-300"
              />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/liidiailves"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-800 dark:text-sky-300 hover:font-bold hover:text-sky-600 dark:hover:text-sky-500"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-sky-800 dark:text-sky-300 hover:font-bold hover:text-sky-600 dark:hover:text-sky-500"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Legal"
                className="font-emilysCandy text-sky-700 dark:text-sky-300"
              />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="text-sky-800 dark:text-sky-300 hover:font-bold hover:text-sky-600 dark:hover:text-sky-500"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-sky-800 dark:text-sky-300 hover:font-bold hover:text-sky-600 dark:hover:text-sky-500"
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Laiskliidu's blog"
            year={new Date().getFullYear()}
            className="text-sky-800 dark:text-sky-300 hover:font-semibold"
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/liidia.ilves/"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/diamoon_lady/"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://github.com/liidiailves"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
