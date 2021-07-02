import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news/news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  $news: Observable<any>;

  constructor(private news: NewsService) {
    this.$news = news.get();
  }

  ngOnInit(): void {
  }

}
