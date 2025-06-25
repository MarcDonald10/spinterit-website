import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Lightbulb, Code, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons la perfection dans chaque projet, en délivrant des solutions de qualité supérieure.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous restons à la pointe des technologies pour offrir des solutions avant-gardistes.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Notre équipe est animée par la passion du développement et de la création digitale.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins.',
    },
  ];

  const timeline = [
    {
      year: '2022',
      title: 'Fondation de Sprinter',
      description: 'Création de l\'agence avec une vision claire : démocratiser l\'excellence IT.',
    },
    {
      year: '2019',
      title: 'Premiers succès',
      description: '50 projets réalisés et une équipe de 10 développeurs passionnés.',
    },
    {
      year: '2020',
      title: 'Expansion des services',
      description: 'Ajout du design UI/UX et des solutions cloud à notre offre.',
    },
    {
      year: '2021',
      title: 'Reconnaissance internationale',
      description: 'Récompense "Meilleure agence IT émergente" aux Digital Awards.',
    },
    {
      year: '2022',
      title: 'Croissance accélérée',
      description: '150 clients satisfaits et ouverture de notre second bureau.',
    },
    {
      year: '2023',
      title: 'Innovation continue',
      description: 'Lancement de notre division IA et technologies émergentes.',
    },
  ];

  const team = [
    {
      name: 'Alexandre Dubois',
      role: 'CEO & Fondateur',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Visionnaire technologique avec 15 ans d\'expérience dans le développement web.',
    },
    {
      name: 'Marie Lefort',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Experte en architecture logicielle et en technologies cloud modernes.',
    },
    {
      name: 'Thomas Martin',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Designer UX/UI passionné par la création d\'expériences utilisateur exceptionnelles.',
    },
    {
      name: 'Sophie Chen',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Développeuse full-stack spécialisée dans les technologies React et Node.js.',
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
              À propos de <span className="text-red-500">Sprinter</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nous sommes une agence IT passionnée, dédiée à transformer vos idées 
              en solutions digitales exceptionnelles qui propulsent votre entreprise vers le succès.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-black mb-6">Notre Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Chez Sprinter, nous croyons que chaque entreprise mérite des solutions 
                technologiques de premier plan. Notre mission est de démocratiser l'accès 
                à l'excellence IT en proposant des services sur mesure, innovants et performants.
              </p>
              <p className="text-lg text-gray-600">
                Nous nous efforçons de comprendre parfaitement les besoins de nos clients 
                pour créer des solutions qui non seulement répondent à leurs attentes, 
                mais les dépassent largement.
              </p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-500 rounded-full flex items-center justify-center">
                <Code className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre travail quotidien et notre relation avec nos clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Notre Histoire</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Le parcours de Sprinter depuis sa création jusqu'à aujourd'hui
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-red-500 transform md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 md:w-5/12">
                  <div className={`bg-gray-900 rounded-2xl p-6 ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <div className="text-red-500 font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-red-500 rounded-full transform md:-translate-x-1/2 border-4 border-black" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">Notre Équipe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rencontrez les talents passionnés qui donnent vie à vos projets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                <p className="text-red-500 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;