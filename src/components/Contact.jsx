import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { register, handleSubmit, reset,  formState: { isSubmitting },} = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_83drim8",     // Replace with your EmailJS service ID
        "template_vw1k6bn",    // Replace with your EmailJS template ID
        {
          from_name: data.from_name,
          reply_to: data.reply_to,
          message: data.message,
          to_email: "eagle211254@gmail.com",  // 
        },
           "zwzyDsM3fdYbx66iG"         // Replace with your EmailJS public key
      );
      alert("Message sent!");
      reset();
    } catch (err) {
  console.error("EmailJS error:", err);
  alert(`Failed to send message: ${err.text || err.message}`);
}
  };

  return (
    <section id="contact" className="py-16 px-8 bg-gradient-to-br from-blue-100 to-green-200 flex flex-col items-center justify-center text-center">
      <h3 className="text-2xl font-semibold mb-4 text-green-500">Let's Connect</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          {...register("from_name", { required: true })}
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          {...register("reply_to", { required: true })}
          className="w-full p-3 border rounded"
        />
        <textarea
          placeholder="Your Message"
          {...register("message", { required: true })}
          className="w-full p-3 border rounded h-32"
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
