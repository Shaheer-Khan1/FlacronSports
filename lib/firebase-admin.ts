import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import type { ServiceAccount } from 'firebase-admin';

const serviceAccount: ServiceAccount = {
  projectId: "flacronsport",
  privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCRFs35S1rWao5m\n80f7ZMjEBa/4I6a0xqJznaYd1nwCrcQh+bl96cxIhDTPnoBBNBYqPbE3P0cJFppb\njqsylqhGY7ws+I63VM/CfYZiVxFCyW4EGx/9dbixa03AXWhM0A/0chddovkDbDtN\nKuNWGPCefNTn9Qy0SCLJjybMUMC7NabVj4Yk7OPrrWW/X8yB7Zy8V0C2jVIJro8B\nwi9gtA1zkjAcxH8JDbF0+zkE2zycnmooz81+6pWV661Wx77dmvi9K7XFJhT+SR8L\nJ3X7rQNCF8yfAWhevvSuG63pQqiz8kYQr/ind39Cbzr7Pim9OX67ts2Ig08zAlrz\nPhTF7QJbAgMBAAECggEAPDkuB/NqYiPatgr3bvcXip4du674rILivYDLigkUcnw0\nNDIW95fLLrKJxUAyVl5LcP8ohxkh4Djcm3Jtx1LXyFfvrO8DNj/i+QTnefxP8tvv\naY7kyW1K24IBxP5Ao9mdNccBweE64VvUhaRutrclcXO5YArMWiyzG9zqqtY+GbZ8\nY7qmPKYvCFmeCahebbH/h8MeC7gH5s5nlspDna8qB4EDbFitm9OAllMN1uhRsyec\nFJkjOnfn3mg/3rJE5GUJrbWJKORo7B1u3rqhJ1UexwCGxZEzjWVanQ1CiWwEPLKS\noOk+MdSNCM+BjdwwJgkHICdClvzH9bhvN5ZEFNoa2QKBgQDEJufPOZfmj44pwN0/\nyX5vPwaywdTnfzAEZNg+gxm3VLE5EQMSYhqhBVVAW106EAjSaImFCuv7AowX1p20\nYDT8oI1iFTQ6k+oS2J/OfIBRY7gqg0P76Z1lOL3ZVxhlwPgHunPXsa04E9gxSjjV\nC/i6wRA6/MElCM52q8th3C14DQKBgQC9W3bFCFT25ilukwHlE8CAyT5kxEhbWB2l\nF8gbAeIfxtwegtjsZeRew2NqyUyKnUkU07vfJpl2q7orRdqjG1RxSYFv7MLKuQ94\nfpeUDfhqzDU/3AeR1NH7smMJ0eFBnZFKwSRWYlX7R/TLIot7DGTrh9rhMs4F0N9T\n19KnXXEiBwKBgQCB/27eTcM4UKfdUC7R2Y5r2A9uZTve+NIv903BkE14zS5vLbEl\ne9M+KDSp5GNS2dGe8R1DCUwAHV4PZnM6WhCD5TwOZxMoR2N4fgzbYnQAfOBPfJOP\n3vIrZYGdCzXmKg+3v4CK0PyGD9DWSeSEfdyomM9S6LRxAPckexLdlnij+QKBgQCj\n6H1Jlqm9QoQQs+3K9isHD6wTm5gqgX6/vnM3dYzgBsnZG1hcYOKqaKUw9WhtADMX\ndSRFyGrEv2eaN5BG6cxRd9g0IxSGWGSc36+jt+gVwghB69sdj8PoBIUYJfW/T35J\n4B/tKpfUuHecMp3b+GGPQ3zivJB7lk8Ki2JL/2WDlwKBgQDAkoSSw67LF5yJXiaY\no8wJwGRQuOqlq4UHUaT0rvm/KroAtbHqYu9EkuXhAljl86+LacJ+r8v6Na7/grNL\n0LUwSR3EZxhISI+FjfeuiBnFDUqtTFbrDLAPX3z1QMQI8tvHQAYS+nKms/U/kEBH\n3lOVJAcB2/un/tsuG0ZRqo139A==\n-----END PRIVATE KEY-----\n",
  clientEmail: "firebase-adminsdk-fbsvc@flacronsport.iam.gserviceaccount.com"
};

// Initialize Firebase Admin
if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
    projectId: "flacronsport"
  });
}

export const adminAuth = getAuth();
export function getAdminDb() {
  return getFirestore();
}

export async function verifyIdToken(token: string) {
  try {
    return await getAuth().verifyIdToken(token);
  } catch {
    return null;
  }
} 