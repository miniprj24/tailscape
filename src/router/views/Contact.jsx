import { Button } from '../../components/ui/Button';
import { TextArea } from '../../components/ui/TextArea';
import { Input } from '../../components/ui/Input';
import FadeInOnScroll from '../../utilities/FadeInOnScroll';

export default function ContactPage() {
  return (
    <FadeInOnScroll>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="mb-4">
                We're here to help! If you have any questions, concerns, or just want to say hello,
                please don't hesitate to reach out to us.
              </p>
              <div className="mb-4">
                <h3 className="font-semibold">Address:</h3>
                <p>123 Pet Street, Animalville, PA 12345</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold">Phone:</h3>
                <p>(123) 456-7890</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold">Email:</h3>
                <p>info@petpalsstore.com</p>
              </div>
              <div>
                <h3 className="font-semibold">Hours:</h3>
                <p>Monday - Friday: 9am - 7pm</p>
                <p>Saturday: 10am - 6pm</p>
                <p>Sunday: 12pm - 5pm</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">
                    Name
                  </label>
                  <Input type="text" id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <Input type="email" id="email" name="email" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-1">
                    Subject
                  </label>
                  <Input type="text" id="subject" name="subject" required />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">
                    Message
                  </label>
                  <TextArea id="message" name="message" rows={5} required />
                </div>
                <Button type="submit" className="w-full">
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
