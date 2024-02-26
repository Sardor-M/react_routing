import React, { useState } from "react";
import { UpcomingEvents } from "../../types";

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState<UpcomingEvents | null>(null);

  return (
    <div className="container">
      <h1>Dashboard page goes here</h1>
    </div>
  );
}
