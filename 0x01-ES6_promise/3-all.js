import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()]).then((values) => {
    console.log(
      `${values[1].body} ${values[0].firstName} ${values[0].lastName}`,
    );
  }).catch(() => {
    console.log('Signup system offline');
  });
}
