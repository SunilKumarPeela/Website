import React, { useState, useEffect } from 'react';
import { Award, ChevronDown, ChevronUp } from 'lucide-react';

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedBrands, setExpandedBrands] = useState({});

  // Certifications arranged by year: 2025 first, then 2024
  const certifications = [
    // 2025 Certifications
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      year: "2025",
      logo: "/src/assets/Compita.jpg"
    },
    {
      name: "CompTIA Cybersecurity Analyst+",
      issuer: "CompTIA", 
      year: "2025",
      logo: "/src/assets/Compita.jpg"
    },
    {
      name: "Microsoft Security, Compliance, and Identity Fundamentals",
      issuer: "Microsoft",
      year: "2025",
      logo: "https://images.credly.com/images/fc1352af-87fa-4947-ba54-398a0e63322e/security-compliance-and-identity-fundamentals-600x600.png"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2025",
      logo: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
    },
    {
      name: "Google Threat Intelligence Certificate",
      issuer: "Google",
      year: "2025",
      logo: "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
    },
    // 2024 Certifications
    {
      name: "ISC2 Certified in Cybersecurity",
      issuer: "ISC²",
      year: "2024",
      logo: "https://images.credly.com/images/2030e43f-8003-4d4b-9630-847add403c87/image.png"
    },
    {
      name: "Microsoft Cybersecurity Analyst",
      issuer: "Microsoft",
      year: "2024",
      logo: "https://images.credly.com/images/c34a6df4-c7bd-461b-ac12-deab18ab6804/image.png"
    },
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Google",
      year: "2024",
      logo: "https://images.credly.com/images/0bf0f2da-a699-4c82-82e2-56dcf1f2e1c7/image.png"
    },
    {
      name: "Google Cloud Security Certificate",
      issuer: "Google Cloud",
      year: "2024",
      logo: "https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png"
    },
    {
      name: "IBM Cybersecurity Fundamentals",
      issuer: "IBM",
      year: "2024",
      logo: "https://static.vecteezy.com/system/resources/previews/021/514/727/non_2x/ibm-logo-brand-software-computer-symbol-white-design-illustration-with-black-background-free-vector.jpg"
    },
    {
      name: "Cisco Junior Cybersecurity Analyst",
      issuer: "Cisco",
      year: "2024",
      logo: "https://images.seeklogo.com/logo-png/3/2/cisco-logo-png_seeklogo-30674.png"
    },
    {
      name: "Palo Alto Networks Security Fundamentals",
      issuer: "Palo Alto Networks",
      year: "2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbG0qSOnkWntqk7zXknVCGVC9n18MFOcgfdA&s"
    },
    {
      name: "Stellar Certified SOC Analyst",
      issuer: "Stellar Cyber",
      year: "2024",
      logo: "https://opensearch.org/wp-content/uploads/2025/01/stellar-cyber.png"
    },
    {
      name: "Fortinet Network Security Expert Level 1",
      issuer: "Fortinet",
      year: "2024",
      logo: "https://images.credly.com/images/e4042b4b-7f65-4dce-99d4-6bb2d9b1c1c7/image.png"
    }
  ];

  // Auto-move timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certifications.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Group certifications by brand
  const certificationsByBrand = {
    "CompTIA": [
      { name: "Security+", year: "2025" },
      { name: "CySA+", year: "2025" }
    ],
    "Microsoft": [
      { name: "SC-900", year: "2025" },
      { name: "Cybersecurity Analyst", year: "2024" }
    ],
    "Google": [
      { name: "Threat Intelligence", year: "2025" },
      { name: "Cybersecurity", year: "2024" },
      { name: "Cloud Security", year: "2024" }
    ],
    "Amazon Web Services": [
      { name: "Cloud Practitioner", year: "2025" }
    ],
    "ISC²": [
      { name: "CC", year: "2024" }
    ],
    "IBM": [
      { name: "Cybersecurity Fundamentals", year: "2024" }
    ],
    "Cisco": [
      { name: "CyberOps Associate", year: "2024" }
    ],
    "Palo Alto Networks": [
      { name: "Security Fundamentals", year: "2024" }
    ],
    "Stellar Cyber": [
      { name: "SOC Analyst", year: "2024" }
    ],
    "Fortinet": [
      { name: "NSE 1", year: "2024" }
    ]
  };

  const getBrandLogo = (brand) => {
    const logos = {
      "CompTIA": "/src/assets/Compita.jpg",
      "Microsoft": "https://images.credly.com/images/fc1352af-87fa-4947-ba54-398a0e63322e/security-compliance-and-identity-fundamentals-600x600.png",
      "Google": "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA",
      "Amazon Web Services": "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      "ISC²": "https://images.credly.com/images/2030e43f-8003-4d4b-9630-847add403c87/image.png",
      "IBM": "/src/assets/ibm-logo.png",
      "Cisco": "/src/assets/cisco-logo.png",
      "Palo Alto Networks": "https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/brand/primary-company-logo/Parent-logo/PANW_Parent_Logo_Primary_Reverse_RGB.svg",
      "Stellar Cyber": "https://stellarcyber.ai/wp-content/uploads/2021/03/stellar-cyber-logo.png",
      "Fortinet": "https://images.credly.com/images/e4042b4b-7f65-4dce-99d4-6bb2d9b1c1c7/image.png"
    };
    return logos[brand];
  };

  const getBrandColor = (brand) => {
    const colors = {
      "CompTIA": "from-red-500 to-orange-500",
      "Microsoft": "from-blue-500 to-cyan-500",
      "Google": "from-green-500 to-blue-500",
      "Amazon Web Services": "from-orange-500 to-yellow-500",
      "ISC²": "from-purple-500 to-blue-500",
      "IBM": "from-blue-600 to-indigo-600",
      "Cisco": "from-blue-700 to-blue-800",
      "Palo Alto Networks": "from-orange-600 to-red-600",
      "Stellar Cyber": "from-indigo-500 to-purple-500",
      "Fortinet": "from-red-600 to-gray-700"
    };
    return colors[brand] || "from-gray-500 to-gray-600";
  };

  const toggleBrandExpansion = (brand) => {
    setExpandedBrands(prev => ({
      ...prev,
      [brand]: !prev[brand]
    }));
  };

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Award className="h-12 w-12 text-cyan-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Professional Certifications</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry-recognized certifications that validate my expertise in cybersecurity
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative overflow-hidden mb-16">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 transform -translate-y-1/2"></div>
          
          {/* Certificates Container */}
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * 320}px)`,
              width: `${certifications.length * 320}px`
            }}
          >
            {certifications.map((cert, index) => (
              <div key={index} className="flex-shrink-0 w-80 px-4">
                <div className="flex items-center">
                  {/* Logo Circle */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-white rounded-full border-4 border-cyan-400 flex items-center justify-center overflow-hidden shadow-lg">
                      {cert.logo ? (
                        <img 
                          src={cert.logo} 
                          alt={`${cert.issuer} logo`}
                          className="w-full h-full object-contain p-2"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'block';
                          }}
                        />
                      ) : null}
                      <Award className="h-8 w-8 text-cyan-600" style={{ display: cert.logo ? 'none' : 'block' }} />
                    </div>
                    
                    {/* Year Badge */}
                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-bold ${
                      cert.year === "2025" 
                        ? "bg-green-500 text-white" 
                        : "bg-blue-500 text-white"
                    }`}>
                      {cert.year}
                    </div>
                  </div>

                  {/* Certificate Name */}
                  <div className="ml-6 flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                      {cert.name}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Indicators */}
        <div className="flex justify-center space-x-2 mb-16">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-cyan-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Certifications by Brand - Expandable */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Certifications by Brand</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(certificationsByBrand).map(([brand, certs]) => (
              <div
                key={brand}
                className="bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Brand Header - Clickable */}
                <button
                  onClick={() => toggleBrandExpansion(brand)}
                  className="w-full flex items-center justify-between p-6 bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    {/* Brand Logo */}
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden p-1">
                      <img 
                        src={getBrandLogo(brand)} 
                        alt={`${brand} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'block';
                        }}
                      />
                      <div className={`w-full h-full bg-gradient-to-r ${getBrandColor(brand)} rounded flex items-center justify-center`} style={{ display: 'none' }}>
                        <Award className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Brand Info */}
                    <div className="text-left">
                      <h4 className="text-lg font-bold text-white">{brand}</h4>
                      <p className="text-gray-400 text-sm">{certs.length} Certification{certs.length > 1 ? 's' : ''}</p>
                    </div>
                  </div>

                  {/* Expand/Collapse Arrow */}
                  <div className="text-cyan-400">
                    {expandedBrands[brand] ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>
                </button>

                {/* Certifications List - Expandable */}
                {expandedBrands[brand] && (
                  <div className="px-6 pb-6">
                    <div className={`h-1 bg-gradient-to-r ${getBrandColor(brand)} mb-4 rounded`}></div>
                    <div className="space-y-3">
                      {certs.map((cert, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-900 rounded-lg border border-gray-600 hover:border-cyan-500/50 transition-all duration-200"
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getBrandColor(brand)}`}></div>
                            <span className="text-white font-medium">{cert.name}</span>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-bold ${
                            cert.year === "2025" 
                              ? "bg-green-500/20 text-green-300" 
                              : "bg-blue-500/20 text-blue-300"
                          }`}>
                            {cert.year}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Certification Portfolio</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">14</div>
              <div className="text-gray-300">Total Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">5</div>
              <div className="text-gray-300">Latest (2025)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">9</div>
              <div className="text-gray-300">Recent (2024)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">10</div>
              <div className="text-gray-300">Vendors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;