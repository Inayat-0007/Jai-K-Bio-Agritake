function CareersContent({ language }) {
  try {
    const t = getTranslation(language);

    const jobOpenings = [
      {
        title: 'Agricultural Research Scientist',
        department: 'R&D',
        location: 'Bhopal',
        type: 'Full-time',
        experience: '3-5 years',
        description: 'Lead research in bio-fertilizer development and sustainable agriculture practices.'
      },
      {
        title: 'Field Sales Executive',
        department: 'Sales',
        location: 'Ratlam',
        type: 'Full-time',
        experience: '2-4 years',
        description: 'Build relationships with farmers and promote our bio-fertilizer products.'
      },
      {
        title: 'Quality Control Manager',
        department: 'Production',
        location: 'Bhopal',
        type: 'Full-time',
        experience: '5-7 years',
        description: 'Ensure product quality and compliance with industry standards.'
      },
      {
        title: 'Digital Marketing Specialist',
        department: 'Marketing',
        location: 'Bhopal',
        type: 'Full-time',
        experience: '2-3 years',
        description: 'Develop digital marketing strategies for agricultural products.'
      }
    ];

    return (
      <div className="space-y-20" data-name="careers-content" data-file="components/careers/CareersContent.js">
        {/* Mission & Vision */}
        <section id="mission" className="py-16 bg-[var(--bg-secondary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-8">Our Mission & Vision</h2>
                <div className="space-y-8">
                  <div className="card">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                        <div className="icon-target text-white text-xl"></div>
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--primary-color)]">Mission</h3>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                      To revolutionize agriculture through innovative bio-fertilizer solutions that empower farmers, 
                      enhance crop productivity, and promote sustainable farming practices for a greener future.
                    </p>
                  </div>
                  <div className="card">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-full flex items-center justify-center">
                        <div className="icon-eye text-white text-xl"></div>
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--secondary-color)]">Vision</h3>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                      To be the leading provider of sustainable agricultural solutions in India, 
                      fostering environmental stewardship while ensuring food security for future generations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="fade-in">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Team Mission"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="jobs" className="py-16 bg-[var(--bg-primary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-6">Current Job Openings</h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                Join our team of passionate professionals working towards sustainable agriculture
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {jobOpenings.map((job, index) => (
                <div key={index} className="card group cursor-pointer fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary-color)] transition-colors">
                      {job.title}
                    </h3>
                    <span className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="icon-building text-[var(--primary-color)] text-lg"></div>
                      <span className="text-[var(--text-secondary)]">{job.department}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="icon-map-pin text-[var(--primary-color)] text-lg"></div>
                      <span className="text-[var(--text-secondary)]">{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="icon-briefcase text-[var(--primary-color)] text-lg"></div>
                      <span className="text-[var(--text-secondary)]">{job.experience}</span>
                    </div>
                  </div>
                  
                  <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{job.description}</p>
                  
                  <button className="btn-primary w-full py-3 transform group-hover:scale-105 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Growth */}
        <section id="growth" className="py-20 bg-[var(--bg-secondary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">Career Growth Opportunities</h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                We believe in nurturing talent and providing growth opportunities for our team members
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'graduation-cap',
                  title: 'Skill Development',
                  description: 'Continuous learning programs and professional development opportunities'
                },
                {
                  icon: 'trending-up',
                  title: 'Career Advancement',
                  description: 'Clear career paths with regular performance reviews and promotions'
                },
                {
                  icon: 'award',
                  title: 'Recognition Programs',
                  description: 'Employee recognition and reward programs for outstanding performance'
                }
              ].map((item, index) => (
                <div key={index} className="card text-center fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-16 h-16 mx-auto mb-6 bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center">
                    <div className={`icon-${item.icon} text-2xl text-[var(--primary-color)]`}></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error('CareersContent component error:', error);
    return null;
  }
}
