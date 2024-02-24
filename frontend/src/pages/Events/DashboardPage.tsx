import React, { useState } from "react";
import { Events } from "../../types";

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState<Events | null>(null);

  return (
    <div className="container">
      <h1>Dashboard page goes here</h1>
    </div>
  );
}
