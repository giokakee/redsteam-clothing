// validate register form fields
export const validateRegister = (form) => {
  const errors = {};

  if (!form.username || form.username.trim().length < 3) {
    errors.username = "Username must be at least 3 characters";
  }

  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Invalid email address";
  }

  if (!form.password || form.password.length < 3) {
    errors.password = "Password must be at least 3 characters";
  }

  if (form.password !== form.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  if (form.avatar) {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
    if (!allowedTypes.includes(form.avatar.type)) {
      errors.avatar = "Avatar must be JPG, PNG, or GIF";
    }
  }

  return errors;
};
