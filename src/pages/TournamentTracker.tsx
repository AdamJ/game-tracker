
import { Header } from '@/components/layout/Header';
import { StandingsTracker } from '@/components/tournament/StandingsTracker';

export default function TournamentTrackerPage() {
  return (
    <div className="page-content">
      <Header title="Tournament" showBack showAbout />
      <div className="px-4 py-4">
        <StandingsTracker />
      </div>
    </div>
  );
}
