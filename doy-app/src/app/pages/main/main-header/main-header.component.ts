import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../../models/users";
import {MenuItem} from "primeng/api";


@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  items: MenuItem[];
  user: IUser | null;
  // private settingsActive = false;

  // @Input() menuType: IMenuType;

  // constructor(private userService: UserService) {
  // }

  ngOnInit(): void {
    this.items = [
      {
        label: 'О нас',
        routerLink: ['about']  // если делать отдельную страницу, то стоит написать цель проекта и небольшой мануал, либо не создавать стр а  делать якорь на странице текущей
      },
      {
        label: 'Поддержка',
        routerLink: ['help']
      },
      {
        label: 'Войти',
        routerLink: ['/auth']  // обратить внимание на роутинг,исправильное написание пути
      },
      // {
      //   label: 'Установить приложение',
      //   routerLink: ['help']
      // },
      // {
      //   label: 'Выход',
      //   routerLink: ['/auth'],
      //   command: (click) => {
      //     this.userService.removeUser();
      //     window.localStorage.clear();
      //   }
      // },
    ];
    // this.user = this.userService.getUser();
  }
}
//   ngOnChanges(ev: SimpleChanges): void {
//     this.settingsActive = this.menuType?.type === "extended";
//     this.items = this.initMenuItems();
//   }
//
//   initMenuItems(): MenuItem[] {
//     return [
//       {
//         label: 'Туры',
//         routerLink: ['tickets-list']
//       },
//       {
//         label: 'Заказы',
//         routerLink: ['order']
//       },
//       {
//         label: 'Личный кабинет ',
//         routerLink: ['settings'],
//         visible: this.settingsActive
//       },
//       {
//         label: 'Выход',
//         routerLink: ['/auth'],
//         command: (click) => {
//           this.userService.removeUser()
//         }
//       },
//     ];
//   }
// }
