const stats = [
  { value: "10K+", label: "Events Hosted" },
  { value: "500K+", label: "Happy Attendees" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "45%", label: "Time Saved" }
];

export function Stats() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-5xl">{stat.value}</div>
              <p className="text-purple-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
