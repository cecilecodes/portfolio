import React from 'react';
import CustomHead from '../../components/head';
import SplitText from '../../components/split-text';
import AnimatedElement from '../../components/animated-element';
import StarBorder from '../../components/star-border';
import GradientText from '../../components/gradient-text';

export default function AboutMe() {
  return (
    <>
      <CustomHead
        title="About Me - Hyunji Cecile Park"
        description="Learn more about Hyunji Cecile Park"
      />
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center bg-white px-4 pb-8 pt-8 font-['JetBrains_Mono'] text-gray-700 dark:bg-neutral-950 dark:text-gray-200">
        <section className="mb-12 space-y-8 text-center text-base leading-relaxed">
          <div className="mb-6">
            <SplitText
              text="🎀 Deeper into Me! 🎀"
              tag="h2"
              className="font-['Schibsted_Grotesk'] text-2xl font-semibold"
              splitType="chars"
              delay={100}
              duration={0.6}
              from={{ opacity: 0, y: 40, rotationX: -90 }}
              to={{ opacity: 1, y: 0, rotationX: 0 }}
              threshold={0.5}
              textAlign="center"
            />
          </div>

          <div className="mx-auto max-w-2xl space-y-6">
            <AnimatedElement as="div" delay={0} className="space-y-2">
              <h3 className="font-['Schibsted_Grotesk'] text-lg font-semibold">Personal</h3>
              <p className="text-base">Born in 2002, South Korea 🇰🇷</p>
              <p className="text-base"><strong>Third culture kid</strong> who lived in <em>Shanghai, China for 12 years</em> 🇨🇳</p>
            </AnimatedElement>

            <AnimatedElement as="div" delay={0.1} className="space-y-2">
              <h3 className="font-['Schibsted_Grotesk'] text-lg font-semibold">Travels</h3>
              <p className="text-base">Love travelling: went to <em>more than 18 countries</em> and counting 🌍</p>
              <p className="text-base">visit my <em>Photo Account</em> that covers my travels: <a href="https://www.instagram.com/cecile.captures/" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-blue-600 dark:hover:text-blue-400">📸@cecile.captures</a></p>
              <p className="text-base">visit my <em>personal Youtube Channel</em>: <a href="https://www.youtube.com/@cecilelog7952" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-blue-600 dark:hover:text-blue-400">📹@CecileLog</a></p>
            </AnimatedElement>

            <AnimatedElement as="div" delay={0.2} className="space-y-2">
              <h3 className="font-['Schibsted_Grotesk'] text-lg font-semibold">Interests</h3>
              <p className="text-base"><strong>I love kids 👧🏻</strong>
                <br />
                I can create good rapport with them. I have experiences <em>teaching and babysitting kids </em>from age 5 to 19.</p>
              <p className="text-base">I am <strong>pasisonate in teaching 👩🏻‍🏫</strong>
                <br />
                I have <em>more than 5 years of experiences</em> teaching kids from kindergarten to adults. 
                <br /> 
                I have taught English, Korean, Math, Science etc.</p>
            </AnimatedElement>

            <AnimatedElement as="div" delay={0} className="font-['Roboto_Serif'] mx-auto max-w-2xl text-base italic flex justify-center">
              <StarBorder as="div" color="#5b92e5" speed="4s" className="text-base">
                Interested in <GradientText colors={['#5b92e5', '#9c40ff', '#5b92e5']} animationSpeed={6} className="font-bold">solving inequality issues</GradientText> for a sustainable world,
                <br />
                especially in <GradientText colors={['#5b92e5', '#9c40ff', '#5b92e5']} animationSpeed={6} className="font-bold">education, gender, and human rights.</GradientText>
              </StarBorder>
            </AnimatedElement>
          </div>
        </section>
      </main>
    </>
  );
}
