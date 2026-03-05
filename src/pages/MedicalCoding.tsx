import { FileCheck, ClipboardList, Database, Search, ShieldCheck, ClipboardCheck, Sparkles } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ScrollReveal from '@/components/ScrollReveal';

const codingServices = [
    { icon: FileCheck, title: 'Risk Adjustment Coding' },
    { icon: ClipboardCheck, title: 'Clinical Services' },
    { icon: Database, title: 'Encounter Data Submissions' },
    { icon: Search, title: 'Medical Record Retrieval' },
    { icon: ShieldCheck, title: 'RADV Audits' },
    { icon: ClipboardList, title: 'HEDIS Medical Record Reviews' },
];

const MedicalCoding = () => (
    <div className="relative overflow-hidden">
        <Hero title="Medical Coding Services" subtitle="Precision driven by experts and enhanced by AI." />

        <Section>
            <div className="mx-auto max-w-4xl space-y-8">
                <ScrollReveal>
                    <div className="line-accent mb-6" />
                    <p className="text-muted-foreground leading-relaxed text-lg">
                        PBI features top-tier medical coders who remain current on all coding regulations. We guarantee a 24 to 48 hour turnaround time for audit and delivery, maintaining full compliance with Correct Coding Initiatives (CCI) and Local Medical Review Policies (LMRPs).
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <p className="text-muted-foreground leading-relaxed">
                        We build efficient workflow processes with higher output through a hybrid of automated and manual solutions. Our team captures precise ICD codes, manifesting diseases and their allied categories to optimize RAF scores effectively. We guarantee 95% or above overall coding accuracy.
                    </p>
                </ScrollReveal>
            </div>
        </Section>

        {/* ── AI Enhanced Coding Section ── */}
        <section className="py-20 px-4 bg-primary/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal direction="left">
                        <div className="p-8 rounded-2xl border border-primary/20 bg-white/40 backdrop-blur-sm relative group">
                            <div className="absolute top-0 right-0 p-4">
                                <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                            </div>
                            <h3 className="text-2xl font-['Syne'] font-bold text-foreground mb-4">AI Claims Intelligence</h3>
                            <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                                Our proprietary AI engine analyzes medical charts using Natural Language Processing (NLP) to suggest the most accurate codes instantly. This "Human-in-the-loop" AI approach ensures 100% policy compliance while doubling production speed.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Real-time ICD-10 suggestions",
                                    "Automated CCI edit validation",
                                    "NLP-driven chart abstraction",
                                    "Predictive RAF score auditing"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/40">
                                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right" delay={0.2}>
                        <div className="space-y-6">
                            <h2 className="text-foreground font-['Syne']">Intelligent <span className="text-gold-shimmer">Coding Workflows</span></h2>
                            <p className="text-foreground/50 leading-relaxed">
                                We don't just use AI to replace humans; we use it to empower them. Our coders are equipped with AI insights that highlight potential discrepancies before they ever reach the audit phase, ensuring your claims are right the first time.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>

        <Section>
            <ScrollReveal>
                <div className="text-center mb-12">
                    <span className="tag mb-4 inline-flex">Our Expertise</span>
                    <h2 className="text-foreground">Coding Portfolio</h2>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {codingServices.map((service, i) => (
                    <ScrollReveal key={i} delay={i * 0.1}>
                        <div className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                <service.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </Section>
    </div>
);

export default MedicalCoding;
