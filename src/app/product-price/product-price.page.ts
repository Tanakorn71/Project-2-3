import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.page.html',
  styleUrls: ['./product-price.page.scss'],
})
export class ProductPricePage implements OnInit {

  constructor(private detail: NavController) { }

  items=[
    {
      id: 1,
      name: "น้ำเขียวแฟนต้า",
      price: 16,
      ImageURL: '../../assets/img/product/น้ำเขียวแฟนต้า.png'
    },

    {
      id: 2,
      name: "น้ำแดงแฟนต้า",
      price: 16,
      ImageURL: '../../assets/img/product/น้ำแดงแฟนต้า.jpeg'
    },

    {
      id: 3,
      name: "น้ำสไปรท์",
      price: 16,
      ImageURL: '../../assets/img/product/สไปรท์.jpg'
    },

    {
      id: 4,
      name: "น้ำส้มแฟนต้า",
      price: 16,
      ImageURL: '../../assets/img/product/น้ำส้ม.jpg'
    },

    {
      id: 5,
      name: "น้ำโค้ก",
      price: 17,
      ImageURL: '../../assets/img/product/โค้ก.jpg'
    },

    {
      id: 6,
      name: "เบนโตะ",
      price: 5,
      ImageURL: '../../assets/img/product/bento.jpg'
    },

    {
      id: 7,
      name: "สาหร่ายเถ้าแก่น้อย",
      price: 10,
      ImageURL: '../../assets/img/product/สาหร่าย.jpg'
    },

    {
      id: 8,
      name: "ข้าวเกรียบตะวัน",
      price: 20,
      ImageURL: '../../assets/img/product/ตะวัน.jpg'
    },

    {
      id: 9,
      name: "มันฝรั่งทอดเลย์",
      price: 22,
      ImageURL: '../../assets/img/product/เลย์.jpg'
    },

    {
      id: 10,
      name: "ช็อกโกแลตเบงเบง",
      price: 7,
      ImageURL: '../../assets/img/product/เบงเบง.jpg'
    },

    {
      id: 11,
      name: "แชมพูซันซิล",
      price: 30,
      ImageURL: '../../assets/img/product/ซันซิล.jpg'
    },

    {
      id: 12,
      name: "ยากันยุงไบกอน",
      price: 20,
      ImageURL: '../../assets/img/product/ไบกอน.jpeg'
    },

    {
      id: 13,
      name: "แป้งแคร์",
      price: 30,
      ImageURL: '../../assets/img/product/แป้ง.jpg'
    },

    {
      id: 14,
      name: "ผงซักฟอกโอโม",
      price: 40,
      ImageURL: '../../assets/img/product/omo.jpg'
    },

    {
      id: 15,
      name: "น้ำยาปรับผ้านุ่มดาวน์นี่",
      price: 129,
      ImageURL: '../../assets/img/product/ดาวน์นี่.jpg'
    },


  ]

  ngOnInit() {
  }



}
