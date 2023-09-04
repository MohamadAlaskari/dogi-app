import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  post = {
    img: [
      'assets/img/dog/dog_1.jpg',
      'assets/img/dog/dog_2.jpg',
      'assets/img/dog/dog_3.jpg',
      'assets/img/dog/dog_4.jpg',
      'assets/img/dog/dog_5.jpg',
      'assets/img/dog/dog_6.jpg',
      'assets/img/dog/dog_7.jpg',
      'assets/img/dog/dog_8.jpg',
      'assets/img/dog/dog_9.jpg',
      'assets/img/dog/dog_10.jpg',
    ],
    text: [
      'Ein sonniger Tag im Park, ich liebe es, Bälle zu jagen!',
      'Gestern haben wir einen langen Spaziergang gemacht. Müde, aber glücklich!',
      'Mein Lieblingsknochen ist wieder aufgetaucht - Zeit zum Kauen!',
      'Mit meinem besten Freund im Wald unterwegs.',
      'Warte auf das Wochenende, um wieder in den Park zu gehen!',
      'Ich kann es nicht erwarten, meine neue Spielzeugente zu zerkleinern!',
      'Schaut mal, wie hübsch ich heute aussehe! 🐶💕',
      'Entspannung ist der Schlüssel zum Hundeglück.',
      'Spaziergang am Strand - Sand zwischen den Pfoten!',
      'Leckerlis sind der Höhepunkt meines Tages.',
      'Ich liebe es, herumzutoben und alle zum Lachen zu bringen.',
      'Zeit für ein Nickerchen nach einem anstrengenden Tag.',
      'Suche nach versteckten Schätzen im Garten.',
      'Jeder Tag ist ein Abenteuer, wenn man eine Hundenase hat!',
      'Warten auf den Postboten, mein tägliches Ritual.',
      'Ein neuer Tag, ein neuer Geruch zu entdecken!',
    ],
  };
}
