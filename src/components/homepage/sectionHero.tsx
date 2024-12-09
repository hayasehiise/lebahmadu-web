'use client'

export default function Hero() {
    return (
      <>
        <div
          className="hero min-h-[540px] bg-center"
          style={{
            backgroundImage: "url(./background-hero.gif)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content lg:justify-start justify-center text-neutral-content">
            <div className="w-1/2">
              <h1 className="mb-5 text-5xl font-bold">Hai!</h1>
              <h1 className="lg:text-3xl text-xl font-bold">
                Bersama Kami, Ciptakan Kemeriahan Tak Terlupakan di Event Anda!
              </h1>
            </div>
          </div>
        </div>
      </>
    );
  }
  