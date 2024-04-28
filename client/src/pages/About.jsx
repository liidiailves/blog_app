export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-emilysCandy font-semibold text-center my-10">
            About Laiskliidu:
          </h1>
          <div className="text-md text-sky-700 flex flex-col gap-2 my-6">
            <p>
              See mõte või soov, millele sa kõige enam tähelepanu pöörad, see
              mõte, mis su teadvuses ja alateadvuses on kanda kinnitanud, läheb
              kõige tõenäolisemalt täide.
            </p>
            <p className="italic">Peep Vain</p>
          </div>
          <div className="text-md text-sky-800 flex flex-col gap-2 my-6">
            <p>
              Teie ei julge. Tähendab - Teil pole tahmist. Tahtmine annab
              julguse.
            </p>
            <p className="italic">Anton Hansen Tammsaare</p>
          </div>
          <div className="text-md text-sky-900 flex flex-col gap-2 my-6">
            <p>
              In the mountains the shortest way is from peak to peak, but for
              that route thou must have long legs.{" "}
            </p>
            <p className="italic">Friedrich Nietzsche</p>
          </div>
          <div className="text-md text-sky-800 flex flex-col gap-2 my-6">
            <p>
              Do not seek to follow in the footsteps of the wise. Seek what they
              sought.
            </p>
            <p className="italic">Matsuo Basho</p>
          </div>
          <div className="text-md text-sky-700 flex flex-col gap-2 my-6">
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
