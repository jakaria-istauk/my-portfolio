import React from 'react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Palestine Support Banner - positioned below fixed header */}
      <div className="w-full bg-white py-3 px-4 shadow-md border-b border-gray-200 mt-16">
        <div className="container-max">
          <div className="flex items-center justify-center space-x-3">
            {/* Palestinian Flag Image */}
            <div className="flex-shrink-0">
              <svg className="w-8 h-6 sm:w-10 sm:h-7" xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 6 3">
                <rect fill="#009639" width="6" height="3"/><rect fill="#FFF" width="6" height="2"/><rect width="6" height="1"/>
                <path fill="#ED2E38" d="M0,0l2,1.5L0,3Z"/>
              </svg>
            </div>
            {/* Support Text */}
            <div className="text-center">
              <p className="text-sm sm:text-base font-semibold text-gray-800">
                <span className="hidden sm:inline">I Stand with Palestine, Save Palestine, Free Palestine</span>
                <span className="sm:hidden">Stand with Palestine</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center py-8">
        <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-6 animate-fade-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-400 to-primary-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              <img src="https://gravatar.com/userimage/174366260/7cc7894f71fba0868a8548451d14f28a.jpeg?size=256&cache=1754147450649" alt="Jakaria Istauk" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                Mohammad Jakaria Istauk
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8 font-light">
              Full Stack Developer
            </h2>
            
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm a WordPress developer and open-source contributor based in Bangladesh.
              I specialize in building scalable plugins, clean interfaces, and user-first experiences — from the backend logic to the frontend polish
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToProjects}
                className="btn-primary text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Projects
              </button>
              <button
                onClick={scrollToContact}
                className="btn-secondary text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
