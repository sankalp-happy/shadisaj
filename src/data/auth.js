// Mock authentication helpers with localStorage persistence

const STORAGE_KEY = 'shadisaj_auth';
const USERS_KEY = 'shadisaj_users';

// Dummy credentials for testing
export const DEMO_CREDENTIALS = {
  email: 'test@shadisaj.com',
  password: 'wedding123',
  name: 'Test User',
  phone: '+91 9876543210'
};

// Initialize with demo user
function initializeUsers() {
  const existingUsers = localStorage.getItem(USERS_KEY);
  if (!existingUsers) {
    const users = [
      {
        id: 'user-demo-001',
        email: DEMO_CREDENTIALS.email,
        password: DEMO_CREDENTIALS.password,
        name: DEMO_CREDENTIALS.name,
        phone: DEMO_CREDENTIALS.phone,
        createdAt: new Date().toISOString()
      }
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
}

// Get all registered users
function getUsers() {
  initializeUsers();
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
}

// Save users to localStorage
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Login function
export function login(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
  
  if (user) {
    const authData = {
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      isLoggedIn: true,
      loginTime: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(authData));
    return { success: true, user: authData };
  }
  
  return { success: false, error: 'Invalid email or password' };
}

// Register function
export function register({ name, email, password, phone }) {
  const users = getUsers();
  
  // Check if email already exists
  if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
    return { success: false, error: 'Email already registered' };
  }
  
  // Create new user
  const newUser = {
    id: `user-${Date.now()}`,
    email,
    password,
    name,
    phone: phone || '',
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  saveUsers(users);
  
  // Auto login after registration
  const authData = {
    id: newUser.id,
    email: newUser.email,
    name: newUser.name,
    phone: newUser.phone,
    isLoggedIn: true,
    loginTime: new Date().toISOString()
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(authData));
  
  return { success: true, user: authData };
}

// Logout function
export function logout() {
  localStorage.removeItem(STORAGE_KEY);
  return { success: true };
}

// Get current user
export function getCurrentUser() {
  const authData = localStorage.getItem(STORAGE_KEY);
  if (authData) {
    const user = JSON.parse(authData);
    if (user.isLoggedIn) {
      return user;
    }
  }
  return null;
}

// Check if user is logged in
export function isAuthenticated() {
  const user = getCurrentUser();
  return user !== null;
}

// Update user profile
export function updateProfile({ name, phone }) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    return { success: false, error: 'Not logged in' };
  }
  
  // Update in users list
  const users = getUsers();
  const userIndex = users.findIndex(u => u.id === currentUser.id);
  if (userIndex !== -1) {
    users[userIndex].name = name || users[userIndex].name;
    users[userIndex].phone = phone || users[userIndex].phone;
    saveUsers(users);
  }
  
  // Update auth data
  const authData = {
    ...currentUser,
    name: name || currentUser.name,
    phone: phone || currentUser.phone
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(authData));
  
  return { success: true, user: authData };
}
