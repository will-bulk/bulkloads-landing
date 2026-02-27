"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function useUtmSignupUrl(base: string) {
  const [url, setUrl] = useState(base);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
    const utms = new URLSearchParams();
    utmKeys.forEach((k) => { const v = params.get(k); if (v) utms.set(k, v); });
    const qs = utms.toString();
    setUrl(qs ? `${base}?${qs}` : base);
  }, [base]);
  return url;
}

function trackClick(label: string) {
  try { if (typeof window !== "undefined" && (window as any).fbq) (window as any).fbq("track", "Lead", { content_name: label }); } catch {}
}

const SIGNUP = "https://www.bulkloads.com/sign_up/create_account/";

function CTAButton({ text, className = "" }: { text: string; className?: string }) {
  const url = useUtmSignupUrl(SIGNUP);
  return (
    <a
      href={url}
      onClick={() => trackClick(text)}
      className={`inline-block bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors ${className}`}
    >
      {text}
    </a>
  );
}

const stats = [
  { val: "34,000+", label: "Active Members" },
  { val: "400+", label: "Loads Posted Daily" },
  { val: "Trusted by", label: "ADM, CHS, Viterra" },
];

const valueProps = [
  { icon: "/images/insurance_icon.svg", title: "Find Loads Fast", desc: "Search hopper, end dump, pneumatic, belt, tanker and grain loads nationwide." },
  { icon: "/images/factoring_icon.svg", title: "Get Paid in 24 Hours", desc: "Smart Freight Funding factoring built right in." },
  { icon: "/images/tms_icon.svg", title: "All-in-One Platform", desc: "Load board, TMS, insurance, permitting — everything a bulk hauler needs." },
];

const testimonials = [
  { quote: "BulkLoads changed my business. I went from 2 trucks to 14 in one year.", author: "Catlett Trucking" },
  { quote: "Best load board for bulk freight, period. The app is easy and loads are always there.", author: "Verified Carrier" },
  { quote: "Getting started was effortless. Next-day pay through Smart Freight Funding.", author: "Verified Carrier" },
];

const equipment = [
  { img: "/images/hopper.png", name: "Hopper Bottom" },
  { img: "/images/end_dump.png", name: "End Dump" },
  { img: "/images/pneumatic.png", name: "Pneumatic" },
  { img: "/images/belt.png", name: "Belt Trailer" },
  { img: "/images/tanker.png", name: "Tanker" },
  { img: "/images/walking_floor.png", name: "Walking Floor" },
];

const companies = [
  { img: "/images/company_adm.png", name: "ADM" },
  { img: "/images/company_chs.png", name: "CHS" },
  { img: "/images/company_viterra.png", name: "Viterra" },
  { img: "/images/company_bartlett.png", name: "Bartlett" },
];

export default function Landing() {
  return (
    <main className="min-h-screen">
      {/* HERO with background image */}
      <section className="relative px-6 pt-12 pb-16 text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.webp"
            alt="Bulk freight trucks"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 to-[#0a1628]" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="mb-8">
            <Image
              src="/images/logo.png"
              alt="BulkLoads"
              width={220}
              height={36}
              className="mx-auto"
              priority
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Find Bulk Freight Loads.<br />Get Paid Faster.
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Join 34,000+ carriers on the #1 load board built for hopper, end dump, pneumatic, belt, tanker &amp; grain haulers.
          </p>
          <CTAButton text="Create Your Free Account →" />
          <p className="mt-4 text-sm text-gray-400">Free forever. No credit card required.</p>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="bg-[#0d1f3c] py-6 border-y border-gray-700/50">
        <div className="flex flex-wrap justify-center gap-8 px-4 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-[#4CAF50]">{s.val}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUE PROPS with real icons */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-3">
          {valueProps.map((v) => (
            <div key={v.title} className="text-center">
              <div className="mb-3 flex justify-center">
                <Image src={v.icon} alt={v.title} width={48} height={48} className="invert opacity-80" />
              </div>
              <h3 className="text-xl font-bold mb-2">{v.title}</h3>
              <p className="text-gray-400 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CARRIER/SHIPPER SHOWCASE */}
      <section className="px-6 py-8 max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="relative rounded-xl overflow-hidden h-48 sm:h-64">
            <Image src="/images/carrier.png" alt="Carriers on BulkLoads" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="text-lg font-bold">For Carriers</div>
              <div className="text-sm text-gray-300">Find loads. Fill trucks. Get paid fast.</div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden h-48 sm:h-64">
            <Image src="/images/shipper.png" alt="Shippers on BulkLoads" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="text-lg font-bold">For Shippers</div>
              <div className="text-sm text-gray-300">Post loads. Find reliable carriers instantly.</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#0d1f3c] px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">What Carriers Are Saying</h2>
        <div className="grid gap-6 max-w-3xl mx-auto sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#142744] rounded-xl p-6">
              <p className="text-gray-300 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-sm text-[#4CAF50] font-semibold">— {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPMENT TYPES with real trailer images */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">Built for Every Bulk Trailer</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
          {equipment.map((e) => (
            <div key={e.name} className="text-center">
              <div className="h-12 flex items-center justify-center mb-2">
                <Image src={e.img} alt={e.name} width={80} height={40} className="max-h-10 w-auto brightness-200" />
              </div>
              <div className="text-xs text-gray-300">{e.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* APP DOWNLOAD */}
      <section className="px-6 py-8 text-center">
        <p className="text-gray-400 text-sm mb-4">Available on mobile</p>
        <div className="flex justify-center gap-4">
          <a href="https://play.google.com/store/apps/details?id=com.bulkloads.app" target="_blank" rel="noopener">
            <Image src="/images/google_play.svg" alt="Get it on Google Play" width={135} height={40} />
          </a>
          <a href="https://apps.apple.com/us/app/bulkloads-com/id1540218498" target="_blank" rel="noopener">
            <Image src="/images/app_store.svg" alt="Download on App Store" width={120} height={40} />
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 text-center bg-gradient-to-b from-[#0a1628] to-[#0d1f3c]">
        <h2 className="text-3xl font-bold mb-4">Ready to find your next load?</h2>
        <p className="text-gray-400 mb-8">Takes 2 minutes. Free forever.</p>
        <CTAButton text="Sign Up Free — It Takes 2 Minutes →" />
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 text-center text-xs text-gray-500 border-t border-gray-700/50">
        <div className="mb-4">
          <Image src="/images/logo.png" alt="BulkLoads" width={150} height={25} className="mx-auto opacity-60" />
        </div>
        <p>© 2026 BulkLoads.com — The #1 Bulk Freight Load Board</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="https://www.bulkloads.com/privacy" className="hover:text-gray-300">Privacy</a>
          <a href="https://www.bulkloads.com/terms" className="hover:text-gray-300">Terms</a>
        </div>
      </footer>
    </main>
  );
}
