import React, { useState } from "react";
import { Events } from "../../types";
import { getEvents} from "../../api/api";
import requireAuth from "../../utils/utils";

export const   loader  =  async () => {
    // added getEvents function to the loader for the purpose of testing,
    // but it is not used in the DashboardPage component
    await requireAuth();
    return getEvents();
}

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState<Events | null>(null);

  return (
    <div className="container">
      <h1>Dashboard page goes here</h1>
    </div>
  );
}
