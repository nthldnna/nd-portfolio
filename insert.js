const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount2.json'); // your service account key file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const projects = [
  {
    id: 'Flower Shop',
    name: 'Flower Shop',
    desc: 'A visually appealing flower shop website featuring a pastel yellow and brown color scheme. It offers an elegant, minimalist layout with smooth navigation, showcasing beautiful floral arrangements. The design focuses on simplicity and warmth, creating a welcoming and calming atmosphere for users.',
    category: 'webdev',
    tech: 'HTML, CSS, and JS',
    photo: 'flower_shop.png'
  },
  {
    id: 'Grade Calculator',
    name: 'Grade Calculator',
    desc: 'A pastel vintage brown-themed grade calculator website designed with an aesthetically pleasing, minimalist layout. It allows users to input their scores for prelim, midterm, and final exams and calculates the overall grade. The simple yet elegant interface offers a smooth user experience with a focus on clarity and functionality.',
    category: 'webdev',
    tech: 'HTML, CSS, and JS',
    photo: 'grade_calculator.png'
  },
  {
    id: 'Simple Landing Page',
    name: 'Simple Landing Page',
    desc: 'A simple landing page with a green environment theme, featuring an aesthetically pleasing design that evokes a sense of nature and tranquility. Using HTML, CSS, Bootstrap, and JS, the page showcases vibrant greenery elements, offering a calm and inviting atmosphere. It’s optimized for a clean and smooth user experience with clear navigation and a modern layout.',
    category: 'webdev',
    tech: 'HTML, CSS, Bootstrap and JS',
    photo: 'simple_landing_page.png'
  },
  {
    id: 'Car Rental Reservation Form',
    name: 'Car Rental Reservation Form',
    desc: 'A sleek, black and white minimalist-themed car rental reservation form website, designed for simplicity and elegance. Using HTML, CSS, JS, and PHP, the site offers an easy-to-use form for users to book rental cars. The clean, modern design emphasizes user experience with intuitive navigation and clear input fields. PHP handles the backend processing, ensuring smooth reservation submissions and data management.',
    category: 'webdev',
    tech: 'HTML, CSS, JS, and PHP',
    photo: 'car_rental_reservation_form.png'
  },
  {
    id: 'Instrument Catcher Game',
    name: 'Instrument Catcher Game',
    desc: 'A fun, cartoony-themed Instrument Catcher game built with HTML, CSS, and JS. The website features vibrant, playful visuals and engaging gameplay where users catch falling instruments. The design is colorful and lively, creating an enjoyable and immersive experience. Smooth animations and interactive elements make the game both visually appealing and entertaining.',
    category: 'webdev',
    tech: 'HTML, CSS, and JS',
    photo: 'instrument_catching_game.png'
  },
  {
    id: 'Dress to Impress Website',
    name: 'Dress to Impress Website',
    desc: 'A minimalist, brown and white themed e-commerce website for selling clothes, designed for a seamless shopping experience. Using HTML, CSS, JS, and PHP, the site features a clean, modern layout with easy navigation, showcasing various clothing items. PHP handles the backend, managing product listings, user accounts, and transactions. The aesthetically pleasing design emphasizes simplicity, creating a calm, user-friendly environment for browsing and purchasing.',
    category: 'webdev',
    tech: 'HTML, CSS, JS, and PHP',
    photo: 'dti_website.png'
  },
  {
    id: 'Personnel Management Information System',
    name: 'Personnel Management Information System',
    desc: 'A centralized digital platform developed to streamline the coordination, control, analysis, and visualization of personnel data within the AFP Pension and Gratuity Management Center (AFPPGMC). It serves as a reliable tool for managing personnel information, offering efficient data entry, tracking, and reporting capabilities.',
    category: 'webdev',
    tech: 'HTML, CSS, Laravel, JS, and PHP',
    photo: 'apmis.png'
  },
  {
    id: 'HealthQuest',
    name: 'HealthQuest - Wellness Tracker App',
    desc: 'It is a gamified wellness tracker mobile app built with React Native, designed with purple shades for an aesthetically pleasing and vibrant interface. The app helps users track their water intake, food consumption, and exercise activities engagingly, turning health management into a fun experience. Firebase is used for the backend to store and sync user data in real-time securely. The design focuses on simplicity, motivation, and ease of use, encouraging users to maintain a healthy lifestyle.',
    category: 'mobile',
    tech: 'React Native',
    photo: 'healthquest.png'
  },
  {
    id: 'RECO-System',
    name: 'RECO-System',
    desc: 'It is a mobile app built with the Flutter framework, designed to detect and segment recyclable materials using YOLOv8 technology. The app offers project recommendations for each segmented material, encouraging sustainable DIY initiatives. With a green and white color scheme, the app features an aesthetically pleasing, clean, and eco-friendly interface. Firebase is used for the backend to manage user data and sync project suggestions in real-time, creating a seamless and interactive experience for environmentally-conscious users.',
    category: 'mobile',
    tech: 'Flutter Framework and Firebase',
    photo: 'recosystem.png'
  },
  {
    id: 'Scantastic Eats',
    name: 'Scantastic Eats',
    desc: 'It is a mobile app built with the Flutter framework, designed to scan ingredients using YOLOv8 technology and generate recipe suggestions based on what’s available. Featuring a green and white color palette, the app provides an aesthetically pleasing and user-friendly interface. Firebase serves as the backend, enabling real-time syncing and personalized recipe recommendations. This innovative app combines convenience and creativity, helping users make delicious meals with the ingredients they already have.',
    category: 'mobile',
    tech: 'Flutter Framework and Firebase',
    photo: 'scantastic_eats.png'
  },
  {
    id: 'SOS! Emergency App',
    name: 'SOS! Emergency App',
    desc: 'It features a minimalist design with a clean white and red color scheme, created in Figma for a user-friendly and visually striking interface. The design focuses on clarity and urgency, using the red color to highlight important elements like emergency contacts and alerts, while the white background ensures readability and simplicity. The minimalist layout prioritizes ease of use, allowing users to quickly access critical features in emergency situations, providing an intuitive, fast, and effective way to get help when needed.',
    category: 'uiux',
    tech: 'Figma and Canva',
    photo: 'sos.png'
  },
  {
    id: 'NAV!Malls',
    name: 'NAV!Malls',
    desc: 'A mall navigation app designed with a mustard yellow aesthetic, created in Figma for a vibrant and modern user interface. The design emphasizes simplicity and functionality, with the warm mustard yellow tone providing an inviting and energetic feel. The app helps users navigate through malls in Metro Manila, featuring interactive maps and store directories. The clean and intuitive interface ensures that users can easily find their way around, making shopping experiences more efficient and enjoyable.',
    category: 'uiux',
    tech: 'Figma and Canva',
    photo: 'navimalls.png'
  },
  {
    id: 'PharmaLens',
    name: 'PharmaLens',
    desc: 'It is a medicine scanner app designed with a soothing teal color scheme, crafted in Figma for an aesthetically pleasing and modern user interface. The app allows users to scan medicine labels to instantly retrieve detailed information about the drug, such as its uses, dosage, side effects, and manufacturer. The teal theme provides a calm and professional look, while the intuitive layout ensures users can quickly access essential information. The design prioritizes clarity, readability, and ease of use, creating a seamless experience for users looking to learn more about their medications.',
    category: 'uiux',
    tech: 'Figma and Canva',
    photo: 'pharmalens.png'
  },
  {
    id: 'BlossomCart',
    name: 'BlossomCart',
    desc: 'It is a mobile application for a flower shop, designed with a soft pastel pink and purple color scheme in Figma, offering a calming and elegant aesthetic. The UI features a clean, user-friendly layout with delicate floral accents that enhance the shopping experience. The pastel tones create a welcoming atmosphere, perfect for browsing and purchasing beautiful floral arrangements. With intuitive navigation and smooth interactions, the app ensures a delightful and seamless shopping experience for flower enthusiasts.',
    category: 'uiux',
    tech: 'Figma and Canva',
    photo: 'blossomcart.png'
  }
];

projects.forEach(async (project) => {
  try {
    await db.collection('Projects').doc(project.id).set({
      name: project.name,
      desc: project.desc,
      category: project.category,
      tech: project.tech,
      photo: project.photo
    });
    console.log(`Inserted: ${project.id}`);
  } catch (error) {
    console.error(`Error inserting ${project.id}:`, error);
  }
});
