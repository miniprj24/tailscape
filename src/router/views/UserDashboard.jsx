import { useSelector } from 'react-redux';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { CardContent } from '../../components/ui/CardContent';
import { CardTitle } from '../../components/ui/CardTitle';
import { CardHeader } from '../../components/ui/CardHeader';
import FadeInOnScroll from '../../utilities/FadeInOnScroll';

export default function UserDashboard() {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-700">
            Please log in to view your dashboard.
          </p>
        </div>
      </div>
    );
  }

  return (
    <FadeInOnScroll>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <main className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center text-black-600 mb-12">
            Welcome, {user?.name}!
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="transform transition-transform hover:scale-105 shadow-lg rounded-lg border border-gray-200 hover:shadow-2xl bg-white">
              <CardHeader className="bg-blue-200 p-4 rounded-t-lg">
                <CardTitle className="text-xl font-bold text-gray-800">
                  Your Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-gray-600">
                  <strong>Name:</strong> {user?.name}
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong> {user?.email}
                </p>
                <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700 ">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
            <Card className="transform transition-transform hover:scale-105 shadow-lg rounded-lg border border-gray-200 hover:shadow-2xl bg-white">
              <CardHeader className="bg-green-200 p-4 rounded-t-lg">
                <CardTitle className="text-xl font-bold text-gray-800">
                  Your Pets
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-gray-600">
                  You haven't added any pets yet.
                </p>
                <Button className="mt-4 bg-green-600 text-white hover:bg-green-700">
                  Add a Pet
                </Button>
              </CardContent>
            </Card>
            <Card className="transform transition-transform hover:scale-105 shadow-lg rounded-lg border border-gray-200 hover:shadow-2xl bg-white">
              <CardHeader className="bg-yellow-200 p-4 rounded-t-lg">
                <CardTitle className="text-xl font-bold text-gray-800">
                  Recent Orders
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-gray-600">
                  You haven't placed any orders yet.
                </p>
                <Button className="mt-4 bg-yellow-600 text-white hover:bg-yellow-700 border border-yellow-700 rounded-lg">
                  View All Orders
                </Button>
              </CardContent>
            </Card>
            <Card className="transform transition-transform hover:scale-105 shadow-lg rounded-lg border border-gray-200 hover:shadow-2xl bg-white">
              <CardHeader className="bg-purple-200 p-4 rounded-t-lg">
                <CardTitle className="text-xl font-bold text-gray-800">
                  Upcoming Appointments
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-black-600">
                  You don't have any upcoming appointments.
                </p>
                <Button className="mt-4 bg-purple-600 text-white hover:bg-purple-700">
                  Book an Appointment
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </FadeInOnScroll>
  );
}
