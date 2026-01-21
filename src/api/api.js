const API_URL = "http://localhost:3001/api";

// PRODUCTS
export const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
};

// CATEGORIES
export const getCategories = async () => {
  const res = await fetch(`${API_URL}/categories`);
  return res.json();
};

// LOGIN
export const loginUser = async (email, password) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

// CREATE ORDER
export const createOrder = async (order, token) => {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  });
  return res.json();
};
