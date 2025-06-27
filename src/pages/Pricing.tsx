import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const services = [
    {
      id: 'web',
      title: 'Développement Web',
      description: 'Sites web et applications performantes',
      packages: [
        {
          name: 'Basic',
          price: '1 050€',
          description: 'Site vitrine professionnel',
          features: [
            'Design responsive moderne',
            'Jusqu\'à 7 pages optimisées',
            'Formulaire de contact intégré',
            'Hébergement 1 an inclus',
            'Nom de domaine 1 an inclus',
            'Un 03 e-mail professionnel',
            'Optimisation SEO de base',
            'Support technique 3 mois',
          ],
          popular: false,
        },
        {
          name: 'Premium',
          price: '2 550€',
          description: 'Site web avancé avec fonctionnalités',
          features: [
            'Design sur mesure unique',
            'Jusqu\'à 15 pages personnalisées',
            'Blog intégré avec CMS',
            'Espace client sécurisé',
            'Analytics et reporting',
            'Support technique 6 mois',
            'Maintenance incluse',
            'Hébergement 1 an inclus',
            'Nom de domaine 1 an inclus',
          ],
          popular: true,
        },
        {
          name: 'Custom',
          price: 'Sur devis',
          description: 'Application web complexe',
          features: [
            'Développement sur mesure',
            'Fonctionnalités avancées',
            'Intégrations API multiples',
            'Base de données complexe',
            'Architecture scalable',
            'Support technique 12 mois',
            'Maintenance premium',
            'Formation équipe complète',
          ],
          popular: false,
        },
      ],
    },
    {
      id: 'mobile',
      title: 'Applications Mobiles',
      description: 'Apps natives et cross-platform',
      packages: [
        {
          name: 'Basic',
          price: '5 200€',
          description: 'Application mobile simple',
          features: [
            'Une plateforme (iOS ou Android)',
            'Design standard optimisé',
            'Fonctionnalités de base',
            'Publication sur store',
            'Support technique 3 mois',
            'Site vitrine de l\'app',
            'Systeme d\'administration',
            'Hebergement 1 an inclus',
            'Nom de domaine 1 an inclus',
          ],
          popular: false,
        },
        {
          name: 'Premium',
          price: '13 000€',
          description: 'App complète multi-plateforme',
          features: [
            'iOS et Android natifs',
            'Design sur mesure premium',
            'Fonctionnalités avancées',
            'Notifications push',
            'Publication sur stores',
            'Analytics intégrés',
            'Support technique 6 mois',
            'Mises à jour incluses',
            'Site vitrine de l\'app',
            'Systeme d\'administration',
            'Hébergement 1 an inclus',
            'Nom de domaine 1 an inclus',
          ],
          popular: true,
        },
        {
          name: 'Custom',
          price: 'Sur devis',
          description: 'Application complexe entreprise',
          features: [
            'Développement sur mesure',
            'Intégrations complexes',
            'Backend dédié sécurisé',
            'Sécurité renforcée',
            'Architecture enterprise',
            'Support technique 12 mois',
            'Maintenance premium',
            'Formation équipe technique',
          ],
          popular: false,
        },
      ],
    },
    {
      id: 'uiux',
      title: 'Design UI/UX',
      description: 'Interfaces et expériences utilisateur',
      packages: [
        {
          name: 'Basic',
          price: '1 500€',
          description: 'Design interface simple',
          features: [
            'Jusqu\'à 15 écrans designés',
            'Wireframes détaillés',
            'Design mobile et desktop',
            'Prototype cliquable',
            '2 révisions incluses',
            'Guide de style basique',
          ],
          popular: false,
        },
        {
          name: 'Premium',
          price: '4 500€',
          description: 'UX/UI complet avec recherche',
          features: [
            'Jusqu\'à 30 écrans designés',
            'Recherche utilisateur approfondie',
            'Design system complet',
            'Prototype avancé interactif',
            'Tests utilisateur inclus',
            '4 révisions incluses',
            'Documentation complète',
            'Formation design system',
          ],
          popular: true,
        },
        {
          name: 'Custom',
          price: 'Sur devis',
          description: 'Projet design complexe',
          features: [
            'Nombre d\'écrans illimité',
            'Audit UX approfondi',
            'Design system enterprise',
            'Tests utilisateur avancés',
            'Révisions illimitées',
            'Formation équipe complète',
            'Support design continu',
            'Évolutions futures incluses',
          ],
          popular: false,
        },
      ],
    },
  ];

  const additionalServices = [
    {
      title: 'Maintenance & Support',
      price: 'À partir de 100€/mois',
      description: 'Support technique continu et mises à jour régulières',
    },
    {
      title: 'Consulting IT',
      price: '25€/heure',
      description: 'Conseil stratégique et audit technique personnalisé',
    },
    {
      title: 'Formation Équipe',
      price: '300€/jour',
      description: 'Formation sur mesure pour vos équipes techniques',
    },
    {
      title: 'Audit Sécurité',
      price: 'À partir de 500€',
      description: 'Audit complet de sécurité et recommandations',
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
              Nos <span className="text-red-500">Tarifs</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Des solutions transparentes et adaptées à tous les budgets. 
              Choisissez le forfait qui correspond parfaitement à vos besoins.
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-red-500" />
                <span>Devis gratuit</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-red-500" />
                <span>Pas d'engagement</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-red-500" />
                <span>Support inclus</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Pricing */}
      {services.map((service, serviceIndex) => (
        <section key={service.id} className={`py-20 ${serviceIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-black mb-4">{service.title}</h2>
              <p className="text-xl text-gray-600">{service.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                    pkg.popular 
                      ? 'border-2 border-red-500 scale-105 z-10' 
                      : 'border border-gray-200 hover:border-red-500/30'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: pkg.popular ? 0 : -8 }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="flex items-center space-x-1 px-4 py-2 bg-red-500 text-white rounded-full text-sm font-semibold">
                        <Star className="w-4 h-4 fill-current" />
                        <span>Populaire</span>
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-black mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-red-500 mb-2">{pkg.price}</div>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-red-500 text-white hover:bg-red-600 shadow-lg'
                        : 'bg-gray-100 text-black hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {pkg.price === 'Sur devis' ? 'Demander un devis' : 'Choisir ce forfait'}
                  </motion.button>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/services/${service.id}`}
                className="inline-flex items-center space-x-2 text-red-500 font-semibold hover:text-red-600 transition-colors duration-300"
              >
                <span>En savoir plus sur {service.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Services Complémentaires</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des services additionnels pour accompagner votre croissance digitale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-red-400 font-semibold mb-3">{service.price}</p>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">Questions Fréquentes</h2>
            <p className="text-xl text-gray-600">
              Réponses aux questions les plus courantes sur nos tarifs
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                question: 'Les prix incluent-ils la TVA ?',
                answer: 'Tous nos prix sont affichés hors taxes. La TVA de 19,25% sera ajoutée sur la facture finale pour les clients Camerounais.',
              },
              {
                question: 'Proposez-vous des facilités de paiement ?',
                answer: 'Oui, nous proposons un échelonnement des paiements en plusieurs fois selon le montant du projet. Généralement : 30% à la commande, 40% à mi-parcours, et 30% à la livraison.',
              },
              {
                question: 'Que se passe-t-il si mon projet dépasse le forfait choisi ?',
                answer: 'Nous vous informons dès que nous identifions un dépassement potentiel. Vous pouvez alors choisir de passer au forfait supérieur ou de facturer les heures supplémentaires au tarif horaire.',
              },
              {
                question: 'Le support technique est-il vraiment inclus ?',
                answer: 'Oui, chaque forfait inclut une période de support technique gratuit. Cela couvre les corrections de bugs, les mises à jour de sécurité et l\'assistance technique de base.',
              },
              {
                question: 'Puis-je modifier mon forfait en cours de projet ?',
                answer: 'Absolument ! Nous sommes flexibles et pouvons adapter le forfait selon l\'évolution de vos besoins. Un avenant sera établi pour formaliser les changements.',
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-gray-50 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-black mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un devis personnalisé et gratuit. 
              Nous étudions votre projet et vous proposons la solution la plus adaptée.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              whileHover={{ scale: 1.02 }}
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-red-500 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 border border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-red-500 transition-all duration-300"
              >
                Voir nos réalisations
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;