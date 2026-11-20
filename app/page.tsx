/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import AreaList from "@/components/AreaList";
import ContactStrip from "@/components/ContactStrip";
import Gallery from "@/components/Gallery";
import { listing, reviews, site, stayFacts } from "@/content/site";
import { getGalleryPhotos } from "@/lib/photos";

export default function Home() {
  const photos = getGalleryPhotos();

  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
          <img className="hero-logo" src="/brand/logo-light.png" alt="The Nest Cottage" width={300} height={346} />
          <h1>Be our guest</h1>
          <p className="lede">
            A charming cottage in the Forest Lawn community on Lake Ontario in Webster, NY.
            We specialize in renting to travel nurses, for stays of 4 to 13+ weeks.
          </p>
          <div className="btn-row">
            <a className="btn btn-light" href={site.furnishedFinder} target="_blank" rel="noopener">
              View listing
            </a>
            <Link className="btn btn-outline-light" href="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <img
        className="hero-photo"
        src="/photos/hero.jpg"
        alt="The Nest Cottage from above, with Lake Ontario behind the Forest Lawn neighborhood"
        fetchPriority="high"
      />

      <div className="wrap">
        <dl className="facts">
          {stayFacts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="section" id="the-cottage">
        <div className="wrap split">
          <figure className="madi">
            <img src="/photos/madi.jpg" alt="Madi, a Cavalier King Charles Spaniel, standing in the grass" loading="lazy" />
            <figcaption>Madi, our Cavalier King Charles Spaniel</figcaption>
          </figure>
          <div className="centered">
            <h2>All about us</h2>
            <p>
              We are empty nesters living in Webster, NY, with our adorable Cavalier King Charles
              Spaniel, <span className="hl">Madi</span>. In 2022, in celebration of our 35th wedding
              anniversary, we invested in the most charming cottage. We named it{" "}
              <span className="hl">The Nest Cottage</span>.
            </p>
            <p>
              It is located in our favorite little community of Forest Lawn along Lake Ontario. We
              look forward to hosting our family, friends and rental guests. We can’t wait to fill The
              Nest Cottage with love and joy and to make special memories there.
            </p>
            <p>
              Our mission is to provide our guests a safe, comfortable “Nest,” a home away from home.
            </p>
            <p>
              We hope that you will come and <em className="hl">be our guest</em>.
            </p>
            <p className="signature">Michael and Trisha</p>
          </div>
        </div>
      </section>

      <section className="section band" aria-labelledby="listing-title">
        <div className="wrap">
          <h2 id="listing-title" className="centered">The Nest Cottage</h2>
          <ul className="highlights">
            {listing.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="listing-body">
            <img src="/photos/living.jpg" alt="The living room, with the fireplace, dining banquette and kitchen beyond" loading="lazy" />
            <div>
              {listing.description.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="photos" aria-labelledby="photos-title">
        <div className="wrap">
          <h2 id="photos-title" className="centered">Photos</h2>
          <Gallery photos={photos} />
          <div className="btn-row centered-row">
            <a className="btn" href={site.matterport} target="_blank" rel="noopener">
              Take the virtual tour
            </a>
            <a className="btn btn-quiet" href={site.furnishedFinder} target="_blank" rel="noopener">
              View listing
            </a>
          </div>
        </div>
      </section>

      <section className="section reviews" aria-labelledby="reviews-title">
        <div className="wrap">
          <h2 id="reviews-title" className="centered">Reviews</h2>
          <div className="review-grid">
            {reviews.map((r) => (
              <figure className="review" key={r.name}>
                <p className="stars" aria-label="5 out of 5 stars">★★★★★</p>
                <h3>{r.title}</h3>
                <blockquote>
                  <p>“{r.text}”</p>
                </blockquote>
                <figcaption>
                  <strong>{r.name}</strong>, {r.date}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="centered" style={{ marginTop: "2.5rem", marginBottom: 0 }}>
            <a className="btn btn-outline-light" href={site.furnishedFinderReviews} target="_blank" rel="noopener">
              More reviews on Furnished Finder
            </a>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="location-title">
        <div className="wrap">
          <h2 id="location-title" className="centered">Our location</h2>
          <div className="location">
            <img src="/photos/porch-view.jpg" alt="Looking from the front deck down Forest Lawn Road to Lake Ontario" loading="lazy" />
            <div className="location-text">
              <h3>Webster, New York</h3>
              <p>
                Webster is a suburb located on the northeast side of Rochester, perched along Lake
                Ontario and Irondequoit Bay. The town’s motto is{" "}
                <em className="hl">“Where Life is Worth Living.”</em> It is a beautiful place to soak in
                the views of the water and to live among wonderful, community-driven residents.
              </p>
              <h3>Forest Lawn Community</h3>
              <p>
                The Forest Lawn Community just celebrated its 135th anniversary. This is a charming
                lakeside neighborhood of around 60 homes. It is a tight-knit neighborhood that is
                steeped in traditions and celebrations.
              </p>
              <p>
                <Link href="/blog/the-nest-cottage-the-forest-lawn-community">Read the history of Forest Lawn</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section band" aria-labelledby="guide-title">
        <div className="wrap">
          <h2 id="guide-title" className="centered">Local destinations</h2>
          <p className="lede centered">Where to eat, what to see and where to shop while you’re here.</p>
          <AreaList />
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
