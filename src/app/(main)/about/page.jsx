export const metadata = {
  title: "Dragon News- About Us",
};

const AboutUs = () => {
  return (
    <div>
      <section className="bg-base-100 py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Dragon News
          </h2>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Dragon News is a modern, responsive news platform built with React
            that delivers real-time news updates across a wide range of
            categories. The application is designed to provide users with a
            fast, clean, and intuitive reading experience on any device.
          </p>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-4">
            By integrating dynamic APIs, Dragon News ensures that users always
            stay updated with the latest headlines. The platform also includes
            secure user authentication powered by Firebase, allowing users to
            personalize their experience and access exclusive features.
          </p>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-4">
            Built with modern web technologies, Dragon News focuses on
            performance, usability, and scalability—making it a real-world
            example of a production-ready web application.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
