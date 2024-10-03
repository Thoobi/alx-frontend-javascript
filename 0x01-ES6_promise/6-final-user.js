import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  // Use Promise.allSettled to handle all promises
  const results = await Promise.allSettled(promises);

  // Map the results to the desired structure
  return results.map((result) => ([
    {
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    },
  ]));
}
