import { Component } from '@angular/core';

@Component({
  selector: 'app-about-dlc',
  templateUrl: './about-dlc.component.html',
  styleUrls: ['./about-dlc.component.scss']
})
export class AboutDlcComponent  {

  name = 'Angular';
  imageObject = [{
      thumbImage: 'assets/about-dlc/slider1.jpg',
      title: 'Focus on family ,Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive.',
  }, {
      thumbImage: 'assets/about-dlc/slider2.jpg',
      title: 'Incomparable experiences ,World-renowned golf courses, state-of-the-art fitness facilities, unique outdoor concierge programs – our communities deliver unmatched amenities and service.'
  }, {
      thumbImage: 'assets/about-dlc/slider3.JPG',
      title: 'Inspired by land ,Each property respectfully integrates the local architecture, culture, and cuisine to create an authentic and immersive experience.'
  }, {
      thumbImage: 'assets/about-dlc/slider4.jpg',
      title: 'Sustainable future ,Through a focus on sustainable efforts, we create programs that ensure we are stewards of the land and a source of local economic growth and stability.'
  }, {
      thumbImage: 'assets/about-dlc/slider5.jpg',
      title: ' Luxury bespoke homes ,Through our in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles.'
  }];
}
