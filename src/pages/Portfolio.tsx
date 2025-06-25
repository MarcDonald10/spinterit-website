import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Eye, Calendar, ArrowRight } from 'lucide-react';

// projet mobile 
import projetMobile1 from '../assets/projet/mobile/kinaru/kinaru1.jpg'
import projetMobile2 from '../assets/projet/mobile/danylpro/img2.jpg'

// projet web
import projetWeb1 from '../assets/projet/web/app/ugoeat/capture.png';
import projetWeb2 from '../assets/projet/web/website/kinaru/capture.png';
import projetWeb3 from '../assets/projet/web/website1.png';

// projet UI/UX
import projetUIUX from '../assets/projet/ui/k3.png';



const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'Tous les projets' },
    { id: 'web', name: 'Développement Web' },
    { id: 'mobile', name: 'Applications Mobiles' },
    { id: 'uiux', name: 'Design UI/UX' },
    // { id: 'ecommerce', name: 'Graphisme' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Site web : DANYLPRO',
      category: 'web',
      categoryName: 'Développement Web',
      image: projetWeb3,
      description: 'Site vitrine pour une application mobile de services à domicile, avec paiement en ligne.',
      technologies: ['Reactjs', 'Tailwind CSS'],
      year: '2023',
      client: 'M. Tewfik',
      duration: '4 mois',
      featured: true,
    },
    {
      id: 2,
      title: 'KINARU',
      category: 'mobile',
      categoryName: 'Application Mobile',
      image: projetMobile1,
      description: 'Une plateforme mobile pour révolutionner l’immobilier au Cameroun.',
      technologies: ['React Native', 'TypeScript', 'Firebase'],
      year: '2023',
      client: 'Sprinter Agence IT',
      duration: '6 mois',
      featured: true,
    },
    {
      id: 3,
      title: 'Design UI/UX : KINARU',
      category: 'uiux',
      categoryName: 'Design UI/UX',
      image: projetUIUX,
      description: 'Interface utilisateur et expérience utilisateur pour une application mobile innovante dans le secteur de l\'immobilier.',
      technologies: ['Figma'],
      year: '2024',
      client: 'Sprinter Agence IT',
      duration: '2 mois',
      featured: false,
    },
    {
      id: 4,
      title: 'UGOEAT',
      category: 'web',
      categoryName: 'Développement Web',
      image: projetWeb1,
      description: 'Plateforme de reservation et livraison de repas en ligne.',
      technologies: ['Next.js', 'Nodejs', 'Tailwind', 'Stripe'],
      year: '2025',
      client: 'RestaurantTech',
      duration: '2 mois',
      featured: false,
    },
    {
      id: 5,
      title: 'DANYLPRO',
      category: 'mobile',
      categoryName: 'Application Mobile',
      image: projetMobile2,
      description: 'Une application de services à domicile pour un client, au Canada et en Algérie.',
      technologies: ['React', 'Firebase', 'Google Maps'],
      year: '2024',
      client: 'M. Tewfik',
      duration: '4 mois',
      featured: false,
    },
    {
      id: 6,
      title: 'Site web: KINARU',
      category: 'web',
      categoryName: 'Développement Web',
      image: projetWeb2,
      description: 'Site web vitrine pour une application mobile immobilière, mettant en avant les fonctionnalités.',
      technologies: ['Reactjs', 'Tailwind CSS'],
      year: '2024',
      client: 'Sprinter Agence IT',
      duration: '2 Semaine',
      featured: true,
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Notre <span className="text-red-500">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez nos réalisations récentes et les projets qui ont marqué 
              notre parcours d'excellence dans le développement digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                        Projet phare
                      </span>
                    </div>
                  )}

                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        <motion.button
                          className="p-3 bg-white rounded-full text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          className="p-3 bg-white rounded-full text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {project.categoryName}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.year}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-red-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-red-50 text-red-600 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Project Details */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>Client: {project.client}</span>
                      <span>{project.duration}</span>
                    </div>

                    {/* View Project Link */}
                    <Link
                      to={`/portfolio/${project.id}`}
                      className="inline-flex items-center space-x-2 text-red-500 font-semibold hover:text-red-600 transition-colors duration-300 group/link"
                    >
                      <span>Voir le projet</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-500 text-lg">
                Aucun projet trouvé pour cette catégorie.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-red-500 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '300+', label: 'Projets Réalisés' },
              { number: '150+', label: 'Clients Satisfaits' },
              { number: '50+', label: 'Awards Gagnés' },
              { number: '5', label: 'Années d\'Expérience' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <p className="text-red-100 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Votre projet sera le prochain ?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Rejoignez nos clients satisfaits et donnons vie ensemble à votre vision digitale.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-red-500 text-white rounded-lg font-semibold text-lg hover:bg-red-600 transition-all duration-300"
              >
                <span>Démarrer un projet</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;