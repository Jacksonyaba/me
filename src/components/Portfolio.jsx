const Portfolio = () => (
  <section id="portfolio" className="py-16 px-8  bg-gradient-to-br from-blue-100 to-green-200">
    <h3 className="text-2xl font-semibold mb-6 text-green-500  flex flex-col items-center justify-center text-center">Selected Work</h3>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-4 border rounded shadow">
        <h4 className="font-bold">Computer Maintainance</h4>
        <p className="mt-2 text-sm">Both software and Hardware</p>
      </div>
      <div className="p-4 border rounded shadow">
        <h4 className="font-bold">Full-Stack Web Developer</h4>
        <p className="mt-2 text-sm">Built with React, Node.js, MongoDB...</p>
      </div>
    </div>
  </section>
);

export default Portfolio;
