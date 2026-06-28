"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import heroImage from "../imgs/4.png";

const services = [
  "Diagnostics and troubleshooting",
  "Brake and suspension work",
  "Engine and transmission replacement",
  "Electrical repair",
  "Detailing inside and out",
  "Custom fabrication and welding"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-rangerCanvas text-slate-950">
      <header className="sticky top-0 z-50 bg-white shadow-[0_10px_30px_rgba(21,85,159,0.08)]">
        <div className="shell">
          <div className="flex min-h-[84px] items-center justify-between gap-6 py-4">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/brand-mark.svg"
                alt=""
                aria-hidden="true"
                width={120}
                height={60}
                className="brand-mark-svg"
              />
              <div>
                <div className="header-wordmark text-rangerBlue">Ranger Auto</div>
                <div className="header-subtitle text-rangerOrange">Buy . Sell . Repair</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-10 lg:flex">
              <Link href="#services" className="header-nav-link">
                Services
              </Link>
              <Link href="#about" className="header-nav-link">
                About
              </Link>
              <Link href="/contact" className="header-nav-button">
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <div className="header-stripes" aria-hidden="true">
          <div className="header-stripes-blue" />
          <div className="header-stripes-yellow" />
        </div>
      </header>

      <section id="about" className="border-b border-slate-200 bg-white">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="hero-copy shell py-12 md:py-16 lg:py-20">
            <p className="shop-kicker">Independent Lawrence auto repair</p>
            <h1 className="hero-wordmark mt-4 text-rangerBlue">Ranger Auto</h1>
            <p className="hero-subtitle mt-3 text-rangerOrange">Straight answers. Real shop work. No dealership runaround.</p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700">
              Ranger Auto handles everything from brakes and suspension to engine swaps,
              diagnostics, detailing, fabrication, and one-off problem solving. This is a local
              working shop with direct communication, photo documentation, and availability any
              day of the week from 9 to 5.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="tel:17852513696" className="button-primary">
                Call / Text Now
              </Link>
              <Link
                href="https://maps.google.com/?q=1724+Bullene+Ave,+Lawrence,+KS"
                className="button-secondary"
              >
                Get Directions
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="info-slab">
                <div className="info-label">Hours</div>
                <div className="info-value">9 AM - 5 PM</div>
              </div>
              <div className="info-slab">
                <div className="info-label">Services</div>
                <div className="info-value">Repair . Build . Detail</div>
              </div>
              <div className="info-slab">
                <div className="info-label">Location</div>
                <div className="info-value">East Lawrence</div>
              </div>
            </div>
          </div>

          <div className="hero-image-wrap relative min-h-[340px] bg-[#d7dbe1] lg:min-h-[640px]">
            <Image
              src={heroImage}
              alt="Ranger Auto shop with a car on the lift"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.68),rgba(255,255,255,0)_22%,rgba(0,0,0,0.1))]" />
            <div className="absolute bottom-0 left-0 right-0">
              <div className="hero-stripe-orange" />
              <div className="hero-stripe-blue" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-12 md:py-16">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="shop-kicker">What Ranger Auto does</p>
            <h2 className="section-title mt-3 text-rangerBlue">Local shop services, listed plainly</h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              This should read like a place you actually call. Less feature-marketing language,
              more direct explanation of what comes through the door and what gets handled in-house.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <div key={service} className="service-row">
                <span className="service-dot" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rangerBlue py-12 text-white md:py-16">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="shop-kicker text-rangerOrange">Contact the shop</p>
            <h2 className="section-title mt-3 text-white">Need an estimate, diagnosis, or a second opinion?</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/84">
              Call, text, or email directly. Describe the vehicle, the symptoms, and what you
              need done. The point of the site should feel the same as the business: direct,
              local, and easy to reach.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="tel:17852513696" className="button-light">
              Call / Text
            </Link>
            <Link href="/contact" className="button-outline-light">
              Email the Shop
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
