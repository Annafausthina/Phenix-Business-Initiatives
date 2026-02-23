import { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  lines: string[];
}

const ContactCard = ({ icon: Icon, title, lines }: ContactCardProps) => (
  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
    <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="mb-3 text-lg font-semibold text-card-foreground">{title}</h3>
    <div className="space-y-1">
      {lines.map((line, i) => (
        <p key={i} className="text-sm text-muted-foreground">{line}</p>
      ))}
    </div>
  </div>
);

export default ContactCard;
