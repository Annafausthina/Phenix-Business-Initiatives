import { ClipboardCheck, FileSearch, Database, ShieldAlert, Cpu, CheckCircle, ListChecks, UserPlus, FileText, Search, Scale, BadgeCheck, FileEdit, Undo2, CheckCircle2 } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ScrollReveal from '@/components/ScrollReveal';

const workflowItems = [
    "Loading the unique pointer into the claim file so it can be loaded into the engine",
    "Providing matches using the appropriate business rules",
    "Manually matching any claims that cannot be automatically matched",
    "Creating database records",
    "Adding providers' specialty and category from the NPIDB to new provider records",
    "Capturing the client's database's unique IDs and adding them to the claims' EDI files",
    "Instant identification of appropriate eligibility so that provider records can move on to the next step of the auto-adjudication process",
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
    <>
        <Hero title="Claims Management Services" />

        <Section>
            <div className="mx-auto max-w-4xl space-y-6">
                <ScrollReveal>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                        Recognizing that the accurate and timely processing and payment of claims is a critical customer satisfaction measure for TPAs and health plans alike, PBI follows a systematic workflow to quickly prepare healthcare claims for payment. With proven technical management capabilities, we are experts at gathering, analyzing, and reporting healthcare claims data.
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <p className="text-muted-foreground leading-relaxed">
                        We understand that the payers and TPAs have set their claims engines to auto-adjudicate claims received from providers. We ensure to arrest this problem by matching member and provider information on claims against the client's database before the claim is even loaded into the system.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div className="line-accent mt-8" />
                    <h3 className="text-foreground mb-4">Our Systematic Workflow</h3>
                </ScrollReveal>

                <div className="grid grid-cols-1 gap-3">
                    {workflowItems.map((item, i) => (
                        <ScrollReveal key={i} delay={0.2 + i * 0.04}>
                            <div className="check-row">
                                <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-amber-500" />
                                <p className="text-sm text-muted-foreground">{item}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </Section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(222,47%,8%)]">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-4">
                        <span className="tag mb-4 inline-flex">Full Service Portfolio</span>
                        <h2 className="text-white mb-3">Claims Services We Offer</h2>
                        <p className="text-white/50 max-w-xl mx-auto">
                            You can count on us for all or any of the below services. We guarantee high quality output at optimal cost.
                        </p>
                    </div>
                </ScrollReveal>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {subServices.map((service, i) => (
                        <ScrollReveal key={i} delay={i * 0.04}>
                            <div className="group flex items-center gap-4 p-5 rounded-xl border border-white/8 bg-[hsl(222,47%,10%)] hover:border-amber-400/30 transition-all duration-300">
                                <div className="h-10 w-10 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/20 transition-colors shrink-0">
                                    <service.icon className="h-4.5 w-4.5" />
                                </div>
                                <h3 className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                                    {service.title}
                                </h3>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    </>
);

export default ClaimsManagement;
