/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import AreaList from "@/components/AreaList";
import ContactStrip from "@/components/ContactStrip";
import Gallery from "@/components/Gallery";
import { amenities, reviews, site, stayFacts } from "@/content/site";
import { getGalleryPhotos } from "@/lib/photos";

export default function Home() {
  const photos = getGalleryPhotos();

  return (
    <>
      <section className="hero">
        <img
          className="hero-photo"
          src="/photos/hero.jpg"
          alt="The Nest Cottage on the Lake Ontario shore in Webster, NY"
          fetchPriority="high"
        />
        <div className="wrap">
          <div className="hero-panel">
            <h1>A cottage on Lake Ontario for your next contract</h1>
            <p className="lede">
              Furnished stays of 4 to 13+ weeks in Webster, NY, about 15 minutes from Rochester
              General Hospital. Hosted by Michael and Trisha, who live in Webster too.
            </p>
            <div className="btn-row">
              <a className="btn" href={site.furnishedFinder} target="_blank" rel="noopener">
                Check dates on Furnished Finder
              </a>
              <Link className="btn btn-quiet" href="/contact">
                Ask us a question
              </Link>
            </div>
          </div>
          <dl className="facts">
            {stayFacts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" id="the-cottage">
        <div className="wrap split">
          <div>
            <h2>Welcome to the Nest</h2>
            <p>
              We&apos;re Michael and Trisha, empty nesters from Webster, along with our Cavalier King
              Charles Spaniel, Madi. For our 35th anniversary in 2022 we bought a little cottage in
              Forest Lawn, a lakeside neighborhood on Lake Ontario, and named it The Nest.
            </p>
            <p>
              We rent it mostly to travel nurses on 4 to 13+ week contracts. Our goal is simple: a
              safe, comfortable home away from home, with everything you need already there, so
              you can focus on work and enjoy your time off.
            </p>
            <p>
              Questions? Call or text Trisha at <a href={site.phoneHref}>{site.phone}</a>.
            </p>
          </div>
          <figure className="madi">
            <img src="/photos/madi.jpg" alt="Madi, a black-and-white Cavalier King Charles Spaniel, standing in the grass" loading="lazy" />
            <figcaption>Madi, our official greeter</figcaption>
          </figure>
        </div>
      </section>

      <section className="section inside" style={{ paddingTop: 0 }} aria-labelledby="inside-title">
        <div className="wrap">
          <img className="inside-photo" src="/photos/living.jpg" alt="The living room, with the fireplace, dining nook and kitchen beyond" loading="lazy" />
          <div className="inside-body">
            <h2 id="inside-title">What&apos;s inside</h2>
            <ul className="rules">
              {amenities.map((a) => (
                <li key={a.title}>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="photos">
        <div className="wrap">
          <div className="gallery-head">
            <div>
              <h2>Take a look around</h2>
              <p>Every room, plus the gardens and the lake. Want to walk through it? Try the 3D tour.</p>
            </div>
            <a className="btn btn-quiet" href={site.matterport} target="_blank" rel="noopener">
              Walk through the 3D tour
            </a>
          </div>
          <Gallery photos={photos} />
        </div>
      </section>

      <section className="section reviews" aria-labelledby="reviews-title">
        <div className="wrap">
          <h2 id="reviews-title">What our guests say</h2>
          <div className="review-grid">
            {reviews.map((r) => (
              <figure className="review" key={r.name} style={{ margin: 0 }}>
                <blockquote>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </blockquote>
                <footer>
                  <strong>{r.name}</strong>, {r.stay.toLowerCase()}, {r.date}
                </footer>
              </figure>
            ))}
          </div>
          <p style={{ marginTop: "2.5rem", marginBottom: 0 }}>
            <a href={site.furnishedFinderReviews} target="_blank" rel="noopener">
              Read all reviews on Furnished Finder
            </a>
          </p>
        </div>
      </section>

      <section className="lake-band" aria-labelledby="location-title">
        <img src="/photos/porch-view.jpg" alt="Looking from the front deck down Forest Lawn Road to Lake Ontario" loading="lazy" />
        <div className="wrap">
          <div className="lake-band-text">
            <h2 id="location-title">Forest Lawn, on the lake</h2>
            <p>
              Forest Lawn is a lakeside neighborhood of about 60 homes in Webster, founded in 1888
              and still known for its traditions and summer celebrations. Webster sits on Lake
              Ontario and Irondequoit Bay, a short drive northeast of Rochester.
            </p>
            <p>
              {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="guide-title">
        <div className="wrap">
          <h2 id="guide-title">Our local guide</h2>
          <p className="lede">
            Where we eat, what we see and where we shop, from right here in Webster out to the
            Finger Lakes.
          </p>
          <AreaList />
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
