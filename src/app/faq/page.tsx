import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import RevealOnScroll from "../../../components/reveal-on-scroll";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Phaser Beary Art Gallery?",
      answer:
        "Phaser Beary Art Gallery is a dedicated platform we created to showcase and support artists who operate within the XRPL blockchain ecosystem. Powered by $Phaser Beary, we are committed to fully supporting XRPL-based artists by offering resources, exposure, and opportunities to connect with collectors and enthusiasts alike. Through this gallery, we aim to bridge the gap between digital art and blockchain technology, empowering artists to share their unique creations in a trusted and innovative space."
    },
    {
      question: "How can I submit my artwork?",
      answer:
        "You can submit your artwork through the 'Submit Your Art' button on the Gallery page. Every submission will be carefully curated and reviewed by our team before it is displayed in the gallery."
    },
    {
      question: "Are all artworks protected by copyright?",
      answer:
        "Yes. Each artwork remains the property of its creator. While not all works are formally registered, they must not be used, reproduced, or distributed without permission."
    },
    {
      question: "Can I purchase artworks directly from the gallery?",
      answer:
        "At the moment, purchasing artworks directly from the gallery is not available. Our current focus is on showcasing and supporting artists within the XRPL ecosystem. Stay tuned for updates as we plan to enable artwork purchases in the future."
    }
    ,
    {
      question: "How can I support the community?",
      answer:
        "You can support the community by joining our official community channels, following our social media, and purchasing Phaser Beary NFTs. Every action helps sustain the platform and empower artists in the XRPL ecosystem."
    }
  ];

  return (
    <div className="font-sora flex flex-col items-center min-h-screen w-auto p-8 gap-10 lg:gap-20 pb-20 sm:p-20 relative bg-white">
      <Navbar />

      <main className="text-black flex-grow container mx-auto px-4 py-10 mt-5">
        <RevealOnScroll direction="up" delay={100}>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h1>
        </RevealOnScroll>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <RevealOnScroll key={index} direction="up" delay={index * 100}>
              <div className="border-b border-gray-200 pb-4">
                <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
                <p className="text-gray-700 text-justify">{faq.answer}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
