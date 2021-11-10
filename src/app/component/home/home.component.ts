import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  name = 'Angular';
    imageObject = [{
        thumbImage: 'assets/slider/slider1.jpg',
        title: 'Barbuda Ocean Club Barbuda, West Indies',
    }, {
        thumbImage: 'assets/slider/slider2.jpg',
        title: 'Driftwood Austin, Texas'
    }, {
        thumbImage: 'assets/slider/slider3.jpg',
        title: ' Troubadour Nashville, Tennessee'
    }, {
        thumbImage: 'assets/slider/slider4.jpg',
        title: ' Playa Grande ,Rio San Juan, Dominican Republic'
    }, {
        thumbImage: 'assets/slider/slider5.jpg',
        title: ' Troubadour Nashville, Tennessee'
    }, {
        thumbImage: 'assets/slider/slider6.jpg',
        title: ' The Summit, Las Vegas, Nevada'
    }, {
        thumbImage: 'assets/slider/slider7.jpg',
        title: 'Dune Deck, Westhampton Beach, NY '
    }, {
        thumbImage: 'assets/slider/slider8.jpg',
        title: 'Silo Ridge,Amenia, New York '
    }, {
        thumbImage: 'assets/slider/slider9.jpeg',
        title: 'Mākena, Maui, Hawaii '
    }, {
        thumbImage: 'assets/slider/slider10.jpg',
        title: ' Yellowstone Club ,Big Sky, Montana'
    }, {
        thumbImage: 'assets/slider/slider11.jpg',
        title: ' Gozzer Ranch, Coeur d’Alene, Idaho'
    }, {
        thumbImage: 'assets/slider/slider12.jpg',
        title: 'El Dorado , Los Cabos, Mexico '
    }, {
        thumbImage: 'assets/slider/slider13.jpg',
        title: 'Madison , La Quinta, California '
    }, {
        thumbImage: 'assets/slider/slider14.jpg',
        title: 'Bakers Bay,Great Guana Cay, Bahamas '
    }, {
        thumbImage: 'assets/slider/slider15.jpg',
        title: 'Hideaway,La Quinta, California '
    }, {
        thumbImage: 'assets/slider/slider16.jpg',
        title: 'Mountaintop,Cashiers, North Carolina '
    }, {
        thumbImage: 'assets/slider/slider17.jpg',
        title: 'Mirabel ,Scottsdale, Arizona, '
    }, {
        thumbImage: 'assets/slider/slider18.jpg',
        title: 'Kūki o ,Kohala, Hawaii'
    }, {
        thumbImage: 'assets/slider/slider19.jpg',
        title: 'Vaquero,Westlake, Texas '
    }, {
        thumbImage: 'assets/slider/slider20.jpg',
        title: 'Iron Horse,Whitefish, Montana '
    }, {
        thumbImage: 'assets/slider/slider21.jpg',
        title: 'CordeValle,Silicon Valley, California '
    }, {
        thumbImage: 'assets/slider/slider22.jpg',
        title: 'Estancia ,Scottsdale, Arizona '
    }, {
        thumbImage: 'assets/slider/slider23.jpg',
        title: 'North Shore Preserve ,Kaua i, Hawaii '
    }, {
        thumbImage: 'assets/slider/slider24.jpg',
        title: 'James Island ,Southern Gulf Islands, British Columbia, Canada '
    }, {
        thumbImage: 'assets/slider/slider25.jpg',
        title: 'CostaTerra, Comporta, Portugal '
    }
    ];

    displayImage: any = true;
    displayVedio1: any= false;
    displayVedio2: any= false;
    displayVedio3: any= false;

    image1Click(){
        this.displayImage= false;
        this.displayVedio1= true;
    }

    image2Click(){
        this.displayImage= false;
        this.displayVedio2= true;
    }

    image3Click(){
        this.displayImage= false;
        this.displayVedio3= true;
    }

    closeVedio1(){
        this.displayVedio1= false;
        this.displayImage= true;
    }

    closeVedio2(){
        this.displayImage= true;
        this.displayVedio2= false;
    }

    closeVedio3(){
        this.displayImage= true;
        this.displayVedio3= false;
    }




}
