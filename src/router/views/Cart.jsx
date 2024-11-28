import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../store/cartSlice';
import { Button } from '../../components/ui/Button';
import FadeInOnScroll from '../../utilities/FadeInOnScroll';

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <FadeInOnScroll>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b py-4"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-md mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p>{item.currency} {item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: parseInt(e.target.value),
                            })
                          )
                        }
                        className="w-16 mr-4"
                      />
                      <Button variant="destructive" clickEvent={() => dispatch(removeFromCart(item.id))}>
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                  <div className="flex justify-between mb-2">
                    <span>Subtotal:</span>
                    <span>₹ {total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Shipping:</span>
                    <span> ₹310.00</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg mt-4">
                    <span>Total:</span>
                    <span> ₹{(total + 310).toFixed(2)}</span>
                  </div>
                  <Button className="w-full mt-6">Proceed to Checkout</Button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </FadeInOnScroll>
  );
}
