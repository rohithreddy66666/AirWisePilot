import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Radio } from "lucide-react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id': string;
      };
    }
  }
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className={`w-full max-w-4xl space-y-8 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <header className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Radio className="w-10 h-10 text-primary animate-pulse" data-testid="icon-logo" />
              <h1 
                className="text-5xl md:text-7xl font-bold tracking-wider text-foreground"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
                data-testid="text-title"
              >
                AirWise
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground font-light" data-testid="text-tagline">
              AI Aviation Assistant
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <Badge 
                variant="outline" 
                className="border-primary/50 text-primary bg-primary/5 px-4 py-1"
                data-testid="badge-voice-ready"
              >
                <div className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                Voice Ready
              </Badge>
              <Badge 
                variant="outline" 
                className="border-primary/50 text-primary bg-primary/5 px-4 py-1"
                data-testid="badge-ai-online"
              >
                <div className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                AI Online
              </Badge>
            </div>
          </header>

          <Card 
            className={`
              relative p-8 md:p-12
              bg-card/40 backdrop-blur-xl border-primary/20
              ${mounted ? 'animate-glow-pulse' : ''}
              shadow-2xl
            `}
            data-testid="card-widget-container"
          >
            <div className="absolute -top-px -left-px w-16 h-16 border-t-2 border-l-2 border-primary/40 rounded-tl-md" />
            <div className="absolute -top-px -right-px w-16 h-16 border-t-2 border-r-2 border-primary/40 rounded-tr-md" />
            <div className="absolute -bottom-px -left-px w-16 h-16 border-b-2 border-l-2 border-primary/40 rounded-bl-md" />
            <div className="absolute -bottom-px -right-px w-16 h-16 border-b-2 border-r-2 border-primary/40 rounded-br-md" />

            <div className="space-y-6 text-center">
              <div className="space-y-2">
                <h2 
                  className="text-2xl md:text-3xl font-semibold text-foreground tracking-wide"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                  data-testid="text-widget-title"
                >
                  Your AI Copilot
                </h2>
                <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto" data-testid="text-widget-description">
                  Tap to speak naturally with your AI aviation assistant. Get instant help with flight planning, 
                  weather briefings, regulations, and more.
                </p>
              </div>

              <div className="flex items-center justify-center py-8" data-testid="container-widget">
                <elevenlabs-convai agent-id="agent_1901ka4yj7nrebjb4asprbhgfkkn"></elevenlabs-convai>
              </div>

              <div className="pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground uppercase tracking-widest" data-testid="text-tip">
                  Click the microphone to start • Works best in quiet environments
                </p>
              </div>
            </div>
          </Card>

          <footer className="text-center space-y-3 pt-6">
            <p className="text-sm text-muted-foreground" data-testid="text-footer-description">
              Powered by advanced AI • Always available • Continuously learning
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground/70">
              <span data-testid="text-footer-version">v1.0.0</span>
              <span>•</span>
              <span data-testid="text-footer-status">System Operational</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
