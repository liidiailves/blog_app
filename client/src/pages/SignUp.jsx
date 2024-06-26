import { Link, useNavigate } from "react-router-dom";
import {
  Alert,
  Button,
  Label,
  Spinner,
  TextInput,
  Modal,
} from "flowbite-react";
import { useState } from "react";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    // const { id, value } = e.target;
    // setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return setErrorMessage("Please fill out all fields.");
    }

    if (formData.password !== formData.confirmPassword) {
      return setErrorMessage("Passwords do not match.");
    }

    try {
      setLoading(true);
      setErrorMessage(null);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await res.json();

      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);

      if (res.ok) {
        setShowModal(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/sign-in");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <Link
            to="/"
            className="self-center text-sm sm:text-xl font-sedan font-semibold hover:font-extrabold dark:text-sky-50 hover:text-sky-500 dark:hover:text-sky-500"
          >
            Laiskliidu&apos;s Blog
          </Link>
          <p className="text-sm mt-6">
            This is a blog created by Laiskliidu. You can sign up with your
            email and password or with Google.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@example.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your password once" />
              <TextInput
                type="password"
                placeholder="********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your password twice" />
              <TextInput
                type="password"
                placeholder="********"
                id="confirmPassword"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToBlue"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
            <OAuth />
          </form>
          <div className=" flex gap-2 text-sm mt-6">
            <span>Have an account?</span>
            <Link
              to="/sign-in"
              className="text-blue-500 font-medium hover:text-blue-700 hover:font-semibold"
            >
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-6" color="failure">
              {errorMessage}
            </Alert>
          )}
          <Modal show={showModal} onClose={handleModalClose} popup size="md">
            {/* adds close button to modal automatically */}
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <h3 className="mb-4 text-lg text-gray-500 dark:text-gray-400">
                  User registration succeeded!
                </h3>
                <h3 className="mb-4 text-lg text-gray-500 dark:text-gray-400">
                  Now you can log in with your email and password.
                </h3>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}
