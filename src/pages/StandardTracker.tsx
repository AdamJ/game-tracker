
import { Header } from '@/components/layout/Header';
import { StandardTracker } from '@/components/standard/StandardTracker';

export default function StandardTrackerPage() {
  return (
    <div className="flex flex-col h-svh">
      <Header title="Match Play" showBack showAbout />
      <div className="flex-1 overflow-hidden py-2">
        <StandardTracker />
      </div>
    </div>
  );
}
