import {handleUser} from './fetchUserData.js'

// test the fetcjUserdata function


async function testHandleUser() {
  try {
    const concorrenti = await handleUser();
    console.log('Fetched concorrenti:', concorrenti);
  } catch (error) {
    console.error('Failed to fetch concorrenti:', error);
  }
}

testHandleUser();
