import { ClipboardCheck, FileSearch, Database, ShieldAlert, Cpu, CheckCircle2, ListChecks, UserPlus, FileText, Search, Scale, BadgeCheck, FileEdit, Undo2, BrainCircuit } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ScrollReveal from '@/components/ScrollReveal';

const workflowItems = [
    "Loading the unique pointer into the claim file for engine injection",
    "Providing matches using sophisticated business rules",
    "Manually matching complex outliers that bypass automation",
    "Creating synchronized database records",
    "Automated enrichment of provider specialty categories",
    "Capturing unique IDs for EDI file integration",
    "Instant eligibility identification for auto-adjudication"
];

const subServices = [
    { icon: UserPlus, title: "Provider Enrollment" },
    { icon: FileSearch, title: "Data Extraction from Raw Claims" },
    { icon: Search, title: "Investigation of Claims for Duplicates" },
    { icon: Scale, title: "Adjudication of Insurance Benefits" },
    { icon: FileEdit, title: "Review of Diagnostic Code and Patient Data" },
    { icon: BadgeCheck, title: "Evaluation of Healthcare Service Provider Details" },
    { icon: ShieldAlert, title: "In-depth Claims Validation for fraud detection" },
    { icon: Cpu, title: "Computing Claims Amount" },
    { icon: FileText, title: "Explanation of Benefits verification" },
    { icon: Scale, title: "Benefit-Based Determination Adjudication" },
    { icon: BadgeCheck, title: "Credentialing" },
    { icon: BadgeCheck, title: "ID Card Validation" },
    { icon: Cpu, title: "Checking Data Accuracy with Claims Adjudicating Engine" },
    { icon: FileText, title: "Letter Validation" },
    { icon: FileText, title: "EOB Validation" },
    { icon: Database, title: "Claims Data Entry" },
    { icon: Undo2, title: "Appeals Processing" },
];

const ClaimsManagement = () => (
    <div className="relative overflow-hidden">
        <Hero title="Claims Management" subtitle="Systematic workflows powered by intelligent adjudication." />

        <Section>
            <div className="mx-auto max-w-4xl space-y-8 text-center lg:text-left">
                <ScrollReveal>
                    <div className="line-accent mx-auto lg:ml-0" />
                    <p className="text-muted-foreground leading-relaxed text-lg">
                        Accurate and timely processing is the ultimate satisfaction measure. PBI follows a systematic workflow to prepare healthcare claims for payment with unsurpassed precision. Our adjudication team identifies and mitigates inappropriate utilization of services through rigorous data analysis.
                    </p>
                </ScrollReveal>
            </div>
        </Section>

        {/* ── AI Analytics Banner ── */}
        <section className="py-16 px-4 bg-primary/5 border-y border-black/5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                <ScrollReveal direction="left" className="lg:w-1/3">
                    <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                        <BrainCircuit className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-['Syne'] font-bold text-foreground mb-4">AI Claims Intelligence</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                        Our neural networks pre-screen claims to identify patterns of waste, fraud, and abuse (WFA) with 98% detection rates.
                    </p>
                </ScrollReveal>

                <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {workflowItems.slice(0, 4).map((item, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="flex items-center gap-4 p-5 rounded-xl border border-black/5 bg-white/40 hover:border-primary/20 transition-all group">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-sm text-foreground/60 font-medium group-hover:text-foreground transition-colors">{item}</span>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>

        <Section>
            <ScrollReveal>
                <div className="text-center mb-12">
                    <span className="tag mb-4 inline-flex">Service Matrix</span>
                    <h2 className="text-foreground">Full Portfolio</h2>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {subServices.map((service, i) => (
                    <ScrollReveal key={i} delay={i * 0.05}>
                        <div className="group relative flex items-start gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors self-center">
                                {service.title}
                            </h3>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </Section>
    </div>
);

export default ClaimsManagement;
