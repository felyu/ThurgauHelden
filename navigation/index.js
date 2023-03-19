import React from 'react';
// import { userAuth } from '../utils/hooks/userAuth';
// import UserStack from './userStack';
import AuthStack from './authStack';
import UserStack from './userStack';

export default function RootNavigation() {
//   const { user } = userAuth();
const user = true;

return user ? <UserStack /> : <AuthStack />;
  // return <AuthStack />;

}