import React from 'react';
import Link from 'next/link';

const menuData = {
  performance: {
    title: "360° Performance Marketing",
    items: [
      { title: "Digital Branding", link: "/services" },
      { title: "Complete Online Demand Generation", link: "/services" },
      { title: "Influencer Marketing | Digital PR | Personal Branding", link: "/services" },
      { title: "Online Community Building & Development", link: "/services" },
      { title: "Social CRM/Analytics Integration & Management", link: "/services" },
    ]
  },
  disruptive: {
    title: "Disruptive Digital Campaigns",
    items: [
      { title: "Meme Marketing", link: "/services" },
      { title: "Viral Marketing", link: "/services" },
      { title: "Engagement Marketing", link: "/services" },
    ],
    subSection: {
      title: "Digital Marketing Campaigns– Publish and Promote",
      items: [
        { title: "Search Engine Optimization (SEO)", link: "/services" },
        { title: "Paid Media Planning and Optimization", link: "/services" },
        { title: "Social Media Optimization (SMO)", link: "/services" },
        { title: "Online Reputation Management (ORM)", link: "/services" },
      ]
    }
  },
  assets: {
    title: "Digital Marketing Campaigns Assets Creation",
    items: [
      { title: "Website / Microsite / Landing page", link: "/services" },
      { title: "Social Media Setup and Activation", link: "/services" },
      { title: "Content Marketing Assets", link: "/services" },
      { 
        title: "Visual Communication Assets",
        subItems: [
          { title: "Video production", link: "/services" },
          { title: "Graphics", link: "/services" },
        ]
      },
      { title: "Paid Ads Assets", link: "/services" },
    ]
  }
};

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-0 w-full bg-white shadow-lg hidden lg:block"
      onMouseLeave={onClose}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Performance Marketing Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b pb-2">{menuData.performance.title}</h3>
            <ul className="space-y-2">
              {menuData.performance.items.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.link}
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disruptive Digital Campaigns Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold border-b pb-2">{menuData.disruptive.title}</h3>
              <ul className="space-y-2">
                {menuData.disruptive.items.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.link}
                      className="hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">{menuData.disruptive.subSection.title}</h3>
              <ul className="space-y-2">
                {menuData.disruptive.subSection.items.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.link}
                      className="hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Assets Creation Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b pb-2">{menuData.assets.title}</h3>
            <ul className="space-y-2">
              {menuData.assets.items.map((item, index) => (
                <li key={index}>
                  {item.subItems ? (
                    <div className="space-y-2">
                      <span className="font-semibold">{item.title}</span>
                      <ul className="pl-4 space-y-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link 
                              href={subItem.link}
                              className="hover:text-blue-600 transition-colors duration-200"
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link 
                      href={item.link}
                      className="hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu; 