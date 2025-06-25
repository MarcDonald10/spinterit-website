import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Database, 
  Cloud, 
  Shield,
  ArrowRight,
  CheckCircle , BadgeCheck, PenTool
} from 'lucide-react';
import devwebImage from '../assets/services/devweb.jpg';
import devmobileImage from '../assets/services/devmobile.jpg';
import cloudImage from '../assets/services/cloud.jpg';
import marketingImage from '../assets/services/marketing.jpg';
import graphismeImage from '../assets/services/graphisme.jpg';
import designImage from '../assets/services/design.jpg';

const Services = () => {
  const services = [
    {
      id: 'web',
      icon: Code,
      title: 'Développement Web',
      description: 'Sites web modernes, applications web performantes et e-commerce sur mesure',
      image: devwebImage,
      features: [
        'Sites vitrines responsives',
        'Applications web complexes',
        'E-commerce personnalisé',
        'Progressive Web Apps (PWA)',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
      color: 'from-red-500 to-red-600',
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Applications Mobiles',
      description: 'Applications natives et cross-platform pour iOS et Android',
      image: devmobileImage,
      features: [
        'Applications natives iOS/Android',
        'Applications cross-platform',
        'Applications web mobiles',
        'Maintenance et support',
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      color: 'from-red-600 to-red-700',
    },
    {
      id: 'uiux',
      icon: Palette,
      title: 'Design UI/UX',
      description: 'Interfaces intuitives et expériences utilisateur exceptionnelles',
      image: designImage,
      features: [
        'Recherche utilisateur',
        'Prototypage interactif',
        'Design system complet',
        'Tests d\'utilisabilité',
      ],
      technologies: ['Figma', 'Adobe XD'],
      color: 'from-red-400 to-red-500',
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Solutions Cloud',
      description: 'Infrastructure cloud scalable et sécurisée pour vos applications',
      image: cloudImage,
      features: [
        'Migration vers le cloud',
        'Architecture microservices',
        'DevOps et CI/CD',
        'Monitoring et optimisation',
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      color: 'from-red-700 to-red-800',
    },
    {
      id: 'marketing',
      icon: BadgeCheck,
      title: 'Marketing digital',
      description: 'Gestion, analyse et visualisation de données pour vos décisions business',
      image: marketingImage,
      features: [
        'SEO : Optimisation, recherche de mots-clés, audits techniques',
        'SEA : Campagnes Google Ads, remarketing, optimisation du ROI',
        'Social Media : Gestion de comptes (Facebook, Instagram, LinkedIn)',
        'Email Marketing : Campagnes automatisées pour fidéliser les clients',
      ],
      technologies: [],
      color: 'from-red-800 to-red-900',
    },
    {
      id: 'graphisme',
      icon: PenTool,
      title: 'Graphisme et Branding',
      description: 'Création d\'identités visuelles fortes et mémorables',
      image: graphismeImage,
      features: [
        'Branding : Conception de logos et identité de marque cohérente',
        'Visuels digitaux',
        'Supports print : Cartes de visite, flyers, packaging',
      ],
      technologies: ['Adobe Photoshop', ' Illustrator', 'After Effects'],
      color: 'from-gray-700 to-gray-800',
    },
  ];

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
              Nos <span className="text-red-500">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des solutions technologiques complètes pour transformer votre vision 
              en réalité digitale performante et innovante.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-500/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute top-6 left-6 w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-4`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-black mb-3">Services inclus :</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-red-500" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-black mb-3">Technologies :</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center space-x-2 text-red-500 font-semibold hover:text-red-600 transition-colors duration-300 group/link"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">Notre Processus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour garantir le succès de vos projets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Analyse',
                description: 'Étude approfondie de vos besoins et objectifs',
              },
              {
                step: '02',
                title: 'Conception',
                description: 'Design et architecture de la solution optimale',
              },
              {
                step: '03',
                title: 'Développement',
                description: 'Création avec les meilleures pratiques et technologies',
              },
              {
                step: '04',
                title: 'Livraison',
                description: 'Déploiement, formation et support continu',
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-500 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à commencer votre projet ?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé 
              adapté à votre projet.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-red-500 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                <span>Demander un devis</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;