import chickenHand from "@/assets/cut-chicken-hand.png";
import sunglassesBurger from "@/assets/cut-sunglasses-burger.png";
import handsSandwich from "@/assets/cut-hands-sandwich.png";
import { Marquee } from "./Marquee";

/**
 * Two near-identical type lines, stacked so tight they almost kiss, both
 * sliding the same direction at slightly different speeds — the small drift
 * is what makes the pair read as one wavy ribbon instead of a mirror.
 */
function Line({ durationSeconds }: { durationSeconds: number }) {
  return (
    <Marquee durationSeconds={durationSeconds}>
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="pr-[0.18em] font-display text-[3.5rem] leading-[0.78] tracking-[-0.035em] whitespace-nowrap text-signal uppercase sm:text-[6rem] lg:text-[8.5rem]"
          style={{ transform: "scaleX(1.04)", transformOrigin: "left center" }}
        >
          New Meal in Town&nbsp;
        </span>
      ))}
    </Marquee>
  );
}

export function NewMeal() {
  return (
    <section className="relative isolate flex h-[420px] items-center overflow-hidden bg-cream sm:h-[520px] lg:h-[580px]">
      {/* Wavy double marquee, vertically centered */}
      <div className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2">
        <div className="-rotate-[4deg] skew-y-[2deg]">
          <Line durationSeconds={26} />
          <div className="-mt-[0.14em]">
            <Line durationSeconds={30} />
          </div>
        </div>
      </div>

      {/* Vertical collage column sitting over the type */}
      <div className="pointer-events-none absolute inset-0 z-20 mx-auto max-w-[1100px]">
        <img
          src={handsSandwich}
          alt="Crispy fried chicken sandwich"
          loading="lazy"
          width={912}
          height={1104}
          className="absolute top-[-8%] left-1/2 w-48 -translate-x-[110%] rotate-[8deg] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.12)] sm:w-64 lg:w-80"
        />
        <img
          src={sunglassesBurger}
          alt="Person in sunglasses biting a burger"
          loading="lazy"
          width={912}
          height={912}
          className="absolute top-[16%] left-1/2 w-52 -translate-x-[38%] rotate-[-2deg] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.12)] sm:w-72 lg:w-[22rem]"
        />
        <img
          src={chickenHand}
          alt="Saucy spicy fried chicken drumstick"
          loading="lazy"
          width={912}
          height={912}
          className="absolute top-[58%] left-1/2 w-44 -translate-x-[72%] rotate-[6deg] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.12)] sm:w-60 lg:w-72"
        />
      </div>
    </section>
  );
}
