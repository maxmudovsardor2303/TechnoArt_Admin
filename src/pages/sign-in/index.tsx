import { auth } from "@service";
import { useState } from "react";
import { saveToken } from "@token-service";
import Logo from "../../assets/login-bg-CeJ_7tXc.svg";

const Index = () => {
  const [phone_number, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const save = async () => {
    const payload = { phone_number, password };
    const response: any = await auth.sign_in(payload);
    if (response?.status === 201) {
      saveToken("access_token", response?.data?.data?.tokens.access_token);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftContainer}>
        <img src={Logo} alt="Login Illustration" style={styles.image} />
      </div>

      <div style={styles.rightContainer}>
        <h2 style={styles.title}>Login</h2>
        <div style={styles.inputGroup}>
          <label style={styles.label}>* Phone number</label>
          <input
            type="text"
            onChange={e => setPhone(e.target.value)}
            placeholder="Phone number"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>* Password</label>
          <input
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            style={styles.input}
          />
        </div>
        <button onClick={save} style={styles.button}>
          Login
        </button>
        <p style={styles.registerText}>
          Don’t have an account? <a href="#" style={styles.registerLink}>Register</a>
        </p>
      </div>
    </div>
  );
};

// CSS styles
const styles = {
  container: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f2f5",
  },
  leftContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f9fc",
    padding: "20px",
  },
  rightContainer: {
    flex: 1,
    padding: "50px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    maxWidth: "500px",
    margin: "0 20px",
  },
  image: {
    maxWidth: "80%",
    maxHeight: "80%",
    objectFit: "cover",
  },
  title: {
    marginBottom: "30px",
    fontSize: "26px",
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "16px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "500",
    marginTop: "20px",
  },
  registerText: {
    textAlign: "center",
    fontSize: "16px",
    color: "#777",
    marginTop: "20px",
  },
  registerLink: {
    color: "#007bff",
    textDecoration: "none",
  },
};

export default Index;
