import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services: any = [];
  ngOnInit(): void {
    this.services = [
      {
        id: 1,
        title: 'Desarrollo Web',
        description:
          'Desarrollamos aplicaciones web personalizadas utilizando tecnologías modernas.',
        icon: 'bi-laptop-fill',
        stars: [
          {
            class: 'fill',
          },
          {
            class: 'fill',
          },
          {
            class: 'fill',
          },
          {
            class: 'fill',
          },
          {
            class: 'fill',
          },
        ],
      },
      {
        id: 2,
        title: 'Diseño UI/UX',
        description:
          'Diseñamos interfaces de usuario atractivas y fáciles de usar, con un enfoque en la experiencia del usuario.',
        icon: 'bi-palette-fill',
        stars: [
          {
            class: 'fill',
          },
          {
            class: 'fill',
          },
          {
            class: 'fill',
          },
          {
            class: 'fill',
          },
          {
            class: 'empty',
          },
        ],
      },
      {
        id: 3,
        title: 'Desarrollo Móvil',
        description:
          'Desarrollamos aplicaciones móviles nativas e híbridas para Android y iOS.',
        icon: 'bi-phone-fill',
        stars: [
          {
            class: 'fill',
          },
          {
            class: 'fill',
          },
          {
            class: 'fill',
          },
          {
            class: 'empty',
          },
          {
            class: 'empty',
          },
        ],
      },
      {
        id: 4,
        title: 'Consultoría Tecnológica',
        description:
          'Brindamos asesoramiento y soluciones tecnológicas para ayudar a las empresas a alcanzar sus objetivos.',
        icon: 'bi-gear-fill',
        stars: [
          {
            class: 'fill',
          },
          {
            class: 'fill',
          },
          {
            class: 'fill',
          },
          {
            class: 'fill',
          },
          {
            class: 'fill',
          },
        ],
      },
    ];
  }
}
