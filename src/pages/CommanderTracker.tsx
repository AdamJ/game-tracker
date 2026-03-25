
import { Header } from '@/components/layout/Header';
import { CommanderTracker } from '@/components/commander/CommanderTracker';

export default function CommanderTrackerPage() {
  return (
    <div className="flex flex-col h-svh">
      <Header title="Commander" showBack showAbout />
      <div className="flex-1 overflow-hidden">
        <CommanderTracker />
      </div>
    </div>
  );
}
