import Link from "next/link";

export const About = () => {
  return (
    <section className="mx-4 my-20 md:mx-10">
      <h2 className="mb-5">About</h2>
      <div className="max-w-[900px] text-small md:text-medium xl:text-large leading-[1.1]">
        <h3 className="mb-8">
          Tucked into the rugged cliffs of Santorini, the Shore Guesthouse
          offers a retreat with uninterrupted views of the caldera.{" "}
        </h3>
        <p className="">
          <Link
            href="/information"
            className="underline underline-offset-4 decoration-2 xl:text-[#0075ff]"
          >
            Read our story
          </Link>{" "}
          to learn the history behind Shore Guesthouse and the beauty of
          Santorini.
        </p>
      </div>
    </section>
  );
};
