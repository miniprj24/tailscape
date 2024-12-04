import { Button } from '../../components/ui/Button';
import { TextArea } from '../../components/ui/TextArea';
import { Input } from '../../components/ui/Input';
import FadeInOnScroll from '../../utilities/FadeInOnScroll';

export default function ContactPage() {
  return (
    <FadeInOnScroll>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200">
        <main className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-extrabold text-center text-black-700 mb-12">
            Contact Us
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-black-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We're here to help! If you have any questions, concerns, or just
                want to say hello, please don't hesitate to reach out to us.
              </p>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-blue-900">Address:</h3>
                  <p>123 Pet Street, Animalville, PA 12345</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">Phone:</h3>
                  <p>(123) 456-7890</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">Email:</h3>
                  <p>info@petpalsstore.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">Hours:</h3>
                  <p>Monday - Friday: 9am - 7pm</p>
                  <p>Saturday: 10am - 6pm</p>
                  <p>Sunday: 12pm - 5pm</p>
                </div>
              </div>
            </div>

            
            <div>
              <h2 className="text-2xl font-semibold text-black-800 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <TextArea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300 shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </FadeInOnScroll>
  );
}
