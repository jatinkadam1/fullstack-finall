const Contact = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 bg-gray-800 shadow-lg rounded-lg flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-lg text-gray-400">📧 Email: contact@dummyemail.in</p>
        <p className="text-lg text-gray-400">📞 Phone: +91 98765 43210</p>
        <p className="text-md text-gray-500 text-center">
          Feel free to reach out to us for any queries. We're available 24/7.
        </p>
      </div>
    </div>
  );
};

export default Contact;
