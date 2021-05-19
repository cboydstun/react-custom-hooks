export default function useUserType(currentUser) {

  let isAdmin = false;

  switch (currentUser.type) {
    case 'Staff':
        isAdmin = false;
        break;
    case 'Admin':
        isAdmin = true;
        break;
  }
  return [isAdmin];
}