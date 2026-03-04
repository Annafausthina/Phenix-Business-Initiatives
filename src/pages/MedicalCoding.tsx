import { FileCheck, ClipboardList, Database, Search, ShieldCheck, ClipboardCheck } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ScrollReveal from '@/components/ScrollReveal';
import ServiceCard from '@/components/ServiceCard';

const codingServices = [
    {
        icon: FileCheck,
        title: 'Risk Adjustment Coding',
    },
    {
        icon: ClipboardCheck,
        title: 'Clinical Services',
    },
    {
        icon: Database,
        title: 'Encounter Data Submissions',
    },
    {
        icon: Search,
        title: 'Medical Record Retrieval',
    },
    {
        icon: ShieldCheck,
        title: 'RADV Audits',
    },
    {
        icon: ClipboardList,
        title: 'HEDIS Medical Record Reviews',
    },
];

const MedicalCoding = () => (
    <>
        <Hero title="Medical Coding Services" />

        <Section>
            <div className="mx-auto max-w-4xl space-y-8">
                <ScrollReveal>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                        PBI has top notch medical coders who keep themselves on the most current coding regulations. We promise our customers 24 to 48 hour turnaround time on audit and delivery. We are fully compliant with all of the Correct Coding Initiatives (CCI) and Local Medical Review Policies (LMRPs). The methodologies that we have designed to assess your coding accurately are very much proven and proprietary that they will offer you the opportunity to reach the operational excellence that you are striving for.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <p className="text-muted-foreground leading-relaxed">
                        We build efficient workflow processes with higher output through the use of a hybrid of automated and manual solutions. We want you to experience the value of our proven experience and expertise so we ensure we follow industry-standard key performance metrics to measure success and integrate best practices.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <p className="text-muted-foreground leading-relaxed">
                        We realize the importance of your goal in increasing the quality of patient care as required by CMS hence we ensure our focus is on capturing the right ICD codes, manifestation of diseases and the allied codes of diseases to optimize the RAF scores. In line with that our core team of coding specialists and trained medical coders will provide you accurate coding with quality output. We guarantee 95% or above overall coding accuracy.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <p className="text-muted-foreground leading-relaxed mt-12 font-medium bg-primary/5 p-6 rounded-2xl border border-primary/10">
                        PBI offers the following portfolio of medical coding services that are designed to maximize the value to its clients and alliance partners.
                    </p>
                </ScrollReveal>
            </div>
        </Section>

        <Section className="bg-card/50 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {codingServices.map((service, i) => (
                    <ScrollReveal key={i} delay={i * 0.1}>
                        <div className="group relative flex flex-col items-center text-center p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:border-primary/30">
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                <service.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                {service.title}
                            </h3>

                            {/* Bottom Glow */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </Section>
    </>
);

export default MedicalCoding;
