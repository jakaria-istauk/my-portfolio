import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [showTypewriter, setShowTypewriter] = useState(false)

  useEffect(() => {
    // Trigger typewriter animation after component mounts
    const timer = setTimeout(() => {
      setShowTypewriter(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

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
    <section id="home" className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-100/20 via-primary-200/10 to-primary-100/20 bg-[length:200%_200%] animate-gradient-shift"></div>

        {/* Floating Particles */}
        <div className="absolute w-2 h-2 bg-primary-300/30 rounded-full animate-particle-float" style={{left: '10%', animationDelay: '0s'}}></div>
        <div className="absolute w-1 h-1 bg-primary-400/40 rounded-full animate-particle-float" style={{left: '20%', animationDelay: '2s'}}></div>
        <div className="absolute w-3 h-3 bg-primary-200/20 rounded-full animate-particle-float-delayed" style={{left: '80%', animationDelay: '1s'}}></div>
        <div className="absolute w-1.5 h-1.5 bg-primary-500/30 rounded-full animate-particle-float" style={{left: '70%', animationDelay: '4s'}}></div>
        <div className="absolute w-2 h-2 bg-primary-300/25 rounded-full animate-particle-float-delayed" style={{left: '30%', animationDelay: '3s'}}></div>
        <div className="absolute w-1 h-1 bg-primary-400/35 rounded-full animate-particle-float" style={{left: '90%', animationDelay: '5s'}}></div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary-200/30 rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-primary-300/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-100/20 rotate-12 animate-float"></div>
      </div>
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
                <span className="sm:hidden">I Stand with Palestine</span>
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
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-400 to-primary-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg animate-float">
              <img src="https://gravatar.com/userimage/174366260/7cc7894f71fba0868a8548451d14f28a.jpeg?size=256&cache=1754147450649" alt="Jakaria Istauk" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span
                  className={`text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800 ${
                    showTypewriter ? 'animate-typewriter' : ''
                  }`}
                  style={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    borderRight: showTypewriter ? '3px solid' : 'none',
                    width: showTypewriter ? '100%' : '0',
                    animation: showTypewriter ? 'typewriter 3s steps(40) 1s forwards, blink 1s infinite 4s' : 'none'
                  }}
                >
                  Mohammad Jakaria Istauk
                </span>
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
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow hidden sm:block">
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
