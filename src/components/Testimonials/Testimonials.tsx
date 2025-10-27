import { SlPeople } from "react-icons/sl";

import { getTranslations } from "next-intl/server";
import SectionTopPart from "../SectionTopPart";
import QuoteMark from "./QuoteMark";
import TestimonialAvatarInfo from "./TestimonialAvatarInfo";

export default async function Testimonials() {
  const t = await getTranslations("testimonials");

  const testimonials = [
    {
      span: "big-left",
      metric: t("items.david.metric"),
      metricLabel: t("items.david.metricLabel"),
      quote: t("items.david.quote"),
      author: t("items.david.author"),
      role: t("items.david.role"),
      avatarUrl: "/images/avatar1.svg",
      companyIcon: "/images/spotify.svg",
    },
    {
      metric: t("items.sarah.metric"),
      metricLabel: t("items.sarah.metricLabel"),
      quote: t("items.sarah.quote"),
      author: t("items.sarah.author"),
      role: t("items.sarah.role"),
      avatarUrl: "/images/avatar2.svg",
      companyIcon: "/images/google.svg",
    },
    {
      quote: t("items.tom.quote"),
      author: t("items.tom.author"),
      role: t("items.tom.role"),
      avatarUrl: "/images/avatar3.svg",
    },
    {
      quote: t("items.danielle.quote"),
      author: t("items.danielle.author"),
      role: t("items.danielle.role"),
      avatarUrl: "/images/avatar1.svg",
    },
  ];
  return (
    <section
      className="relative flex flex-col items-center justify-center bg-white"
      id="testimonials"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          {/* ==== Top Part (unchanged) ==== */}

          <SectionTopPart
            icon={<SlPeople className="w-5 h-5 text-white" />}
            title1={t("badge")}
            title2={t("title")}
            description1={t("description")}
            description2=""
          />

          {/* ====== GRID RENDER ====== */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {/* LEFT BIG CARD (span two rows) */}
            <div className="md:row-span-2 bg-[#F5F7FC] w-full rounded-2xl p-8 text-left shadow-sm">
              <div className="flex flex-col justify-between h-full">
                <div>
                  {/* Metric */}
                  {testimonials[0].metric && (
                    <div className="text-5xl font-bold text-[#0F1115] mb-1.5">
                      {testimonials[0].metric}
                    </div>
                  )}
                  {testimonials[0].metricLabel && (
                    <div className="text-lg font-bold text-[#50576B] mb-4">
                      {testimonials[0].metricLabel}
                    </div>
                  )}

                  {/* Quote mark */}
                  <QuoteMark />

                  {/* Quote */}
                  <p className="text-[#50576B] mb-6 mt-2 text-sm font-normal ">
                    {testimonials[0].quote}
                  </p>
                </div>

                {/* Footer: Avatar + Info */}

                <TestimonialAvatarInfo
                  author={testimonials[0].author}
                  role={testimonials[0].role}
                  avatarUrl={testimonials[0].avatarUrl}
                  companyIcon={testimonials[0].companyIcon}
                />
              </div>
            </div>

            {/* RIGHT COLUMN - Stack of 3 cards */}
            <div className="space-y-8 h-full">
              {/* TOP CARD - Sarah Mitchel with metric */}
              <div className="bg-[#F5F7FC] rounded-2xl p-6 text-left h-1/2 shadow-sm">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    {testimonials[1].metric && (
                      <div className="text-3xl font-bold tex text-[#0F1115] mb-4">
                        {testimonials[1].metric}{" "}
                        <span className="text-lg text-[#50576B]">
                          {testimonials[1].metricLabel}{" "}
                        </span>
                      </div>
                    )}

                    <QuoteMark />
                    <p className="text-gray-700 text-sm mb-4 mt-2">
                      {testimonials[1].quote}
                    </p>
                  </div>

                  <TestimonialAvatarInfo
                    author={testimonials[1].author}
                    role={testimonials[1].role}
                    avatarUrl={testimonials[1].avatarUrl}
                    companyIcon={testimonials[1].companyIcon}
                  />
                </div>
              </div>

              {/* BOTTOM TWO CARDS */}

              <div className="h-1/2 flex gap-4">
                {[testimonials[2], testimonials[3]].map((t, i) => (
                  <div
                    key={i}
                    className=" bg-[#F5F7FC] rounded-2xl p-4 text-left shadow-sm "
                  >
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <QuoteMark />
                        <p className="text-[#50576B] text-sm mb-4 mt-2">
                          {t.quote}
                        </p>
                      </div>

                      <div className="mt-auto">
                        <TestimonialAvatarInfo
                          author={t.author}
                          role={t.role}
                          avatarUrl={t.avatarUrl}
                          companyIcon={t.companyIcon}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
