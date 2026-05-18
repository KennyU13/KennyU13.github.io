import { useState } from "react";
import { Award, Calendar, BookOpen, Trophy, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Master 2 - Genie Logiciel et Bases de Donnees",
      school: "Ecole Nationale d'Informatique, Fianarantsoa",
      mascot: "M2",
      year: "Depuis 2025",
      achievements: ["Formation en cours", "Specialisation GLBD"],
      skills: ["Genie logiciel", "Bases de donnees", "Architecture", "Projet logiciel"],
      description:
        "Approfondissement des pratiques de conception, developpement, bases de donnees et conduite de projets informatiques.",
    },
    {
      degree: "Master 1 - Genie Logiciel et Bases de Donnees",
      school: "Ecole Nationale d'Informatique, Fianarantsoa",
      mascot: "M1",
      year: "2024 - 2025",
      achievements: ["Cycle Master", "Parcours GLBD"],
      skills: ["JavaScript", "SQL", "Modelisation", "Developpement web"],
      description:
        "Renforcement des bases en developpement logiciel, analyse, modelisation et gestion de donnees.",
    },
    {
      degree: "Licence - Genie Logiciel et Bases de Donnees",
      school: "Ecole Nationale d'Informatique, Fianarantsoa",
      mascot: "L3",
      year: "2021 - 2024",
      achievements: ["Diplome de licence", "Projets web pratiques"],
      skills: ["HTML5", "CSS3", "VueJS", "Express.JS"],
      description:
        "Acquisition des fondamentaux du genie logiciel, du developpement web et des bases de donnees relationnelles.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Formation
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Mon parcours academique en Genie Logiciel et Bases de Donnees a
            l Ecole Nationale d Informatique de Fianarantsoa.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl text-teal-300 font-black">
                      {edu.mascot}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Points cles
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 rounded-xl border border-blue-400/20 bg-gray-900/50 p-8 backdrop-blur-sm"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-400">
                Certificat
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                JavaScript Basic
              </h3>
              <p className="mt-2 text-gray-300">
                Certification JavaScript ajoutee a mon parcours technique.
              </p>
            </div>
            <a
              href="/certificates/javascript_basic_certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-teal-400/40 bg-teal-500/10 px-5 py-3 font-semibold text-teal-300 transition hover:bg-teal-500/20"
            >
              <ExternalLink className="h-5 w-5" />
              Voir le certificat
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
