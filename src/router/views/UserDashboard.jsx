
import { useSelector } from 'react-redux'

import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { CardContent } from '../../components/ui/CardContent';
import { CardTitle } from '../../components/ui/CardTitle';
import { CardHeader } from '../../components/ui/CardHeader';

export default function UserDashboard() {
  const user = useSelector((state) => state.auth.user)

  if (!user) {
    return <div>Please log in to view your dashboard.</div>
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome, {user.name}!</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <Button className="mt-4">Edit Profile</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Your Pets</CardTitle>
            </CardHeader>
            <CardContent>
              <p>You haven't added any pets yet.</p>
              <Button className="mt-4">Add a Pet</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <p>You haven't placed any orders yet.</p>
              <Button className="mt-4">View All Orders</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <p>You don't have any upcoming appointments.</p>
              <Button className="mt-4">Book an Appointment</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

