import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto('photo-profile-1'),
      createUser('Guillaume'),
      createUser('Salva'),
    ]);

    console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
  } catch (error) {
    error('Signup system offline');
  }
}
