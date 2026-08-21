export function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-6 pb-16 pt-40 sm:px-10 lg:px-14 lg:pb-24">
      <div className="mx-auto w-full max-w-[1600px]">
        <h1 className="max-w-[15ch] font-sans text-[clamp(2.25rem,6vw,5.75rem)] font-medium leading-[1] tracking-[-0.035em] text-black">
          Infrastructure for ownership in private companies
        </h1>

        <div className="mt-14 flex lg:mt-24 lg:justify-end">
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground lg:text-xl">
            A single source of truth for share registers, compliance, and
            stakeholder collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}
