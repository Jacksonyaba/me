const Skills = () => (
  <section id="skills" className="py-16 px-8  bg-gradient-to-br from-blue-100 to-green-200">
    <h3 className="text-2xl font-semibold mb-4  flex flex-col items-center justify-center text-center text-green-500">Skills</h3>
    <div className="grid md:grid-cols-2 gap-6 p-4 border rounded shadow">
      <ul>
        <li>React, JavaScript, Node.js</li>
        <li>REST APIs, MongoDB</li>
        <li>Git</li>
      </ul>
      <ul>
        <li>Computer Hardware</li>
        <li>Computer Software</li>
        <li>Computer Maintainance</li>
      </ul>
    </div>
  </section>
);

export default Skills;
