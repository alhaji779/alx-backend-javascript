import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  // Call the uploadPhoto function to upload the user's photo then chain all
  // promises together and handle with one error statement
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((userResp) => {
      // successful response
      console.log(`${userResp[0].body} ${userResp[1].firstName} ${userResp[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
