const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json'); // your service account key file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const techstackData = {
  HTML: { image: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png' },
  JavaScript: { image: 'https://images.seeklogo.com/logo-png/30/2/java-script-js-logo-png_seeklogo-303341.png' },
  CSS: { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' },
  Bootstrap: { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png' },
  Tailwind: { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png' },
  Laravel: { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png' },
  PHP: { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1024px-PHP-logo.svg.png' },
  Flutter: { image: 'https://images.seeklogo.com/logo-png/35/2/flutter-logo-png_seeklogo-354671.png' },
  React: { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png' },
  Firebase: { image: 'https://icon2.cleanpng.com/20190529/bwt/kisspng-firebase-cloud-messaging-google-cloud-messaging-ap-1713889910707.webp' },
  MySQL: { image: 'https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png' }
};

async function uploadTechstack() {
  const collectionRef = db.collection('Techstack');

  for (const [docId, data] of Object.entries(techstackData)) {
    await collectionRef.doc(docId).set(data);
    console.log(`Uploaded: ${docId}`);
  }
}

uploadTechstack().then(() => {
  console.log('All documents uploaded successfully.');
}).catch(console.error);
