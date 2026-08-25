import chickenHand from "@/assets/collage-chicken-hand.jpg";
import sunglassesBurger from "@/assets/collage-sunglasses-burger.jpg";
import handsSandwich from "@/assets/collage-hands-sandwich.jpg";
import { Marquee } from "./Marquee";

const BLOB_TOP = "polygon(50% 0%, 92% 14%, 100% 58%, 74% 96%, 26% 100%, 2% 62%, 8% 18%)";

function Line({ reverse = false }: { reverse?: boolean }) {
  return (
    <Marquee durationSeconds={22} reverse={reverse}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="px-6 font-display text-[3.25rem] leading-[0.9] whitespace-nowrap text-signal sm:text-[5.5rem] lg:text-[7rem]"
        >
          NEW MEAL IN TOWN
        </span>
      ))}
    </Marquee>
  );
}

export function NewMeal() {
  return (
    <section className="relative isolate flex h-[420px] items-center overflow-hidden bg-cream sm:h-[520px] lg:h-[560px]">
      {/* Wavy double marquee, vertically centered */}
      <div className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2">
        <div className="-rotate-[3deg]">
          <div className="skew-y-[1.2deg]">
            <Line />
          </div>
          <div className="-mt-[0.35em] -skew-y-[1.2deg]">
            <Line reverse />
          </div>
        </div>
      </div>

      {/* Vertical collage column sitting over the type */}
      <div className="pointer-events-none absolute inset-0 z-20 mx-auto max-w-[1100px]">
        <img
          src={handsSandwich}
          alt="Hand holding a crispy chicken sandwich"
          loading="lazy"
          width={800}
          height={800}
          className="absolute top-[-2%] left-1/2 w-40 -translate-x-[115%] rotate-[6deg] object-cover sm:w-56 lg:w-64"
          style={{ clipPath: BLOB_TOP }}
        />
        <img
          src={sunglassesBurger}
          alt="Person in sunglasses biting a burger"
          loading="lazy"
          width={800}
          height={800}
          className="absolute top-[24%] left-1/2 w-44 -translate-x-[42%] rotate-[-2deg] object-cover sm:w-60 lg:w-72"
          style={{ clipPath: BLOB_TOP }}
        />
        <img
          src={chickenHand}
          alt="Hand holding a fried chicken drumstick"
          loading="lazy"
          width={800}
          height={800}
          className="absolute top-[56%] left-1/2 w-40 -translate-x-[70%] rotate-[3deg] object-cover sm:w-56 lg:w-64"
          style={{ clipPath: BLOB_TOP }}
        />
      </div>
    </section>
  );
}
