
import { ExternalLink, Shield, Sparkles, Info } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function About() {
  return (
    <div className="page-content">
      <Header title="About" showBack />

      <div className="px-4 py-5 space-y-4">
        {/* App identity */}
        <div className="text-center py-4">
          <img src="/assets/icons/icon_24.png" alt="" className="w-20 h-20 mx-auto rounded-2xl shadow-lg shadow-violet-900/40 mb-3" />
          <h1 className="text-2xl font-bold">Moonsilver Waypoints</h1>
          <p className="text-muted-foreground text-sm mt-1">TCG Game Tracker</p>
          <Badge variant="neutral" className="mt-2 text-xs">v0.0.0</Badge>
        </div>

        {/* Disclaimer */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" />
              Legal Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              Moonsilver Waypoints is an unofficial, fan-made tool and is not affiliated with, endorsed,
              sponsored, or approved by Wizards of the Coast LLC.
            </p>
            <p>
              Magic: The Gathering, the mana symbols, set symbols, and all related content are trademarks
              of Wizards of the Coast LLC. All rights reserved.
            </p>
          </CardContent>
        </Card>

        {/* Features */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-violet-400" />
              Features
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-1.5">
            {[
              'Offline-first — works without internet',
              'Privacy-focused — no data leaves your device',
              'Installable PWA for iOS and Android',
              'Tournament standings with win% tiebreaker',
              '4-player Commander / EDH tracking',
              '1v1 life counter with settings drawer',
              'D20 dice roller with history',
              'CSV export for all trackers',
            ].map((f) => (
              <div key={f} className="flex items-start gap-2">
                <span className="text-violet-400 mt-0.5">•</span>
                <span>{f}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* About */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Info className="w-4 h-4 text-sky-400" />
              About This App
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              Moonsilver Waypoints was created by Adam J. Jolicoeur as a personal TCG companion app,
              designed to replace messy paper scoresheets at the table.
            </p>
            <p>
              All data is stored locally on your device using IndexedDB. Nothing is sent to any server.
            </p>
            <div className="pt-2 space-y-1">
              <a
                href="https://www.adamjolicoeur.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-primary hover:underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                adamjolicoeur.me
              </a>
              <a
                href="https://gametracker.productdesigns.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-primary hover:underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                gametracker.productdesigns.net
              </a>
            </div>
          </CardContent>
        </Card>

        {/* PWA info */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Install the App</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p><strong className="text-foreground">iOS Safari:</strong> Tap the Share button → "Add to Home Screen"</p>
            <p><strong className="text-foreground">Android Chrome:</strong> Tap the menu → "Add to Home Screen" or look for the install banner</p>
            <p><strong className="text-foreground">Desktop Chrome:</strong> Click the install icon in the address bar</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
