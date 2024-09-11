import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-inventory',
  templateUrl: './product-inventory.page.html',
  styleUrls: ['./product-inventory.page.scss'],
})
export class ProductInventoryPage implements OnInit {

  constructor(private detail: NavController) { }

  items=[
    {
      id: 1,
      name: "น้ำเขียวแฟนต้า",
      quantity: 45,
      ImageURL: '../../assets/img/product/น้ำเขียวแฟนต้า.png'
    },

    {
      id: 2,
      name: "น้ำแดงแฟนต้า",
      quantity: 33,
      ImageURL: '../../assets/img/product/น้ำแดงแฟนต้า.jpeg'
    },

    {
      id: 3,
      name: "น้ำสไปรท์",
      quantity: 31,
      ImageURL: '../../assets/img/product/สไปรท์.jpg'
    },

    {
      id: 4,
      name: "น้ำส้มแฟนต้า",
      quantity: 53,
      ImageURL: '../../assets/img/product/น้ำส้ม.jpg'
    },

    {
      id: 5,
      name: "น้ำโค้ก",
      quantity: 23,
      ImageURL: '../../assets/img/product/โค้ก.jpg'
    },

    {
      id: 6,
      name: "เบนโตะ",
      quantity: 46,
      ImageURL: '../../assets/img/product/bento.jpg'
    },

    {
      id: 7,
      name: "สาหร่ายเถ้าแก่น้อย",
      quantity: 32,
      ImageURL: '../../assets/img/product/สาหร่าย.jpg'
    },

    {
      id: 8,
      name: "ข้าวเกรียบตะวัน",
      quantity: 14,
      ImageURL: '../../assets/img/product/ตะวัน.jpg'
    },

    {
      id: 9,
      name: "มันฝรั่งทอดเลย์",
      quantity: 21,
      ImageURL: '../../assets/img/product/เลย์.jpg'
    },

    {
      id: 10,
      name: "ช็อกโกแลตเบงเบง",
      quantity: 37,
      ImageURL: '../../assets/img/product/เบงเบง.jpg'
    },

    {
      id: 11,
      name: "แชมพูซันซิล",
      quantity: 17,
      ImageURL: '../../assets/img/product/ซันซิล.jpg'
    },

    {
      id: 12,
      name: "ยากันยุงไบกอน",
      quantity: 20,
      ImageURL: '../../assets/img/product/ไบกอน.jpeg'
    },

    {
      id: 13,
      name: "แป้งแคร์",
      quantity: 19,
      ImageURL: '../../assets/img/product/แป้ง.jpg'
    },

    {
      id: 14,
      name: "ผงซักฟอกโอโม",
      quantity: 21,
      ImageURL: '../../assets/img/product/omo.jpg'
    },

    {
      id: 15,
      name: "น้ำยาปรับผ้านุ่มดาวน์นี่",
      quantity: 27,
      ImageURL: '../../assets/img/product/ดาวน์นี่.jpg'
    },


  ]

  ngOnInit() {
  }



}
