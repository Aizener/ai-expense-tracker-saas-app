import { currentUser } from '@clerk/nextjs/server';

import AddNewRecord from '@/components/add-new-record';
import AllInsights from '@/components/all-insights';
import ExpenseStats from '@/components/expense-stats';
import Guest from '@/components/guest';
import RecordChart from '@/components/record-chart';
import RecordHistory from '@/components/record-history';
import WelcomeBack from '@/components/welcome-back';

export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  const { page } = await searchParams;

  return (
    <div className="flex flex-col justify-center gap-4 px-2 py-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="space-y-4">
          <WelcomeBack />
          <AddNewRecord />
        </div>
        <div className="space-y-4 flex-1">
          <RecordChart />
          <ExpenseStats />
        </div>
      </div>
      <AllInsights />
      <RecordHistory page={Number(page)} />
    </div>
  );
}
