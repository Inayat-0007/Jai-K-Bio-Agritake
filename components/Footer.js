function Footer({ language }) {
  try {
    const t = getTranslation(language);

    return (
      <footer className="bg-[var(--accent-color)] text-white py-16" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="https://app.trickle.so/storage/public/images/usr_148b367c88000001/68ed5d7e-5f1c-4059-8b37-7d31ad56f1c3.jpeg" 
                  alt="Jai K Bio Agritake Logo" 
                  className="w-16 h-16 object-contain mr-4"
                />
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                {t.footer.aboutText}
              </p>
              <div className="space-y-2">
                <p className="text-white/90">Plot no.45, Chanakyapuri, Near Minal Gate no.1, Bhopal 462023 (M.P.)</p>
                <p className="text-white/90">Toll Free: 1800-270-6500</p>
                <p className="text-white/90">Helpline: 07554007943</p>
                <p className="text-white/90">Email: Jaikbio2015@gmail.com</p>
                <p className="text-white/90">Mon - Sat: 10:00 AM - 6:00 PM</p>
                <p className="text-white/90">Sunday: CLOSED</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2">
                <li><a href="corporate.html#management" className="text-white/80 hover:text-white transition-colors">{t.nav.managementTeam}</a></li>
                <li><a href="corporate.html#awards" className="text-white/80 hover:text-white transition-colors">{t.nav.awards}</a></li>
                <li><a href="products.html" className="text-white/80 hover:text-white transition-colors">{t.nav.products}</a></li>
                <li><a href="services.html" className="text-white/80 hover:text-white transition-colors">{t.nav.services}</a></li>
                <li><a href="careers.html" className="text-white/80 hover:text-white transition-colors">{t.nav.careers}</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.connect}</h4>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <div className="icon-facebook text-lg"></div>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <div className="icon-twitter text-lg"></div>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <div className="icon-linkedin text-lg"></div>
                </a>
              </div>
              <p className="text-white/80 text-sm">{t.footer.hours}</p>
            </div>
          </div>

          {/* Developer Section */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Development Team */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Development Team</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="icon-user text-white text-lg"></div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Inayat Hussain</h5>
                      <p className="text-white/80 text-sm">Lead Developer</p>
                      <a 
                        href="https://www.linkedin.com/in/inayat-hussain-105a8834b" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-200 text-sm flex items-center space-x-1 transition-colors"
                      >
                        <div className="icon-linkedin text-sm"></div>
                        <span>LinkedIn Profile</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="icon-user text-white text-lg"></div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Sarvar Mansuri</h5>
                      <p className="text-white/80 text-sm">Developer</p>
                      <a 
                        href="https://www.linkedin.com/in/sarvar-mansuri-3287502b0" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-200 text-sm flex items-center space-x-1 transition-colors"
                      >
                        <div className="icon-linkedin text-sm"></div>
                        <span>LinkedIn Profile</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact for Projects */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Need a Website?</h4>
                <p className="text-white/80 mb-4 leading-relaxed">
                  Looking for professional web development services? Our experienced team specializes in creating modern, responsive websites and web applications.
                </p>
                <div className="space-y-2">
                  <p className="text-white/90 text-sm">
                    <span className="font-medium">Services:</span> Web Development, E-commerce, Custom Applications
                  </p>
                  <p className="text-white/90 text-sm">
                    <span className="font-medium">Technologies:</span> React, Node.js, Modern Web Stack
                  </p>
                  <div className="pt-3">
                    <a 
                      href="https://www.linkedin.com/in/inayat-hussain-105a8834b" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                    >
                      <div className="icon-mail text-sm"></div>
                      <span>Contact for New Projects</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-6 text-center">
            <p className="text-white/80">
              © 2025 Jai K Bio Agritake. All rights reserved. | Empowering Farmers, Cultivating a Greener Future
            </p>
            <p className="text-white/60 text-sm mt-2">
              Website developed by Inayat Hussain & Sarvar Mansuri | Premium Bio Fertilizers Manufacturer India
            </p>
          </div>


        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}