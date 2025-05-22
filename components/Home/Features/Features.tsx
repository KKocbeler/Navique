import { FaMoon, FaMobileAlt, FaRocket, FaSlidersH } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaMoon className="text-3xl text-indigo-600 dark:text-indigo-300" />,
      title: "Dark Mode",
      desc: "Eye-friendly dark theme for night use.",
    },
    {
      icon: <FaMobileAlt className="text-3xl text-green-600 dark:text-green-300" />,
      title: "Mobile Friendly",
      desc: "Responsive design across all devices.",
    },
    {
      icon: <FaRocket className="text-3xl text-pink-600 dark:text-pink-300" />,
      title: "Fast & Lightweight",
      desc: "Optimized for speed and performance.",
    },
    {
      icon: <FaSlidersH className="text-3xl text-blue-600 dark:text-blue-300" />,
      title: "Difficulty Selection",
      desc: "Choose between easy, medium, and hard levels.",
    },
  ];

  return (
    <section id="features">
        <div className="text-center my-[150px]">
            <h2 className="text-3xl font-bold mb-10 text-slate-900 dark:text-white">Features</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                {features.map((feature, index) => (
                    <div
                    key={index}
                    className="px-6 py-12 bg-slate-50 dark:bg-[#1f1f1f] rounded-2xl shadow-md hover:shadow-lg transition"
                    >
                    <div className="mb-4 flex justify-center">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                        {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
