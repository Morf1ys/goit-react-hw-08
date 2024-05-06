// Селектор для отримання стану аутентифікації (чи залогінений користувач)
export const getIsLoggedIn = (state) => state.auth.isLoggedIn;

// Селектор для отримання даних користувача
export const getUser = (state) => state.auth.user;

// Селектор для отримання JWT токену
export const getToken = (state) => state.auth.token;

// Селектор для перевірки, чи триває процес оновлення інформації користувача
export const getIsRefreshing = (state) => state.auth.isRefreshing;
