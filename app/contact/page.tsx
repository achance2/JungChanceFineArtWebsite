import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section>
        <div className="mx-auto max-w-[1300px] md:px-7 xl:px-0 px-5">
          <h1 className="text-center md:text-left mt-20 mb-10 text-3xl font-semibold text-[#5B5149]">
            CONTACT
          </h1>

          <div className="max-w-[700px] font-semibold">
            <form
              action="https://formspree.io/f/xeeyegbj"
              method="POST"
              className="space-y-6"
            >
                <label className="mb-2 block text-base text-[#5f5555]">
                    Name
                </label>
              <input
                type="text"
                name="name"
                placeholder="Name (required)"
                required
                className="w-full border border-[#d8d0c8] px-4 py-3 outline-none focus:border-[#5f5555]"
              />
                <label className="mb-2 block text-base text-[#5f5555]">
                    Email
                </label>
              <input
                type="email"
                name="email"
                placeholder="Email (required)"
                required
                className="w-full border border-[#d8d0c8] px-4 py-3 outline-none focus:border-[#5f5555]"
              />
                <label className="mb-2 block text-base text-[#5f5555]">
                    Phone Number
                </label>
              <input
                type="tel"
                name="phonenumber"
                placeholder="Phone Number"
                className="w-full border border-[#d8d0c8] px-4 py-3 outline-none focus:border-[#5f5555]"
              />

                <label className="mb-2 block text-base text-[#5f5555]">
                    Message
                </label>
              <textarea
                name="message"
                placeholder="Message"
                required
                rows={6}
                className="w-full resize-none border border-[#d8d0c8] px-4 py-3 outline-none focus:border-[#5f5555]"
              />

              <button
                type="submit"
                className="border border-[#5f5555] px-8 py-3 mb-20 text-sm tracking-wide text-[#5f5555] transition hover:bg-[#5f5555] hover:text-white cursor-pointer"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}