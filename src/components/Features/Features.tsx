import { IoCartOutline } from "react-icons/io5";
import FeatureElement from "./FeatureElement";
import Image from "next/image";

export default function Features() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-white" id="features">
      {/* LEFT radial background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="
      absolute
      left-0 top-1/2
      -translate-y-1/2
      w-[480px] h-[480px]
      rounded-full blur-3xl
      bg-[radial-gradient(circle,rgba(191,227,255,1)_0%,rgba(191,227,255,0)_70%)]
    "
        />
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-20 sm:py-24 text-center">
        <div className="flex flex-col items-center justify-center">
          {/* ==== Top Part (unchanged) ==== */}
          <div className="flex flex-col justify-center text-center items-center">
            <div className="inline-flex items-center space-x-2 pr-2 bg-white rounded-full border border-[#E9EDF8] mb-4 py-0.5 justify-center">
              <div className="bg-[#284A9A] flex items-center justify-center rounded-full p-1">
                <IoCartOutline className="w-5 h-5 text-white" />
              </div>
              <span className="text-black font-semibold text-sm">Features</span>
            </div>

            <h2 className="text-center text-[clamp(28px,4vw,38px)] font-semibold tracking-tight text-slate-900">
              Why Octobid?
            </h2>

            <p className="mx-auto mt-3 max-w-[46ch] text-center text-[16px] leading-6 text-slate-600 font-medium">
              A bridge that simplifies how hospitals order
              <br />
              from suppliers.
            </p>
          </div>

          {/* ==== Bottom 3-column section ==== */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-center  bg-[url('/images/bg_gradient1.svg')]  bg-position-[-10rem_-10] bg-cover bg-no-repeat">
            {/* LEFT TEXT COLUMN */}

           
            <div className="text-left space-y-10">
              <FeatureElement
                imageUrl="/images/verified_supplier.png"
                title="Verified Suppliers"
                description="Access only trusted and vetted suppliers for reliable medical procurement."
                imageColor="#ffffff"
              />

              <FeatureElement
                imageUrl="/images/flexible_buying.png"
                title="Flexible Buying Options"
                description="Choose between individual products, packages, or co-buying to save costs."
                imageColor="#ffffff"
              />
            </div>

            {/* MIDDLE IMAGE PLACEHOLDER */}
            <div className="mx-auto">
              <div className="w-[370px] h-[600px] rounded-3xl bg-white shadow-2xl p-9">
                <Image
                  src="/images/features_center_image.png"
                  alt="Features Center Image"
                  width={370}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT TEXT COLUMN */}
            <div className="text-left space-y-10">

                <FeatureElement
                imageUrl="/images/smart_manage.png"
                title="Smart Management Tools"
                description="Track orders, manage bids, and monitor sales performance all
                  in one place."
                imageColor="#E9EDF8"
              />

              <FeatureElement
                imageUrl="/images/faster_sourcing.png"
                title="Faster Sourcing"
                description="Request products you can&apos;t find, and Octobid matches you with
                  the right supplier quickly."
                imageColor="#E9EDF8"
              />
             

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
