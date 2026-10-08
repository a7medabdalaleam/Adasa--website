import { Component, computed, inject } from '@angular/core';
import { POSTS } from '../posts';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

// @Component({
//   selector: 'app-postlist',
//   imports: [RouterOutlet],
//   templateUrl: './postlist.html',
//   styleUrl: './postlist.css',
// })
// export class Postlist {
//   private route = inject(ActivatedRoute);
//   private postsService = inject(POSTS);

//   post = computed(() => this.postsService.posts.find((p) => p.slug === this.slug()));
//   slug = toSignal(this.route.paramMap.pipe(map((p) => p.get('slug'))));
// }
