import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, HeartHandshake, Target, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Palette,
  Mic2,
  Theater,
  Video,
  BookOpen,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Facebook,
  Instagram,
  Twitter,
  Music2, // TikTok icon alternative (lucide has no official TikTok)
  Mail,
} from "lucide-react";

const sponsors = [
  { name: "Sangguniang Kabataan", src: "/logos/6.png" },
  { name: "Amnesty International Philippines", src: "/logos/5.png" },
  { name: "PhilRights", src: "/logos/4.png" },
  { name: "Ateneo Human Rights Center", src: "/logos/3.png" },
  { name: "CANVAS", src: "/logos/2.png" },
  { name: "CAMP Pag-ayo", src: "/logos/1.png" },
];

const programs = [
  {
    title: "Karapatan ko, Ipipinta Ko",
    desc: "A collaborative public art initiative where youth and local artists design and paint large-scale murals in schools and community centers, centered on equality, human rights, and social justice.",
    icon: Palette,
  },
  {
    title: "Mic for the Margins: Voices of Justice",
    desc: "A forum that empowers participants to express personal experiences of inequality, discrimination, and social injustice through original poems, spoken word pieces, or slam poetry.",
    icon: Mic2,
  },
  {
    title: "The People’s Stage: Stories that Spark Action",
    desc: "A community-based theater program that empowers youth to transform real social issues into impactful dramatic performances.",
    icon: Theater,
  },
  {
    title: "Visionaries: Filming Change, Telling Truth",
    desc: "A youth media program that engages participants in creating short films and digital documentaries addressing human rights, inclusion, and social justice.",
    icon: Video,
  },
  {
    title: "SiningSaysay",
    desc: "A community-based interactive storytelling and art advocacy program highlighting real-life experiences of youth and marginalized groups through mixed media art.",
    icon: BookOpen,
  },
];

// put this near the top of page.tsx (outside the component)
const beneficiaries = [
  {
    title: "Senior High School Students",
    desc: "Students at a crucial stage of civic development who need structured programs on human rights, justice, and equality.",
    icon: GraduationCap,
  },
  {
    title: "Out-of-School Youth",
    desc: "Youth from disadvantaged communities facing barriers to education, employment, and civic participation—limiting their ability to assert their rights.",
    icon: Users,
  },
  {
    title: "Marginalized Communities",
    desc: "Underrepresented groups disproportionately affected by discrimination, inequality, and limited access to opportunities—needing inclusion and empowerment.",
    icon: HeartHandshake,
  },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section id="home" className="relative max-h-dvh bg-[#f7f6f2]">
        {/* FLOATING NAVBAR */}
        <header className="absolute top-4 left-0 right-0 z-20">
          <div className="mx-auto max-w-6xl px-4">
            <nav className="flex items-center justify-between rounded-2xl bg-white/90 backdrop-blur-md px-6 py-3 shadow-md">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="relative h-9 w-9">
                  <Image
                    src="/logo.png"
                    alt="Community and youth empowerment"
                    fill
                    className="object-cover"
                    // height={100}
                    // width={100}
                    priority
                  />
                </div>
                <span className="tracking-tighter font-semibold text-neutral-900">
                  P.A.N.T.A.Y
                </span>
              </div>

              {/* Nav Links */}
              <ul className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
                <li>
                  <Link href="#home" className="hover:text-neutral-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-neutral-900">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#programs" className="hover:text-neutral-900">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#beneficiaries"
                    className="hover:text-neutral-900"
                  >
                    Impact
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-neutral-900">
                    Contact
                  </Link>
                </li>
              </ul>

              {/* CTA */}
              <Button className="rounded-xl bg-beige-700 text-white hover:bg-beige-800">
                Learn more
              </Button>
            </nav>
          </div>
        </header>

        {/* CONTENT */}
        <div className="mx-auto max-w-6xl px-5 pt-28 pb-16 grid lg:grid-cols-2 gap-12 ">
          {/* LEFT: TEXT */}
          <div className="mt-4">
            <Badge className="mb-4 rounded-full bg-beige-100 text-beige-700">
              Youth • Human Rights • Social Justice
            </Badge>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-neutral-900 tracking-tighter">
              Pantay ang Boses <br />
              ng Bawat Isa
            </h1>

            <p className="mt-5 max-w-xl text-neutral-600 leading-relaxed">
              P.A.N.T.A.Y is a youth-led organization committed to promoting
              equality, human rights awareness, and civic engagement through
              education, art, and community-driven action.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-beige-700 text-white hover:bg-beige-800"
              >
                <Link href="#beneficiaries">
                  Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-beige-700 text-beige-700 hover:bg-beige-50"
              >
                <Link href="#programs">Learn More</Link>
              </Button>
            </div>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-3 gap-6 text-sm">
              <Stat value="150+" label="Youth Reached" icon={Users} />
              <Stat value="20+" label="Communities" icon={HeartHandshake} />
              <Stat value="2026" label="Founded" />
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="relative mt-8">
            <div className="absolute -inset-4 rounded-3xl bg-beige-200/40 blur-2xl" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop"
                alt="Community and youth empowerment"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT / OUR STORY */}
      <section id="about" className="bg-beige py-20">
        <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative mt-4">
            <div className="absolute -inset-4 rounded-3xl " />
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
              <Image
                src="/members.png"
                alt="Community and youth empowerment"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* LEFT — TEXT */}
          <div>
            <p className="text-xs tracking-widest uppercase text-neutral-500">
              About Us
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-neutral-900 leading-tight">
              Our Story and Advocacy
            </h2>

            <p className="mt-5 text-neutral-600  max-w-xl">
              <span className="font-semibold text-neutral-900">
                P.A.N.T.A.Y
              </span>{" "}
              (Pagkakapantay-pantay, Adhikain, Nagkakaisang Komunidad, Tiwala,
              Aksyon, at Yakap sa Karapatan) Foundation was established by youth
              leaders from Manuel G. Araullo High School, educators, and
              community volunteers, the organization was created in response to
              the growing need to strengthen human rights awareness and civic
              engagement among Filipino youth.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 mt-8">
              {/* MISSION */}
              <div className="border-l-4 border-beige-700 pl-5">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-brown-800" />
                  <span className="font-bold tracking-wide text-neutral-900">
                    MISSION
                  </span>
                </div>
                <p className="mt-2 text-sm hypenate text-neutral-600 max-w-none">
                  To promote human rights awareness and social justice through
                  community-based education, leadership development, and
                  inclusive engagement, empowering youth and marginalized groups
                  to participate actively in civic life.
                </p>
              </div>

              {/* VISION */}
              <div className="border-l-4 border-beige-700 pl-5">
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-brown-800" />
                  <span className="font-bold tracking-wide text-neutral-900">
                    VISION
                  </span>
                </div>
                <p className="mt-2 text-sm hypenate text-neutral-600 max-w-none">
                  A Philippines where everyone enjoys equal rights, dignity, and
                  opportunities, and where communities work together to promote
                  justice, respect diversity, and achieve equitable development.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — IMAGES */}
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-5">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-5">
            <p className="text-xs tracking-widest uppercase text-brown-600">
              Future Programs and Activities
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-brown-900">
              What We Do
            </h2>
            <p className="mt-4 max-w-2xl text-sm md:text-base text-brown-700 leading-relaxed hyphenate text-center">
              Our programs use art, storytelling, and youth participation to
              promote human rights awareness, social justice, and inclusive
              community action.
            </p>
          </div>

          {/* List */}
          <div className="space-y-5">
            {programs.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="flex gap-6 border-t border-brown-200 pt-10"
                >
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="h-12 w-12 rounded-xl bg-beige-200 flex items-center justify-center ring-1 ring-brown-200">
                      <Icon className="h-6 w-6 text-brown-900" />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-brown-900">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-brown-700 leading-relaxed hyphenate">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TARGET BENEFICIARIES */}
      <section id="beneficiaries" className="bg-[#f7f6f2] py-10">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs tracking-widest uppercase text-brown-600">
                Target Beneficiaries
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brown-900">
                Who we serve
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-brown-700 leading-relaxed">
                We focus on youth sectors who are most in need of human rights
                education, leadership development, and inclusive civic
                engagement.
              </p>
            </div>

            <div className="flex gap-2">
              <Badge className="rounded-full bg-white/80 text-brown-800 border border-brown-200">
                Inclusive
              </Badge>
              <Badge className="rounded-full bg-white/80 text-brown-800 border border-brown-200">
                Youth-led
              </Badge>
              <Badge className="rounded-full bg-white/80 text-brown-800 border border-brown-200">
                Community-based
              </Badge>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {beneficiaries.map((b) => (
              <Card
                key={b.title}
                className="rounded-3xl border-brown-200 bg-white/75 shadow-sm hover:bg-white transition"
              >
                <CardHeader className="space-y-3">
                  <div className="h-12 w-12 rounded-2xl bg-beige-200 grid place-items-center">
                    <b.icon className="h-6 w-6 text-brown-900" />
                  </div>
                  <CardTitle className="text-lg text-brown-900">
                    {b.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-brown-700 leading-relaxed hyphenate">
                    {b.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button className="rounded-xl bg-brown-900 text-beige-50 hover:bg-brown-800">
              Become a Volunteer <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="rounded-xl border-brown-300 text-brown-900 hover:bg-beige-200"
            >
              View Our Programs
            </Button>
          </div>
        </div>
      </section>
      {/* SPONSORSHIPS / PARTNERS */}
      <section id="partners" className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase text-brown-600">
              Partnerships & Sponsorships
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brown-900">
              Working with organizations that share our values
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-brown-700 leading-relaxed">
              P.A.N.T.A.Y collaborates with institutions, youth organizations,
              and civil society groups to strengthen program reach, credibility,
              and long-term community impact.
            </p>
          </div>

          {/* Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-3 gap-y-10 items-center">
            {sponsors.map((s) => (
              <div
                key={s.name}
                className="group flex items-center justify-center"
                title={s.name}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="relative h-24 w-24 opacity-70 ">
                    <Image
                      src={s.src}
                      alt={s.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-center mt-2 text-xs text-brown-700">
                    {s.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Subtle divider */}
          <div className="mt-20 flex items-center justify-center">
            <span className="h-px w-32 bg-brown-300/50" />
          </div>

          {/* Soft CTA text (no button) */}
          <p className="mt-6 text-center text-sm text-brown-700">
            Interested in supporting youth-led initiatives for human rights and
            social justice?{" "}
            <span className="font-semibold text-brown-900">
              Let’s collaborate.
            </span>
          </p>
        </div>
      </section>
      {/* CONTACT */}
      <section id="contact" className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-5">
          {/* Header */}
          <div className="max-w-2xl">
            <p className="text-xs tracking-widest uppercase text-brown-600">
              Contact & Connect
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brown-900 tracking-tight">
              Stay connected with P.A.N.T.A.Y
            </h2>
            <p className="mt-4 text-sm md:text-base text-brown-700 leading-relaxed">
              Follow our official platforms for updates on programs, community
              initiatives, and opportunities for collaboration and support.
            </p>
          </div>

          {/* Social links */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SocialLink
              href="https://www.facebook.com/share/1bbHTXt9HY/"
              label="Facebook"
              handle="Pantay PH"
              icon={Facebook}
            />
            <SocialLink
              href="https://www.instagram.com/pantay_ph?igsh=MWI5MXVpc254d2V2aA=="
              label="Instagram"
              handle="@pantay_ph"
              icon={Instagram}
            />
            <SocialLink
              href="https://www.tiktok.com/@pantay_ph2026?_r=1&_t=ZS-94Dcfs40J4E"
              label="TikTok"
              handle="@pantay_ph2026"
              icon={Music2}
            />
            <SocialLink
              href="https://x.com/pantay62252"
              label="X (Twitter)"
              handle="@pantay62252"
              icon={Twitter}
            />
          </div>

          {/* Closing note */}
          <div className="mt-10 max-w-full">
            <p className="w-full text-sm text-brown-700">
              For partnerships, sponsorships, or volunteer opportunities, you
              may reach out through any of our official channels.
            </p>
            <p className="mt-2 text-xs text-brown-500">
              © 2026 P.A.N.T.A.Y Foundation • Manila, Philippines
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function SocialLink({
  href,
  label,
  handle,
  icon: Icon,
}: {
  href: string;
  label: string;
  handle: string;
  icon: LucideIcon;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group rounded-3xl border border-brown-200 px-6 py-6 transition hover:border-brown-400"
    >
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-2xl bg-beige-200 flex items-center justify-center transition group-hover:bg-beige-300">
          <Icon className="h-6 w-6 text-brown-900" />
        </div>
        <div>
          <p className="text-sm font-semibold text-brown-900">{label}</p>
          <p className="text-sm text-brown-600">{handle}</p>
        </div>
      </div>
    </Link>
  );
}

function StoryImage({ src }: { src: string }) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md">
      <Image
        src={src}
        alt="Community engagement"
        fill
        className="object-cover"
      />
    </div>
  );
}

/* ---------- Small stat component ---------- */
function Stat({
  value,
  label,
  icon: Icon,
}: {
  value: string;
  label: string;
  icon?: LucideIcon;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 font-semibold text-neutral-900">
        {Icon && <Icon className="h-4 w-4 text-beige-700" />}
        {value}
      </div>
      <p className="text-neutral-500 text-xs">{label}</p>
    </div>
  );
}
