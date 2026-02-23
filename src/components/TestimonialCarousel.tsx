import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Testimonial {
  quote: string;
  author: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <ScrollReveal>
      <div className="relative mx-auto max-w-3xl">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12 shadow-sm text-center">
          <Quote className="mx-auto mb-6 h-8 w-8 text-primary/30" />
          <blockquote className="text-base md:text-lg leading-relaxed text-muted-foreground italic">
            "{testimonials[current].quote}"
          </blockquote>
          <p className="mt-6 font-semibold text-card-foreground">
            {testimonials[current].author}
          </p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === current ? 'bg-primary' : 'bg-border'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default TestimonialCarousel;
