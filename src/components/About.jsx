const About = () => (
  
      <section id="about" className="relative bg-gradient-to-br from-blue-100 to-green-200 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-sky-600">Me</span>{' '}
               
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
              I'm a hybrid professional with a passion for building intuitive software
              and hardware knowledge. With knowledge of frontend
             development and computer maintainance, I help maintain all accessories at their best state
      </p>
              <div className="flex flex-wrap gap-4">
              </div>
            </div>
            <div className="relative">
              <img
                src="../photo1.jpg"
                alt="Students learning together"
                className="rounded-3xl shadow-2xl" />
      
                </div>
              </div>
            </div>
      </section>
);

export default About;
