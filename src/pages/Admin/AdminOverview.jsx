import SEOHead from "../../components/SEOHead";
import { HiUsers, HiDocumentText, HiBell, HiCalendar, HiCurrencyDollar } from "react-icons/hi";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import SectionReveal from "../../components/SectionReveal";

const stats = [
  { label: "Total Users", value: 1250, icon: HiUsers, color: "bg-[#F7E9E3] text-[#CE4517]" },
  { label: "Total Blogs", value: 48, icon: HiDocumentText, color: "bg-[#FAF0D2] text-[#251D18]" },
  { label: "Total Notices", value: 23, icon: HiBell, color: "bg-[#F7EDDE] text-[#251D18]" },
  { label: "Total Events", value: 15, icon: HiCalendar, color: "bg-[#F7E9E3] text-[#CE4517]" },
  { label: "Total Donations", value: "₹2,45,000", icon: HiCurrencyDollar, color: "bg-[#FAF0D2] text-[#251D18]" },
];

const monthlyDonations = [
  { month: "Jan", amount: 15000 }, { month: "Feb", amount: 22000 }, { month: "Mar", amount: 35000 },
  { month: "Apr", amount: 18000 }, { month: "May", amount: 28000 }, { month: "Jun", amount: 42000 },
];

const categoryData = [
  { name: "General", value: 40 }, { name: "Puja", value: 30 }, { name: "Renovation", value: 20 }, { name: "Prasad", value: 10 },
];
const COLORS = ["hsl(15, 80%, 45%)", "hsl(45, 85%, 55%)", "hsl(0, 60%, 30%)", "hsl(30, 25%, 50%)"];

const AdminOverview = () => (
  <div className="">
    <SEOHead title="Admin Dashboard" description="Admin overview for Maa Doyamoyee Temple." path="/admin" />

    <div className="space-y-6">
      <h1 className="text-2xl font-display font-bold ">Dashboard Overview</h1>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((stat, i) => (
          <SectionReveal key={stat.label} delay={i * 0.05}>
            <div className="bg-white shadow-md rounded-xl p-4">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                <stat.icon size={20} />
              </div>
              <p className="text-2xl text-[#251D18] font-bold ">{stat.value}</p>
              <p className="text-xs text-[#251D18] ">{stat.label}</p>
            </div>
          </SectionReveal>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Monthly Donations */}
        <SectionReveal>
          <div className="bg-white rounded-xl p-6 shadow-md border border-zinc-200 outline-none focus:outline-none">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">
              Monthly Donations
            </h3>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={monthlyDonations}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" tick={{ fontSize: 12 }} />

                <YAxis tick={{ fontSize: 12 }} />

                <Tooltip />

                <Bar
                  dataKey="amount"
                  fill="#CF4517"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SectionReveal>


        {/* Donation Categories */}
        <SectionReveal delay={0.1}>
          <div className="bg-white rounded-xl p-6 shadow-md border border-zinc-200 outline-none focus:outline-none">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">
              Donation Categories
            </h3>

            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {categoryData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </SectionReveal>

      </div>
    </div>
  </div>
);

export default AdminOverview;
