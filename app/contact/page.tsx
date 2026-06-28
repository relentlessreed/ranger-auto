import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "../../components/public/contact-form";
import heroImage from "../../imgs/4.png";
import engineImageOne from "../../imgs/2.png";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-rangerCanvas text-slate-950">
      <header className="sticky top-0 z-50 border-b-4 border-rangerBlue bg-rangerOrange">
        <div className="shell">
          <div className="flex min-h-[88px] items-center justify-between py-4 lg:min-h-[96px] lg:py-3">
            <Link href="/" className="inline-block">
              <div className="header-wordmark text-rangerBlue">Ranger Auto</div>
              <div className="header-subtitle text-white">Buy . Sell . Repair</div>
            </Link>
            <Link href="/" className="text-sm font-bold uppercase tracking-[0.1em] text-white">
              Back Home
            </Link>
          </div>
        </div>
      </header>

      <section className="border-b border-slate-300 bg-white">
        <div className="shell grid gap-8 py-10 md:py-14 xl:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="shop-kicker">Contact Ranger Auto</p>
            <h1 className="section-title mt-3 text-rangerBlue">Start with the form.</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">
              Describe the issue, list the vehicle, and upload photos if that helps show the
              problem. This page is built to feel like the shop: direct, practical, and easy to use.
            </p>

            <div className="mt-8 border-t-4 border-rangerBlue bg-[#f4f6f9] px-5 py-6 md:px-7">
              <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="shop-kicker">Send a message</p>
                  <h2 className="mt-3 text-3xl font-black uppercase tracking-[0.06em] text-rangerBlue">
                    Email the shop
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700">
                    Upload up to five photos or files if you need to show damage, warning lights,
                    leaks, broken parts, or previous repair paperwork.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden border border-slate-300 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={heroImage}
                  alt="Ranger Auto shop lift and work bay"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="border-t-4 border-rangerBlue p-5">
                <p className="shop-kicker">Shop info</p>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700">
                  <div className="flex gap-3">
                    <Phone size={18} className="mt-1 shrink-0 text-rangerBlue" />
                    <div>
                      <strong>Call / Text</strong>
                      <br />
                      (785) 251-3696
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail size={18} className="mt-1 shrink-0 text-rangerBlue" />
                    <div>
                      <strong>Email</strong>
                      <br />
                      rangerautolawrence@gmail.com
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin size={18} className="mt-1 shrink-0 text-rangerBlue" />
                    <div>
                      <strong>Shop</strong>
                      <br />
                      1724 Bullene Ave, Lawrence, KS
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden border border-slate-300 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={engineImageOne}
                  alt="Ranger Auto engine teardown work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="border-t-4 border-rangerOrange p-5">
                <p className="shop-kicker">What to send</p>
                <div className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
                  <p>Photos of leaks, damage, warning lights, or parts that look wrong.</p>
                  <p>Year, make, model, and any recent repairs already attempted.</p>
                  <p>Any previous estimate or diagnostic paperwork if you want a second opinion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
