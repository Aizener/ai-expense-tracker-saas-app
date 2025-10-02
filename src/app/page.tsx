import { currentUser } from '@clerk/nextjs/server';

import AddNewRecord from '@/components/add-new-record';
import AllInsights from '@/components/all-insights';
import ExpenseStats from '@/components/expense-stats';
import Guest from '@/components/guest';
import RecordChart from '@/components/record-chart';
import RecordHistory from '@/components/record-history';
import WelcomeBack from '@/components/welcome-back';

export default async function Home() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-4 lg:px-12 lg:p-6">
      <div className="space-y-4">
        <WelcomeBack />
        <AddNewRecord />
        <AllInsights />
        <RecordHistory />
      </div>
      <div className="space-y-4">
        <RecordChart />
        <ExpenseStats />
      </div>
    </div>
  );
}
