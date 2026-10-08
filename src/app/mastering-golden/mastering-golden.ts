import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { POSTS } from '../posts';

interface Section {
  id: string;
  title: string;
  paragraphs: string[];
}

@Component({
  selector: 'app-mastering-golden',
  imports: [RouterLink],
  templateUrl: './mastering-golden.html',
  styleUrl: './mastering-golden.css',
})
export class MasteringGolden {
  private readonly route = inject(ActivatedRoute);

  private readonly slug = toSignal(this.route.paramMap.pipe(map((p) => p.get('slug'))), {
    initialValue: this.route.snapshot.paramMap.get('slug'),
  });

  readonly copied = signal(false);

  readonly post = computed(() => POSTS.find((p) => p.slug === this.slug()) ?? POSTS[0]);

  readonly parsed = computed(() => {
    const content = this.post()?.content ?? '';
    const intro: string[] = [];
    const sections: Section[] = [];

    for (const block of content
      .split(/\n\n+/)
      .map((b) => b.trim())
      .filter(Boolean)) {
      if (block.startsWith('## ')) {
        sections.push({
          id: `section-${sections.length + 1}`,
          title: block.replace(/^##\s+/, ''),
          paragraphs: [],
        });
      } else if (sections.length) {
        sections[sections.length - 1].paragraphs.push(block);
      } else {
        intro.push(block);
      }
    }
    return { intro, sections };
  });

  readonly related = computed(() => {
    const current = this.post();
    if (!current) return [];
    const others = POSTS.filter((p) => p.slug !== current.slug);
    const same = others.filter((p) => p.category === current.category);
    const rest = others.filter((p) => p.category !== current.category);
    return [...same, ...rest].slice(0, 3);
  });

  readonly shareUrl = computed(() => encodeURIComponent(location.href));
  readonly shareText = computed(() => encodeURIComponent(this.post()?.title ?? ''));

  scrollTo(id: string, event: Event): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  async copyLink(event: Event): Promise<void> {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(location.href);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {}
  }
}
