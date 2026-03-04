import { ClipboardCheck, FileSearch, Database, ShieldAlert, Cpu, CheckCircle2, ListChecks, UserPlus, FileText, Search, Scale, BadgeCheck, FileEdit, Undo2 } from 'lucide-react';
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
    "Instant identification of appropriate eligibility so that provider records can move on to the next step of the auto-adjudication process"
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
            <div className="mx-auto max-w-4xl space-y-8">
                <ScrollReveal>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                        Recognizing that the accurate and timely processing and payment of claims is a critical customer satisfaction measure for TPAs and health plans alike, PBI follows a systematic workflow to quickly prepare healthcare claims for payment. PBI has professionally handled medical claims processing outsourcing tasks. With proven technical management capabilities, we are experts at gathering, analyzing, and reporting healthcare claims data. Our claims adjudication team can quickly identify and take action against inappropriate utilization of services and quality of service concerns. We assure you of HIPAA compliant security for your data.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <p className="text-muted-foreground leading-relaxed">
                        We understand that the payers and TPAs have set their claims engines to auto-adjudicate claims received from providers. During auto-adjudication, the claims engine verifies member/patient eligibility and provider information on a claim using the client's database. Any claims that do not match are exported to the manual adjudication queue. However, manual adjudication results in a fluctuation of quality, as manual adjudication can never be as efficient or accurate as the auto-adjudication process. We ensure to arrest this problem by matching member and provider information on claims against the client's database before the claim is even loaded into the system.
                    </p>
                </ScrollReveal>

                <div className="mt-12 grid grid-cols-1 gap-4">
                    {workflowItems.map((item, i) => (
                        <ScrollReveal key={i} delay={0.2 + i * 0.05}>
                            <div className="flex items-start gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/10 group hover:bg-primary/10 transition-colors duration-300">
                                <CheckCircle2 className="h-5 w-5 mt-1 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />
                                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </Section>

        <Section className="bg-card/50 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="mx-auto max-w-5xl mb-12 text-center">
                <ScrollReveal>
                    <p className="text-lg font-medium text-foreground mb-4">
                        You can count on us for all or any of the below services at all times.
                    </p>
                    <p className="text-muted-foreground">
                        We guarantee high quality output at optimal cost within realistic deadlines.
                    </p>
                </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {subServices.map((service, i) => (
                    <ScrollReveal key={i} delay={i * 0.05}>
                        <div className="group relative flex items-start gap-4 p-6 rounded-3xl border border-white/60 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/80 dark:bg-white/10 hover:-translate-y-1 hover:border-primary/30">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-inner transition-transform duration-500 group-hover:scale-110">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300 self-center">
                                {service.title}
                            </h3>

                            {/* Subtle hover effect */}
                            <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </Section>
    </>
);

export default ClaimsManagement;
