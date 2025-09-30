// Modern Portfolio Template - React + Tailwind
// You can customize colors, text, and project details

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header / Navigation */}
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700">Kelvin Mugisha</h1>
          <nav className="space-x-6 hidden md:block">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center h-screen bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
      >
        <h2 className="text-5xl font-bold mb-4">Hi, I’m Kelvin 👋</h2>
        <p className="text-lg max-w-2xl mb-6">
          Software Engineering Technology – AI student at Centennial College.  
          I build modern web apps, analyze data, and explore AI-driven solutions.
        </p>
        <div className="space-x-4">
          <a
            href="#projects"
            className="bg-white text-blue-700 px-5 py-2 rounded shadow hover:bg-gray-100"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="bg-green-500 text-white px-5 py-2 rounded shadow hover:bg-green-600"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto p-8 bg-white shadow-md rounded-lg mt-20">
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-lg text-center">
          I’m passionate about coding, problem-solving, and creating digital solutions.  
          I’ve worked on school projects and personal experiments with React, Python, and C#.  
          My goal is to become a full-stack developer and eventually launch scalable eCommerce platforms for Africa.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
    
    {/* React Portfolio */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src="/src/assets/portfolio.png" 
        alt="React Portfolio" 
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold">React Portfolio</h3>
        <p className="text-gray-600">A responsive portfolio built with React + Tailwind CSS.</p>
      </div>
    </div>

    {/* Soccer Prediction */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src="/src/assets/soccer.png" 
        alt="Soccer Prediction" 
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold">Soccer Draw Predictor</h3>
        <p className="text-gray-600">Python project analyzing soccer matches to predict draws.</p>
      </div>
    </div>

    {/* ATM App */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src="/src/assets/atm.png" 
        alt="ATM App" 
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold">Tap for ATM</h3>
        <p className="text-gray-600">C# WinForms project simulating ATM tap workflows.</p>
      </div>
    </div>

  </div>
</section>


      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto p-8 mt-20 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Services</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="card">
            <h3 className="font-semibold">Web Development</h3>
            <p className="text-sm">Responsive sites with React, HTML, CSS, JS</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Data Analysis</h3>
            <p className="text-sm">Python, Pandas, and visualization</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Database Design</h3>
            <p className="text-sm">SQL and relational database design</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">AI & Automation</h3>
            <p className="text-sm">Exploring beginner-level ML and scripts</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto p-8 mt-20 bg-white shadow rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent (demo only)");
          }}
          className="space-y-4 max-w-md mx-auto"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 w-full"
          >
            Send
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center p-4 text-sm mt-20">
        © 2025 Kelvin Mugisha. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

