import { useSelector } from 'react-redux';

import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { CardContent } from '../../components/ui/CardContent';
import { CardTitle } from '../../components/ui/CardTitle';
import { CardHeader } from '../../components/ui/CardHeader';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import FadeInOnScroll from '../../utilities/FadeInOnScroll';

const data = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
];

export default function AdminDashboard() {
  const user = useSelector((state) => state.auth.user);

  if (!user || user.role !== 'Admin') {
    return <div>Access denied. Admin privileges required.</div>;
  }

  return (
    <FadeInOnScroll>
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-red-200">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <p>No recent orders to display.</p>
                <Button className="mt-4">View All Orders</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Manage Products</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="mr-4">Add New Product</Button>
                <Button>Edit Existing Products</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="mr-4">View Users</Button>
                <Button>Manage Roles</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </FadeInOnScroll>
  );
}
