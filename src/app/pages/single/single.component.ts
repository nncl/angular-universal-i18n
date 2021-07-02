import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  test = $localize`:@@newspage:`;

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle($localize`:@@newspage:Página de Notícia`);
  }

}
