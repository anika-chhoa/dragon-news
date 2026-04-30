export const metadata = {
  title: "Dragon News- Career",
};

const Career = () => {
  return (
    <div>
      <section className="bg-base-200 py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Career Opportunities
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            At Dragon News, we believe in innovation, creativity, and continuous
            learning. Join us to build impactful digital experiences.
          </p>

          {/* Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card */}
            <div className="card bg-base-100 shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">Frontend Developer</h3>
              <p className="text-sm text-gray-500 mb-4">
                Build responsive UI with React & Next.js
              </p>
              <button className="btn btn-primary btn-sm">Apply</button>
            </div>

            <div className="card bg-base-100 shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">Backend Developer</h3>
              <p className="text-sm text-gray-500 mb-4">
                Work with APIs, databases & authentication
              </p>
              <button className="btn btn-primary btn-sm">Apply</button>
            </div>

            <div className="card bg-base-100 shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">UI/UX Designer</h3>
              <p className="text-sm text-gray-500 mb-4">
                Design modern and user-friendly interfaces
              </p>
              <button className="btn btn-primary btn-sm">Apply</button>
            </div>

            <div className="card bg-base-100 shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">Content Manager</h3>
              <p className="text-sm text-gray-500 mb-4">
                Manage and curate news content
              </p>
              <button className="btn btn-primary btn-sm">Apply</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
