import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const projects = [
  {
    title: "Notes App Fullstack",
    description:
      "Application de gestion de notes personnelles en monorepo avec API REST NestJS, PostgreSQL, Prisma, JWT, Swagger, React 18, Vite, TypeScript, Tailwind CSS et Zustand.",
    image: "/project-demos/notes-app-fullstack.png?v=3",
    color: "#5196fd",
    stack: ["NestJS", "React", "PostgreSQL", "Prisma", "Docker"],
    githubLink: "https://github.com/KennyU13/notes-app-fullstack",
  },
  {
    title: "E-Resto Hotel",
    description:
      "Projet Bonita Studio pour la gestion des reservations hotelieres, facturation, paiement, depart des chambres, menage, verification de stock et suivi comptable journalier.",
    image: "/project-demos/e-resto.png?v=3",
    color: "#8f89ff",
    stack: ["Bonita BPM", "Java", "Processus metier"],
    githubLink: "https://github.com/KennyU13/e-resto",
  },
  {
    title: "Code-ZahIT-ENI",
    description:
      "Projet web ENI principalement realise avec Vue, JavaScript et CSS, presente parmi les projets epingles du profil GitHub.",
    image: "/project-demos/code-zahit-eni.png",
    color: "#34d399",
    stack: ["Vue", "JavaScript", "CSS"],
    githubLink: "https://github.com/KennyU13/Code-ZahIT-ENI",
  },
  {
    title: "Portfolio Main",
    description:
      "Portfolio personnel construit avec React, Vite, Tailwind CSS v3 et Docker pour presenter mon profil, mes competences, mon parcours et mes projets.",
    image: "/project-demos/portfolio-main.png",
    color: "#ed649e",
    stack: ["React", "Vite", "Tailwind CSS", "Docker"],
    githubLink: "https://github.com/KennyU13/portfolio-main",
  },
  {
    title: "RDP-Parking-Simulator",
    description:
      "Simulation de parking realisee avec Vue et JavaScript, presentee dans mes projets GitHub pour illustrer la logique de gestion et l'interface utilisateur.",
    image: "/project-demos/rdp-parking-simulator.png",
    color: "#f59e0b",
    stack: ["Vue", "JavaScript", "HTML"],
    githubLink: "https://github.com/KennyU13/RDP-Parking-Simulator",
  },
  {
    title: "JAVA_Gestion",
    description:
      "Application de gestion developpee en Java, orientee pratique de la programmation objet et structuration d'une application de gestion.",
    image: "/project-demos/java-gestion.png",
    color: "#f97316",
    stack: ["Java", "Gestion", "OOP"],
    githubLink: "https://github.com/KennyU13/JAVA_Gestion",
  },
  {
    title: "PHP_Gestion",
    description:
      "Projet de gestion web construit autour de PHP, JavaScript et CSS pour travailler les bases d'une application web dynamique.",
    image: "/project-demos/php-gestion.png",
    color: "#777bb4",
    stack: ["PHP", "JavaScript", "CSS"],
    githubLink: "https://github.com/KennyU13/PHP_Gestion",
  },
];

export default function Projects() {
  return (
    <ReactLenis root>
      <main className="min-h-screen bg-[#04081A] text-white px-4 py-32">
        <section className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Projets
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-gray-300 text-lg">
              Une selection de projets issus de mon GitHub et de mon parcours
              en developpement fullstack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="overflow-hidden rounded-2xl border border-white/10 bg-gray-900/80 shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundColor: project.color }}
        />
      </div>

      <div className="space-y-5 p-7">
        <div className="flex items-center gap-3">
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: project.color }}
          />
          <h2 className="text-2xl font-bold">{project.title}</h2>
        </div>

        <p className="text-gray-300 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-200"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-blue-300 hover:text-blue-200"
        >
          Voir le code
          <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </motion.article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
