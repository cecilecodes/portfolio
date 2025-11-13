import React from 'react';
import CustomHead from '../../components/head';

export default function AboutMe() {
  return (
    <>
      <CustomHead
        title="About Me - Hyunji Cecile Park"
        description="Learn more about Hyunji Cecile Park"
      />
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center bg-white px-4 pb-8 pt-8 font-['JetBrains_Mono'] text-gray-700 dark:bg-neutral-950 dark:text-gray-200">
        <section className="mb-12 space-y-8 text-center text-base leading-relaxed">
          <h2 className="mb-6 text-center font-['Schibsted_Grotesk'] text-2xl font-semibold">
            🎀 Deeper into my life 🎀
          </h2>

          <div className="mx-auto max-w-2xl space-y-6">
            <div className="space-y-2">
              <h3 className="font-['Schibsted_Grotesk'] text-lg font-semibold">Personal</h3>
              <p className="text-base">Born in 2002, South Korea.</p>
              <p className="text-base">Third culture kid who lived in Shanghai, China for 12 years 🇨🇳</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-['Schibsted_Grotesk'] text-lg font-semibold">Travels</h3>
              <p className="text-base">Love travelling: went to more than 18 countries and counting 🌍</p>
              <p className="text-base">visit my photo account that covers my travels: <a href="https://www.instagram.com/cecile.captures/" target="_blank" rel="noopener noreferrer">📸 @cecile.captures</a></p>
              <p className="text-base">visit my personal Youtube Channel: <a href="https://www.youtube.com/@cecilelog7952" target="_blank" rel="noopener noreferrer">📹 @CecileLog</a></p>
            </div>

            <div className="space-y-2">
              <h3 className="font-['Schibsted_Grotesk'] text-lg font-semibold">Interests</h3>
              <p className="text-base">👧🏻 I love kids and I can create good rapport with them. I have experiences teaching and babysitting kids from age 5 to 19.</p>
              <p className="text-base">👩🏻‍🏫 I love and am pasisonate in teaching. I have more than 5 years of experiences teaching kids from kindergarten to adults. I have taught English, Korean, Math, Science and many more.</p>
              <p className="text-base">I am interested in making the world a better and equal place for everyone. I strive to end social inequality.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
