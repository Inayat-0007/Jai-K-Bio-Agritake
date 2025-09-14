function ManagementTeam({ language }) {
  try {
    const t = getTranslation(language);

    const managementTeam = [
      {
        name: 'Mr. J.K. Pahat',
        position: 'Founder & Chief Executive Officer',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/e1af215b-5499-4f5c-aeda-113261a8aade.png',
        bio: 'Visionary entrepreneur from farming family background with 22 years of direct marketing experience. Founded Jai K Bio Agritake in April 2015 and has grown the company to 500+ workforce across multiple states in Agro Crops, Plantation, Ayurvedic Health Care & E-commerce sectors.',
        email: 'Jaikbio2015@gmail.com'
      },
      {
        name: 'Mr Rabindra Das',
        position: 'Research & Development and Accounts',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/391c6df8-d8c9-48a2-acae-9f9c32e2e2ed.jpeg',
        bio: 'Leading innovative research in bio-fertilizer development and managing accounts operations.',
        email: 'rabindra@jaikbio.com'
      },
      {
        name: 'Dig Vijay Singh',
        position: 'Service Manager',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/b63a076e-af2a-409a-af51-cfebd2725165.jpeg',
        bio: 'Managing customer service operations and ensuring quality service delivery.',
        email: 'digvijay@jaikbio.com'
      },
      {
        name: 'Madhu Partap Vikey',
        position: 'Sales Manager',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/16fc743d-d54f-47ed-9c11-fb808a2c9032.jpeg',
        bio: 'Leading sales operations and managing client relationships.',
        email: 'madhu.vikey@jaikbio.com'
      },
      {
        name: 'Raam Bharose Patel',
        position: 'Sales Manager',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/cb8e392d-045d-410e-bc95-daa7f0d259cb.jpeg',
        bio: 'Managing sales activities and customer acquisition strategies.',
        email: 'raam.patel@jaikbio.com'
      },
      {
        name: 'Mr Jay Singh',
        position: 'Inventory and Dispatch',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/df71648e-3032-48d7-a622-3984433c8e79.jpeg',
        bio: 'Managing inventory control and coordinating dispatch operations efficiently.',
        email: 'jay.singh@jaikbio.com'
      },
      {
        name: 'Amar Singh Sisodiya',
        position: 'Sales Manager',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/ccc9a271-dc3c-4e85-a53b-6cc29b295af0.jpeg',
        bio: 'Expert in sales management with extensive field experience in agricultural sector.',
        email: 'amar.singh@jaikbio.com'
      }
    ];

    return (
      <section id="management" className="py-16 lg:py-20 bg-[var(--bg-secondary)]" data-name="management-team" data-file="components/corporate/ManagementTeam.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16 fade-in">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-6">{t.nav.managementTeam}</h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                {t.corporate.managementTitle}
              </p>
            </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <div key={index} className="card group text-center fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-[var(--primary-color)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{member.name}</h3>
                <p className="text-[var(--primary-color)] font-semibold mb-4">{member.position}</p>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{member.bio}</p>
                
                <a href={`mailto:${member.email}`} className="inline-flex items-center text-[var(--primary-color)] hover:text-[var(--accent-color)] transition-colors">
                  <div className="icon-mail mr-2 text-sm"></div>
                  <span className="text-sm">{member.email}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ManagementTeam component error:', error);
    return null;
  }
}