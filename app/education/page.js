"use client";

import Navbar from "../components/Navbar";

export default function EducationPage() {
  const education = [
    {
      institution: "Vellore Institute of Technology",
      degree: "B.Tech in Computer Science and Engineering",
      location: "Chennai, Tamil Nadu",
      dates: "Sept 2021 — July 2025"
    },
    {
      institution: "FIITJEE Jr College",
      degree: "Higher Secondary Education",
      stream: "PCM",
      location: "",
      dates: ""
    },
    {
      institution: "Kendriya Vidyalaya Sangathan",
      degree: "Primary & Secondary Education",
      location: "",
      dates: "2008 – 2018"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-bg-deep text-gold-soft">
      <Navbar />

      <main className="flex-1">
        <section className="relative border-t border-neutral-900/80 bg-black/95 py-16 overflow-hidden">
          <div className="geometric-shape shape-circle top-1/4 left-20" />
          <div className="geometric-shape shape-square top-1/2 right-16" />
          <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl space-y-4">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-gold-soft sm:text-5xl decorative-line">
                Education
              </h1>
            </div>

            <div className="relative">
              {/* Central timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-soft/40 via-gold-soft/20 to-transparent transform -translate-x-1/2 hidden md:block" />

              <div className="space-y-16">
                {education.map((edu, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div key={index} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 top-3 h-5 w-5 rounded-full border-2 border-gold-soft/60 bg-neutral-950 transform -translate-x-1/2 z-10 hidden md:block" />

                      {/* Content - Alternating sides */}
                      <div className={`flex items-start gap-12 ${
                        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}>
                        {/* Left/Right content area */}
                        <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                          <div className={`experience-card rounded-xl border border-neutral-800/50 bg-neutral-950/40 backdrop-blur-sm p-8 transition-all hover:border-neutral-700/50 hover:bg-neutral-950/60 ${
                            isEven ? 'md:ml-auto md:max-w-lg' : 'md:mr-auto md:max-w-lg'
                          }`}>
                            <div className="flex flex-col gap-3">
                              <h3 className="font-display text-2xl font-semibold text-gold-soft">
                                {edu.institution}
                              </h3>
                              {edu.stream && (
                                <p className="text-base text-gold-muted/90 font-medium">
                                  {edu.stream}
                                </p>
                              )}
                              <p className="text-base text-gold-muted">
                                {edu.degree}
                              </p>
                              {edu.location && (
                                <p className="text-sm text-gold-muted/70">
                                  {edu.location}
                                </p>
                              )}
                              <p className="mt-3 text-sm font-medium text-gold-muted/80">
                                {edu.dates}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Spacer for timeline on desktop */}
                        <div className="hidden md:block w-8 flex-shrink-0" />

                        {/* Right/Left empty space for alternating layout */}
                        <div className="hidden md:block flex-1" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
