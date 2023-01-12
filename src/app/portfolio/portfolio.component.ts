import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  data = [
    {
      image: 'assets/img/Join.png',
      project: 'Join',
      programming: ['Angular | ', 'Typescript | ', 'HTML | ', 'CSS | ', 'Firebase'],
      projecttext: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      livetest: 'http://leon-groschek.developerakademie.net/Join/html/index.html',
      github: 'https://github.com/leongrx/Join',
    },
    {
      image: 'assets/img/El-pollo-loco.png',
      project: 'El Pollo Loco',
      programming: ['Javascript | ', 'HTML | ', 'CSS'],
      projecttext: 'A simple Jump-and-Run game based on an object-oriented approach. Help El-Pollo-Loco to find coins and salsa bottles to fight against the chicken boss.',
      livetest: 'http://leon-groschek.developerakademie.net/El%20pollo%20locco/index.html',
      github: 'https://github.com/leongrx/El-Pollo-Loco',
    },
    {
      image: 'assets/img/Pokedex.png',
      project: 'Pokédex',
      programming: ['Javascript | ', 'HTML | ', 'CSS | ', 'Api'],
      projecttext: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      livetest: 'http://leon-groschek.developerakademie.net/Pokedex/index.html',
      github: 'https://github.com/leongrx/Pokedex',
    }
  ]
  // data = [
  //   {
  //     image: 
  //       {
  //         join: 'assets/img/Join.png',
  //         elpolloloco: 'assets/img/El-pollo-loco.png',
  //         pokedex: 'assets/img/Pokedex.png',
  //       },
  //     project:
  //       {
  //         join: 'Join',
  //         elpolloloco: 'El Pollo Loco',
  //         pokedex: 'Pokédex',
  //       },
  //     programming:
  //       {
  //         join: {
  //           angular: 'Angular',
  //           typescript: 'Typescript',
  //           html: 'HTML',
  //           css: 'CSS',
  //           firebase: 'Firebase'
  //         },
  //         elpolloloco: {
  //           javascript: 'Javascript',
  //           html: 'HTML',
  //           css: 'CSS',
  //         },
  //         pokedex: {
  //           javascript: 'Javascript',
  //           html: 'HTML',
  //           css: 'CSS',
  //           api: 'Api',
  //         }
  //       },
  //     projecttext:
  //       {
  //         join: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
  //         elpolloloco: 'A simple Jump-and-Run game based on an object-oriented approach. Help El-Pollo-Loco to find coins and salsa bottles to fight against the chicken boss.',
  //         pokedex: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
  //       },
  //     livetest:
  //       {
  //         join: 'http://leon-groschek.developerakademie.net/Join/html/index.html',
  //         elpolloloco: 'http://leon-groschek.developerakademie.net/El%20pollo%20locco/index.html',
  //         pokedex: 'http://leon-groschek.developerakademie.net/Pokedex/index.html',
  //       },
  //     github:
  //       {
  //         join: 'https://github.com/leongrx/Join',
  //         elpolloloco: 'https://github.com/leongrx/El-Pollo-Loco',
  //         pokedex: 'https://github.com/leongrx/Pokedex',
  //       },
  //   },
  // ];
}
