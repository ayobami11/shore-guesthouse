import Image from "next/image";

export const Gallery = () => {
  return (
    <section>
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div>
            <figure>
              <div>
                <Image src="/images/gallery-image-1.png" alt="" fill />
              </div>
              <figcaption>Unwind in our lounge room.</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <div>
                <Image src="/images/gallery-image-2.png" alt="" fill />
              </div>
              <figcaption>Explore the open sea.</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <div>
                <Image src="/images/gallery-image-3.png" alt="" fill />
              </div>
              <figcaption>A haven lies behind the blue door.</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <div>
                <Image src="/images/gallery-image-4.png" alt="" fill />
              </div>
              <figcaption>Enjoy a drink by the pool.</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <div>
                <Image src="/images/gallery-image-5.png" alt="" fill />
              </div>
              <figcaption>
                Sink into the plush comfort of the canopy bed.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
