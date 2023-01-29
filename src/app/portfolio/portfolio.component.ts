import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }
  
  data = [
    {
      image: 'assets/img/Join.png',
      project: 'Join',
      programming: ['Angular | ', 'TypeScript | ', 'HTML | ', 'CSS | ', 'Firebase'],
      projecttext: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      livetest: 'http://leon-groschek.developerakademie.net/Join/html/index.html',
      github: 'https://github.com/leongrx/Join',
    },
    {
      image: 'assets/img/El-pollo-loco.png',
      project: 'El Pollo Loco',
      programming: ['JavaScript | ', 'HTML | ', 'CSS'],
      projecttext: 'A simple Jump-and-Run game based on an object-oriented approach. Help El-Pollo-Loco to find coins and salsa bottles to fight against the chicken boss.',
      livetest: 'http://leon-groschek.developerakademie.net/El%20pollo%20locco/index.html',
      github: 'https://github.com/leongrx/El-Pollo-Loco',
    },
    {
      image: 'assets/img/Pokedex.png',
      project: 'Pokédex',
      programming: ['JavaScript | ', 'HTML | ', 'CSS | ', 'Api'],
      projecttext: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      livetest: 'http://leon-groschek.developerakademie.net/Pokedex/index.html',
      github: 'https://github.com/leongrx/Pokedex',
    }
  ]
}