import { FileCheck, ClipboardList, Database, Search, ShieldCheck, ClipboardCheck } from 'lucide-react';
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
    <>
        <Hero title="Medical Coding Services" />

        <Section>
            <div className="mx-auto max-w-4xl space-y-6">
                <ScrollReveal>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                        PBI has top notch medical coders who keep themselves on the most current coding regulations. We promise our customers 24 to 48 hour turnaround time on audit and delivery. We are fully compliant with all of the Correct Coding Initiatives (CCI) and Local Medical Review Policies (LMRPs).
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <p className="text-muted-foreground leading-relaxed">
                        We build efficient workflow processes with higher output through the use of a hybrid of automated and manual solutions. We ensure we follow industry-standard key performance metrics to measure success and integrate best practices.
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                    <p className="text-muted-foreground leading-relaxed">
                        We realize the importance of your goal in increasing the quality of patient care as required by CMS hence we ensure our focus is on capturing the right ICD codes. We guarantee 95% or above overall coding accuracy.
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                    <div className="mt-4 p-6 rounded-xl border border-amber-400/20 bg-amber-400/5">
                        <p className="text-foreground font-medium">
                            PBI offers the following portfolio of medical coding services that are designed to maximize the value to its clients and alliance partners.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </Section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(222,47%,8%)]">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-10">
                        <span className="tag mb-4 inline-flex">Coding Portfolio</span>
                        <h2 className="text-white">Our Medical Coding Services</h2>
                    </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {codingServices.map((service, i) => (
                        <ScrollReveal key={i} delay={i * 0.08}>
                            <div className="group flex items-center gap-4 p-6 rounded-xl border border-white/8 bg-[hsl(222,47%,10%)] hover:border-amber-400/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="h-12 w-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/20 transition-colors shrink-0">
                                    <service.icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">
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

export default MedicalCoding;
