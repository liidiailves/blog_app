export default function About() {
  return (
    <div className="relative min-h-screen flex items-start bg-sky-100 dark:bg-sky-700">
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: 'url("/assets/bg-image-about.jpg")' }}
      >
        <div className="absolute inset-0 bg-sky-100 dark:bg-sky-700 bg-opacity-30 dark:bg-opacity-30"></div>
      </div>
      <div className="max-w-2xl min-h-screen p-4 text-center bg-sky-100 dark:bg-sky-800 bg-opacity-50 shadow-xl z-10">
        <div>
          <h1 className="text-3xl font-emilysCandy font-semibold text-center my-10">
            About Laiskliidu:
          </h1>
          <div className="text-md text-sky-700 dark:text-sky-500 flex flex-col gap-2 my-6">
            <p>
              See mõte või soov, millele sa kõige enam tähelepanu pöörad, see
              mõte, mis su teadvuses ja alateadvuses on kanda kinnitanud, läheb
              kõige tõenäolisemalt täide.
            </p>
            <p className="italic">Peep Vain</p>
          </div>
          <div className="text-md text-sky-800 dark:text-sky-400 flex flex-col gap-2 my-6">
            <p>
              Teie ei julge. Tähendab - Teil pole tahmist. Tahtmine annab
              julguse.
            </p>
            <p className="italic">Anton Hansen Tammsaare</p>
          </div>
          <div className="text-md text-sky-900 dark:text-sky-300 flex flex-col gap-2 my-6">
            <p>
              In the mountains the shortest way is from peak to peak, but for
              that route thou must have long legs.{" "}
            </p>
            <p className="italic">Friedrich Nietzsche</p>
          </div>
          <div className="text-md text-sky-800 dark:text-sky-400 flex flex-col gap-2 my-6">
            <p>
              Do not seek to follow in the footsteps of the wise. Seek what they
              sought.
            </p>
            <p className="italic">Matsuo Basho</p>
          </div>
          <div className="text-md text-sky-700 dark:text-sky-500 flex flex-col gap-2 my-6">
            <p>
              Nature is the ideal. The true ideal is possible, real, and
              necessary at the same time.
            </p>
            <p className="italic">Novalis</p>
          </div>
        </div>
      </div>
    </div>
  );
}
