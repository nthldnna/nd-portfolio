const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount2.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const projects = [
  {
    id: 'HERTZ-Manpower-Request-Form-System',
    name: 'Manpower Request Form System',
    desc: 'A web-based manpower request management system developed for Hertz Philippines to streamline the submission, approval, and tracking of manpower requests across departments. The system features a clean and user-friendly interface, allowing employees and administrators to efficiently manage requests, monitor statuses, and organize workforce requirements. Built with Laravel, PHP, HTML, CSS, and JavaScript, the platform improves operational efficiency and simplifies internal coordination processes.',
    category: 'webdev',
    tech: 'HTML, CSS, Laravel, JS, and PHP',
    photo: 'mrf.png'
  },

  {
    id: 'HERTZ-Travel-Request-Form-System',
    name: 'Travel Request Form System',
    desc: 'A centralized web-based travel request management system developed for Hertz Philippines to simplify employee travel request submissions, approvals, and monitoring. The platform provides an organized and efficient workflow for handling official business trips, travel schedules, and approval processes. Designed with a clean and professional interface, the system enhances coordination between departments while improving request tracking and administrative efficiency using Laravel, PHP, HTML, CSS, and JavaScript.',
    category: 'webdev',
    tech: 'HTML, CSS, Laravel, JS, and PHP',
    photo: 'trf.png'
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