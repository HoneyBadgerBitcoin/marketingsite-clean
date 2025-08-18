import { motion } from 'framer-motion';
import { Banknote, CreditCard, Smartphone, ArrowUpDown, MapPin, DollarSign } from 'lucide-react';

const Features = () => {
  const services = [
    {
      icon: Banknote,
      title: 'Buy Crypto With Cash',
      description: 'Find a HoneyBadger ATM near you',
      action: 'Buy Crypto',
      bgColor: 'bg-primary-50',
      iconBg: 'bg-primary-500',
    },
    {
      icon: DollarSign,
      title: 'Sell Crypto for Cash',
      description: 'Easily sell your crypto for cash at an ATM or online',
      action: 'Sell Crypto',
      bgColor: 'bg-primary-50',
      iconBg: 'bg-primary-500',
    },
    {
      icon: Smartphone,
      title: 'Pre-Sell Crypto',
      description: 'Pre-sell crypto online & skip the wait at ATM',
      action: 'Pre-Sell',
      bgColor: 'bg-primary-50',
      iconBg: 'bg-primary-500',
    },
    {
      icon: CreditCard,
      title: 'Sell for e-Transfer',
      description: 'Quickly sell your crypto from home via INTERAC e-Transfer®',
      action: 'Sell Online',
      bgColor: 'bg-primary-50',
      iconBg: 'bg-primary-500',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Making Crypto Accessible
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`${service.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full border border-gray-100/50`}>
                <div className={`${service.iconBg} inline-flex p-3 rounded-lg mb-4`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {service.description}
                </p>
                <button className="text-primary-500 font-medium text-sm hover:text-primary-600 transition-colors">
                  {service.action} →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
