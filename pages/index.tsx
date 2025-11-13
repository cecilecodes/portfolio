import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import AnimatedElement from '../components/animated-element';
import Card from '../components/card';
import CustomHead from '../components/head';

export default function Home() {
  return (
    <>
      <CustomHead />
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center bg-neutral-50 px-4 pb-8 pt-8 font-['Roboto'] text-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
        <div className="w-full">
          <div className="mb-6 flex flex-row items-center justify-center">
            <Image
              src="/hyunji-pic.jpeg"
              alt="Profile Photo"
              width={150}
              height={150}
              className="rounded-full shadow-lg"
            />
          </div>
          <AnimatedElement
            as="h1"
            className="font-base mb-6 text-center font-['Merriweather'] text-3xl"
          >
            Hyunji Cecile Park
          </AnimatedElement>

          <div className="mb-8 flex flex-row items-center justify-center space-x-6">
          <a href="https://www.linkedin.com/in/hyunji-park-4811b6219/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg border-2 border-gray-300 bg-white px-6 py-2 text-xl text-black transition-colors duration-200 hover:border-[#5B92E5] dark:border-white dark:bg-black dark:text-white dark:hover:border-[#5B92E5]"
              >
                <FaLinkedinIn />
              </motion.button>
            </a>
            <a href="https://www.youtube.com/@cecilelog7952" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg border-2 border-gray-300 bg-neutral-50 px-6 py-2 text-xl text-black transition-colors duration-200 hover:border-[#5B92E5] dark:border-white dark:bg-black dark:text-white dark:hover:border-[#5B92E5]"
              >
                <FaYoutube />
              </motion.button>
            </a>
            <a href="https://github.com/cecilecodes" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg border-2 border-gray-300 bg-neutral-50 px-6 py-2 text-xl text-black transition-colors duration-200 hover:border-[#5B92E5] dark:border-white dark:bg-black dark:text-white dark:hover:border-[#5B92E5]"
              >
                <FaGithub />
              </motion.button>
            </a>
            
          </div>

          <section className="mb-12 space-y-8 text-center text-base leading-relaxed">
            <div className="space-y-1">
              <AnimatedElement as="p" delay={0.3} className="text-base font-['Edu_VIC_WA_NT_Hand']">
                📍 Seoul, South Korea
              </AnimatedElement>

              <AnimatedElement as="p" delay={0.4} className="text-base font-['Edu_VIC_WA_NT_Hand']">
                <a
                  href="/about-me"
                  className="text-neutral-800 hover:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-400"
                >
                  👉🏻 More About Me
                </a>
              </AnimatedElement>
            </div>

            <div className="flex flex-col space-y-8">
              <AnimatedElement
                as="h3"
                delay={0.5}
                className="font-['Merriweather'] text-lg font-semibold"
              >
                Education 📚
              </AnimatedElement>
              <AnimatedElement as="p" delay={0.6} className="text-base">
                M.S. in French Language and Literature, Political Science and Diplomacy, and Education
                <br />
                <a
                  href="https://www.yonsei.ac.kr/sc/index.do"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Yonsei University
                </a>{' '}
                and{' '}
                <a
                  href="https://www.sciencespo.fr/en/"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Sciences Po Paris
                </a>
              </AnimatedElement>
            </div>

            <div className="flex flex-col space-y-8">
              <AnimatedElement
                as="h3"
                delay={0.8}
                className="font-['Merriweather'] text-lg font-semibold"
              >
                Internships 👩🏻‍💻
              </AnimatedElement>
              <AnimatedElement
                as="div"
                delay={0.9}
                className="text-base text-neutral-600 dark:text-neutral-400"
              >
                <a
                  href="https://unesco.or.kr/"
                  className="text-neutral-800 hover:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-400"
                >
                  Korean National Commission for UNESCO
                </a>{' '}
                – National commission coordinating UNESCO activities in Korea
                <br />
                <a
                  href="https://pscore.org/home/"
                  className="text-neutral-800 hover:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-400"
                >
                  PSCORE
                </a>{' '}
                – UN Consultative NGO for North Korean human rights
                <br />
                <a
                  href="https://www.flitto.com/portal/en"
                  className="text-neutral-800 hover:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-400"
                >
                  FLITTO
                </a>{' '}
                – Korean tech organization for AI-powered translation services
                <br />
                <a
                  href="https://wisdomagora.com/"
                  className="text-neutral-800 hover:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-400"
                >
                  Wisdom Agora
                </a>{' '}
                – Online newsletter written by overseas Korean students
              </AnimatedElement>
            </div>

            <div className="flex flex-col space-y-8">
              <AnimatedElement
                as="h3"
                delay={0.8}
                className="font-['Merriweather'] text-lg font-semibold"
              >
                Business 💼
              </AnimatedElement>
              <AnimatedElement
                as="div"
                delay={0.9}
                className="text-base text-neutral-600 dark:text-neutral-400"
              >
                <a
                  href="https://unesco.or.kr/"
                  className="text-neutral-800 hover:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-400"
                >
                  RESPACK
                </a>{' '}
                , startup for eco-friendly parcel buffer made from textile wastes – COO
              </AnimatedElement>
            </div>

            <div className="flex flex-col space-y-8">
              <AnimatedElement
                as="h3"
                delay={1.0}
                className="font-['Merriweather'] text-lg font-semibold"
              >
                Awards 🏆
              </AnimatedElement>
              <AnimatedElement
                as="div"
                delay={1.1}
                className="text-base text-neutral-600 dark:text-neutral-400"
              >
                <span className="text-neutral-800 dark:text-neutral-200">Grand Prize</span> – <a
                  href="https://www.hultprize.org/"
                  className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                >
                  HULT Prize On Campus
                </a>
                <br />
                <span className="text-neutral-800 dark:text-neutral-200">Top 6 Teams</span> – <a
                  href="https://www.hultprize.org/"
                  className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                >
                  HULT Prize National: Seoul
                </a>
                <br />
                <span className="text-neutral-800 dark:text-neutral-200">Ministerial Award</span> – <a
                  href="https://www.mheti.masimbi.com/"
                  className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                >
                  The Republic of Nambia's Ministry of Higher Education, Technology and Innovation
                </a>                <br />
                <span className="text-neutral-800 dark:text-neutral-200">Grand Prize : 9th I-MUN-UPR</span> – <a
                  href="https://www.mofa.go.kr/www/index.do"
                  className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                >
                  Korean Ministry of Foreign Affairs
                </a>, <a
                  href="https://humanasia.org/"
                  className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                >
                  Human Asia
                </a>
                <br />
                <span className="text-neutral-800 dark:text-neutral-200">Grand Prize : French Department Promotion Video</span> – <a
                  href="https://www.yonsei.ac.kr/sc/index.do"
                  className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                >
                  Yonsei University
                </a>
                <br />
                <span className="text-neutral-800 dark:text-neutral-200">Grand Prize</span> – <a
                  href="https://ihei.yonsei.ac.kr/ihei/index.do"
                  className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                >
                  Yonsei University Institute for Higher Education Innovation (IHEI)
                </a>
              </AnimatedElement>
            </div>

            <AnimatedElement as="p" delay={1.2} className="font-['Roboto_Serif'] mx-auto max-w-2xl text-base italic">
              Interested in <strong>solving inequality issues</strong> for a sustainable world,
              <br />
              especially in <strong style={{ color: '#5b92e5' }}>education, gender, and human rights.</strong>
            </AnimatedElement>
          </section>

          <section className="mb-12 space-y-6">
            <AnimatedElement
              as="h2"
              delay={1.3}
              className="mb-6 text-center font-['Merriweather'] text-lg font-semibold"
            >
              My Past-Activities 📝
            </AnimatedElement>
            <AnimatedElement
              as="div"
              delay={1.4}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              <Card
                title="KOICA WFK Global Volunteering"
                description="Went to Cambodia for 5 months to support sustainable development by teaching rural children."
                linkProd="https://www.koica.go.kr/koica_en/3459/subview.do"
                organization="Korea International Cooperation Agency (KOICA)"
                position="Cambodia Team 2 Leader"
              ></Card>

              <Card
                title="RESPACK Startup"
                description="Started a startup that sells eco-friendly parcel buffers made from textile wastes."
                award="Hult Prize On Campus: Grand Prize"
                position="COO"
              ></Card>

              <Card
                title="Google Developer Group Yonsei (GDGoC Yonsei)"
                description="Created projects such as 'Seoul Event Calendar' that provides all events information in a neat manner."
                linkProd="https://gdgoc.yonsei.ac.kr/en"
                position="Frontend Developer"
              ></Card>

              <Card
                title="2023 Global Youth Forum"
                description="Organized and conducted Forum for international youths to explore sustainable peace beyond war by weaving knowledge and collaboration"
                linkProd="https://unesco.or.kr/%EC%A7%80%EC%8B%9D%EC%9D%84-%ED%95%A8%EA%BB%98-%EC%97%AE%EC%96%B4-%ED%8F%89%ED%99%94-%EC%9C%84%ED%95%9C-%EB%B3%80%ED%99%94%EB%A5%BC-%EB%A7%8C%EB%93%A4%EC%9E%90/"
                organization="Korean National Commission for UNESCO"
                position="Intern"
              ></Card>

              <Card
                title="18th Yonsei Delegation of Model United Nations"
                description="Organized and conducted chair and committee director of YDMUN for 2 years."
                linkProd="https://www.yonseimun.com/about-ydmun"
                organization="Yonsei University"
                position="Committee Director, Chair"
              ></Card>

              <Card
                title="2024 9th I-MUN-UPR"
                description="Wrote resolutions on: Rights of Persons with Disabilities, Migrant and Refugee Rights, Human Rights and the Environment."
                linkProd="https://humanasia.org/bbs/board.php?bo_table=activity&wr_id=990&page=3"
                award="Grand Prize"
                organization="Human Asia, ROK Ministry of Foreign Affairs"
                position="Delegate of Vietnam and China"
              ></Card>

             <Card
                title="Universities Allied for Essential Medicines Korea (UAEM Korea)"
                description="Global student network advocating for equitable access to medicines by changing pharmaceutical innovation practices. Created children's books on essential medicines and distributed them to children institutions. Won Grand Prize at Yonsei Institute for Higher Education Innovation (IHEI)."
                linkProd="https://www.uaem.org/"
                award="IHEI Grand Prize"
                organization="UAEM, Human Asia"
                position="President"
              ></Card>

              <Card
                title="2023 Global Youth Summit"
                description="Organized and translated KR-ENG for international youths who discussed about strengthening the role of youth in building a sustainable future society."
                linkProd="https://www.mogef.go.kr/nw/enw/nw_enw_s001d.do?mid=mda700&bbtSn=711291"
                organization="ROK Ministry of Gender Equality and Family"
                position="Facilitator"
              ></Card>

              <Card
                title="2021 Yonsei University LearnUs Department Promotion Video Contest"
                description="Filmed and won Grand Prize among 50+ majors in Yonsei University."
                linkYou="https://youtu.be/EIQdo5lN5Lg?si=wjP1QzPifeYtJBM8"
                organization="Yonsei University"
                position="Public Relations Officer"
                award="Grand Prize"
              ></Card>

              <Card
                title="2022 ICM MUNESCO"
                description="Filmed and won Grand Prize among 50+ majors in Yonsei University."
                linkYou="https://www.youtube.com/live/8peEF2SorMc?si=VUB4yTLyztnur5di"
                organization="UNESCO ICM"
                position="CIGEPS Chair"
              ></Card>

              <Card
                title="21.22 AIESEC in YSU"
                description="AIESEC is a global youth organization that develops leadership through international exchange and volunteer experiences."
                linkProd="https://www.aiesecinkorea.org/#home"
                organization="AIESEC in YSU"
                position="iGV, TM Member"
              ></Card>

              <Card
                title="2022 World Minister Forum: Airport Protocol"
                description="Performed as a protocol for 4 country ministers at the Incheon AirportAssisted VIP with their arrival and departure."
                award="Ministrial Award"
                organization="World Minister Forum"
                position="Protocol officer, Translatorr"
              ></Card>

              <Card
                title="KOICA WeKO 6"
                description="Conducted as a global ambassador, created contents and promoted international development (ODA) across borders."
                linkProd="https://www.koica.go.kr/koica_kr/990/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGa29pY2Ffa3IlMkYxNTElMkYzODYwNzIlMkZhcnRjbFZpZXcuZG8lM0ZwYWdlJTNEMSUyNnNyY2hDb2x1bW4lM0QlMjZzcmNoV3JkJTNEJTI2YmJzQ2xTZXElM0QlMjZiYnNPcGVuV3JkU2VxJTNEJTI2cmdzQmduZGVTdHIlM0QlMjZyZ3NFbmRkZVN0ciUzRCUyNmlzVmlld01pbmUlM0RmYWxzZSUyNnBhc3N3b3JkJTNEJTI2"
                organization="Korea International Cooperation Agency (KOICA)"
              ></Card>

              <Card
                title="Yonsei Underwood International Development Academia (UIDA)"
                description="Collaborated with Green Climate Fund (GCF) & Human Rights Beyond Borders (HRBB). Wrote 2 research papers about Najo tribe & education inequality for persons with disabilities."
                linkLink="https://www.linkedin.com/company/uidayonsei/posts/?feedView=all&viewAsMember=true"
                organization="Yonsei University"
                position="Admin"
              ></Card>

              <Card
                title="AYIMUN 25th, 26th"
                description="Chaired multiple committees at the international youth MUN conferences."
                linkLink="https://modelunitednation.org/"
                organization="AYIMUN"
                position="ILO Chair, EU Chair, UNESCO Rapporteur"
              ></Card>

            </AnimatedElement>
          </section>
        </div>
      </main>
    </>
  );
}
