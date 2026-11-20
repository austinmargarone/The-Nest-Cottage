"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Photo = { src: string; alt: string; width: number; height: number };

export default function Gallery({ photos, initial = 9 }: { photos: Photo[]; initial?: number }) {
  const [showAll, setShowAll] = useState(false);
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const shown = showAll ? photos : photos.slice(0, initial);

  const open = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!dialog.current?.open) return;
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  if (!photos.length) return null;

  return (
    <>
      <div className="gallery">
        {shown.map((p, i) => (
          <button key={p.src} onClick={() => open(i)} aria-label={`View photo ${i + 1} of ${photos.length}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.alt} width={p.width} height={p.height} loading="lazy" />
          </button>
        ))}
      </div>
      {photos.length > initial && (
        <p className="gallery-more">
          <button className="btn btn-quiet" onClick={() => setShowAll((s) => !s)}>
            {showAll ? "Show fewer photos" : `Show all ${photos.length} photos`}
          </button>
        </p>
      )}
      <dialog
        ref={dialog}
        className="lightbox"
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === dialog.current && close()}
        aria-label="Photo viewer"
      >
        {index !== null && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos[index].src} alt={photos[index].alt} />
            <div className="lightbox-bar">
              <button onClick={() => step(-1)}>Previous</button>
              <span>
                {index + 1} of {photos.length}
              </span>
              <button onClick={() => step(1)}>Next</button>
              <button onClick={close}>Close</button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
