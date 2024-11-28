import FadeInOnScroll from "../../utilities/FadeInOnScroll";

export default function AboutPage() {
  return (
    <FadeInOnScroll>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">About TailScape</h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="TailScape Team"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="mb-4">
                TailScape was founded in 2024 with a simple mission: to provide
                the best care and products for pets and their owners. Our passion
                for animals drives everything we do, from selecting the highest
                quality products to offering expert advice and services.
              </p>
              <p className="mb-4">
                We believe that pets are family, and they deserve the very best.
                That's why we work tirelessly to source eco-friendly, sustainable,
                and innovative products that enhance the lives of pets and their
                owners.
              </p>
              <p>
                Our team of experienced pet lovers is always here to help you find
                the perfect solution for your furry, feathered, or scaly friend.
                We're more than just a platform - we're your partners in pet care.
              </p>
            </div>
          </div>
        </main>
      </div>
    </FadeInOnScroll>
  );
}
