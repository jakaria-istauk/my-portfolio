import React from 'react'

const Hobbies = () => {
  const hobbies = [
    {
      title: 'Professional Sleeper',
      icon: '😴',
      description: 'Master of the art of horizontal life optimization. I\'ve perfected the science of REM cycles and can achieve peak performance in dream debugging.',
      skills: ['Power Napping', 'Dream Debugging', 'Pillow Architecture', 'Blanket Engineering'],
      achievement: '8+ hours daily practice'
    },
    {
      title: 'Running Enthusiast',
      icon: '🏃‍♂️',
      description: 'When I\'m not debugging code, I\'m debugging my running form. Sometimes I run to clear my mind, sometimes I run from my bugs.',
      skills: ['Daily 3-4K Runs', 'Trail Running', 'Bug Escaping', '10K Personal Best'],
      achievement: 'Still running from that one production bug',
      link: {
        text: 'Follow my runs on Strava',
        url: 'https://www.strava.com/athletes/154252698',
        external: true
      }
    }
  ]

  return (
    <section id="hobbies" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Life Beyond Code
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-800 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            When I'm not crafting code, I pursue two highly sophisticated activities that keep me balanced and energized
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon and Title */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 animate-bounce-slow">
                  {hobby.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {hobby.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6 text-center">
                {hobby.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 text-center">
                  Specialized Skills:
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {hobby.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievement */}
              <div className="text-center mb-4">
                <div className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium">
                  🏆 {hobby.achievement}
                </div>
              </div>

              {/* Link (if exists) */}
              {hobby.link && (
                <div className="text-center">
                  <a
                    href={hobby.link.url}
                    target={hobby.link.external ? "_blank" : "_self"}
                    rel={hobby.link.external ? "noopener noreferrer" : ""}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  >
                    {hobby.link.text}
                    {hobby.link.external && (
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Fun Stats Section */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Fun Stats & Philosophy
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">∞</div>
              <div className="text-sm text-gray-600">Dreams Debugged</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">42</div>
              <div className="text-sm text-gray-600">Miles This Month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Work-Life Balance</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 italic max-w-3xl mx-auto">
              "The best code is written by well-rested developers who know when to step away from the screen. 
              Whether it's catching Z's or catching miles, both activities help me return to coding with fresh 
              perspective and renewed energy."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hobbies
