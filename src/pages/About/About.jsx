import HeroImg from "@/assets/images/kenny-profile.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developpeur FullStack, rigoureux et oriente solutions
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block object-cover aspect-[4/5] w-full"
                  alt="RAKOTONDRAZANDRY Kenny Urvano"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Je suis RAKOTONDRAZANDRY Kenny Urvano, developpeur FullStack et
                etudiant en Master Genie Logiciel et Bases de Donnees a l Ecole
                Nationale d Informatique de Fianarantsoa.{" "}
                <span className="font-bold text-white">
                  J aime concevoir des interfaces propres et des backends
                  structures
                </span>
                , avec une attention particuliere aux besoins reels des
                utilisateurs.
              </p>
              <p className="text-white">
                Mes projets couvrent ReactJS, VueJS, Node/Express, MySQL,
                PostgreSQL et Sequelize. Je recherche une opportunite
                professionnelle stimulante pour mettre en pratique mes
                competences et continuer a progresser sur des produits web
                concrets.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    Travail en equipe, serieux, rigueur, adaptabilite et
                    apprentissage rapide guident ma facon de construire des
                    solutions utiles et evolutives.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Kenny Urvano
                    </cite>
                    <span className="text-white">
                      Developpeur FullStack - Fianarantsoa, Madagascar
                    </span>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
