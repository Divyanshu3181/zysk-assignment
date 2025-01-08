
const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Overview', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Solutions', href: '#', badge: 'New' },
      { name: 'Tutorials', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Releases', href: '#' }
    ],
    company: [
      { name: 'About us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'News', href: '#' },
      { name: 'Media kit', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Newsletter', href: '#' },
      { name: 'Events', href: '#' },
      { name: 'Help centre', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Support', href: '#' }
    ],
    useCases: [
      { name: 'Startups', href: '#' },
      { name: 'Enterprise', href: '#' },
      { name: 'Government', href: '#' },
      { name: 'SaaS centre', href: '#' },
      { name: 'Marketplaces', href: '#' },
      { name: 'Ecommerce', href: '#' }
    ],
    social: [
      { name: 'Twitter', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'Facebook', href: '#' },
      { name: 'GitHub', href: '#' },
      { name: 'AngelList', href: '#' },
      { name: 'Dribbble', href: '#' }
    ],
    legal: [
      { name: 'Terms', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'Licenses', href: '#' },
      { name: 'Settings', href: '#' },
      { name: 'Contact', href: '#' }
    ]
  };

  const FooterColumn = ({ title, links }: { title: string; links: Array<{ name: string; href: string; badge?: string }> }) => (
    <div>
      <h3 className="text-gray-900 font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <div className="flex items-center space-x-3">
              <a href={link.href} className="text-gray-600 hover:text-gray-900">
                {link.name}
              </a>
              {link.badge && (
                <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded">
                  {link.badge}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="border-t border-gray-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          <FooterColumn title="Product" links={footerLinks.product} />
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Resources" links={footerLinks.resources} />
          <FooterColumn title="Use cases" links={footerLinks.useCases} />
          <FooterColumn title="Social" links={footerLinks.social} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="mb-4 md:mb-0">
            <img
            alt="Logo"
            src="Logo.png"
            />
          </div>
          <p className="text-gray-600 text-sm">
            © 2077 zysktechnologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;