import { motion } from "framer-motion";
import { Bitcoin } from "lucide-react";

const Cryptocurrencies = () => {
  const cryptos = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      canBuy: true,
      canSell: true,
      color: "text-orange-500",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      canBuy: true,
      canSell: true,
      color: "text-purple-500",
    },
    {
      name: "Litecoin",
      symbol: "LTC",
      canBuy: true,
      canSell: true,
      color: "text-gray-500",
    },
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Cryptocurrencies We Offer
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {cryptos.map((crypto, index) => (
            <motion.div
              key={crypto.symbol}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50"
            >
              <div className={`inline-flex p-4 rounded-full bg-gray-100 mb-4`}>
                <Bitcoin className={`h-8 w-8 ${crypto.color}`} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{crypto.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{crypto.symbol}</p>
              <div className="flex gap-2 justify-center">
                {crypto.canBuy && (
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-semibold">
                    Buy
                  </span>
                )}
                {crypto.canSell && (
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-semibold">
                    Sell
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <button className="text-primary-500 font-semibold hover:text-primary-600 transition-colors">
            More Fees Details →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Cryptocurrencies;
