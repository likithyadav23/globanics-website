import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaUserTie,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClipboardList
} from "react-icons/fa";

const Withus = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Contact Us</h2>

        <div className="row g-5 align-items-start">
          {/* LEFT – FORM */}
          <div className="col-lg-7">
            <div className="border rounded-3 p-4 bg-white">
              <h5 className="fw-semibold mb-4 d-flex align-items-center gap-2">
                <FaClipboardList />
                Tell us what you need
              </h5>

              {success && (
                <div className="alert alert-success py-2">
                  ✔ Your submission has been received. We will contact you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Describe your requirement"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary px-5 py-2"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT – CONTACT INFO */}
          <div className="col-lg-5">
            <h5 className="fw-semibold mb-4">Reach Us</h5>

            <p className="text-muted d-flex gap-2">
              <FaMapMarkerAlt className="mt-1" />
              Ground Floor, No.1213, Holiday Village Road, BCCHS,
              Bengaluru - 560062, Karnataka, India
            </p>

            <p className="d-flex gap-2 align-items-center">
              <FaUserTie />
              <span>Madhu Sudan</span>
            </p>

            <p className="d-flex gap-2 align-items-center">
              <FaPhoneAlt />
              <a href="tel:+919845342737" className="text-decoration-none">
                +91 9845342737
              </a>
            </p>

            <p className="d-flex gap-2 align-items-center">
              <FaEnvelope />
              <a
                href="mailto:globonicspurchase@gmail.com"
                className="text-decoration-none"
              >
                globonicspurchase@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withus;
