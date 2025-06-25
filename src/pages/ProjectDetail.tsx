import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, ExternalLink, CheckCircle } from 'lucide-react';

// projet - mobile - kinaru
import kinaruImg1 from '../assets/projet/mobile/kinaru/banniere2.png'
import kinaruGallery1 from '../assets/projet/mobile/kinaru/banniere1.png'
import kinaruGallery2 from '../assets/projet/mobile/kinaru/banniere4.png'
import kinaruGallery3 from '../assets/projet/mobile/kinaru/banniere5.png'
import kinaruGallery4 from '../assets/projet/mobile/kinaru/banniere6.png'

// projet - mobile - danylpro
import danylproIgm1 from '../assets/projet/mobile/danylpro/img2.jpg'


const ProjectDetail = () => {
  const { projectId } = useParams();

  // Mock project data - in a real app, this would come from an API
  const projectData = {
    '1': {
      title: 'E-commerce Luxury Fashion',
      lien: 'https://www.luxuryfashion.com',
      statut: 'En ligne',
      category: 'E-commerce',
      client: 'Luxury Fashion Brand',
      year: '2023',
      duration: '4 mois',
      image: 'https://images.pexels.com/photos/6214479/pexels-photo-6214479.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Développement d\'une plateforme e-commerce premium pour une marque de mode luxury, offrant une expérience d\'achat sophistiquée avec des fonctionnalités avancées de personnalisation et de paiement sécurisé.',
      challenge: 'Le défi principal était de créer une expérience d\'achat en ligne qui reflète le prestige de la marque tout en assurant une performance optimale et une sécurité maximale pour les transactions haut de gamme.',
      solution: 'Nous avons développé une architecture moderne basée sur React et Node.js, intégrant Stripe pour les paiements sécurisés et MongoDB pour une gestion flexible des produits. L\'interface utilisateur a été conçue avec une attention particulière aux détails visuels et aux animations subtiles.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Redis', 'TypeScript', 'Tailwind CSS'],
      features: [
        'Catalogue produits avec filtres avancés',
        'Système de recommandations personnalisées',
        'Panier d\'achat intelligent avec sauvegarde',
        'Paiement sécurisé multi-devises',
        'Gestion des stocks en temps réel',
        'Programme de fidélité intégré',
        'Interface d\'administration complète',
        'Analytics et reporting avancés',
      ],
      results: [
        'Augmentation de 300% des ventes en ligne',
        'Taux de conversion amélioré de 150%',
        'Temps de chargement réduit de 60%',
        'Note de satisfaction client: 4.9/5',
      ],
      gallery: [
        'https://images.pexels.com/photos/6214479/pexels-photo-6214479.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
    '2': {
      title: 'KINARU',
      lien: 'https://www.kinaru.app',
      statut: 'En ligne',
      category: 'Application Mobile',
      client: 'Sprinter Agency IT',
      year: '2023',
      duration: '6 mois',
      image: kinaruImg1,
      description: `Sprinter IT a développé Kinaru, une application mobile innovante qui simplifie la location
        et la gestion immobilière au Cameroun. Conçue pour répondre aux besoins des
        locataires, des propriétaires et des agences immobilières, Kinaru est une solution
        tout-en-un qui combine une interface utilisateur intuitive, des fonctionnalités sécurisées
        et une intégration adaptée au contexte local. Ce projet illustre l’expertise de Sprinter IT
        dans la création de solutions technologiques sur mesure pour des marchés en
        croissance`,
      challenge: 'Le marché immobilier camerounais est caractérisé par un manque de digitalisation, des processus manuels complexes et une fragmentation des services. Les locataires peinent à trouver des logements fiables, les propriétaires rencontrent des difficultés dans la gestion des paiements, et les agences immobilières manquent d’outils centralisés pour optimiser leurs opérations.',
      solution: 'Sprinter IT a conçu et développé Kinaru comme une application mobile entièrement fonctionnelle, avec trois interfaces distinctes pour les locataires, les propriétaires et les agences immobilières.',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Node.js', 'Push Notifications'],
      features: [
        'Authentification',
        'Recherche de logements',
        'Chat en temps réel',
        'Reservation de visites',
        'Notifications push en temps réel',
        'Visites virtuelles',
        'Mapping intégrée',
        'Support client intégré',
      ],
      results: [
        '100,000+ téléchargements en 3 mois',
        'Note App Store: 4.8/5',
        'Temps de connexion réduit de 80%',
        'Zéro incident de sécurité',
      ],
      gallery: [
        kinaruGallery1,
        kinaruGallery2,
        kinaruGallery3,
        kinaruGallery4,
      ],
    },
    '5': {
      title: 'DANYLPRO',
      lien: 'https://danylpro.com/',
      statut: 'En ligne',
      category: 'Application Mobile',
      client: 'M. Tewfik',
      year: '2023',
      duration: '6 mois',
      image: danylproIgm1,
      description: `Pour un client visionnaire, Sprinter IT a développé Danylpro, une application mobile qui
        connecte des prestataires physiques (plombiers, coiffeurs, électriciens, etc.) avec des
        clients au Canada et en Algérie. En intégrant un système de paiement sécurisé via
        Stripe et des outils de gestion des services, Danylpro simplifie la réservation, la
        planification et la facturation. Ce projet illustre l’expertise de Sprinter IT dans la livraison
        de solutions mobiles sur mesure, adaptées aux besoins spécifiques d’un client et aux
        particularités de deux marchés distincts.`,
      challenge: `Notre client souhaitait une plateforme pour révolutionner les services à
        domicile dans deux marchés distincts, le Canada et l’Algérie, où les clients
        peinent à trouver des prestataires fiables et les professionnels manquent d’outils
        pour gérer leurs services efficacement. Les différences culturelles, les exigences
        réglementaires et la nécessité d’un système de paiement sécurisé et universel
        représentaient des défis majeurs.`,
      solution: `Sprinter IT a développé une application mobile robuste, 
      avec une interface intuitive facilitant la mise en relation entre clients et prestataires. 
      Elle intègre Stripe pour des paiements sécurisés dans deux devises, tout en restant gratuite pour les clients. 
      L’application est conforme aux normes locales, optimisée pour les faibles connexions. 
      Les prestataires bénéficient d’outils de gestion simplifiés pour leurs services, devis et paiements.`,
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Node.js', 'Push Notifications'],
      features: [
        'Authentification',
        'Gestion de besoin du client',
        'Chat en temps réel',
        'Redaction du dévis',
        'Notifications push en temps réel',
        'Paiement de service',
      ],
      results: [
        '100,000+ téléchargements en 3 mois',
        'Note App Store: 4.8/5',
        'Temps de connexion réduit de 80%',
        'Zéro incident de sécurité',
      ],
      gallery: [
        kinaruGallery1,
        kinaruGallery2,
        kinaruGallery3,
        kinaruGallery4,
      ],
    },
  };

  const project = projectData[projectId as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Projet non trouvé</h1>
          <Link to="/portfolio" className="text-red-500 hover:text-red-400">
            Retour au portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 text-red-500 hover:text-red-400 transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour au portfolio</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-red-500 text-white rounded-full text-sm font-semibold mb-4">
                  {project.category}
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-300 mb-8">{project.description}</p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="text-gray-400 text-sm">Client</p>
                      <p className="text-white font-semibold">{project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="text-gray-400 text-sm">Année</p>
                      <p className="text-white font-semibold">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="text-gray-400 text-sm">Durée</p>
                      <p className="text-white font-semibold">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ExternalLink className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="text-gray-400 text-sm">Status</p>
                      <p className="text-green-400 font-semibold">{project.statut}</p>
                    </div>
                  </div>
                </div>

                <motion.a
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Voir le site</span>
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-500 rounded-full flex items-center justify-center">
                  <ExternalLink className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-black mb-6">Le Défi</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-black mb-6">Notre Solution</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">Technologies Utilisées</h2>
            <p className="text-xl text-gray-600">
              Stack technologique moderne pour des performances optimales
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <span className="text-sm font-semibold text-gray-700">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">Fonctionnalités Principales</h2>
            <p className="text-xl text-gray-600">
              Découvrez les fonctionnalités clés qui font le succès de ce projet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      {/* <section className="py-20 bg-gradient-to-br from-red-500 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Résultats Obtenus</h2>
            <p className="text-xl text-red-100">
              Les performances exceptionnelles de ce projet parlent d'elles-mêmes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.results.map((result, index) => (
              <motion.div
                key={result}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <p className="text-white text-lg font-semibold">{result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Galerie du Projet</h2>
            <p className="text-xl text-gray-400">
              Aperçu visuel des différentes interfaces et fonctionnalités
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Inspiré par ce projet ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discutons de votre vision et créons ensemble quelque chose d'exceptionnel
              pour votre entreprise.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              whileHover={{ scale: 1.02 }}
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all duration-300"
              >
                Démarrer un projet similaire
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                Voir d'autres projets
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;