import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PodcastLandingPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-slate-900 selection:bg-[#12066a] selection:text-white">
      {/* Top Brand Accent Bar */}
      <div className="w-full h-1.5 bg-gradient-to-r from-[#12066a] via-[#997819] to-[#12066a]" />

      <div className="max-w-4xl mx-auto px-6 py-8 sm:py-12">
        
        {/* Logo Section - Bada size aur optimized spacing */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-64 sm:w-80 h-20 sm:h-24">
            <Image
              src="/BizGrowMedia_logo.webp"
              alt="BizGrow Media Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* 1. Header Image Container */}
        <div className="mb-12 relative w-full h-[350px] sm:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-[#997819]/30 bg-[#12066a]">
          <Image
            src="/sir-javed-picst-Picsart.png"
            alt="BizGrow Media Podcast Studio"
            fill
            priority
            className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
          />
         
        </div>

        {/* Content Section */}
        <article className="space-y-8 text-lg text-slate-700 leading-relaxed font-normal">
          <p>
            A few years ago, podcasting felt like a side project that hosts did
            for fun, maybe catching a few hundred listeners here and there. But
            that’s not the case. Walk into any boardroom today and you’ll see
            founders, CEOs, and heads of marketing talking about podcasts the
            same way they talk about websites or LinkedIn pages, as if their
            brand needed it. So what changed? Mostly, businesses realized that
            podcasts do something other content formats struggle with: they make
            the brand voice sound like a real voice, not just a logo.
          </p>

          {/* Section Heading */}
          <div className="pt-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#12066a] mb-4 border-l-4 border-[#997819] pl-4">
              It's Not About the Microphone, It's About the Trust
            </h2>
          </div>

          <p>
            Here's the thing about a video podcast: people don't just hear your
            message, they watch it. They see how a founder reacts when asked a
            tough question, how a team explains its thinking, and how confident
            or genuine someone comes across on camera. That's a different level
            of connection than a static post or a written article can ever
            offer.
          </p>

          <p>
            And once someone has watched your founder sit through a real,
            twenty-minute conversation—not a polished ad, but an actual
            discussion—they don't see your business as "just another company"
            anymore. They recognize a face. They remember a name. That's where
            trust starts.
          </p>

          <div className="pt-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#12066a] mb-4 border-l-4 border-[#997819] pl-4">
              A Business Podcast Quietly Builds Authority
            </h2>
          </div>

          <p>
            There’s something to be said for expertise, too. When a business
            leader sits down and talks about real industry challenges, the
            audience pays attention to real thinking, not scripted marketing
            lines. It’s hard to fake depth of knowledge in an hour-long talk. So
            naturally, people and brands who are consistently shown with
            substance start to be seen as people who actually know what they’re
            talking about.
          </p>

          <div className="my-8 p-6 bg-white rounded-xl shadow-sm border border-[#997819]/20 italic font-medium text-slate-800 text-xl border-l-8 border-l-[#997819]">
            "This is authority. It’s not announced, it’s earned episode by
            episode."
          </div>

          <div className="pt-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#12066a] mb-4 border-l-4 border-[#997819] pl-4">
              One Recording, Many Lives
            </h2>
          </div>

          <p>
            What many businesses don’t realize at first is that a podcast
            episode is rarely a single piece of content. A good 30-minute
            conversation can turn into a half-dozen short clips, a handful of
            excerpts, graphics, a blog post, maybe an email newsletter segment.
            So the effort that goes into a studio session is reflected on the
            platform for weeks.
          </p>

          <p className="font-medium text-[#12066a]">
            That’s why podcasting has become an effective way to get noticed
            without constantly creating from scratch.
          </p>

          {/* Highlighted Agency Block with Links */}
          <div className="my-12 p-8 sm:p-10 bg-[#12066a] text-slate-100 rounded-2xl shadow-xl space-y-6 border border-[#997819]/30">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Where BizGrow Media Comes In
            </h2>
            <p className="text-slate-200 leading-relaxed">
              This is exactly the gap that{" "}
              <strong className="text-[#997819] font-semibold">
                BizGrow Media
              </strong>{" "}
              is here to fill. A lot of businesses want to start a podcast, but
              few have the production setup, strategy, or time to actually pull
              it off well – and a poorly produced podcast can do more harm than
              good to a brand’s image.
            </p>
            <p className="text-slate-200 font-medium">
              We handle it from start to finish:
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 pt-2">
              <Link
                href="https://bizgrowmedia.co.uk/studio-production/"
                target="_blank"
                className="bg-black/30 p-4 rounded-xl border border-[#997819]/20 hover:border-[#997819] transition block group"
              >
                <strong className="text-white block mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#997819]"></span>{" "}
                    Production Space
                  </span>
                  <span className="text-[#997819] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore →
                  </span>
                </strong>
                <span className="text-sm text-slate-300">
                  Designed for executive interviews with proper lighting and
                  professional audio.
                </span>
              </Link>

              <Link
                href="https://bizgrowmedia.co.uk/content-engine/"
                target="_blank"
                className="bg-black/30 p-4 rounded-xl border border-[#997819]/20 hover:border-[#997819] transition block group"
              >
                <strong className="text-white block mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#997819]"></span>{" "}
                    Content Engine
                  </span>
                  <span className="text-[#997819] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore →
                  </span>
                </strong>
                <span className="text-sm text-slate-300">
                  Turning raw recordings into clips, write-ups, and assets.
                </span>
              </Link>

              <Link
                href="https://bizgrowmedia.co.uk/authority-builder/"
                target="_blank"
                className="bg-black/30 p-4 rounded-xl border border-[#997819]/20 hover:border-[#997819] transition block group"
              >
                <strong className="text-white block mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#997819]"></span>{" "}
                    Authority Builder
                  </span>
                  <span className="text-[#997819] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore →
                  </span>
                </strong>
                <span className="text-sm text-slate-300">
                  Positioning you as a recognized name in your industry.
                </span>
              </Link>

              <Link
                href="https://bizgrowmedia.co.uk/growth-engine/"
                target="_blank"
                className="bg-black/30 p-4 rounded-xl border border-[#997819]/20 hover:border-[#997819] transition block group"
              >
                <strong className="text-white block mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#997819]"></span>{" "}
                    Growth Engine
                  </span>
                  <span className="text-[#997819] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore →
                  </span>
                </strong>
                <span className="text-sm text-slate-300">
                  Turning attention into real inquiries and revenue.
                </span>
              </Link>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#12066a] mb-4 border-l-4 border-[#997819] pl-4">
              What You Can Expect
            </h2>
          </div>

          <p>
            Brands that work with us over time tend to notice the same shifts:
            more visibility across platforms, stronger trust due to consistency,
            and messaging that feels clearer and more intentional.
          </p>

          {/* Step by Step Journey Box */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-md border border-[#997819]/20 my-10">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#12066a]">
              The Journey, Step by Step
            </h3>
            <p className="text-slate-600 mb-6">
              We don't believe in throwing a business into podcasting cold. The
              process usually looks like this:
            </p>

            <ol className="space-y-4">
              {[
                "Studio hire to test the waters.",
                "Launch package once you're ready to commit.",
                "Content engine building to maintain continuous momentum.",
                "Long-term media partnership and strategic scaling.",
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#12066a] text-[#997819] flex items-center justify-center font-bold text-sm border border-[#997819]/40">
                    0{index + 1}
                  </span>
                  <span className="text-slate-700 font-medium pt-1">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Final Call to Action Section */}
          <div className="text-center bg-gradient-to-b from-white to-[#faf8f5] p-10 sm:p-14 rounded-3xl border border-[#997819]/30 shadow-xl mt-16 space-y-6">
            <h3 className="text-3xl font-extrabold tracking-tight text-[#12066a]">
              Ready When You Are
            </h3>
            <p className="max-w-xl mx-auto text-slate-600 text-lg leading-relaxed">
              If you've been sitting on the idea of starting a podcast... that's
              usually a production and strategy problem, not a "podcasting
              doesn't work" problem.
            </p>

            <div className="pt-4">
              <Link
                href="https://bizgrowmedia.co.uk/contact-us/"
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#12066a] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#1a0996] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 border border-[#997819]/50"
              >
                <span>Step into professional media</span>
                <span className="text-[#997819] tracking-widest">→</span>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}