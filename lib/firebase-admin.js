import { initializeApp, cert, getApps } from 'firebase-admin/app';

const serviceAccountString = process.env.GOOGLE_CREDENTIALS;

if (!serviceAccountString) {
    throw new Error('Environment variable GOOGLE_CREDENTIALS tidak diatur!');
}

const serviceAccount = JSON.parse(serviceAccountString);

// Ganti semua literal "\\n" menjadi karakter baris baru "\n"
serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');

// Inisialisasi Firebase Admin kalo belum ada
if (!getApps().length) {
    initializeApp({
        credential: cert(serviceAccount),
    });
}