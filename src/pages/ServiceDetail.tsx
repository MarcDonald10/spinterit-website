import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { m, motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ArrowRight, Star } from 'lucide-react';

import devwebImage from '../assets/services/devweb.jpg';
import devmobileImage from '../assets/services/devmobile.jpg';
import cloudImage from '../assets/services/cloud.jpg';
import marketingImage from '../assets/services/marketing.jpg';
import graphismeImage from '../assets/services/graphisme.jpg';
import designImage from '../assets/services/design.jpg';
import appWeb1 from '../assets/projet/web/appweb1.png';
import webSite1 from '../assets/projet/web/website1.png';
import kinaru1 from '../assets/projet/mobile/kinaru1.png'
import danyl2 from '../assets/projet/mobile/danyl2.png'

import uiKinaru1 from '../assets/projet/ui/k1.png';
import uiDanyl2 from '../assets/projet/ui/danyl2.png';

import graphismeLogo1 from '../assets/projet/graphisme/logo4.jpg';
import graphismeLogo2 from '../assets/projet/graphisme/logo3.jpg';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const serviceData = {
    web: {
      title: 'Développement Web',
      subtitle: 'Sites web modernes et applications performantes',
      description: 'Nous créons des sites web et applications web sur mesure, alliant design moderne, performance optimale et fonctionnalités avancées pour propulser votre présence digitale.',
      image: devwebImage,
      features: [
        'Sites vitrines responsives et modernes',
        'Applications web complexes et évolutives',
        'E-commerce personnalisé avec paiement sécurisé',
        'Progressive Web Apps (PWA)',
        'CMS sur mesure et intégrations',
        'Optimisation SEO et performance',
      ],
      packages: [
        {
          name: 'Basic',
          price: '1 050€',
          description: 'Site vitrine professionnel',
          features: [
            'Design responsive',
            'Jusqu\'à 07 pages',
            'Formulaire de contact',
            'Optimisation SEO de base',
            'Hébergement 1 an',
            'Nom de domaine inclus',
            'Support 3 mois',
          ],
        },
        {
          name: 'Premium',
          price: '2 550€',
          description: 'Site web avancé avec fonctionnalités',
          features: [
            'Design sur mesure',
            'Jusqu\'à 15 pages',
            'Blog intégré',
            'Espace client',
            'Hébergement 1 an',
            'Nom de domaine inclus',
            'Analytics avancés',
            'Support 6 mois',
          ],
          featured: true,
        },
        {
          name: 'Custom',
          price: 'Sur devis',
          description: 'Application web complexe',
          features: [
            'Développement sur mesure',
            'Fonctionnalités avancées',
            'Intégrations API',
            'Base de données complexe',
            'Support 12 mois',
          ],
        },
      ],
      projects: [
        {
          title: 'Form.ai',
          image: appWeb1,
          description: 'Plateforme de création de formulaires alimentée par l\'IA',
        },
        {
          title: 'Site web de DanylPro',
          image: webSite1,
          description: 'Application de mise en relation pour clients et prestataires',
        },
      ],
    },
    mobile: {
      title: 'Applications Mobiles',
      subtitle: 'Apps natives et cross-platform innovantes',
      description: 'Développement d\'applications mobiles performantes pour iOS et Android, offrant une expérience utilisateur exceptionnelle et des fonctionnalités adaptées à vos besoins business.',
      image: devmobileImage,
      features: [
        'Applications natives iOS et Android',
        'Applications cross-platform (React Native/Flutter)',
        'Design UI/UX optimisé mobile',
        'Intégrations API et services cloud',
        'Notifications push personnalisées',
        'Publication sur les stores',
      ],
      packages: [
        {
          name: 'Basic',
          price: '5 200€',
          description: 'Application mobile simple',
          features: [
            'Une plateforme (iOS ou Android)',
            'Design standard',
            'Fonctionnalités de base',
            'Publication sur store',
            'Système d\'administration',
            'Site vitrine de l\'application',
            'Hébergement 1 an',
            'Nom de domaine inclus',
            'Support 3 mois',
          ],
        },
        {
          name: 'Premium',
          price: '13 000€',
          description: 'App complète multi-plateforme',
          features: [
            'iOS et Android',
            'Design sur mesure',
            'Fonctionnalités avancées',
            'Notifications push',
            'Publication sur store',
            'Système d\'administration avancé',
            'Site vitrine de l\'application',
            'Hébergement 1 an',
            'Nom de domaine inclus',
            'Analytics intégrés',
            'Support 6 mois',
          ],
          featured: true,
        },
        {
          name: 'Custom',
          price: 'Sur devis',
          description: 'Application complexe entreprise',
          features: [
            'Développement sur mesure',
            'Intégrations complexes',
            'Backend dédié',
            'Sécurité renforcée',
            'Support 12 mois',
          ],
        },
      ],
      projects: [
        {
          title: 'Kinaru',
          image: kinaru1,
          description: 'Application de gestion de logement et mise en relation entre propriétaires et locataires',
        },
        {
          title: 'DanylPro',
          image: danyl2,
          description: 'Application de mise en relation pour clients et prestataires',
        },
      ],
    },
    uiux: {
      title: 'Design UI/UX',
      subtitle: 'Interfaces intuitives et expériences exceptionnelles',
      description: 'Création d\'interfaces utilisateur modernes et d\'expériences utilisateur optimisées, basées sur la recherche utilisateur et les meilleures pratiques du design.',
      image: designImage,
      features: [
        'Recherche utilisateur et personas',
        'Wireframing et prototypage',
        'Design system complet',
        'Tests d\'utilisabilité',
        'Design responsive multi-device',
        'Animations et micro-interactions',
      ],
      packages: [
        {
          name: 'Basic',
          price: '1 500€',
          description: 'Design interface simple',
          features: [
            'Jusqu\'à 15 écrans',
            'Wireframes inclus',
            'Design mobile et desktop',
            'Prototype cliquable',
            '2 révisions incluses',
          ],
        },
        {
          name: 'Premium',
          price: '4 500€',
          description: 'UX/UI complet avec recherche',
          features: [
            'Jusqu\'à 30 écrans',
            'Recherche utilisateur',
            'Design system',
            'Prototype avancé',
            'Tests utilisateur',
            '4 révisions incluses',
          ],
          featured: true,
        },
        {
          name: 'Custom',
          price: 'Sur devis',
          description: 'Projet design complexe',
          features: [
            'Nombre d\'écrans illimité',
            'Audit UX approfondi',
            'Design system avancé',
            'Formation équipe',
            'Support continu',
          ],
        },
      ],
      projects: [
        {
          title: 'Design Kinaru',
          image: uiKinaru1,
          description: 'Interface de gestion de logement et mise en relation',
        },
        {
          title: 'Design DanylPro',
          image: uiDanyl2,
          description: 'Design d\'application de mise en relation pour clients et prestataires',
        },
      ],
    },
    graphisme: {
      title: 'Graphisme et Branding',
      subtitle: 'Identité visuelle et communication impactante',
      description: 'Création d\'identités visuelles fortes et de supports de communication percutants, basés sur la recherche utilisateur et les meilleures pratiques du design.',
      image: graphismeImage,
      features: [
        'Branding : Conception de logos et identité de marque cohérente',
        'Visuels digitaux : Bannières, illustrations, infographies',
        'Illustrations',
        'Motion design',
        'Supports print : Cartes de visite, flyers, packaging',
      ],
      packages: [
        {
          name: 'Basic',
          price: '500€',
          description: 'Parfait pour les petites entreprises à la recherche d\'une identité visuelle simple et professionnelle',
          features: [
            '1 proposition de logo (2 révisions), palette de couleurs, typographie.',
            '2 bannières pour réseaux sociaux',
            '1 carte de visite (1 révision)',
            'Livraison: Fichiers PNG, JPEG, PDF',
            'Délai : 2 semaines',
            'Support : Email, réponse sous 48h',
          ],
        },
        {
          name: 'Premium',
          price: '1 000€',
          description: 'Idéal pour les PME ou startups souhaitant une identité visuelle complète et moderne',
          features: [
            '3 propositions de logo (3 révisions), charte graphique complète (couleurs, typographies, motifs)',
            '6 bannières réseaux sociaux, 1 visuel pour site web',
            '2 supports (carte de visite, flyer A5, 2 révisions)',
            ' 1 courte animation graphique (10s, ex. : logo animé)',
            'Fichiers PNG, JPEG, PDF, AI, MP4',
            'Support : Email + téléphone, réponse sous 24h',
          ],
          featured: true,
        },
        {
          name: 'Custom',
          price: 'Sur devis',
          description: 'Solution sur mesure pour les entreprises avec des besoins graphiques complexes ou campagnes d’envergure',
          features: [
            'Identité visuelle complète, propositions illimitées, charte graphique avancée',
            'Visuels sur mesure (bannières, posts, web, vidéos)',
            'Supports illimités (affiches, packaging, etc.)',
            'Animations complexes (ex. : vidéo promotionnelle, motion design)',
            'Tous formats, incluant fichiers sources (PSD, AI)',
            'Support: Gestionnaire dédié, support prioritaire',
          ],
        },
      ],
      projects: [
        {
          title: 'Logo ZHILAK',
          image: graphismeLogo1,
          description: 'Logo de l\application de reservation de billet de voyage',
        },
        {
          title: 'Logo CAFE LUNE',
          image: graphismeLogo2,
          description: 'Logo d\'un café moderne et accueillant',
        },
      ],
    },
    marketing: {
      title: 'Marketing digital',
      subtitle: 'Gestion, analyse et visualisation de données pour vos décisions business',
      description: 'Le service de marketing digital vise à booster la visibilité et la croissance en ligne grâce à des stratégies data-driven (SEO, SEA, réseaux sociaux, content marketing, email marketing).',
      image: marketingImage,
      features: [
        'SEO : Optimisation, recherche de mots-clés, audits techniques',
        'SEA : Campagnes Google Ads, remarketing, optimisation du ROI',
        'Social Media : Gestion de comptes (Facebook, Instagram, LinkedIn)',
        'Email Marketing : Campagnes automatisées pour fidéliser les clients',
        'Inbound Marketing',
        'Out outbound Marketing',
      ],
      packages: [
        {
          name: 'Basic',
          price: '500€',
          description: 'Idéal pour les startups ou PME souhaitant une présence en ligne solide à moindre coût',
          features: [
            'Audit initial, optimisation on-page (5 pages), 10 mots-clés',
            '1 campagne Google Ads (budget ads non inclus, gestion jusqu’à 500€/mois)',
            '4 posts/mois sur 1 plateforme (Facebook ou Instagram), sans ads',
            'Mensuel simplifié (Google Analytics)',
            'Délai : 1 mois',
          ],
        },
        {
          name: 'Premium',
          price: '2 000€',
          description: 'Conçu pour les entreprises en croissance cherchant une stratégie complète et performante',
          features: [
            'Audit complet, optimisation on-page/off-page (15 pages), 20 mots-clés, 2 articles de blog/moi',
            '3 campagnes Google Ads (budget ads non inclus, gestion jusqu’à 2000€/mois), remarketing',
            '8 posts/mois sur 2 plateformes, 1 campagne publicitaire (budget ads non inclus)',
            '1 infographie/mois',
            '1 campagne automatisée/mois (Mailchimp)',
            'Mensuel détaillé avec recommandations',
            'Délai : 6 mois',
          ],
          featured: true,
        },
        {
          name: 'Custom',
          price: 'Sur devis',
          description: 'Solution sur mesure pour les grandes entreprises ou projets spécifiques avec besoins complexes',
          features: [
            'Stratégie avancée, optimisation illimitée, mots-clés sur mesure, contenu optimisé selon besoins',
            'Campagnes illimitées (Google, Bing, etc.), gestion de budgets complexes',
            'Stratégie omnicanale, posts/ads sur mesure, gestion multi-plateformes',
            'Vidéos, articles, infographies selon besoins',
            'Automatisation complète, A/B testing',
            'Dashboard en temps réel, consulting dédié',
          ],
        },
      ],
      projects: [
      ],
    },
    cloud: {
      title: 'Solutions Cloud',
      subtitle: 'Infrastructure cloud scalable et sécurisée pour vos applications',
      description: 'Le service de solutions cloud fournit des infrastructures scalables, sécurisées et performantes (AWS, Azure, Google Cloud) pour optimiser les opérations IT et soutenir la transformation digitale.',
      image: cloudImage,
      features: [
        'Migration vers le cloud',
        'Architecture microservices',
        'DevOps et CI/CD',
        'Monitoring et optimisation',
      ],
      packages: [
        {
          name: 'Basic',
          price: '600€',
          description: 'Idéal pour PME/startups lançant leur infrastructure cloud avec besoins de base',
          features: [
            'Mise en place d’un serveur cloud (ex. : AWS EC2, Azure VM) pour 1 application',
            '50 Go de stockage cloud (S3, Blob Storage)',
            'Configuration de base (pare-feu, SSL)',
            'Sauvegardes automatiques hebdomadaires',
            'Delai : 3 mois',
            'Support : Email, réponse sous 48h',
          ],
        },
        {
          name: 'Premium',
          price: '2 500€',
          description: 'Pour entreprises en croissance nécessitant des solutions cloud robustes et évolutives',
          features: [
            'Multi-serveurs cloud (ex. : 2 instances EC2), load balancing',
            '200 Go de stockage, CDN inclus',
            'Pare-feu avancé, WAF, conformité GDPR',
            'Sauvegardes quotidiennes, plan de reprise après sinistre',
            'Delai : 6 mois ',
            'Support : Monitoring 24/7, rapport hebdomadaire, optimisation performance',
          ],
          featured: true,
        },
        {
          name: 'Custom',
          price: 'Sur devis',
          description: 'Sur mesure pour grandes entreprises ou projets complexes avec besoins spécifiques',
          features: [
            'Architecture cloud sur mesure (multi-région, Kubernetes, serverless)',
            'Stockage illimité, solutions hybrides',
            'Conformité avancée (ISO 27001, NIST), audits réguliers',
            'Sauvegardes en temps réel, redondance multi-site',
            'Support : Équipe dédiée, consulting stratégique, SLA 99,99%',
          ],
        },
      ],
      projects: [],
    },
  };

  const service = serviceData[serviceId as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Service non trouvé</h1>
          <Link to="/services" className="text-red-500 hover:text-red-400">
            Retour aux services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black to-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-red-500 hover:text-red-400 transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour aux services</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  {service.title}
                </h1>
                <p className="text-xl text-red-400 mb-6">{service.subtitle}</p>
                <p className="text-lg text-gray-300 mb-8">{service.description}</p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="#contact-form"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all duration-300"
                  >
                    <span>Demander un devis</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">Ce que nous proposons</h2>
            <p className="text-xl text-gray-600">
              Des fonctionnalités complètes pour répondre à tous vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">Nos Forfaits</h2>
            <p className="text-xl text-gray-600">
              Choisissez la solution qui correspond à vos besoins et votre budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${pkg.featured ? 'border-2 border-red-500 scale-105' : 'border border-gray-200'
                  }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-red-500 text-white rounded-full text-sm font-semibold">
                      Populaire
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-red-500 mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${pkg.featured
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                    }`}
                >
                  Choisir ce forfait
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {service.projects.length > 0 && (
              <>
                <h2 className="text-4xl font-bold text-black mb-6">Projets Réalisés</h2>
                <p className="text-xl text-gray-600">
                  Découvrez quelques exemples de nos réalisations dans ce domaine
                </p>
              </>
            )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Demander un devis pour {service.title}
            </h2>
            <p className="text-xl text-gray-300">
              Parlez-nous de votre projet et recevez une proposition personnalisée
            </p>
          </motion.div>

          <motion.form
            className="bg-white rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            {serviceId === 'web' && (
              <>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type de site web *
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300">
                    <option>Site vitrine</option>
                    <option>E-commerce</option>
                    <option>Application web</option>
                    <option>Blog/Magazine</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget estimé
                    </label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300">
                      <option>Moins de 5 000€</option>
                      <option>5 000€ - 10 000€</option>
                      <option>10 000€ - 20 000€</option>
                      <option>Plus de 20 000€</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Délai souhaité
                    </label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300">
                      <option>Moins de 1 mois</option>
                      <option>1-3 mois</option>
                      <option>3-6 mois</option>
                      <option>Plus de 6 mois</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {serviceId === 'mobile' && (
              <>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Plateforme souhaitée *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['iOS seulement', 'Android seulement', 'iOS + Android'].map((platform) => (
                      <label key={platform} className="flex items-center space-x-2">
                        <input type="radio" name="platform" className="text-red-500" />
                        <span className="text-gray-700">{platform}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type d\'application
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300">
                    <option>Application utilitaire</option>
                    <option>Jeu mobile</option>
                    <option>E-commerce</option>
                    <option>Réseaux sociaux</option>
                    <option>Productivité</option>
                    <option>Autre</option>
                  </select>
                </div>
              </>
            )}

            {serviceId === 'uiux' && (
              <>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type de design *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Site web', 'Application mobile', 'Application web', 'Design system'].map((type) => (
                      <label key={type} className="flex items-center space-x-2">
                        <input type="checkbox" className="text-red-500" />
                        <span className="text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre d\'écrans estimé
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300">
                    <option>1-10 écrans</option>
                    <option>11-25 écrans</option>
                    <option>26-50 écrans</option>
                    <option>Plus de 50 écrans</option>
                  </select>
                </div>
              </>
            )}

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description du projet *
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                placeholder="Décrivez votre projet, vos objectifs et vos besoins spécifiques..."
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fichier joint (optionnel)
              </label>
              <input
                type="file"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                accept=".pdf,.doc,.docx,.txt"
              />
              <p className="text-sm text-gray-500 mt-1">
                Cahier des charges, maquettes, références... (PDF, DOC, TXT - Max 10MB)
              </p>
            </div>

            <motion.button
              type="submit"
              className="w-full py-4 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Envoyer ma demande</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;