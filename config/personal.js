export const personalInfo = {
  name: "Mary Clement",
  title: "Web Developer & UI/UX Designer",
  location: "Lagos, Nigeria",
  
  // Contact
  email: "clementmaryuko@gmail.com", // UPDATE THIS
  phone: "+234 7058765328X", // UPDATE THIS
  whatsapp: "+234 7058765328", // UPDATE THIS (same as phone or different)
  
  // Social Media
  linkedin: "https://www.linkedin.com/in/mary-clement-88b475212/", // UPDATE THIS
  twitter: "http://x.com/Maya_Uko", // UPDATE THIS (or null if you don't have)
  instagram: "https://www.instagram.com/designsbymary2025?igsh=MW0xa3J5bG02dHZ4Yw%3D%3D&utm_source=qr", // UPDATE THIS (or null if you don't have)
  github: "https://github.com/Mary-Clement", // UPDATE THIS (or null if you don't have)
  
  // Links
  calendly: "https://calendar.app.google/xDdZ9Qc2YUprHVmE9", // Google Calendar link
  
  // Bio
  shortBio: "Full-stack developer and designer based in Lagos. I handle the complete process - designing interfaces in Figma, building the code, and deploying to production.",
  
  // Availability
  availableForWork: true,
  availableFrom: "March 2026"
}

// Utility to generate WhatsApp link
export const getWhatsAppLink = (message = "Hi Mary, I'd like to discuss a project") => {
  const phoneNumber = personalInfo.whatsapp.replace(/[^0-9]/g, '');
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

// Utility to generate email link
export const getEmailLink = (subject = "Project Inquiry") => {
  return `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}`;
}


